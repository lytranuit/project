<?php

use Philo\Blade\Blade;

class Member extends CI_Controller {

    private $data = array();

    function __construct() {
        parent::__construct();
        $this->load->library(array('ion_auth', 'form_validation'));
        $this->load->helper(array('url', 'language', 'alias'));
        $this->lang->load('auth');
        ////////////////////////////////
        $module = $this->router->fetch_module();
        $views = APPPATH . "views/";
        $cache = APPPATH . "cache/";
        $this->blade = new Blade($views, $cache);
        ////////////
        $this->data['is_login'] = $this->ion_auth->logged_in();
        $this->data['func'] = $this->router->fetch_method();
        ////////////////////////////////// Stle mac dinh
        $this->data['stylesheet_tag'] = array(
            base_url() . "public/css/bootstrap.min.css",
            base_url() . "public/css/font-awesome.min.css",
            base_url() . "public/css/animate.min.css",
            base_url() . "public/css/prettyPhoto.css",
            base_url() . "public/css/main.css",
            base_url() . "public/css/responsive.css",
        );
        $this->data['javascript_tag'] = array(
            base_url() . "public/js/jquery.js",
            base_url() . "public/js/jquery-ui.min.js",
            base_url() . "public/js/bootstrap.min.js",
            base_url() . "public/js/jquery.prettyPhoto.js",
            base_url() . "public/js/jquery.isotope.min.js",
            base_url() . "public/js/main.js",
            base_url() . "public/js/wow.min.js",
        );
    }

    public function _remap($method, $params = array()) {
        if (!method_exists($this, $method)) {
            show_404();
        }
        if (!$this->ion_auth->logged_in()) {
//redirect them to the login page
            $this->login();
        } else {
            $this->$method($params);
        }
    }

    public function index() {
        
    }

    function dangtin() {
        if (isset($_POST['dangtin'])) {
            $post_title = $_POST['post_titles'];
            $post_content = $_POST['post_contents'];
            $post_tp = $_POST['post_tp'];
            $post_quan = $_POST['post_quan'];
            $post_dientich = $_POST['dientich'];
            $post_gia = $_POST['gia_ban'];
            $post_rong = $_POST['chieurong'];
            $post_dai = $_POST['chieudai'];
            $post_huong = $_POST['huong'];
            $post_phaply = $_POST['phaply'];
            $post_diachi = $_POST['diachi'];
            $user_id = $this->session->userdata('user_id');
            $data_up = array(
                'title' => $post_title,
                'alias' => sluggable($post_title),
                'content' => $post_content,
                'id_khuvuc' => $post_quan,
                'date' => date("Y-m-d H:i:s"),
                'id_user' => $user_id,
                'id_phaply' => $post_phaply,
                'id_huong' => $post_huong,
                'diachi' => $post_diachi,
                'chieudai' => $post_dai,
                'chieurong' => $post_rong,
                'gia' => $post_gia,
                'dientich' => $post_dientich
            );
            $this->load->model("tin_model");
            $this->load->model("hinhanh_tin_model");
            $this->load->model("hinhanh_model");
            $id_tin = $this->tin_model->insert($data_up);
            $hinhanh = $this->input->post('id_hinhanh');
            if (count($hinhanh) > 0) {
                foreach ($hinhanh as $hinh) {
                    $this->hinhanh_tin_model->insert(array('id_tin' => $id_tin, 'id_hinhanh' => $hinh));
                    $this->hinhanh_model->update(array('deleted' => 0), $hinh);
                }
            }
            redirect('index', 'refresh'); // use redirects instead of loading views for compatibility with MY_Controller libraries
        } else {
            $this->load->model("khuvuc_model");
            $this->load->model("huong_model");
            $this->load->model("phaply_model");
            $this->data['thanhpho'] = $this->khuvuc_model->where(array('parent' => 0, 'deleted' => 0))->order_by("order")->as_array()->get_all();
            $this->data['huong'] = $this->huong_model->where(array('deleted' => 0))->order_by("order")->as_array()->get_all();
            $this->data['phaply'] = $this->phaply_model->where(array('deleted' => 0))->order_by("order")->as_array()->get_all();
            array_push($this->data['stylesheet_tag'], base_url() . "public/css/fileinput.css");
            array_push($this->data['javascript_tag'], base_url() . "public/js/autoNumeric.js");
            array_push($this->data['javascript_tag'], base_url() . "public/js/jquery.validate.js");
            array_push($this->data['javascript_tag'], base_url() . "public/js/fileinput.js");

            echo $this->blade->view()->make('dangtin-page', $this->data)->render();
        }
    }

    function get_quan_huyen() {
        if (isset($_GET['parent']))
            $parent = $_GET['parent'];
        else
            $parent = 0;
        $this->load->model("khuvuc_model");
        $quan = $this->khuvuc_model->where(array('parent' => $parent, 'deleted' => 0))->order_by("order")->as_array()->get_all();
        echo '<option value="0">--- Chọn Quận/Huyện ---</option>';
        foreach ($quan as $cate) {
            echo '<option value="' . $cate['id_khuvuc'] . '">' . $cate['ten_khuvuc'] . '</option>';
        }
    }

    public function uploadhinhanh() {
        ini_set('post_max_size', '64M');
        ini_set('upload_max_filesize', '64M');
        $this->load->helper('file');
        $date = date("Y-m-d");
        $upload_path_url = "public/uploads/$date/";
        $dir = FCPATH . "public/uploads/$date/";
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }
        $config['upload_path'] = $dir;
        $config['allowed_types'] = 'jpg|jpeg|png|gif';
        $config['max_size'] = '10000';
        $this->load->library('upload', $config);
        $files = $_FILES;

        $file_count = count($_FILES['hinhanh']['name']);
        for ($i = 0; $i < $file_count; $i++) {
            $_FILES['hinhanh']['name'] = time() . "_" . $i . "_" . $files['hinhanh']['name'][$i];
            $_FILES['hinhanh']['type'] = $files['hinhanh']['type'][$i];
            $_FILES['hinhanh']['tmp_name'] = $files['hinhanh']['tmp_name'][$i];
            $_FILES['hinhanh']['error'] = $files['hinhanh']['error'][$i];
            $_FILES['hinhanh']['size'] = $files['hinhanh']['size'][$i];
            $real_name = $files['hinhanh']['name'][$i];
            if (!$this->upload->do_upload('hinhanh')) {
                $errors = $this->upload->display_errors();
                print_r($errors);
            } else {
                $data = $this->upload->data();
                /*
                 * Array
                  (
                  [file_name] => png1.jpg
                  [file_type] => image/jpeg
                  [file_path] => /home/ipresupu/public_html/uploads/
                  [full_path] => /home/ipresupu/public_html/uploads/png1.jpg
                  [raw_name] => png1
                  [orig_name] => png.jpg
                  [client_name] => png.jpg
                  [file_ext] => .jpg
                  [file_size] => 456.93
                  [is_image] => 1
                  [image_width] => 1198
                  [image_height] => 1166
                  [image_type] => jpeg
                  [image_size_str] => width="1198" height="1166"
                  )

                  // to re-size for thumbnail images un-comment and set path here and in json array
                  $config = array();
                  $config['image_library'] = 'gd2';
                  $config['source_image'] = $data['full_path'];
                  $config['create_thumb'] = TRUE;
                  $config['new_image'] = $data['file_path'] . 'thumbs/';
                  $config['maintain_ratio'] = TRUE;
                  $config['thumb_marker'] = '';
                  $config['width'] = 75;
                  $config['height'] = 50;
                  $this->load->library('image_lib', $config);
                  $this->image_lib->resize();
                 */
                ///resize 1
                $config = array();
                $config['image_library'] = 'gd2';
                $config['source_image'] = $data['full_path'];
                $config['new_image'] = $data['file_path'] . "768x576_" . $data['file_name'];
                $config['create_thumb'] = FALSE;
                $config['maintain_ratio'] = FALSE;
                $config['quality'] = "100%";
                $config['width'] = 768;
                $config['height'] = 576;
                $dim = (intval($data["image_width"]) / intval($data["image_height"])) - ($config['width'] / $config['height']);
                $config['master_dim'] = ($dim > 0) ? "height" : "width";
                $this->load->library('image_lib');
                $this->image_lib->initialize($config);
                $this->image_lib->resize();
                ///resize 2
                $config = array();
                $config['image_library'] = 'gd2';
                $config['source_image'] = $data['full_path'];
                $config['new_image'] = $data['file_path'] . "252x252_" . $data['file_name'];
                $config['create_thumb'] = FALSE;
                $config['maintain_ratio'] = FALSE;
                $config['quality'] = "100%";
                $config['width'] = 252;
                $config['height'] = 252;
                $dim = (intval($data["image_width"]) / intval($data["image_height"])) - ($config['width'] / $config['height']);
                $config['master_dim'] = ($dim > 0) ? "height" : "width";
                $this->load->library('image_lib');
                $this->image_lib->clear();
                $this->image_lib->initialize($config);
                ////////////
                if (!$this->image_lib->resize()) { //Resize image
                    echo json_encode("resize");
                } else {

                    $info = new StdClass;
                    $info->name = $data['file_name'];
                    $info->size = $data['file_size'] * 1024;
                    $info->type = $data['file_type'];
                    $info->url = $upload_path_url . $data['file_name'];
                    $info->deleteType = 'GET';
                    $info->error = null;
                    $data_up = array(
                        'ten_hinhanh' => $info->name,
                        'real_hinhanh' => $real_name,
                        'src' => $info->url,
                        'id_user' => $this->session->userdata('user_id'),
                        'deleted' => 1,
                        'date' => date("Y-m-d H:i:s")
                    );
                    $this->load->model('hinhanh_model');
                    $id_image = $this->hinhanh_model->insert($data_up);
                    if (IS_AJAX) {
                        echo json_encode(array(
                            'initialPreview' => array("<img style = 'height:160px' src = '" . base_url() . "$info->url' class = 'file-preview-image'>"),
                            'initialPreviewConfig' => array(array('caption' => $info->name, 'width' => '120px', 'height' => '160px', 'url' => base_url() . '/member/deleteImage/' . $id_image, 'key' => $id_image)),
                            'append' => true,
                            'key' => $id_image
                        ));
                    } else {
                        $file_data['upload_data'] = $this->upload->data();
                    }
                }
            }
        }
    }

    public function deleteImage($params) {//gets the job done but you might want to add error checking and security
//        $this->load->model('hinhanh_model');
//        $id = $params[0];
//        $file = $this->hinhanh_model->where('id_hinhanh', $id)->get(1);
//        $success = 0;
//        if (file_exists($file['src'])) {
//            $success = unlink($file['src']);
//            $data = array('deleted' => 1);
//            $this->hinhanh_model->update($data, $id);
//        }
//        $info = new StdClass;
//        $info->sucess = $success;
//        if (IS_AJAX) {
////I don't think it matters if this is set but good for error checking in the console/firebug
//            echo json_encode(array($info));
//        } else {
////here you will need to decide what you want to show for a successful delete        
//            $file_data['delete_data'] = $file;
////$this->load->view('admin/delete_success', $file_data);
//        }
        echo json_encode(1);
    }

}
