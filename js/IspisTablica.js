$(document).ready(function($) {

    $('#KorTable').click(function (event) {
        var n=1;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="korisnici";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",
            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();

                    var tablica2 = "<table id='Tablica' border='1'><caption>Korisnici</caption><thead><tr><th>ID</th>" +
                        "<th>Ime</th>" +
                        "<th>Prezime</th>" +
                        "<th>Email</th>" +
                        "<th>Korisnicko ime</th>" +
                        "<th>Status</th>" +
                        "<th>Adresa</th>" +
                        "<th>Slika</th>" +
                        "<th>Uloga</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idkorisnici),
                            $('<td>').text(item.ime),
                            $('<td>').text(item.prezime),
                            $('<td>').text(item.email),
                            $('<td>').text(item.korisnicko_ime),
                            $('<td>').text(item.status),
                            $('<td>').text(item.adresa),
                            $('<td>').text(item.slika),
                            $('<td>').text(item.uloga)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');

                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true

                    });

                }
                else {
                    tablica2 = "<table id='Tablica' border='1'><caption>Korisnici</caption><thead><tr><th>ID</th>" +
                        "<th>Ime</th>" +
                        "<th>Prezime</th>" +
                        "<th>Email</th>" +
                        "<th>Korisnicko ime</th>" +
                        "<th>Status</th>" +
                        "<th>Adresa</th>" +
                        "<th>Slika</th>" +
                        "<th>Uloga</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                      $( $('<tr>').append(
                          $('<td>').text(item.idkorisnici),
                          $('<td>').text(item.ime),
                          $('<td>').text(item.prezime),
                          $('<td>').text(item.email),
                          $('<td>').text(item.korisnicko_ime),
                          $('<td>').text(item.status),
                          $('<td>').text(item.adresa),
                          $('<td>').text(item.slika),
                          $('<td>').text(item.uloga)
                      ).appendTo('#Tablica tbody'));
                    });
                }
                $('#Tablica tr').click(function () {
                    $(this).addClass('selected').siblings().removeClass('selected');

                });
                if($('#Tablica').length>0) {
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true

                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='ime'>Ime</label></td>" +
                "<td><input id='ime' name='ime' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='prezime'>Prezime</label></td>" +
                "<td><input id='prezime' name='prezime' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='email'>Email</label></td>" +
                "<td><input id='email' name='email' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='korisnicko_ime'>Korisnicko ime</label></td><td><input id='korisnicko_ime' name='korisnicko_ime' type='text'/></td></tr>" +
                "<tr><td><label for='status'>Status</label></td><td><input id='status' name='status' type='text'/></td></tr>" +
                "<tr><td><label for='adresa'>Adresa</label></td><td><input id='adresa' name='adresa' type='text' /></td></tr>" +
                "<tr><td><label for='uloga'>Uloga</label></td><td><input id='uloga' name='uloga' type='text' placeholder='Mora bit broj'/></td></tr>"+
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'ime': $("#ime").val(),
                    'prezime': $("#prezime").val(),
                    'email': $("#email").val(),
                    'korisnicko_ime': $("#korisnicko_ime").val(),
                    'status': $("#status").val(),
                    'adresa': $("#adresa").val(),
                    'uloga': $("#uloga").val()

                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            $('#Tablica tr').click(function () {
                $(this).addClass('selected').siblings().removeClass('selected');

            });
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='ime'>Ime</label></td>" +
                "<td><input id='ime' name='ime' type='text' /></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='prezime'>Prezime</label></td>" +
                "<td><input id='prezime' name='prezime' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='email'>Email</label></td>" +
                "<td><input id='email' name='email' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='korisnicko_ime'>Korisnicko ime</label></td><td><input id='korisnicko_ime' name='korisnicko_ime' type='text'/></td></tr>" +
                "<tr><td><label for='status'>Status</label></td><td><input id='status' name='status' type='text'/></td></tr>" +
                "<tr><td><label for='adresa'>Adresa</label></td><td><input id='adresa' name='adresa' type='text' /></td></tr>" +
                "<tr><td><label for='uloga'>Uloga</label></td><td><input id='uloga' name='uloga' type='text' placeholder='Mora bit broj'/></td></tr>"+
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#ime').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#prezime').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#email').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#korisnicko_ime').val($('#Tablica tr.selected td:nth-child(5)').html());
            $('#status').val($('#Tablica tr.selected td:nth-child(6)').html());
            $('#adresa').val($('#Tablica tr.selected td:nth-child(7)').html());
            $('#uloga').val($('#Tablica tr.selected td:nth-child(9)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'ime': $("#ime").val(),
                    'prezime': $("#prezime").val(),
                    'email': $("#email").val(),
                    'korisnicko_ime': $("#korisnicko_ime").val(),
                    'status': $("#status").val(),
                    'adresa': $("#adresa").val(),
                    'uloga': $("#uloga").val()

                };
                var id ={
                    'idkorisnici':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {

            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'idkorisnici':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#KorTable').click();
        })

    });
    $('#UlogaTable').click(function (event) {
        var n = 2;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="uloge";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Vrsta Uloga</caption><thead>" +
                        "<tr><th>Id</th><th>Ime uloge</th><th>Opis uloge</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.iduloge),
                            $('<td>').text(item.ime_uloge),
                            $('<td>').text(item.opis_uloge)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');

                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Vrsta Uloga</caption><thead>" +
                        "<tr><th>Id</th><th>Ime uloge</th><th>Opis uloge</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.iduloge),
                            $('<td>').text(item.ime_uloge),
                            $('<td>').text(item.opis_uloge)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');

                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form3="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='ime_uloge'>Ime uloge</label></td>" +
                "<td><input id='ime_uloge' name='ime_uloge' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='opis_uloge'>Opis uloge</label></td>" +
                "<td><input id='opis_uloge' name='opis_uloge' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form3);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'ime_uloge': $("#ime_uloge").val(),
                    'opis_uloge': $("#opis_uloge").val()

                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form4="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='ime_uloge'>Ime uloge</label></td>" +
                "<td><input id='ime_uloge' name='ime_uloge' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='opis_uloge'>Opis uloge</label></td>" +
                "<td><input id='opis_uloge' name='opis_uloge' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form4);
            $('#ime_uloge').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#opis_uloge').val($('#Tablica tr.selected td:nth-child(3)').html());

            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'ime_uloge': $("#ime_uloge").val(),
                    'opis_uloge': $("#opis_uloge").val()

                };
                var id ={
                    'iduloge':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'iduloge':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#UlogaTable').click();
        });
    });
    $('#SlikeTable').click(function (event) {
        var tablicaime="slika";
        var n = 3;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",
            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Slike</caption><thead>" +
                        "<tr><th>Id</th><th>Slika</th><th>Opis slike</th><th>Projekcija</th><th>Korisnik</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idslika),
                            $('<td>').text(item.slika),
                            $('<td>').text(item.opis_slike),
                            $('<td>').text(item.projekcije),
                            $('<td>').text(item.korisnik)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');

                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
                else {
                    var tablica2 = "<table id='Tablica'  border='1'><caption>Slike</caption><thead>" +
                        "<tr><th>Id</th><th>Slika</th><th>Opis slike</th><th>Projekcija</th><th>Korisnik</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idslika),
                            $('<td>').text(item.slika),
                            $('<td>').text(item.opis_slike),
                            $('<td>').text(item.projekcije),
                            $('<td>').text(item.korisnik)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');

                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
            }
        });
        dodajgumb();

        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='slika'>Slika</label></td>" +
                "<td><input id='slika' name='slika' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='opis_slike'>Opis slike</label></td>" +
                "<td><input id='opis_slike' name='opis_slike' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='projekcije'>Projekcije</label></td>" +
                "<td><input id='projekcije' name='projekcije' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "<tr><td><label for='korisnik'>Korisnik</label></td><td><input id='korisnik' name='korisnik' type='text' placeholder='Mora bit broj'/></td></tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'slika': $("#slika").val(),
                    'opis_slike': $("#opis_slike").val(),
                    'projekcije': $("#projekcije").val(),
                    'korisnik': $("#korisnik").val()
                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='slika'>Slika</label></td>" +
                "<td><input id='slika' name='slika' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='opis_slike'>Opis slike</label></td>" +
                "<td><input id='opis_slike' name='opis_slike' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='projekcije'>Projekcije</label></td>" +
                "<td><input id='projekcije' name='projekcije' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "<tr><td><label for='korisnik'>Korisnik</label></td><td><input id='korisnik' name='korisnik' type='text' placeholder='Mora bit broj'/></td></tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#slika').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#opis_slike').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#projekcije').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#korisnik').val($('#Tablica tr.selected td:nth-child(5)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'slika': $("#slika").val(),
                    'opis_slike': $("#opis_slike").val(),
                    'projekcije': $("#projekcije").val(),
                    'korisnik': $("#korisnik").val()

                };
                var id ={
                    'idslika':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'idslika':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#SlikeTable').click();
        });
    });
    $('#RezervacijaTable').click(function (event) {
        var n = 4;
        var tablicaime="rezervacija";
        if($('#forma').length >0){
            $('#forma').remove();
        }
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Rezervacije</caption><thead>" +
                        "<tr><th>Id</th><th>Korisnik rezervacije</th><th>Rezervacija projekcije</th><th>Status rezervacije</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idrezervacije),
                            $('<td>').text(item.korisnici_idkorisnici),
                            $('<td>').text(item.projekcije_idproekcije),
                            $('<td>').text(item.status)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        "bPaginate":true,
                        "bFilter":true,

                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Rezervacije</caption><thead>" +
                        "<tr><th>Id</th><th>Korisnik rezervacije</th><th>Rezervacija projekcije</th><th>Status rezervacije</th></tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idrezervacije),
                            $('<td>').text(item.korisnici_idkorisnici),
                            $('<td>').text(item.projekcije_idproekcije),
                            $('<td>').text(item.status)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        "bPaginate":true,
                        "bFilter":true,

                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='korisnici_idkorisnici'>Krorisnik rezervacije</label></td>" +
                "<td><input id='korisnici_idkorisnici' name='korisnici_idkorisnici' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='projekcije_idproekcije'>Rezervacija na projekcij</label></td>" +
                "<td><input id='projekcije_idproekcije' name='projekcije_idproekcije' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='status'>Status rezervacije</label></td>" +
                "<td><input id='status' name='status' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'korisnici_idkorisnici': $("#korisnici_idkorisnici").val(),
                    'projekcije_idproekcije': $("#projekcije_idproekcije").val(),
                    'status': $("#status").val()
                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='korisnici_idkorisnici'>Krorisnik rezervacije</label></td>" +
                "<td><input id='korisnici_idkorisnici' name='korisnici_idkorisnici' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='projekcije_idproekcije'>Rezervacija na projekcij</label></td>" +
                "<td><input id='projekcije_idproekcije' name='projekcije_idproekcije' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='status'>Status rezervacije</label></td>" +
                "<td><input id='status' name='status' type='text' placeholder='Mora bit broj'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button'  class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#korisnici_idkorisnici').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#projekcije_idproekcije').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#status').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'korisnici_idkorisnici': $("#korisnici_idkorisnici").val(),
                    'projekcije_idproekcije': $("#projekcije_idproekcije").val(),
                    'status': $("#status").val()
                };
                var id ={
                    'idrezervacije':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'idrezervacije':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#RezervacijaTable').click();
        });
    });
    $('#ProjekcijeTable').click(function (event) {
        var n = 5;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="projekcije";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Naziv Projekcije</th>" +
                        "<th>Broj slobodnih mjesta</th>" +
                        "<th>datum projekcije od</th>" +
                        "<th>datum projekcije do</th>" +
                        "<th>vrijeme projekcij od</th>" +
                        "<th>vrijeme projekcij od</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idproekcije),
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.broj_slobodnihmjesta),
                            $('<td>').text(item.datum_projekcije_od),
                            $('<td>').text(item.datum_projekcije_do),
                            $('<td>').text(item.vrijeme_projekcij_od),
                            $('<td>').text(item.vrijeme_projekcij_od)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        "bPaginate":true,
                        "bFilter":true,

                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Naziv Projekcije</th>" +
                        "<th>Broj slobodnih mjesta</th>" +
                        "<th>datum projekcije od</th>" +
                        "<th>datum projekcije do</th>" +
                        "<th>vrijeme projekcij od</th>" +
                        "<th>vrijeme projekcij od</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idproekcije),
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.broj_slobodnihmjesta),
                            $('<td>').text(item.datum_projekcije_od),
                            $('<td>').text(item.datum_projekcije_do),
                            $('<td>').text(item.vrijeme_projekcij_od),
                            $('<td>').text(item.vrijeme_projekcij_od)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        "bPaginate":true,
                        "bFilter":true,

                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='datum_projekcije_od'>Datum projekcije od</label></td>" +
                "<td><input id='datum_projekcije_od' name='datum_projekcije_od' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='datum_projekcije_do'>Datum projekcije do</label></td><td><input id='datum_projekcije_do' name='datum_projekcije_do' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_od'>Vrijeme_projekcij od</label></td><td><input id='vrijeme_projekcij_od' name='vrijeme_projekcij_od' type='text' placeholder='hh:mm:ss'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_do'>Vrijeme_projekcij do</label></td><td><input id='vrijeme_projekcij_do' name='vrijeme_projekcij_do' type='text' placeholder='hh:mm:ss'/></td></tr>"+
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'NazivProjekcije': $("#NazivProjekcije").val(),
                    'broj_slobodnihmjesta': $("#broj_slobodnihmjesta").val(),
                    'datum_projekcije_od': $("#datum_projekcije_od").val(),
                    'datum_projekcije_do': $("#datum_projekcije_do").val(),
                    'vrijeme_projekcij_od': $("#vrijeme_projekcij_od").val(),
                    'vrijeme_projekcij_do': $("#vrijeme_projekcij_do").val()

                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='datum_projekcije_od'>Datum projekcije od</label></td>" +
                "<td><input id='datum_projekcije_od' name='datum_projekcije_od' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='datum_projekcije_do'>Datum projekcije do</label></td><td><input id='datum_projekcije_do' name='datum_projekcije_do' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_od'>Vrijeme_projekcij od</label></td><td><input id='vrijeme_projekcij_od' name='vrijeme_projekcij_od' type='text' placeholder='hh:mm:ss'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_do'>Vrijeme_projekcij do</label></td><td><input id='vrijeme_projekcij_do' name='vrijeme_projekcij_do' type='text' placeholder='hh:mm:ss'/></td></tr>"+
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#NazivProjekcije').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#broj_slobodnihmjesta').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#datum_projekcije_od').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#datum_projekcije_do').val($('#Tablica tr.selected td:nth-child(5)').html());
            $('#vrijeme_projekcij_od').val($('#Tablica tr.selected td:nth-child(6)').html());
            $('#vrijeme_projekcij_do').val($('#Tablica tr.selected td:nth-child(6)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'NazivProjekcije': $("#NazivProjekcije").val(),
                    'broj_slobodnihmjesta': $("#broj_slobodnihmjesta").val(),
                    'datum_projekcije_od': $("#datum_projekcije_od").val(),
                    'datum_projekcije_do': $("#datum_projekcije_do").val(),
                    'vrijeme_projekcij_od': $("#vrijeme_projekcij_od").val(),
                    'vrijeme_projekcij_do': $("#vrijeme_projekcij_do").val()
                };
                var id ={
                    'idproekcije':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'idproekcije':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#ProjekcijeTable').click();
        });

    });
    $('#LokacijeTable').click(function (event) {
        var n = 6;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="lokacija";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Lokacije</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Naziv Lokacije</th>" +
                        "<th>drzava</th>" +
                        "<th>Grad</th>" +
                        "<th>Ulica</th>" +
                        "<th>Postanski broj</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idlokacija),
                            $('<td>').text(item.NazivLokacije),
                            $('<td>').text(item.drzava),
                            $('<td>').text(item.grad),
                            $('<td>').text(item.ulica),
                            $('<td>').text(item.postanskibroj)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        "bPaginate":true,
                        "bFilter":true

                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Lokacije</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Naziv Lokacije</th>" +
                        "<th>drzava</th>" +
                        "<th>Grad</th>" +
                        "<th>Ulica</th>" +
                        "<th>Postanski broj</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idlokacija),
                            $('<td>').text(item.NazivLokacije),
                            $('<td>').text(item.drzava),
                            $('<td>').text(item.grad),
                            $('<td>').text(item.ulica),
                            $('<td>').text(item.postanskibroj)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        "bPaginate":true,
                        "bFilter":true

                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='NazivLokacije'>Naziv Lokacije</label></td>" +
                "<td><input id='NazivLokacije' name='NazivLokacije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='drzava'>Drzava</label></td>" +
                "<td><input id='drzava' name='drzava' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='grad'>Grad</label></td>" +
                "<td><input id='grad' name='grad' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='ulica'>Ulica</label></td><td><input id='ulica' name='ulica' type='text'/></td></tr>" +
                "<tr><td><label for='postanskibroj'>Postanski broj</label></td><td><input id='postanskibroj' name='postanskibroj' type='text' placeholder='Mora bit broj'/></td></tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'NazivLokacije': $("#NazivLokacije").val(),
                    'drzava': $("#drzava").val(),
                    'grad': $("#grad").val(),
                    'ulica': $("#ulica").val(),
                    'postanskibroj': $("#postanskibroj").val(),

                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='NazivLokacije'>Naziv Lokacije</label></td>" +
                "<td><input id='NazivLokacije' name='NazivLokacije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='drzava'>Drzava</label></td>" +
                "<td><input id='drzava' name='drzava' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='grad'>Grad</label></td>" +
                "<td><input id='grad' name='grad' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='ulica'>Ulica</label></td><td><input id='ulica' name='ulica' type='text'/></td></tr>" +
                "<tr><td><label for='postanskibroj'>Postanski broj</label></td><td><input id='postanskibroj' name='postanskibroj' type='text' placeholder='Mora bit broj'/></td></tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#NazivLokacije').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#drzava').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#grad').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#ulica').val($('#Tablica tr.selected td:nth-child(5)').html());
            $('#postanskibroj').val($('#Tablica tr.selected td:nth-child(6)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'NazivLokacije': $("#NazivLokacije").val(),
                    'drzava': $("#drzava").val(),
                    'grad': $("#grad").val(),
                    'ulica': $("#ulica").val(),
                    'postanskibroj': $("#postanskibroj").val(),
                };
                var id ={
                    'idlokacija':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'idlokacija':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#LokacijeTable').click();
        });


    });
    $('#LokacijeKorisnikTable').click(function () {
        var n= 7;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="korisnici_lokacija";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Korisnici po Lokacija</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Id korisnici</th>" +
                        "<th>Id lokacija</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.id),
                            $('<td>').text(item.idkorisnici),
                            $('<td>').text(item.idlokacija)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Korisnici po Lokacija</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Id korisnici</th>" +
                        "<th>Id lokacija</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.id),
                            $('<td>').text(item.idkorisnici),
                            $('<td>').text(item.idlokacija)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='idkorisnici'>Id korisnici</label></td>" +
                "<td><input id='idkorisnici' name='idkorisnici' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='idlokacija'>Id lokacija</label></td>" +
                "<td><input id='idlokacija' name='idlokacija' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'idkorisnici': $("#idkorisnici").val(),
                    'idlokacija': $("#idlokacija").val()
                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='idkorisnici'>Id korisnici</label></td>" +
                "<td><input id='idkorisnici' name='idkorisnici' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='idlokacija'>Id lokacija</label></td>" +
                "<td><input id='idlokacija' name='idlokacija' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#idkorisnici').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#idlokacija').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'idkorisnici': $("#idkorisnici").val(),
                    'idlokacija': $("#idlokacija").val()

                };
                var id ={
                    'id':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'id':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#LokacijeKorisnikTable').click();
        });
    });
    $('#LokacijeProjekcijaTable').click(function () {
        var n= 8;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="lokacije_projekcija";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Lokacija Projekcije</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Id proekcije</th>" +
                        "<th>Id lokacija</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.id),
                            $('<td>').text(item.idproekcije),
                            $('<td>').text(item.idlokacija)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Lokacija Projekcije</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>Id proekcije</th>" +
                        "<th>Id lokacija</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.id),
                            $('<td>').text(item.idproekcije),
                            $('<td>').text(item.idlokacija)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='idproekcije'>Id proekcije</label></td>" +
                "<td><input id='idproekcije' name='idproekcije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='idlokacija'>Id lokacija</label></td>" +
                "<td><input id='idlokacija' name='idlokacija' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'idproekcije': $("#idproekcije").val(),
                    'idlokacija': $("#idlokacija").val()
                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='idproekcije'>Id proekcije</label></td>" +
                "<td><input id='idproekcije' name='idproekcije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='idlokacija'>Id lokacija</label></td>" +
                "<td><input id='idlokacija' name='idlokacija' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#idproekcije').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#idlokacija').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'idproekcije': $("#idproekcije").val(),
                    'idlokacija': $("#idlokacija").val()

                };
                var id ={
                    'id':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'id':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#LokacijeProjekcijaTable').click();
        });
    });
    $('#Galerja_slika').click(function () {
        var n= 9;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="galerja_slika";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Galerija</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>idslika</th>" +
                        "<th>tag</th>" +
                        "<th>idkorisnici</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idGalerije),
                            $('<td>').text(item.idslika),
                            $('<td>').text(item.tag),
                            $('<td>').text(item.idkorisnici)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });

                }
                else {
                    var tablica2 = "<table id='Tablica' border='1'><caption>Galerija</caption><thead>" +
                        "<tr>" +
                        "<th>Id</th>" +
                        "<th>idslika</th>" +
                        "<th>tag</th>" +
                        "<th>idkorisnici</th>" +
                        "</tr></thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idGalerije),
                            $('<td>').text(item.idslika),
                            $('<td>').text(item.tag),
                            $('<td>').text(item.idkorisnici)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica tr').click(function () {
                        $(this).addClass('selected').siblings().removeClass('selected');
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                }
            }
        });
        dodajgumb();
        $('#insertbutton').click(function (event) {
            var odabir=1;
            var form="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='idslika'>id slika</label></td>" +
                "<td><input id='idslika' name='idslika' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='tag'>tag</label></td>" +
                "<td><input id='tag' name='tag' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='idkorisnici'>Id korisnici</label></td>" +
                "<td><input id='idkorisnici' name='idkorisnici' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            $('#dodaj').click(function (evant) {
                var objekt = {
                    'idslika': $("#idslika").val(),
                    'tag': $("#tag").val(),
                    'idkorisnici': $("#idkorisnici").val()
                };
                var arr=JSON.stringify(objekt);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                    type:"POST"
                });
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='idslika'>id slika</label></td>" +
                "<td><input id='idslika' name='idslika' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='tag'>tag</label></td>" +
                "<td><input id='tag' name='tag' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='idkorisnici'>Id korisnici</label></td>" +
                "<td><input id='idkorisnici' name='idkorisnici' type='text'/></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#idslika').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#tag').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#idkorisnici').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'idslika': $("#idslika").val(),
                    'tag': $("#tag").val(),
                    'idkorisnici': $("#idkorisnici").val()
                };
                var id ={
                    'idGalerije':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                    type:"POST"
                });
            });
        });
        $('#deletebutton').click(function (evant) {
            var odabir = 3;
            var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
            var id = {
                'idGalerije':$('#Tablica tr.selected td:nth-child(1)').html()
            };
            var jsonid=JSON.stringify(id);

            $('#dialog').dialog({
                autoOpen:false,
                modal: true,
                buttons:{
                    "Da":function () {
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                        alert("izbrisali ste red");
                        $("#poruka").remove();
                        $(this).dialog("close");
                    },
                    "Ne": function () {
                        $("#poruka").remove();
                        $(this).dialog("close");
                    }
                }
            });
            $("#dialog").dialog("open");
            $("#dialog").append(poruka);
        });
        $('#osvjezi').click(function () {
            $('#Galerja_slika').click();
        });
    });

    function dodajgumb() {
    if($('#insertbutton').length > 0 && $('#updatebutton').length > 0 && $('#deletebutton').length > 0){
        $('#insertbutton').remove();
        $('#updatebutton').remove();
        $('#deletebutton').remove();
        $('#osvjezi').remove()
    }
    var insertbutton = "<input type='button' id='insertbutton' class='gumb' name='insertbutton' value='Dodaj Red'/>";
    var updatebutton = "<input type='button' id='updatebutton'  class='gumb' name='updatebutton' value='Azuriraj Red'/>";
    var deletebutton = "<input type='button' id='deletebutton'  class='gumb' name='deletebutton' value='izbrisi Red'/>";
        var osvjezi = "<input type='button' id='osvjezi'  class='gumb' name='deletebutton' value='osvjezi'/>";
    $('#gumbi').append(insertbutton);
    $('#gumbi').append(updatebutton);
    $('#gumbi').append(deletebutton);
        $('#gumbi').append(osvjezi);
    
}

});
