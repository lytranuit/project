<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Page_model extends MY_Model {
    public function __construct() {
        $this->table = 'tbl_page';
        $this->primary_key = 'id';
        parent::__construct();
    }

}
