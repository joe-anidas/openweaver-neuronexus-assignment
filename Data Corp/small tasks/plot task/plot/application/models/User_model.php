<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database(); // Load the database
    }

  
    public function insert_user($data) {
        return $this->db->insert('crud', $data);
    }
}
?>
