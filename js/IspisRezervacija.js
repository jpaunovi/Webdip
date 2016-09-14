$(document).ready(function($) {
    $('#Potvrdene_rezervacije').click(function (event) {
        var n = 12;
        if ($('#uploadimage').length > 0) {
            $('#uploadimage').remove();
        }
        $.ajax({
            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type: "POST",
            dataType: "json",

            success: function (json) {
                if ($('#Tablica').length > 0) {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Rezervacije</caption><thead>" +
                        "<tr><th>Id Rezervacije</th><th>Naziv Projekcije</th><th>Status rezervacije</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json, function (i, item) {
                        $($('<tr>').append(
                            $('<td>').text(item.idrezervacije),
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.status)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                        $.each(json, function (i, item) {
                            var idrez=$('#Tablica tr.selected td:nth-child(1)').html();
                            if(idrez==item.idrezervacije){
                                var idprojekcije =item.projekcije_idproekcije;
                                $('#idprojekc').val(idprojekcije);
                            }
                        });
                        
                        var uploadform="<form id='uploadimage' action='' method='post' enctype='multipart/form-data'>"+
                            "<hr id='line'>"+
                            "<div id='selectImage'>"+
                            "<table id='selectImage'>"+
                            "<tr><td><label for='file'>Izaberi sliku</label></td>"+
                            "<td><input type='file' name='file' id='file'/></td></tr>"+
                            "<tr><td><label for='opis'>Opis slike</label></td>"+
                            "<td><input type='text' name='opis' id='opis'  /></td></tr>"+
                            "<tr><td><label for='tag'>Dodaj te tag za sliku</label></td>"+
                            "<td><input type='text' name='tag' id='tag'  /></td></tr>"+
                            "<input type='submit' value='Upload' id='submit' class='gumb' name='submit' />"+
                            "</table>"+
                            "</div>"+
                            "</form>";
                        $('#sadrzaj').append(uploadform);
                        $("#uploadimage").on('submit',(function(e) {
                            e.preventDefault();
                            $.ajax({
                                url: "uploder.php", // Url to which the request is send
                                type: "POST",             // Type of request to be send, called as method
                                data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                                contentType: false,       // The content type used when sending data to the server.
                                cache: false,             // To unable request pages to be cached
                                processData:false,        // To send DOMDocument or non processed data file it is set to false
                                success: function(data) {
                                    var tablicaime='slika';
                                    var idP=$('#idprojekc').val();
                                    var idK=$('#idkor').val();
                                    var opis=$('#opis').val();
                                    var path = data;
                                    var odabir=1;
                                    var objekt= {
                                        'slika':path,
                                        'opis_slike':opis,
                                        'projekcije':idP,
                                        'korisnik':idK
                                    };
                                    var slika=JSON.stringify(objekt);
                                    $.ajax({
                                        url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + slika + "&odabir= " + odabir + "&tablica= " + tablicaime,
                                        type:"POST",
                                        success: function() {
                                            n=3;
                                            $.ajax ({
                                                url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
                                                type: "POST",
                                                dataType: "json",
                                                success:function(jsonSlike){
                                                    $.each(jsonSlike, function (i, item) {
                                                        if(idK == item.korisnik){
                                                            var tag=$('#tag').val();
                                                            var idslika=item.idslika;
                                                        }
                                                        var tablicaime2='galerja_slika';
                                                        var object2={
                                                            'idslika':idslika,
                                                            'idkorisnici':idK,
                                                            'tag':tag
                                                        };
                                                        var odbair2=1;
                                                        var galerija=JSON.stringify(object2);
                                                        $.ajax({
                                                            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + galerija + "&odabir= " + odbair2 + "&tablica= " + tablicaime2,
                                                            type: "POST"
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }));
                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Rezervacije</caption><thead>" +
                        "<tr><th>Id Rezervacije</th><th>Naziv Projekcije</th><th>Status rezervacije</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json, function (i, item) {
                        $($('<tr>').append(
                            $('<td>').text(item.idrezervacije),
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.status)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                        $.each(json, function (i, item) {
                            var idrez=$('#Tablica tr.selected td:nth-child(1)').html();
                            if(idrez==item.idrezervacije){
                                var idprojekcije =item.projekcije_idproekcije;
                                $('#idprojekc').val(idprojekcije);
                            }
                        });
                        if ($('#uploadimage').length > 0) {
                            $('#uploadimage').remove();
                        }
                        var uploadform="<form id='uploadimage' action='' method='post' enctype='multipart/form-data'>"+
                            "<hr id='line'>"+
                            "<div id='selectImage'>"+
                            "<table id='selectImage'>"+
                            "<tr><td><label for='file'>Izaberi sliku</label></td>"+
                            "<td><input type='file' name='file' id='file'/></td></tr>"+
                            "<tr><td><label for='opis'>Opis slike</label></td>"+
                            "<td><input type='text' name='opis' id='opis'  /></td></tr>"+
                            "<tr><td><label for='tag'>Dodaj te tag za sliku</label></td>"+
                            "<td><input type='text' name='tag' id='tag'  /></td></tr>"+
                            "<input type='submit' class='gumb' value='Upload' id='submit' name='submit' />"+
                            "</table>"+
                            "</div>"+
                            "</form>";
                        $('#sadrzaj').append(uploadform);
                        $("#uploadimage").on('submit',(function(e) {
                            e.preventDefault();
                            $.ajax({
                                url: "uploder.php", // Url to which the request is send
                                type: "POST",             // Type of request to be send, called as method
                                data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                                contentType: false,       // The content type used when sending data to the server.
                                cache: false,             // To unable request pages to be cached
                                processData:false,        // To send DOMDocument or non processed data file it is set to false
                                success: function(data) {
                                    var tablicaime='slika';
                                    var idP=$('#idprojekc').val();
                                    var idK=$('#idkor').val();
                                    var opis=$('#opis').val();
                                    var path = data;
                                    var odabir=1;
                                    var objekt= {
                                        'slika':path,
                                        'opis_slike':opis,
                                        'projekcije':idP,
                                        'korisnik':idK
                                    };
                                    var slika=JSON.stringify(objekt);
                                    $.ajax({
                                        url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + slika + "&odabir= " + odabir + "&tablica= " + tablicaime,
                                        type:"POST",
                                        success: function() {
                                            n=3;
                                            $.ajax ({
                                                url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
                                                type: "POST",
                                                dataType: "json",
                                                success:function(jsonSlike){
                                                    $.each(jsonSlike, function (i, item) {
                                                        var string=item.slika;
                                                        if(path.match(string)){
                                                            var tag=$('#tag').val();
                                                            var idslika=item.idslika;
                                                            var object2={
                                                                'idslika':idslika,
                                                                'idkorisnici':idK,
                                                                'tag':tag
                                                            };
                                                            var tablicaime2='galerja_slika';

                                                            var odbair2=1;
                                                            var galerija=JSON.stringify(object2);
                                                            $.ajax({
                                                                url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + galerija + "&odabir= " + odbair2 + "&tablica= " + tablicaime2,
                                                                type: "POST"
                                                            });
                                                        }
                                                    });


                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }));
                    });
                }
            }
        });
    });
    $('#NEPotvrdene_rezervacije').click(function (event) {
        var n = 13;
        if ($('#uploadimage').length > 0) {
            $('#uploadimage').remove();
        }
        $.ajax({
            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type: "POST",
            dataType: "json",

            success: function (json) {
                if ($('#Tablica').length > 0) {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Rezervacije</caption><thead>" +
                        "<tr><th>Naziv Projekcije</th><th>Status rezervacije</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json, function (i, item) {
                        $($('<tr>').append(
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.status)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Rezervacije</caption><thead>" +
                        "<tr><th>Naziv Projekcije</th><th>Status rezervacije</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json, function (i, item) {
                        $($('<tr>').append(
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.status)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                }
            }
        });
    });
});

