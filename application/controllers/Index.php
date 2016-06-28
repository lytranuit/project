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
            redirect('admin', 'refresh'); // use redirects instead of loading views for compatibility with MY_Controller libraries
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

    private function javascript_tag() {
        return '<script src="' . base_url() . 'public/js/jquery.js"></script>
        <script src="' . base_url() . 'public/js/bootstrap.min.js"></script>
        <script src="' . base_url() . 'public/js/jquery.prettyPhoto.js"></script>
        <script src="' . base_url() . 'public/js/jquery.isotope.min.js"></script>
        <script src="' . base_url() . 'public/js/main.js"></script>
        <script src="' . base_url() . 'public/js/wow.min.js"></script>';
    }

    private function stylesheet_tag() {
        return '<link href="' . base_url() . 'public/css/bootstrap.min.css" rel="stylesheet">
        <link href="' . base_url() . 'public/css/font-awesome.min.css" rel="stylesheet">
        <link href="' . base_url() . 'public/css/animate.min.css" rel="stylesheet">
        <link href="' . base_url() . 'public/css/prettyPhoto.css" rel="stylesheet">
        <link href="' . base_url() . 'public/css/main.css" rel="stylesheet">
        <link href="' . base_url() . 'public/css/responsive.css" rel="stylesheet">';
    }

}
