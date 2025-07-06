<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

 
    public function index() {
        $this->load->view('header');
        $this->load->view('css1');
        $this->load->view('css2');

        $this->load->view('1plot');
        $this->load->view('2table');
        $this->load->view('3customer');
        $this->load->view('4cash');

        $this->load->view('footer');
    }
}
?>
