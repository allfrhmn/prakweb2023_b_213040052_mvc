<?php 

class About {
    public function index($nama = 'Allfiandi', $pekerjaan = 'Striker') {
        echo "Halo, nama saya $nama, saya adalah seorang $pekerjaan.";
    }

    public function page() {
        echo 'About/page';
    }
}