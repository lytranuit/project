<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Tin_model extends MY_Model {

    public function __construct() {
        $this->table = 'tbl_tin';
        $this->primary_key = 'id_tin';
        parent::__construct();
    }

}
