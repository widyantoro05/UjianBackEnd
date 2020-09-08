

var tableBiodata = {
    create: function () {
        // jika table tersebut datatable, maka clear and dostroy
    	 if ($.fn.DataTable.isDataTable('#tableBiodata')) {
             //table yg sudah dibentuk menjadi datatable harus d rebuild lagi untuk di instantiasi ulang
             $('#tableBiodata').DataTable().clear();
             $('#tableBiodata').DataTable().destroy();
         }
        $.ajax({
            url: '/person',
            method: 'get',
            success: function (res, status, xhr) {
                if (xhr.status == 200 || xhr.status == 201) {
                    $('#tableBiodata').DataTable({
                        data: res,
                        columns: [
                            {
                                title: "Nama",
                                data: "nama"
                            },
                            {
                                title: "Alamat",
                                data: "alamat"
                            },
                            {
                                title: "NIK",
                                data: "nik"
                            },
                            {
                                title: "Tempat Lahir",
                                data: "tempatLahir"
                            },
                            {
                                title: "Tanggal Lahir",
                                data: "tanggalLahir"
                            },
                            {
                                title: "No HP",
                                data: "noHp"
                            },
                            {
                                title: "Action",
                                data: null,
                                render: function (data, type, row) {
                                    return "<button class='btn-primary' onclick=formBiodata.setEditData('" + data.idPerson + "')>Edit</button>"
                                }
                            }
                        ]
                    });

                } else {

                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    create2: function () {
        // jika table tersebut datatable, maka clear and dostroy
    	 if ($.fn.DataTable.isDataTable('#tableBiodata2')) {
             //table yg sudah dibentuk menjadi datatable harus d rebuild lagi untuk di instantiasi ulang
             $('#tableBiodata2').DataTable().clear();
             $('#tableBiodata2').DataTable().destroy();
         }
        $.ajax({
            data: dataTable,
            success: function () {
                $('#tableBiodata2').DataTable({
                        data: dataTable,
                        columns: [
                            {
                                title: "Jenjang Pendidikan",
                                data: "jenjang"
                            },
                            {
                                title: "Institusi",
                                data: "institusi"
                            },
                            {
                                title: "Tahun Masuk",
                                data: "tahunMasuk"
                            },
                            {
                                title: "Tahun Lulus",
                                data: "tahunLulus"
                            }     
                        ]
                });
            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    create3: function () {
        // jika table tersebut datatable, maka clear and dostroy
    	 if ($.fn.DataTable.isDataTable('#tableBiodata3')) {
             //table yg sudah dibentuk menjadi datatable harus d rebuild lagi untuk di instantiasi ulang
             $('#tableBiodata3').DataTable().clear();
             $('#tableBiodata3').DataTable().destroy();
         }
        $.ajax({
            method: 'get',
            url: '/person/biodata/' + $('#idnik').val(),
            success: function (dataReturn1, status, xhr) {
                $(function() {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 5000
                    });
                    Toast.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: 'status:' + dataReturn1.status + '\n'+'message:' + dataReturn1.message,
                        showConfirmButton: false,
                        timer: 5000
                    });
                });
                if (dataReturn1.status=='true') {
                    $('#tableBiodata3').DataTable({
                        data: [dataReturn1],
                        columns: [
                            {
                                title: "Nama",
                                data: "nama"
                            },
                            {
                                title: "Alamat",
                                data: "alamat"
                            },
                            {
                                title: "NIK",
                                data: "nik"
                            },
                            {
                                title: "Tempat Lahir",
                                data: "tempatLahir"
                            },
                            {
                                title: "Tanggal Lahir",
                                data: "tanggalLahir"
                            },
                            {
                                title: "No HP",
                                data: "noHp"
                            },
                            {
                                title: "Umur",
                                data: "umur"
                            },
                            {
                                title: "Pendidikan Terakhir",
                                data: "jenjangPendidikan"
                            },
                            {
                                title: "Action",
                                data: null,
                                render: function (data, type, row) {
                                    return "<button class='btn-primary' onclick=formBiodata.setEditData('" + data.idPerson + "')>Edit</button>"
                                }
                            }
                        ]
                    });
                }
            },
            error: function (err) {
                $(function() {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 5000
                    });
                    Toast.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: 'status:' + err.status + '\n'+'message:' + err.message,
                        showConfirmButton: false,
                        timer: 5000
                    });
                });
            }
        });
    }    
};    


// var formBiodata = {
//     saveForm: function () {
//         var $myForm= $('#myForm');
//         var $nama=$('#nama');
//         var $nik=$('#nik');
//         var $alamat=$('#alamat');
//         var $tempat=$('#tempatLahir');
//         var $tanggal=$('#tanggalLahir');
//         var $nohp=$('#noHp');
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000
//         });

//         var myform = {
//             nama: $nama.val(),
//             nik:$nik.val(),
//             alamat: $alamat.val(),
//             tempatLahir: $tempat.val(),
//             tanggalLahir: $tanggal.val(),
//             noHp: $nohp.val() 
//         };
//         $.ajax({
//             url: '/person',
//             method: 'post',
//             contentType: 'application/json',
//             dataType: 'json',
//             data: JSON.stringify(myform),
//             success: function(){
//             	Toast.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'Your form has been saved',
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
                
//             },
//             error: function(){
//             	Toast.fire({
//                     position: 'top-end',
//                     icon: 'error',
//                     title: 'Your form has not been saved',
//                     showConfirmButton: false,
//                     timer: 1500
//                 });

//             }
//         });
   
//     }
// }
var jenjangBiodata = {
    
    saveForm2:function(){
        // function storeTblValues(){
        //     var TableData = new Array();

        //     $('#tabelJenjang tr').each(function(row, tr){
        //         TableData[row]={
        //             "jenjang" : $(tr).find('td:eq(0)').text()
        //             , "institusi" :$(tr).find('td:eq(1)').text()
        //             , "tahunMasuk" : $(tr).find('td:eq(2)').text()
        //             , "tahunLulus" : $(tr).find('td:eq(3)').text()
        //         }    
        //     }); 
        //     TableData.shift();  // first row will be empty - so remove
        //     return TableData;
        // }
        

        $.ajax({
            url: '/pendidikan/' + $('#id').val(),
            method: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(dataTable),
            success: function (dataReturn) {
                $(function() {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: 'status:' + dataReturn.status + '\n'+'message:' + dataReturn.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
                $("#id").val("");
                if ($.fn.DataTable.isDataTable('#tableBiodata2')) {
                    //table yg sudah dibentuk menjadi datatable harus d rebuild lagi untuk di instantiasi ulang
                    $('#tableBiodata2').DataTable().clear();
                    $('#tableBiodata2').DataTable().destroy();
                }
                dataTable=[];
            },
            error: function (err) {
                console.log(err);
            }
        });
       
    
    }

}

var formBiodata = {   
    
    resetForm: function () {
        $('#form-biodata')[0].reset();
    },
    saveForm: function () {
        
        var dataResult = getJsonForm($("#myForm").serializeArray(), true);

        $.ajax({
            url: '/person',
            method: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(dataResult),
            success: function (dataReturn) {
                if (dataReturn.xhr == 200 || dataReturn.xhr == 201) {
                    tableBiodata.create();
                    $('#myForm')[0].reset();

                }
                
                console.log(dataReturn);
                $(function() {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: 'status:' + dataReturn.status + '\n'+'message:' + dataReturn.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                });

            },
            error: function (err) {
                console.log(err);
            }
        });
       
    }, 
    saveFormEdit: function () {
        
        
        var dataResult = getJsonForm($("#form-biodata").serializeArray(), true);

        $.ajax({
            url: '/person',
            method: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(dataResult),
            success: function (res, status, xhr) {
                if (xhr.status == 200 || xhr.status == 201) {
                    tableBiodata.create();
                    $('#form-biodata')[0].reset();
                    $('#modal-biodata').modal('hide');

                } else {

                }
            },
            error: function (err) {
                console.log(err);
            }
        });
   
    },setEditData: function (idPerson) {
        formBiodata.resetForm();

        $.ajax({
            url: '/person/' + idPerson,
            method: 'get',
            contentType: 'application/json',
            dataType: 'json',
            success: function (res, status, xhr) {
                if (xhr.status == 200 || xhr.status == 201) {
                    $('#modal-biodata').fromJSON(JSON.stringify(res));
                    $('#modal-biodata').modal('show');                  
                } else {

                }
            },
            error: function (err) {
                console.log(err);
            }
        });


    }

};
