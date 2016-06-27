<?php

use Philo\Blade\Blade;

class Member extends CI_Controller {

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
        
    }

    function dangtin() {
        if (isset($_POST['dangtin'])) {
            
        } else {
            array_push($this->data['javascript_tag'], base_url() . "public/js/autoNumeric.js");
            array_push($this->data['javascript_tag'], base_url() . "public/js/jquery.validate.js");
            echo $this->blade->view()->make('dangtin-page', $this->data)->render();
        }
    }

}
