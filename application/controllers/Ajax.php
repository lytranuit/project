<?php

use Philo\Blade\Blade;

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
        $array = array(
            'seo_url' => $seo,
            'template' => $template,
            'link' => $link,
            'page' => $page
        );
        $this->page_model->update($array, $id);
    }

////////////
}
