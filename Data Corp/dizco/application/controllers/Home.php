<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {


	public function index()
	{
		$this->load->view('index');

	}
	public function analytics() {
        $this->load->view('horizontal/dashboard-analytics');
    }

    public function ecommerce() {
        $this->load->view('horizontal/dashboard-ecommerce');
    }

	public function crm() {
        $this->load->view('horizontal/dashboard-crm');
    }

	public function finance() {
        $this->load->view('horizontal/dashboard-finance');
    }

	public function blog() {
        $this->load->view('horizontal/dashboard-blog');
    }

    
	}

