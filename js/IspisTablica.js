$(document).ready(function($) {
    $('#KorTable').click(function (event) {
        var n=1;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="korisnici";
        $.ajax ({
            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica'><caption>Korisnici</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                else {
                    tablica2 = "<table id='Tablica'><caption>Korisnici</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
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
                       "<tr><td><label for='adresa'>Adresa</label></td><td><input id='adresa' name='adresa' type='text' /></td></tr>" +
                       "<tr><td><label for='uloga'>Uloga</label></td><td><input id='uloga' name='uloga' type='text' placeholder='Mora bit broj'/></td></tr>"+
                       "</tbody>" +
                       "</table>"+
                       "<input type='button' id='dodaj' value='Dodaj'/>" +
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
                            'adresa': $("#adresa").val(),
                            'uloga': $("#uloga").val()

                        };
                        var arr=JSON.stringify(objekt);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });

                });
                $('#updatebutton').click(function (event) {
                    var tab =$('#Tablica').DataTable();
                    var arr=tab.row('tr.selected').data();
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
                        "<tr><td><label for='adresa'>Adresa</label></td><td><input id='adresa' name='adresa' type='text' /></td></tr>" +
                        "<tr><td><label for='uloga'>Uloga</label></td><td><input id='uloga' name='uloga' type='text' placeholder='Mora bit broj'/></td></tr>"+
                        "</tbody>" +
                        "</table>"+
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
                        "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form2);
                    $('#ime').val(arr['ime']);
                    $('#prezime').val(arr['prezime']);
                    $('#email').val(arr['email']);
                    $('#korisnicko_ime').val(arr['korisnicko_ime']);
                    $('#adresa').val(arr['adresa']);
                    $('#uloga').val(arr['uloga']);
                    $('#dodaj').click(function (evant) {
                        var odabir=2;
                        var objekt1 = {
                            'ime': $("#ime").val(),
                            'prezime': $("#prezime").val(),
                            'email': $("#email").val(),
                            'korisnicko_ime': $("#korisnicko_ime").val(),
                            'adresa': $("#adresa").val(),
                            'uloga': $("#uloga").val()

                        };
                        var id ={
                            'idkorisnici':arr['idkorisnici']
                        };
                        var data=JSON.stringify(objekt1);
                        var jsonid=JSON.stringify(id);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                            type:"POST"
                        });
                    });
                });
                $('#deletebutton').click(function (evant) {
                    var odabir = 3;
                    var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
                    var tab1 =$('#Tablica').DataTable();
                    var arr=tab1.row('tr.selected').data();
                    var id = {
                        'idkorisnici':arr['idkorisnici']
                    };
                    var jsonid=JSON.stringify(id);

                    $('#dialog').dialog({
                        autoOpen:false,
                        modal: true,
                        buttons:{
                            "Da":function () {
                                $.ajax({
                                    url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
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
            }
        });
    });
    $('#UlogaTable').click(function (event) {
        var n = 2;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="uloge";
        $.ajax ({
            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica'><caption>Vrsta Uloga</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                else {
                     tablica2 = "<table id='Tablica'><caption>Vrsta Uloga</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
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
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
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
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });

                });
                $('#updatebutton').click(function (event) {
                    var tab =$('#Tablica').DataTable();
                    var arr=tab.row('tr.selected').data();
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
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
                        "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form4);
                    $('#ime_uloge').val(arr['ime_uloge']);
                    $('#opis_uloge').val(arr['opis_uloge']);

                    $('#dodaj').click(function (evant) {
                        var odabir=2;
                        var objekt1 = {
                            'ime_uloge': $("#ime_uloge").val(),
                            'opis_uloge': $("#opis_uloge").val()

                        };
                        var id ={
                            'iduloge':arr['iduloge']
                        };
                        var data=JSON.stringify(objekt1);
                        var jsonid=JSON.stringify(id);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                            type:"POST"
                        });
                    });
                });
              $('#deletebutton').click(function (evant) {
                    var odabir = 3;
                    var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
                    var tab1 =$('#Tablica').DataTable();
                    var arr=tab1.row('tr.selected').data();
                    var id = {
                        'iduloge':arr['iduloge']
                    };
                    var jsonid=JSON.stringify(id);

                    $('#dialog').dialog({
                        autoOpen:false,
                        modal: true,
                        buttons:{
                            "Da":function () {
                                $.ajax({
                                    url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
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
            }
        })
    });
    $('#SlikeTable').click(function (event) {
        var tablicaime="slika";
        var n = 3;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        $.ajax ({
            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica'><caption>Slike</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                else {
                    tablica2 = "<table id='Tablica'><caption>Slike</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
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
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
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
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });

                });
                $('#updatebutton').click(function (event) {
                    var tab =$('#Tablica').DataTable();
                    var arr=tab.row('tr.selected').data();
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
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
                        "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form2);
                    $('#slika').val(arr['slika']);
                    $('#opis_slike').val(arr['opis_slike']);
                    $('#projekcije').val(arr['projekcije']);
                    $('#korisnik').val(arr['korisnik']);
                    $('#dodaj').click(function (evant) {
                        var odabir=2;
                        var objekt1 = {
                            'slika': $("#slika").val(),
                            'opis_slike': $("#opis_slike").val(),
                            'projekcije': $("#projekcije").val(),
                            'korisnik': $("#korisnik").val(),

                        };
                        var id ={
                            'idslika':arr['idslika']
                        };
                        var data=JSON.stringify(objekt1);
                        var jsonid=JSON.stringify(id);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                            type:"POST"
                        });
                    });
                });
                $('#deletebutton').click(function (evant) {
                    var odabir = 3;
                    var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
                    var tab1 =$('#Tablica').DataTable();
                    var arr=tab1.row('tr.selected').data();
                    var id = {
                        'idslika':arr['idslika']
                    };
                    var jsonid=JSON.stringify(id);

                    $('#dialog').dialog({
                        autoOpen:false,
                        modal: true,
                        buttons:{
                            "Da":function () {
                                $.ajax({
                                    url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
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
            }
        });
    });
    $('#RezervacijaTable').click(function (event) {
        var n = 4;
        var tablicaime="rezervacija";
        if($('#forma').length >0){
            $('#forma').remove();
        }
        $.ajax ({
            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica'><caption>Rezervacije</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                else {
                    tablica2 = "<table id='Tablica'><caption>Rezervacije</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
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
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
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
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });

                });
                $('#updatebutton').click(function (event) {
                    var tab =$('#Tablica').DataTable();
                    var arr=tab.row('tr.selected').data();
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
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
                        "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form2);
                    $('#korisnici_idkorisnici').val(arr['korisnici_idkorisnici']);
                    $('#projekcije_idproekcije').val(arr['projekcije_idproekcije']);
                    $('#status').val(arr['status']);
                    $('#dodaj').click(function (evant) {
                        var odabir=2;
                        var objekt1 = {
                            'korisnici_idkorisnici': $("#korisnici_idkorisnici").val(),
                            'projekcije_idproekcije': $("#projekcije_idproekcije").val(),
                            'status': $("#status").val()
                        };
                        var id ={
                            'idrezervacije':arr['idrezervacije']
                        };
                        var data=JSON.stringify(objekt1);
                        var jsonid=JSON.stringify(id);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                            type:"POST"
                        });
                    });
                });
                $('#deletebutton').click(function (evant) {
                    var odabir = 3;
                    var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
                    var tab1 =$('#Tablica').DataTable();
                    var arr=tab1.row('tr.selected').data();
                    var id = {
                        'idrezervacije':arr['idrezervacije']
                    };
                    var jsonid=JSON.stringify(id);

                    $('#dialog').dialog({
                        autoOpen:false,
                        modal: true,
                        buttons:{
                            "Da":function () {
                                $.ajax({
                                    url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
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
            }
        });
    });
    $('#ProjekcijeTable').click(function (event) {
        var n = 5;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="projekcije";
        $.ajax ({
            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica'><caption>Projekcije</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                else {
                    tablica2 = "<table id='Tablica'><caption>Projekcije</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                $('#insertbutton').click(function (event) {
                    var odabir=1;
                    var form="<form id='forma'>" +"<table><tbody>" +
                        "<tr>" +
                        "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                        "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td><label for='broj_gledatelja'>Broj gledatelja</label></td>" +
                        "<td><input id='broj_gledatelja' name='broj_gledatelja' type='text'/></td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td><label for='misljenje'>Misljenje</label></td>" +
                        "<td><input id='misljenje' name='misljenje' type='text'/></td>" +
                        "</tr>" +
                        "<tr><td><label for='datum_projekcije'>Datum projekcije</label></td><td><input id='datum_projekcije' name='datum_projekcije' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                        "<tr><td><label for='vrijeme_projekcij'>Vrijeme_projekcij</label></td><td><input id='vrijeme_projekcij' name='vrijeme_projekcij' type='text' placeholder='hh:mm:ss'/></td></tr>" +
                        "<tr><td><label for='ocjena'>Ocjena</label></td><td><input id='ocjena' name='	ocjena' type='text' placeholder='Mora bit broj'/></td></tr>"+
                        "</table>"+
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
                        "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form);
                    $('#dodaj').click(function (evant) {
                        var objekt = {
                            'NazivProjekcije': $("#NazivProjekcije").val(),
                            'broj_gledatelja': $("#broj_gledatelja").val(),
                            'misljenje': $("#misljenje").val(),
                            'datum_projekcije': $("#datum_projekcije").val(),
                            'vrijeme_projekcij': $("#vrijeme_projekcij").val(),
                            'ocjena': $("#ocjena").val()

                        };
                        var arr=JSON.stringify(objekt);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });

                });
                $('#updatebutton').click(function (event) {
                    var tab =$('#Tablica').DataTable();
                    var arr=tab.row('tr.selected').data();
                    var form2="<form id='forma'>" +"<table><tbody>" +
                        "<tr>" +
                        "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                        "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td><label for='broj_gledatelja'>Broj gledatelja</label></td>" +
                        "<td><input id='broj_gledatelja' name='broj_gledatelja' type='text'/></td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td><label for='misljenje'>Misljenje</label></td>" +
                        "<td><input id='misljenje' name='misljenje' type='text'/></td>" +
                        "</tr>" +
                        "<tr><td><label for='datum_projekcije'>Datum projekcije</label></td><td><input id='datum_projekcije' name='datum_projekcije' type='text'/></td></tr>" +
                        "<tr><td><label for='vrijeme_projekcij'>Vrijeme_projekcij</label></td><td><input id='vrijeme_projekcij' name='vrijeme_projekcij' type='text' /></td></tr>" +
                        "<tr><td><label for='ocjena'>Ocjena</label></td><td><input id='ocjena' name='	ocjena' type='text' placeholder='Mora bit broj'/></td></tr>"+
                        "</tbody>" +
                        "</table>"+
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
                        "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form2);
                    $('#NazivProjekcije').val(arr['NazivProjekcije']);
                    $('#broj_gledatelja').val(arr['broj_gledatelja']);
                    $('#misljenje').val(arr['misljenje']);
                    $('#datum_projekcije').val(arr['datum_projekcije']);
                    $('#vrijeme_projekcij').val(arr['vrijeme_projekcij']);
                    $('#ocjena').val(arr['ocjena']);
                    $('#dodaj').click(function (evant) {
                        var odabir=2;
                        var objekt1 = {
                            'NazivProjekcije': $("#NazivProjekcije").val(),
                            'broj_gledatelja': $("#broj_gledatelja").val(),
                            'misljenje': $("#misljenje").val(),
                            'datum_projekcije': $("#datum_projekcije").val(),
                            'vrijeme_projekcij': $("#vrijeme_projekcij").val(),
                            'ocjena': $("#ocjena").val()
                        };
                        var id ={
                            'idproekcije':arr['idproekcije']
                        };
                        var data=JSON.stringify(objekt1);
                        var jsonid=JSON.stringify(id);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                            type:"POST"
                        });
                    });
                });
                $('#deletebutton').click(function (evant) {
                    var odabir = 3;
                    var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
                    var tab1 =$('#Tablica').DataTable();
                    var arr=tab1.row('tr.selected').data();
                    var id = {
                        'idproekcije':arr['idproekcije']
                    };
                    var jsonid=JSON.stringify(id);

                    $('#dialog').dialog({
                        autoOpen:false,
                        modal: true,
                        buttons:{
                            "Da":function () {
                                $.ajax({
                                    url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
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
            }
        });
    });
    $('#LokacijeTable').click(function (event) {
        var n = 6;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="lokacija";
        $.ajax ({
            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
                if($('#Tablica').length>0)
                {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica'><caption>Lokacije</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
                else {
                    tablica2 = "<table id='Tablica'><caption>Lokacije</caption></table>";
                    $('#sadrzaj').append(tablica2);
                    popunitavlice(json);
                    dodajgumb();
                }
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
                        "<tr><td><label for='ocjena'>Ocjena</label></td><td><input id='ocjena' name='	ocjena' type='text' placeholder='Mora bit broj'/></td></tr>"+
                        "</tbody>" +
                        "</table>"+
                        "<input type='button' id='dodaj' value='Dodaj'/>" +
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
                            'ocjena': $("#ocjena").val()

                        };
                        var arr=JSON.stringify(objekt);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });

                });
                $('#updatebutton').click(function (event) {
                    var tab =$('#Tablica').DataTable();
                    var arr=tab.row('tr.selected').data();
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
                    "<tr><td><label for='ocjena'>Ocjena</label></td><td><input id='ocjena' name='	ocjena' type='text' placeholder='Mora bit broj'/></td></tr>"+
                    "</tbody>" +
                    "</table>"+
                    "<input type='button' id='dodaj' value='Dodaj'/>" +
                    "</form>";
                    if($('#forma').length >0){
                        $('#forma').remove();
                    }
                    $('#sadrzaj').append(form2);
                    $('#NazivLokacije').val(arr['NazivLokacije']);
                    $('#drzava').val(arr['drzava']);
                    $('#grad').val(arr['grad']);
                    $('#ulica').val(arr['ulica']);
                    $('#postanskibroj').val(arr['postanskibroj']);
                    $('#ocjena').val(arr['ocjena']);
                    $('#dodaj').click(function (evant) {
                        var odabir=2;
                        var objekt1 = {
                            'NazivLokacije': $("#NazivLokacije").val(),
                            'drzava': $("#drzava").val(),
                            'grad': $("#grad").val(),
                            'ulica': $("#ulica").val(),
                            'postanskibroj': $("#postanskibroj").val(),
                            'ocjena': $("#ocjena").val()
                        };
                        var id ={
                            'idlokacija':arr['idlokacija']
                        };
                        var data=JSON.stringify(objekt1);
                        var jsonid=JSON.stringify(id);
                        $.ajax({
                            url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                            type:"POST"
                        });
                    });
                });
                $('#deletebutton').click(function (evant) {
                    var odabir = 3;
                    var  poruka ="<p id='poruka'>Zeliteli izbrisati obabrani red</p>";
                    var tab1 =$('#Tablica').DataTable();
                    var arr=tab1.row('tr.selected').data();
                    var id = {
                        'idlokacija':arr['idlokacija']
                    };
                    var jsonid=JSON.stringify(id);

                    $('#dialog').dialog({
                        autoOpen:false,
                        modal: true,
                        buttons:{
                            "Da":function () {
                                $.ajax({
                                    url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?id= " + jsonid + "&odabir= " + odabir + "&tablica= " + tablicaime,
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
            }
        });
    });
    function popunitavlice(json) {

        var data=json[0];
        var keys=Object.keys(data);
        var col=[];
            keys.forEach(function (k) {
            col.push({
                title:k,
                data :k
            });
        });

            var tablica = $('#Tablica').DataTable({
                columns: col
            });

        tablica.rows.add(json).draw();
        $('#Tablica tbody').on('click', 'tr', function (){
            if ( $(this).hasClass('selected') ) {
                $(this).removeClass('selected');
            }
            else {
                tablica.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
    }
function dodajgumb() {
    if($('#insertbutton').length > 0 && $('#updatebutton').length > 0 && $('#deletebutton').length > 0){
        $('#insertbutton').remove();
        $('#updatebutton').remove();
        $('#deletebutton').remove();
    }
    var insertbutton = "<input type='button' id='insertbutton' name='insertbutton' value='Dodaj Red'/>";
    var updatebutton = "<input type='button' id='updatebutton' name='updatebutton' value='Azuriraj Red'/>";
    var deletebutton = "<input type='button' id='deletebutton' name='deletebutton' value='izbrisi Red'/>";
    $('#sadrzaj').append(insertbutton);
    $('#sadrzaj').append(updatebutton);
    $('#sadrzaj').append(deletebutton);
    
}

});