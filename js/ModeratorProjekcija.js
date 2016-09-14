
$(document).ready(function () {

    $('#ProjekcijeButton').click(function () {
        zbrisigumbe();
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var n = 18;
        var tablicaime="projekcije";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json) {
                if ($('#Tablica').length > 0) {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                        "<tr><th>Id</th>" +
                        "<th>Naziv Projekcije</th>" +
                        "<th>Broj slobodnih mjesta</th>" +
                        "<th>Datum pocetaka projekcije</th>" +
                        "<th>Datum zavrsetka projekcije</th>" +
                        "<th>Vrijeme pocetka projekcij</th>" +
                        "<th>Vrijeme zavrsetka projekcij</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    $('#sadrzaj').append(tablica2);
                }
                else {

                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                    "<tr><th>Id</th>" +
                    "<th>Naziv Projekcije</th>" +
                    "<th>Broj slobodnih mjesta</th>" +
                    "<th>Datum pocetaka projekcije</th>" +
                    "<th>Datum zavrsetka projekcije</th>" +
                    "<th>Vrijeme pocetka projekcij</th>" +
                    "<th>Vrijeme zavrsetka projekcij</th>" +
                    "</tr>" +
                    "</thead><tbody></tbody></table>";
                $('#sadrzaj').append(tablica2);
                }
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idproekcije),
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.broj_slobodnihmjesta),
                            $('<td>').text(item.datum_projekcije_od),
                            $('<td>').text(item.datum_projekcije_do),
                            $('<td>').text(item.vrijeme_projekcij_od),
                            $('<td>').text(item.vrijeme_projekcij_do)
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
                "<td><label for='datum_projekcije_od'>Datum pocetaka projekcije</label></td>" +
                "<td><input id='datum_projekcije_od' name='datum_projekcije_od' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='datum_projekcije_do'>Datum zavrsetka projekcije</label></td><td><input id='datum_projekcije_do' name='datum_projekcije_do' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_od'>Vrijeme pocetka projekcij</label></td><td><input id='vrijeme_projekcij_od' name='vrijeme_projekcij_od' type='text' placeholder='hh:mm:ss'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_do'>Vrijeme Zavretka projekcij</label></td><td><input id='vrijeme_projekcij_do' name='vrijeme_projekcij_do' type='text' placeholder='hh:mm:ss'/></td></tr>"+
                "<tr><td><label for='lokacija'>Izaberte lokaciju </label></td><td><select id='loacija'></select></td></tr>"+
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form);
            var n8=33;
            $.ajax ({
                url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n8,
                type:"POST",
                dataType:"json",

                success:function(json){

                    $.each(json,function (i,item) {
                        var loacija = "<option value=" + item.idkorisnici + ">"+ item.idlokacija + "</option>";
                        $('#loacija').append(loacija);
                    });
                }
            });
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
                    type:"POST",
                    success:function(json){
                        var n2=32;
                        $.ajax ({
                            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n2,
                            type: "POST",
                            dataType: "json",

                            success: function (json2) {
                                odabir=1;
                                var tablicaime2 = "lokacije_projekcija";
                                var e = document.getElementById("loacija");
                                var text = e.options[e.selectedIndex].text;
                                var value = e.options[e.selectedIndex].value;
                                var projekcijaId=json2[0].idproekcije;
                                var objekt3 = {
                                    'idproekcije':projekcijaId,
                                    'idlokacija':text,
                                    'korid':value
                                };

                                var arr3 = JSON.stringify(objekt3);
                               $.ajax({
                                    url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr3 + "&odabir= " + odabir + "&tablica= " + tablicaime2,
                                    type: "POST"
                                });
                            }
                        });
                    }
                });
                
            });

        });
        $('#updatebutton').click(function (event) {
            var form2="<form id='forma'>" +"<table><tbody>" +
                "<tr>" +
                "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta' type='text'/></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label for='datum_projekcije_od'>Datum pocetaka projekcije</label></td>" +
                "<td><input id='datum_projekcije_od' name='datum_projekcije_od' type='text'/></td>" +
                "</tr>" +
                "<tr><td><label for='datum_projekcije_do'>Datum zavrsetka projekcije</label></td><td><input id='datum_projekcije_do' name='datum_projekcije_do' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_od'>Vrijeme pocetka projekcij</label></td><td><input id='vrijeme_projekcij_od' name='vrijeme_projekcij_od' type='text' placeholder='hh:mm:ss'/></td></tr>" +
                "<tr><td><label for='vrijeme_projekcij_do'>Ocjena</label></td><td><input id='vrijeme_projekcij_do' name='vrijeme_projekcij_do' type='text' placeholder='hh:mm:ss'/></td></tr>"+
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "</form>";
            if($('#forma').length >0){
                $('#forma').remove();
            }
            $('#sadrzaj').append(form2);
            $('#NazivProjekcije').val($('#Tablica tr.selected td:nth-child(2)').html());
            $('#broj_slobodnihmjesta').val($('#Tablica tr.selected td:nth-child(3)').html());
            $('#datum_projekcije_od').val($('#Tablica tr.selected td:nth-child(4)').html());
            $('#datum_projekcije_do').val($('#Tablica tr.selected td:nth-child(5)').html());
            $('#vrijeme_projekcij_od').val($('#Tablica tr.selected td:nth-child(6)').html());
            $('#vrijeme_projekcij_do').val($('#Tablica tr.selected td:nth-child(7)').html());
            $('#dodaj').click(function (evant) {
                var odabir=2;
                var objekt1 = {
                    'NazivProjekcije': $("#NazivProjekcije").val(),
                    'broj_slobodnihmjesta': $("#broj_slobodnihmjesta").val(),
                    'misljenje': $("#misljenje").val(),
                    'datum_projekcije': $("#datum_projekcije").val(),
                    'vrijeme_projekcij': $("#vrijeme_projekcij").val(),
                    'ocjena': $("#ocjena").val()
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

        $('#izabeributton').click(function (event){
            var projectID=$('#Tablica tr.selected td:nth-child(1)').html();
            var n2=19;
            zbrisigumbe();
            $.ajax ({
                url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n2 + "&projectID=" + projectID,
                type: "POST",
                dataType: "json",

                success: function (json) {
                    if ($('#Tablica').length > 0) {
                        $('#Tablica').dataTable().fnDestroy();
                        $('#Tablica').remove();
                        var tablica2 = "<table id='Tablica' border='1'><caption>Korisnici koji imaju slike</caption><thead>" +
                            "<th>Ime Korisnika</th>" +
                            "<th>Prezime korisnika</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                    }
                    else {

                        var tablica2 = "<table id='Tablica' border='1'><caption>Korisnici koji imaju slike</caption><thead>" +
                            "<th>Ime Korisnika</th>" +
                            "<th>Prezime korisnika</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                    }
                    $.each(json,function (i,item) {
                        $($('<tr>').append(
                            $('<td>').text(item.ime),
                            $('<td>').text(item.prezime)
                        ).appendTo('#Tablica tbody'));
                    });
                    $('#Tablica').dataTable({
                        destroy: true,
                        bPaginate:true,
                        bFilter:true
                    });
                    }
            });
            });
        $('#RezervacijeButton').click(function (event) {
            var value=$('#Tablica tr.selected td:nth-child(3)').html();
            var projectID=$('#Tablica tr.selected td:nth-child(1)').html();
            var idproject="<input id='projectid' hidden='hidden' value='"+ projectID + "'/>";
            $('#sadrzaj').append(idproject);
            var n3=20;
            zbrisigumbe();
            $.ajax ({
                url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n3 + "&projectID=" + projectID,
                type:"POST",
                dataType:"json",

                success:function(json) {
                    if ($('#Tablica').length > 0) {
                        $('#Tablica').dataTable().fnDestroy();
                        $('#Tablica').remove();
                        var tablica2 = "<table id='Tablica' border='1'><caption>Nepodrdene rezervacije</caption><thead>" +
                            "<tr><th>Id rezervacije</th>" +
                            "<th>Ime Korisnika</th>" +
                            "<th>Prezime Korisnika</th>" +
                            "<th>Naziv Projekcije</th>" +
                            "<th>Broj rezrrviranih mjesta</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                    }
                    else {

                        var tablica2 = "<table id='Tablica' border='1'><caption>Nepodrdene rezervacije</caption><thead>" +
                            "<tr><th>Id rezervacije</th>" +
                            "<th>Ime Korisnika</th>" +
                            "<th>Prezime Korisnika</th>" +
                            "<th>Naziv Projekcije</th>" +
                            "<th>Broj rezrrviranih mjesta</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                    }
                    $.each(json,function (i,item) {
                        $( $('<tr>').append(
                            $('<td>').text(item.idrezervacije),
                            $('<td>').text(item.ime),
                            $('<td>').text(item.prezime),
                            $('<td>').text(item.NazivProjekcije),
                            $('<td>').text(item.br_rezmjesta)
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

            });
            var prihvati="<input type='submit' id='potvrdi' name='potvrdi' value='Potvrdi rezervaciju'/>";
            var odbi="<input type='submit' id='odbi' name='odbi' value='Odbi rezervaciju'/>";
            var br_mjesta="<input id='brmjesta' hidden='hidden' value='"+ value +"'/>";
            $('#sadrzaj').append(br_mjesta);
            $('#sadrzaj').append(prihvati);
            $('#sadrzaj').append(odbi);
            $('#potvrdi').click(function (event){
                var odabir=2;
                var rezid=$('#Tablica tr.selected td:nth-child(1)').html();
                var tablicaime2='rezervacija';
                var objekt1 = {
                    'status':'Potvrdeno'
                };
                var id ={
                    'idrezervacije':rezid
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime2+ "&id=" + jsonid,
                    type:"POST",
                    success:function() {
                        var objekt1 = {
                            'ime':$('#Tablica tr.selected td:nth-child(2)').html(),
                            'prezime':$('#Tablica tr.selected td:nth-child(3)').html()
                        };
                        var data=JSON.stringify(objekt1);
                        var status=2;
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/mail.php?objekt=" +data + "&status="+ status,
                            type:"POST"
                        });
                    }
                });
            });
            $('#odbi').click(function (event){
                var odabir=2;
                var nesto2=$('#Tablica tr.selected td:nth-child(5)').html();

                var rezMjesta=parseInt(nesto2);
                var nesto=document.getElementById('brmjesta');
                 var nesto3 = document.getElementById('projectid');
                var idprojct=nesto3.value;
                var preostl_mjsta=parseInt(nesto.value);
                var ukupno_mjesta=rezMjesta+preostl_mjsta;
                var rezid=$('#Tablica tr.selected td:nth-child(1)').html();
                var tablicaime3='projekcije';
                var objekt2 = {
                    'broj_slobodnihmjesta':ukupno_mjesta
                };
                var id2 ={
                    'idproekcije':idprojct
                };
                var data1=JSON.stringify(objekt2);
                var jsonid2=JSON.stringify(id2);
                $.ajax({
                    url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data1 + "&odabir= " + odabir + "&tablica= " + tablicaime3 + "&id=" + jsonid2,
                    type: "POST"
                });
                var tablicaime2='rezervacija';
                var objekt1 = {
                    'status':'Odbijeno'
                };
                var id ={
                    'idrezervacije':rezid
                };
                var data=JSON.stringify(objekt1);
                var jsonid=JSON.stringify(id);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime2+ "&id=" + jsonid,
                    type:"POST",
                    success:function() {
                        var objekt1 = {
                            'ime':$('#Tablica tr.selected td:nth-child(2)').html(),
                            'prezime':$('#Tablica tr.selected td:nth-child(3)').html()
                        };
                        var data=JSON.stringify(objekt1);
                        var status=1;
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/mail.php?objekt=" +data + "&status="+ status,
                            type:"POST"
                        });
                    }

                    });
            });
        });

    });
    function dodajgumb() {
        if($('#insertbutton').length > 0 && $('#updatebutton').length > 0 && $('#izabeributton').length > 0 && $('#RezervacijeButton').length > 0){
            $('#insertbutton').remove();
            $('#updatebutton').remove();
            $('#izabeributton').remove();
            $('#RezervacijeButton').remove();

        }
        var insertbutton = "<input type='button' class='gumb' id='insertbutton' name='insertbutton' value='Dodaj Red'/>";
        var updatebutton = "<input type='button'  class='gumb' id='updatebutton' name='updatebutton' value='Azuriraj Red'/>";
        var izabeributton = "<input type='button' class='gumb' id='izabeributton' name='izabeributton' value='Izaberi projekciju'/>";
        var rezButon= "<input type='button' class='gumb' id='RezervacijeButton' value='Prikazi Rezervacije'>";
        $('#sadrzaj').append(insertbutton);
        $('#sadrzaj').append(updatebutton);
        $('#sadrzaj').append(izabeributton);
        $('#sadrzaj').append(rezButon);

    }
    function zbrisigumbe() {

        $('#insertbutton').remove();
        $('#updatebutton').remove();
        $('#izabeributton').remove();
        $('#RezervacijeButton').remove();
        $('#potvrdi').remove();
        $('#odbi').remove();
    }
});

