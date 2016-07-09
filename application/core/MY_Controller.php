<?php

use Philo\Blade\Blade;

class MY_Controller extends CI_Controller {

    protected $data = array();

    function __construct() {
        parent::__construct();
        $this->load->library(array('ion_auth', 'form_validation', 'widget'));
        $this->load->helper(array('url', 'language'));
        $this->lang->load('auth');
        $this->load->model("page_model");
        //////
        $this->data['widget'] = $this->widget;
        /////
////////////////////////////////
        $views = APPPATH . "views/";
        $cache = APPPATH . "cache/";
        $this->blade = new Blade($views, $cache);
        $module = $this->router->fetch_module();
        $class = $this->router->fetch_class(); // class = controller
        $method = $this->router->fetch_method();
        $link = $module == "" ? $class . "/" . $method : $module . "/" . $class . "/" . $method;
        $page = $this->page_model->where(array("deleted" => 0, 'link' => $link))->as_array()->get_all();
        if (count($page)) {
            $this->data['content'] = $method;
            $this->data['template'] = $page[0]['template'];
            $this->data['title'] = $page[0]['page'];
        } else { //////// Default
            $this->data['content'] = $method;
            $this->data['template'] = "left";
            $this->data['title'] = "";
        }
    }

////////////
}
