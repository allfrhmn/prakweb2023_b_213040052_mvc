<?php 

class Home extends Controller {
    public function index() {
        $data['judul'] = 'Home';
        $data['nama'] = 'Allfiandi Rahman';
        $this->view('templates/header', $data);
        $this->view('home/index', $data);
        $this->view('templates/footer');
    }
}