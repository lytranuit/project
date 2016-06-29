<?php

use Philo\Blade\Blade;

class Index extends CI_Controller {

    private $data = array();

    function __construct() {
        parent::__construct();
        $this->load->library(array('ion_auth', 'form_validation'));
        $this->load->helper(array('url', 'language'));
        $this->lang->load('auth');
        ////////////////////////////////
        $module = $this->router->fetch_module();
        $views = APPPATH . "views/";
        $cache = APPPATH . "cache/";
        $this->blade = new Blade($views, $cache);
        ////////////
        $this->data['is_login'] = $this->ion_auth->logged_in();

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

    public function index() {
        $id_user = $this->session->userdata('user_id');
        $this->load->model("tin_model");
        $this->load->model("user_model");
        $this->load->model("khuvuc_model");
        $this->data['arr_tin'] = $this->tin_model->where(array('deleted' => 0, 'active' => 1))->as_array()->get_all();
        foreach ($this->data['arr_tin'] as &$row) {
            $arr_hinhanh = $this->tin_model->get_tin_hinhanh($row['id_tin']);
            if (count($arr_hinhanh)) {
                $hinhanh = $this->tin_model->get_tin_hinhanh($row['id_tin']);
            } else {
                $hinhanh = $this->tin_model->get_tin_hinhanh($row['id_tin']);
            }
            $author = $this->user_model->where(array('id' => $row['id_user']))->as_array()->get_all();
            $khuvuc = $this->khuvuc_model->where(array('id_khuvuc' => $row['id_khuvuc']))->as_array()->get_all();
            $row['hinhanh'] = $hinhanh[0]['src'];
            $row['author'] = $author[0]['username'];
            $row['khuvuc'] = $khuvuc[0]['ten_khuvuc'];
        }
//        echo "<pre>";
//        print_r($this->data['arr_tin']);
//        die();
        echo $this->blade->view()->make('page/index-page', $this->data)->render();
    }

    function login() {
        if (!$this->ion_auth->logged_in()) {
            $this->data['title'] = $this->lang->line('login_heading');

            //validate form input
            $this->form_validation->set_rules('identity', "", 'required');
            $this->form_validation->set_rules('password', "", 'required');

            if ($this->form_validation->run() == true) {
                // check to see if the user is logging in
                // check for "remember me"
                $remember = (bool) $this->input->post('remember');

                if ($this->ion_auth->login($this->input->post('identity'), $this->input->post('password'), $remember)) {
                    //if the login is successful
                    //redirect them back to the home page
                    $this->session->set_flashdata('message', "");
                    header('Location: ' . $_SERVER['HTTP_REFERER']);
                    exit;
                } else {
                    // if the login was un-successful
                    // redirect them back to the login page
                    $this->session->set_flashdata('message', "Tài khoản hoặc mật khẩu không đúng");
                    redirect('index/login', 'refresh'); // use redirects instead of loading views for compatibility with MY_Controller libraries
                }
            } else {
                // the user is not logging in so display the login page
                // set the flash data error message if there is one
                $this->data['message'] = $this->session->flashdata('message');
                echo $this->blade->view()->make('page/login-page', $this->data)->render();
            }
        } else {
            redirect('index', 'refresh'); // use redirects instead of loading views for compatibility with MY_Controller libraries
        }
    }

    function signin() {
        $this->data['title'] = $this->lang->line('create_user_heading');

        if ($this->ion_auth->logged_in()) {
            redirect('/', 'refresh');
        }

        $tables = $this->config->item('tables', 'ion_auth');
        $identity_column = $this->config->item('identity', 'ion_auth');
        $this->data['identity_column'] = $identity_column;

        // validate form input
        $this->form_validation->set_rules('ten', "", 'required');
        if ($this->form_validation->run() == true) {
            $email = $this->input->post('email');
            $identity = $this->input->post('username');
            $password = $this->input->post('password');

            $additional_data = array(
                'last_name' => $this->input->post('ten'),
                'phone' => $this->input->post('dienthoai'),
                'gioitinh' => $this->input->post("gioitinh")
            );
        }
        if ($this->form_validation->run() == true && $this->ion_auth->register($identity, $password, $email, $additional_data)) {
            // check to see if we are creating the user
            // redirect them back to the admin page
            $this->session->set_flashdata('message', "");
            redirect("index/login", 'refresh');
        } else {
            $this->data['message'] = $this->session->flashdata('message');
            array_push($this->data['javascript_tag'], base_url() . "public/js/jquery.validate.js");
            echo $this->blade->view()->make('page/signin-page', $this->data)->render();
        }
    }

    // log the user out
    function logout() {
        $this->data['title'] = "Logout";

        // log the user out
        $logout = $this->ion_auth->logout();

        // redirect them to the login page
        $this->session->set_flashdata('message', $this->ion_auth->messages());
        header('Location: ' . $_SERVER['HTTP_REFERER']);
        exit;
    }

    public function checkEmail() {
        $email = $this->input->get('email');
        $this->load->model("user_model");
        $check = $this->user_model->where(array("email" => $email, "deleted" => 0))->as_array()->get_all();
        if (!$check) {
            echo json_encode(true);
        } else {
            echo json_encode(array("Email đã tồn tại!"));
        }
    }

    public function checkUsername() {
        $username = $this->input->get('username');
        $this->load->model("user_model");
        $check = $this->user_model->where(array("username" => $username, "deleted" => 0))->as_array()->get_all();
        if (!$check) {
            echo json_encode(true);
        } else {
            echo json_encode(array("Tài khoản đã tồn tại!"));
        }
    }

    public function checkUserpass() {
        $id = $this->input->post('id');
        $pass = $this->input->post('passwordold');
        $check = $this->ion_auth->hash_password_db($id, $pass);
        if ($check === TRUE) {
            echo json_encode(true);
        } else {
            echo json_encode(array("Password cũ không đúng!"));
        }
    }

}
