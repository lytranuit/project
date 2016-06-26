<?php

use Philo\Blade\Blade;

class Admin extends CI_Controller {

    private $data = array();

    function __construct() {
        parent::__construct();
        $this->load->library(array('ion_auth', 'form_validation'));
        $this->load->helper(array('url', 'language'));
        $this->lang->load('auth');
        $module = $this->router->fetch_module();
        $views = APPPATH . "modules/$module/views/";
        $cache = APPPATH . "modules/$module/cache/";
        $this->blade = new Blade($views, $cache);
    }

    public function index() {
        $this->data['is_login'] = $this->ion_auth->logged_in();
        echo $this->blade->view()->make('index', $this->data)->render();
    }

    function login() {
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
                redirect('admin/login', 'refresh'); // use redirects instead of loading views for compatibility with MY_Controller libraries
            }
        } else {
            // the user is not logging in so display the login page
            // set the flash data error message if there is one
            $this->data['message'] = (validation_errors()) ? validation_errors() : $this->session->flashdata('message');
            echo $this->blade->view()->make('login', $this->data)->render();
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

}
