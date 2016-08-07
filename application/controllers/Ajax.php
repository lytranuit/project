<?php

class Ajax extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    function loadslider() {
        $this->data['id'] = "new" . rand();
        echo $this->blade->view()->make('ajax/ajaxslider', $this->data)->render();
    }

    function editpage() {
        $id = $this->input->get('id');
        $link = $this->input->get('link');
        $seo = $this->input->get('seo');
        $template = $this->input->get('template');
        $page = $this->input->get('page');
        $param = $this->input->get('param');
        $array = array(
            'seo_url' => $seo,
            'template' => $template,
            'link' => $link,
            'page' => $page,
            'param' => $param
        );
        $this->page_model->update($array, $id);
    }

    function addpage() {
        $link = $this->input->get('link');
        $seo = $this->input->get('seo');
        $template = $this->input->get('template');
        $page = $this->input->get('page');
        $param = $this->input->get('param');
        $array = array(
            'seo_url' => $seo,
            'template' => $template,
            'link' => $link,
            'page' => $page,
            'param' => $param
        );
        $this->page_model->insert($array);
    }

    function removepage() {
        $id = $this->input->get('id');
        $this->page_model->update(array("deleted" => 1), $id);
    }

    function rowpage() {
        //$dirmodule = APPPATH . 'modules/';
        $dir = APPPATH . 'controllers/';
        $this->load->library('directoryinfo');
        $arr = $this->directoryinfo->readDirectory($dir, array("Auth.php", "Ajax.php"));
        $arr = array($arr);
        // $sortedarray2 = $this->directoryinfo->readDirectory($dirmodule, true);
        // $arr = array_merge(array($sortedarray1), $sortedarray2);
//        echo "<pre>";
//        print_r($arr);
//        die();
        $dataselect = array();
        foreach ($arr as $key => $row) {
            $module = mb_strtolower($key, 'UTF-8');
            foreach ($row as $key1 => $row1) {
                $class = mb_strtolower($key1, 'UTF-8');
                foreach ($row1 as $row2) {
                    $method = mb_strtolower($row2, 'UTF-8');
                    if ($module) {
                        $page = $module . "/" . $class . "/" . $method;
                    } else {
                        $page = $class . "/" . $method;
                    }
                    $dataselect[$page] = $page;
                }
            }
        }
        $arr_page = $this->page_model->where(array("deleted" => 0))->as_array()->get_all();
        $page_ava = array_map(function($item) {
            return $item['link'];
        }, $arr_page);
        $this->data['page_ava'] = $page_ava;
        $this->data['link'] = $dataselect;
        echo $this->blade->view()->make('ajax/ajaxpage', $this->data)->render();
    }

    function get_quan_huyen() {
        if (isset($_GET['parent']))
            $parent = $_GET['parent'];
        else
            $parent = 0;
        $this->load->model("khuvuc_model");
        $quan = $this->khuvuc_model->where(array('parent' => $parent, 'deleted' => 0))->order_by("order")->as_array()->get_all();
        echo '<option value="' . $parent . '">--- Chọn Quận/Huyện ---</option>';
        foreach ($quan as $cate) {
            echo '<option value="' . $cate['id_khuvuc'] . '">' . $cate['ten_khuvuc'] . '</option>';
        }
    }

    function get_tin() {
        $page = $this->input->get('page');
        $this->load->model("tin_model");
        $this->load->model("user_model");
        $this->load->model("khuvuc_model");
        $this->load->model("hinhanh_model");
        $per_page = 10;
        $total_posts = $this->tin_model->where(array('deleted' => 0, 'active' => 1))->count_rows();
        $this->data['count_page'] = round($total_posts / $per_page);
        $this->data['arr_tin'] = $this->tin_model->where(array('deleted' => 0, 'active' => 1))->order_by("id_tin", "DESC")->as_array()->paginate($per_page, $total_posts, $page);
        foreach ($this->data['arr_tin'] as &$row) {
            $arr_hinhanh = $this->tin_model->get_tin_hinhanh($row['id_tin']);
            if (count($arr_hinhanh)) {
                $hinhanh = $arr_hinhanh;
            } else {
                $hinhanh = $this->hinhanh_model->where(array("default" => 1, 'deleted' => 0))->as_array()->get_all();
            }
            $author = $this->user_model->where(array('id' => $row['id_user']))->as_array()->get_all();
            $khuvuc = $this->khuvuc_model->where(array('id_khuvuc' => $row['id_khuvuc']))->as_array()->get_all();
            $row['hinhanh'] = $hinhanh[0]['thumb_src'];
            $row['arr_hinhanh'] = $hinhanh;
            $row['author'] = $author[0]['username'];
            $row['khuvuc'] = $khuvuc[0]['ten_khuvuc'];
            if ($row['gia'] != 0) {
                if ($row['gia'] < 1000) {
                    $row['gia'] = $row['gia'] . " triệu";
                } else {
                    if ($row['gia'] % 1000) {
                        $row['gia'] = number_format($row['gia'] / 1000, 2, ',', ".") . " tỷ";
                    } else {
                        $row['gia'] = number_format($row['gia'] / 1000) . " tỷ";
                    }
                }
            } else {
                $row['gia'] = "Thương lượng";
            }
        }
        echo $this->blade->view()->make('ajax/ajaxtin', $this->data)->render();
    }

////////////
}
