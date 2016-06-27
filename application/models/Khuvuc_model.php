<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Khuvuc_model extends MY_Model {

    public function __construct() {
        $this->table = 'tbl_khuvuc';
        $this->primary_key = 'id_khuvuc';
        parent::__construct();
    }

}
