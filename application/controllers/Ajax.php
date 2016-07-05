<?php

use Philo\Blade\Blade;

class Ajax extends CI_Controller {

    private $data = array();

    function __construct() {
        parent::__construct();
        $this->load->library(array('ion_auth', 'form_validation', 'widget'));
        $this->load->helper(array('url', 'language'));
        $this->lang->load('auth');
        $this->load->model("page_model");
////////////////////////////////
        $views = APPPATH . "views/";
        $cache = APPPATH . "cache/";
        $this->blade = new Blade($views, $cache);
    }

    function loadslider() {
        $this->data['id'] = "new" . rand();
        echo $this->blade->view()->make('ajax/ajaxslider', $this->data)->render();
    }

////////////
}
