$(document).ready(function () {

        var n = 16;
        if($('#forma').length >0){
            $('#forma').remove();
        }
        var tablicaime="lokacija";
        $.ajax ({
            url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type:"POST",
            dataType:"json",

            success:function(json){
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
                "<input type='number' id='idkor' hidden='hidden' />" +
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
                "<tr><td><label for='moderator'>Moderator</label></td><td><select id='moderator'></select></td></tr>"+
                "</tbody>" +
                "</table>"+
                "<input type='button' class='gumb' id='dodaj' value='Dodaj'/>" +
                "<input type='number' id='idkor' hidden='hidden' />" +
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
            var n2=17;
            $.ajax({
                url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n2,
                type:"POST",
                dataType:"json",
                success:function(json1){
                    $.each(json1,function (i,item) {
                        var moderator = "<option value=" + item.idkorisnici + ">"+ item.korisnicko_ime + "</option>";
                        $('#moderator').append(moderator);
                    });

                }
            });
            $('#dodaj').click(function (evant) {
                var e = document.getElementById("moderator");
                var value = e.options[e.selectedIndex].value;
                var odabir=2;
                var odabir2=1;
                var tablicaime3="lokacija";
                var tablicaime2='korisnici_lokacija';
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
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + data + "&odabir= " + odabir + "&tablica= " + tablicaime3 + "&id=" + jsonid,
                    type:"POST"
                });
                var objekt2 = {
                    'idkorisnici':value,
                    'idlokacija':$('#Tablica tr.selected td:nth-child(1)').html()
                };
                var arr2=JSON.stringify(objekt2);
                $.ajax({
                    url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + arr2 + "&odabir= " + odabir2 + "&tablica= " + tablicaime2,
                    type:"POST"
                });
            });
        });
    function dodajgumb() {
        if($('#insertbutton').length > 0 && $('#updatebutton').length > 0 && $('#deletebutton').length > 0){
            $('#insertbutton').remove();
            $('#updatebutton').remove();

        }
        var insertbutton = "<input type='button' class='gumb' id='insertbutton' name='insertbutton' value='Dodaj Red'/>";
        var updatebutton = "<input type='button'  class='gumb' id='updatebutton' name='updatebutton' value='Azuriraj Red'/>";

        $('#sadrzaj').append(insertbutton);
        $('#sadrzaj').append(updatebutton);


    }

});