/**
 * Created by jaksa on 24.8.2016..
 */
$(document).ready(function($) {
    var n = 6;
    $.ajax({
        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
        type: "POST",
        dataType: "json",

        success: function (json) {
            if ($('#Tablica').length > 0) {
                $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                var tablica = "<table id='Tablica' border='1'><caption>Lokacije</caption><thead>" +
                    "<tr>" +
                    "<th>Id Lokacije</th>" +
                    "<th>Naziv Lokacije</th>" +
                    "<th>drzava</th>" +
                    "<th>Grad</th>" +
                    "<th>Ulica</th>" +
                    "<th>Postanski broj</th>" +
                    "</tr>" +
                    "</thead><tbody></tbody></table>";
                $('#sadrzaj').append(tablica);
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.idlokacija),
                        $('<td>').text(item.NazivLokacije),
                        $('<td>').text(item.drzava),
                        $('<td>').text(item.grad),
                        $('<td>').text(item.ulica),
                        $('<td>').text(item.postanskibroj)

                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });
                $('#Tablica tr').click(function () {
                    var j=10;
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var lokacijaid = $('#Tablica tr.selected td:nth-child(1)').html();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + j + "&idlokacije=" + lokacijaid,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if ($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<tr>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Broj slobodni hmjesta</th>" +
                                    "<th>Misljenje</th>" +
                                    "<th>Datum projekcije</th>" +
                                    "<th>Vrijeme projekcij</th>" +

                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.broj_slobodnihmjesta),
                                        $('<td>').text(item.misljenje),
                                        $('<td>').text(item.datum_projekcije),
                                        $('<td>').text(item.vrijeme_projekcij)

                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                    var nazivprojekcije=$('#Tablica tr.selected td:nth-child(1)').html();
                                    $.each(json, function (i, item) {
                                        if(nazivprojekcije==item.NazivProjekcije){
                                            var br_mjesta=item.broj_slobodnihmjesta;
                                            var form="<form id='forma'>" +"<table><tbody>" +
                                                "<tr>" +
                                                "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                                                "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                                                "</tr>" +
                                                "<tr>" +
                                                "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                                                "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta' type='text'/></td>" +
                                                "</tr>" +
                                                "<tr><td><label for='datum_projekcije'>Datum projekcije</label></td><td><input id='datum_projekcije' name='datum_projekcije' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                                                "</table>"+
                                                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                                                "</form>";
                                            if($('#forma').length >0){
                                                $('#forma').remove();
                                            }
                                            $('#sadrzaj').append(form);
                                            $('#NazivProjekcije').val($('#Tablica tr.selected td:nth-child(1)').html());
                                            $('#broj_slobodnihmjesta').val(br_mjesta);
                                            $('#datum_projekcije').val($('#Tablica tr.selected td:nth-child(3)').html());
                                        }
                                    });

                                });

                            }
                            else {
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Broj slobodni hmjesta</th>" +
                                    "<th>Misljenje</th>" +
                                    "<th>Datum projekcije</th>" +
                                    "<th>Vrijeme projekcij</th>" +

                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.broj_slobodnihmjesta),
                                        $('<td>').text(item.misljenje),
                                        $('<td>').text(item.datum_projekcije),
                                        $('<td>').text(item.vrijeme_projekcij)

                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                    var nazivprojekcije=$('#Tablica tr.selected td:nth-child(1)').html();
                                    $.each(json, function (i, item) {
                                        if(nazivprojekcije==item.NazivProjekcije){
                                            var br_mjesta=item.broj_slobodnihmjesta;
                                            var form="<form id='forma'>" +"<table><tbody>" +
                                                "<tr>" +
                                                "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                                                "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                                                "</tr>" +
                                                "<tr>" +
                                                "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                                                "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta' type='text'/></td>" +
                                                "</tr>" +
                                                "<tr><td><label for='datum_projekcije'>Datum projekcije</label></td><td><input id='datum_projekcije' name='datum_projekcije' type='text' placeholder='gg-mm-dd'/></td></tr>" +
                                                "</table>"+
                                                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                                                "</form>";
                                            if($('#forma').length >0){
                                                $('#forma').remove();
                                            }
                                            $('#sadrzaj').append(form);
                                            $('#NazivProjekcije').val($('#Tablica tr.selected td:nth-child(1)').html());
                                            $('#broj_slobodnihmjesta').val(br_mjesta);
                                            $('#datum_projekcije').val($('#Tablica tr.selected td:nth-child(3)').html());
                                        }
                                    });

                                });

                            }
                        }
                    });
                });

            }
            else {
                var tablica2 = "<table id='Tablica' border='1'><caption>Lokacije</caption><thead>" +
                    "<tr>" +
                    "<th>Id Lokacije</th>" +
                    "<th>Naziv Lokacije</th>" +
                    "<th>drzava</th>" +
                    "<th>Grad</th>" +
                    "<th>Ulica</th>" +
                    "<th>Postanski broj</th>" +
                    "</tr>" +
                    "</thead><tbody></tbody></table>";
                $('#sadrzaj').append(tablica2);
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.idlokacija),
                        $('<td>').text(item.NazivLokacije),
                        $('<td>').text(item.drzava),
                        $('<td>').text(item.grad),
                        $('<td>').text(item.ulica),
                        $('<td>').text(item.postanskibroj)

                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });
                $('#Tablica tr').click(function () {
                    var j = 11;

                    $(this).addClass('selected').siblings().removeClass('selected');
                    dodajgumbe();
                    $('#like').click(function () {
                        var lokacijaid = $('#Tablica tr.selected td:nth-child(1)').html();
                        var odabir = 1;
                        var tablicaime='svida';
                        var datum= $('#datum').val();
                        var objekt = {
                            'lokacija':lokacijaid,
                            'datum':datum
                        };
                        var data=JSON.stringify(objekt);
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });
                    $('#dislike').click(function () {
                        var lokacijaid = $('#Tablica tr.selected td:nth-child(1)').html();
                        var odabir = 1;
                        var tablicaime='nesvida ';
                        var datum= $('#datum').val();
                        var objekt = {
                            'lokacija':lokacijaid,
                            'datum':datum
                        };
                        var data=JSON.stringify(objekt);
                        $.ajax({
                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime,
                            type:"POST"
                        });
                    });
                    $('#izaberi').click(function () {
                        var lokacijaid = $('#Tablica tr.selected td:nth-child(1)').html();
                        dodajgumbe();
                        if ($('#forma').length > 0) {
                            $('#forma').remove();
                        }
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + j + "&idlokacije=" + lokacijaid,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if ($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<tr>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Datum projekcije od</th>" +
                                    "<th>Datum projekcije do</th>" +
                                    "<th>Vrijeme projekcij od</th>" +
                                    "<th>Vrijeme projekcij do</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.datum_projekcije_od),
                                        $('<td>').text(item.datum_projekcije_do),
                                        $('<td>').text(item.vrijeme_projekcij_od),
                                        $('<td>').text(item.vrijeme_projekcij_do)
                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                    dodajgumbe();
                                    $('#like').click(function () {
                                        var nazivprojekcije = $('#Tablica tr.selected td:nth-child(1)').html();
                                        $.each(json, function (i, item) {
                                            if (nazivprojekcije == item.NazivProjekcije) {
                                                var proekcijaid = item.idproekcije;
                                                var odabir = 1;
                                                var tablicaime='svida';
                                                var datum= $('#datum').val();
                                                var objekt = {
                                                    'projekcija':proekcijaid,
                                                    'datum':datum

                                                };

                                                var data=JSON.stringify(objekt);
                                                $.ajax({
                                                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime,
                                                    type:"POST"
                                                });
                                            }
                                        });

                                    });
                                    $('#dislike').click(function () {
                                        var nazivprojekcije = $('#Tablica tr.selected td:nth-child(1)').html();
                                        $.each(json, function (i, item) {
                                            if (nazivprojekcije == item.NazivProjekcije) {
                                                var proekcijaid = item.idproekcije;
                                                var odabir = 1;
                                                var tablicaime='nesvida';
                                                var datum= $('#datum').val();
                                                var objekt = {
                                                    'projekcija':proekcijaid,
                                                    'datum':datum
                                                };
                                                var data=JSON.stringify(objekt);
                                                $.ajax({
                                                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime,
                                                    type:"POST"
                                                });
                                            }
                                        });

                                    });
                                    $('#izaberi').click(function () {
                                        dodajgumbe();
                                        if ($('#forma').length > 0) {
                                            $('#forma').remove();
                                        }
                                        var nazivprojekcije = $('#Tablica tr.selected td:nth-child(1)').html();
                                        //alert(nazivprojekcije);
                                        $.each(json, function (i, item) {
                                            if (nazivprojekcije == item.NazivProjekcije) {
                                                var br_slobodnih_mjesta = item.broj_slobodnihmjesta;
                                                var idProjekcije=item.idproekcije;
                                                var form = "<form id='forma'>" + "<table><tbody>" +
                                                    "<tr>" +
                                                    "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                                                    "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text' disabled='disabled'/></td>" +
                                                    "</tr>" +
                                                    "<tr>" +
                                                    "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                                                    "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta'  disabled='disabled' type='number' /></td>" +
                                                    "<td id='gereska_mjesta' name='gereska_mjesta' class='error'></td>" +
                                                    "</tr>" +
                                                    "<tr><td><label for='datum_projekcije'>Datum projekcije</label></td><td><input type='date' disabled='disabled' id='datum_projekcije' name='datum_projekcije'  placeholder='gg-mm-dd'/></td><td class='error' id='gereska_datum' name='gereska_datum' ></td></tr>" +
                                                    "<tr>" +
                                                    "<td><label for='br_mjesta'>Koliko zelite rezervirati mjesta</label></td>" +
                                                    "<td><input id='br_mjesta' name='br_mjesta' type='number'/></td>" +
                                                    "<td id='gereska_rezmjesta' name='gereska_rezmjesta' class='error'></td>" +
                                                    "</tr>" +
                                                    "</table>" +
                                                    "<input type='button' id='Rezerviraj' class='gumb' value='Rezerviraj'/>" +
                                                    "</form>";
                                                if ($('#forma').length > 0) {
                                                    $('#forma').remove();
                                                }
                                                $('#sadrzaj').append(form);
                                                $('#NazivProjekcije').val($('#Tablica tr.selected td:nth-child(1)').html());
                                                $('#broj_slobodnihmjesta').val(br_slobodnih_mjesta);
                                                $('#datum_projekcije').val($('#Tablica tr.selected td:nth-child(3)').html());
                                                $('#Rezerviraj').click(function () {
                                                    var nesto=document.getElementById('broj_slobodnihmjesta');
                                                    var nesto2=document.getElementById('br_mjesta');
                                                   // alert(nesto.value);
                                                    var br_mjesta_int=parseInt(nesto.value);
                                                    var broj_mjesta=parseInt(nesto2.value);


                                                   if($('#datum_projekcije').val()<$('#datum').val()){
                                                       document.getElementById('gereska_datum').innerHTML="Datum  je isteko";
                                                   }

                                                    else if(br_mjesta_int == '0' ){
                                                       document.getElementById('gereska_mjesta').innerHTML="Nema slobodnog mjesta na projekciji";
                                                   }
                                                    else {
                                                      /* alert(broj_mjesta);
                                                       alert(br_mjesta_int);
                                                       alert(typeof broj_mjesta);
                                                       alert(typeof br_mjesta_int);*/

                                                       if (broj_mjesta > br_mjesta_int) {
                                                           document.getElementById('gereska_rezmjesta').innerHTML = "Nema toliko mjesta koliko zelite rezervirat";
                                                       }else{
                                                           var novi_br_mjesta=br_mjesta_int - broj_mjesta;

                                                           var objekt1 = {
                                                               'broj_slobodnihmjesta': novi_br_mjesta

                                                           };
                                                           var idobjekt={
                                                               'idproekcije': idProjekcije
                                                           };
                                                           
                                                           var odabir1=2;
                                                           var tablicaime1="projekcije";
                                                           var data1 = JSON.stringify(objekt1);
                                                           var iddata1 = JSON.stringify(idobjekt);
                                                            $.ajax({
                                                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data1 + "&odabir= " + odabir1 + "&tablica= " + tablicaime1 + "&id=" + iddata1,
                                                            type:"POST"
                                                            });
                                                           
                                                           var korid = $('#korid').val();
                                                           var NazivProjekcije1=$('#NazivProjekcije').val();
                                                           var status = "NePotvrdeno";
                                                           var objekt2 = {
                                                               'korisnici_idkorisnici': korid,
                                                               'projekcije_idproekcije': idProjekcije,
                                                               'NazivProjekcije': NazivProjekcije1,
                                                               'status': status,
                                                               'br_rezmjesta': broj_mjesta
                                                           };
                                                           var tablicaime2 = "rezervacija";
                                                           var odabir2 = 1;
                                                           var data2 = JSON.stringify(objekt2);
                                                            $.ajax({
                                                            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data2 + "&odabir= " + odabir2 + "&tablica= " + tablicaime2,
                                                            type:"POST"
                                                            });
                                                       }
                                                   }
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                            else {
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Datum projekcije od</th>" +
                                    "<th>Datum projekcije do</th>" +
                                    "<th>Vrijeme projekcij od</th>" +
                                    "<th>Vrijeme projekcij do</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.datum_projekcije_od),
                                        $('<td>').text(item.datum_projekcije_do),
                                        $('<td>').text(item.vrijeme_projekcij_od),
                                        $('<td>').text(item.vrijeme_projekcij_do)

                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                    dodajgumbe();
                                    $('#izaberi').click(function () {
                                        dodajgumbe();
                                        var nazivprojekcije = $('#Tablica tr.selected td:nth-child(1)').html();
                                        $.each(json, function (i, item) {
                                            if (nazivprojekcije == item.NazivProjekcije) {
                                                var br_mjesta = item.broj_slobodnihmjesta;
                                                var form = "<form id='forma'>" + "<table><tbody>" +
                                                    "<tr>" +
                                                    "<td><label for='NazivProjekcije'>Naziv Projekcije</label></td>" +
                                                    "<td><input id='NazivProjekcije' name='NazivProjekcije' type='text'/></td>" +
                                                    "</tr>" +
                                                    "<tr>" +
                                                    "<td><label for='broj_slobodnihmjesta'>Broj slobodnih mjesta</label></td>" +
                                                    "<td><input id='broj_slobodnihmjesta' name='broj_slobodnihmjesta' type='text'/></td>" +
                                                    "</tr>" +
                                                    "<tr><td><label for='datum_projekcije_od'>Datum projekcije</label></td><td><input id='datum_projekcije' name='datum_projekcije' type='date' placeholder='gg-mm-dd'/></td></tr>" +
                                                    "</table>" +
                                                    "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                                                    "</form>";
                                                if ($('#forma').length > 0) {
                                                    $('#forma').remove();
                                                }
                                                $('#sadrzaj').append(form);
                                                $('#NazivProjekcije').val($('#Tablica tr.selected td:nth-child(1)').html());
                                                $('#broj_slobodnihmjesta').val(br_mjesta);
                                                $('#datum_projekcije_od').val($('#Tablica tr.selected td:nth-child(3)').html());

                                            }
                                        });
                                    });
                                });
                            }
                        }
                    });
                });
                });
            }
        }
    });
    function dodajgumbe() {
        if($('#like').length > 0 && $('#dislike').length > 0 && $('#izaberi').length > 0){
            $('#like').remove();
            $('#dislike').remove();
            $('#izaberi').remove();
        }
        var likebutton="<input type='button'  id='like' class='gumb' value='Like' />";
        var dislikebutton="<input type='button' id='dislike' class='gumb' value='Dislike' />";
        var gumbizaberi="<input type='button' id='izaberi' class='gumb' value='izaberi' />";
        $('#gumbi').append(likebutton);
        $('#gumbi').append(dislikebutton);
        $('#gumbi').append(gumbizaberi);
    }


});