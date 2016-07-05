<?php

use Philo\Blade\Blade;

class Widget {

    private $data = array();
    protected $CI;

    function __construct() {
        $this->CI = &get_instance();
        $this->CI->load->helper(array('url', 'language'));
        ////////////////////////////////
        $views = APPPATH . "views/";
        $cache = APPPATH . "cache/";
        $this->blade = new Blade($views, $cache);
        ////////////
        ////////////////////////////////// Stle mac dinh
        $this->data['stylesheet_tag'] = array(
        );
        $this->data['javascript_tag'] = array(
        );
    }

    function tinnew() {
        $this->CI->load->model("tin_model");
        $this->CI->load->model("user_model");
        $this->CI->load->model("khuvuc_model");
        $this->CI->load->model("hinhanh_model");
        $this->data['arr_tin'] = $this->CI->tin_model->where(array('deleted' => 0, 'active' => 1))->as_array()->get_all();
        foreach ($this->data['arr_tin'] as &$row) {
            $arr_hinhanh = $this->CI->tin_model->get_tin_hinhanh($row['id_tin']);
            if (count($arr_hinhanh)) {
                $hinhanh = $arr_hinhanh;
            } else {
                $hinhanh = $this->CI->hinhanh_model->where(array("default" => 1, 'deleted' => 0))->as_array()->get_all();
            }
            $author = $this->CI->user_model->where(array('id' => $row['id_user']))->as_array()->get_all();
            $khuvuc = $this->CI->khuvuc_model->where(array('id_khuvuc' => $row['id_khuvuc']))->as_array()->get_all();
            $row['hinhanh'] = $hinhanh[0]['thumb_src'];
            $row['arr_hinhanh'] = $hinhanh;
            $row['author'] = $author[0]['username'];
            $row['khuvuc'] = $khuvuc[0]['ten_khuvuc'];
        }
        echo $this->blade->view()->make('widget/tin-related', $this->data)->render();
    }

    function tinlienquan() {
        $this->CI->load->model("tin_model");
        $this->CI->load->model("user_model");
        $this->CI->load->model("khuvuc_model");
        $this->CI->load->model("hinhanh_model");
        $this->data['arr_tin'] = $this->CI->tin_model->where(array('deleted' => 0, 'active' => 1))->limit(4)->as_array()->get_all();
        foreach ($this->data['arr_tin'] as &$row) {
            $arr_hinhanh = $this->CI->tin_model->get_tin_hinhanh($row['id_tin']);
            if (count($arr_hinhanh)) {
                $hinhanh = $arr_hinhanh;
            } else {
                $hinhanh = $this->CI->hinhanh_model->where(array("default" => 1, 'deleted' => 0))->as_array()->get_all();
            }
            $author = $this->CI->user_model->where(array('id' => $row['id_user']))->as_array()->get_all();
            $khuvuc = $this->CI->khuvuc_model->where(array('id_khuvuc' => $row['id_khuvuc']))->as_array()->get_all();
            $row['hinhanh'] = $hinhanh[0]['thumb_src'];
            $row['arr_hinhanh'] = $hinhanh;
            $row['author'] = $author[0]['username'];
            $row['khuvuc'] = $khuvuc[0]['ten_khuvuc'];
        }
        echo $this->blade->view()->make('widget/tin-related', $this->data)->render();
    }

    function searchtop() {
        $this->CI->load->model("khuvuc_model");
        $this->CI->load->model("huong_model");
        $this->data['khuvuc'] = $this->CI->khuvuc_model->order_by("order")->as_array()->get_all();
        $this->data['huong'] = $this->CI->huong_model->as_array()->get_all();
        echo $this->blade->view()->make('widget/search-top', $this->data)->render();
    }

    function tintucmoi() {
        $this->CI->load->model("tintuc_model");
        $this->CI->load->model("user_model");
        $this->CI->load->model("hinhanh_model");
        $this->data['arr_tin'] = $this->CI->tintuc_model->where(array('deleted' => 0, 'active' => 1))->limit(5)->as_array()->get_all();
        foreach ($this->data['arr_tin'] as &$row) {
            $arr_hinhanh = $this->CI->tintuc_model->get_tintuc_hinhanh($row['id_tintuc']);
            if (count($arr_hinhanh)) {
                $hinhanh = $arr_hinhanh;
            } else {
                $hinhanh = $this->CI->hinhanh_model->where(array("default" => 1, 'deleted' => 0))->as_array()->get_all();
            }
            $author = $this->CI->user_model->where(array('id' => $row['id_user']))->as_array()->get_all();
            $row['hinhanh'] = $hinhanh[0]['thumb_src'];

            $row['author'] = $author[0]['username'];
        }
        echo $this->blade->view()->make('widget/tintuc', $this->data)->render();
    }

    function tintucslider() {
        $this->CI->load->model("tintuc_model");
        $this->CI->load->model("user_model");
        $this->CI->load->model("hinhanh_model");
        $this->data['arr_tin'] = $this->CI->tintuc_model->where(array('deleted' => 0, 'active' => 1))->limit(5)->as_array()->get_all();
        foreach ($this->data['arr_tin'] as &$row) {
            $arr_hinhanh = $this->CI->tintuc_model->get_tintuc_hinhanh($row['id_tintuc']);
            if (count($arr_hinhanh)) {
                $hinhanh = $arr_hinhanh;
            } else {
                $hinhanh = $this->CI->hinhanh_model->where(array("default" => 1, 'deleted' => 0))->as_array()->get_all();
            }
            $author = $this->CI->user_model->where(array('id' => $row['id_user']))->as_array()->get_all();
            $row['hinhanh'] = $hinhanh[0]['bg_src'];

            $row['author'] = $author[0]['username'];
        }
        echo $this->blade->view()->make('widget/tintucslider', $this->data)->render();
    }

    function khuvuc() {
        $this->CI->load->model("khuvuc_model");
        $this->data['arr_khuvuc'] = $this->CI->khuvuc_model->get_khuvuc_co_tin();
        echo $this->blade->view()->make('widget/khuvuc', $this->data)->render();
    }

    function quangcao() {
        echo $this->blade->view()->make('widget/quangcao', $this->data)->render();
    }

    function facebook() {
        echo $this->blade->view()->make('widget/facebook', $this->data)->render();
    }

}