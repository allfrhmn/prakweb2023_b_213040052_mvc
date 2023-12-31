$(function() {
    $(".tombolTambahData").on("click", function() {
        $("#formModalLabel").html("Tambah Data Mahasiswa");
    });

    $(".tampilModalUbah").on("click", function() {
        $("#formModalLabel").html("Ubah Data Mahasiswa");
        $(".modal-footer button[type=submit]").html("Ubah Data");
        $(".modal-body form").attr("action", "http://localhost/prakweb_2023_b_213040052_mvc/mahasiswa/ubah");

        const id = $(this).data("id");

        $.ajax({
            url:"http://localhost/prakweb_2023_b_213040052_mvc/mahasiswa/getubah",
            data: {id: id},
            method: "POST",
            dataType:"json",
            success: function(data) {
                $("#nama").val(data.nama);
                $("#nrp").val(data.nrp);
                $("#email").val(data.email);
                $("#jurusan").val(data.jurusan);
                $("#id").val(data.id);
            }
        });
    });
});