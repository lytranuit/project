<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Hinhanh_model extends MY_Model {

    public function __construct() {
        $this->table = 'tbl_hinhanh';
        $this->primary_key = 'id_hinhanh';
        parent::__construct();
    }

}
