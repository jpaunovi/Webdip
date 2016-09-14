$(document).ready(function($) {
    var n=1;
    $.ajax ({
        url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
        type:"POST",
        dataType:"json",

        success:function(json){
            var tablica="<table id=Tablica border='1'>" +
                "<caption>Korisnici</caption><thead>" +
                "<tr>" +
                "<th>id</th><th>Ime</th><th>Prezime</th><th>Email</th><th>Korisnicko Ime</th>" +
                "<th>sifra</th><th>Adresa</th><th>status</th><th>Vrijeme registracije</th><th>Neuspjesnost prijave</th><th>Uloga</th><th>Slika</th></tr></thead>" +
                "<tbody>";

            for(var i=0;i<json.length;i++){
                tablica += "<tr>";
                tablica += "<td>" + json[i].idkorisnici + "</td>" ;
                tablica += "<td>" + json[i].ime + "</td>" ;
                tablica += "<td>" + json[i].prezime + "</td>" ;
                tablica += "<td>" + json[i].email + "</td>" ;
                tablica += "<td>" + json[i].korisnicko_ime + "</td>" ;
                tablica += "<td>" + json[i].sifra + "</td>" ;
                tablica += "<td>" + json[i].adresa + "</td>" ;
                tablica += "<td>" + json[i].status + "</td>" ;
                tablica += "<td>" + json[i].vrijeme_registracije + "</td>" ;
                tablica += "<td>" + json[i].neuspjesnost_prijave + "</td>" ;
                tablica += "<td>" + json[i].uloga + "</td>" ;
                tablica += "<td>" + json[i].slika + "</td>" ;
                tablica += "</tr>";
                
            }
            var inf="<table id='inf' border='1'><caption>Informacije o statusu</caption><thead><tr><th>Vrsta status</th><th>id statusa</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>Otključani Korisnik</td><td>1</td></tr>" +
                "<tr><td>NeAktivirani Korisnik</td><td>2</td></tr>"+
                "<tr><td>Zakljucani Korisnik</td><td>3</td></tr>" +
                "</tbody></table>";
            tablica += "</tbody></table>";
            $('#sadrzaj').append(tablica);
            $('#inf').append(inf);
            $('#Tablica tr').click(function () {
                $('#gumbi').remove();
                $(this).addClass('selected').siblings().removeClass('selected');
                var gumbi="<table id='gumbi' <tr><td><input type='button'  class='gumb' id='okljucaj' value='Otkljucaj' /></td><td><input type='button' class='gumb' id='Zakljucaj' value='Zakljucaj' /></td></tr></table>";
                $('#sadrzaj').append(gumbi);
                $('#okljucaj').click(function () {
                    var odabir = 2;
                    var tablicaime='korisnici';
                    var idkor=$('#Tablica tr.selected td:nth-child(1)').html();
                    var id= {
                        'idkorisnici':idkor
                    };
                    var objekt={
                        'status':'1'
                    };
                    var json2=JSON.stringify(objekt);
                    var jsonid=JSON.stringify(id);
                    $.ajax({
                        url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + json2 + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                        type:"POST"
                    });
                });
                $('#Zakljucaj').click(function () {
                    var odabir = 2;
                    var tablicaime='korisnici';
                    var idkor=$('#Tablica tr.selected td:nth-child(1)').html();
                    var id= {
                        'idkorisnici':idkor
                    };
                    var objekt={
                        'status':'3'
                    };
                    var json2=JSON.stringify(objekt);
                    var jsonid=JSON.stringify(id);
                    $.ajax({
                        url:"//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/crud.php?objekt= " + json2 + "&odabir= " + odabir + "&tablica= " + tablicaime+ "&id=" + jsonid,
                        type:"POST"
                    });

                });
            });
            $('#Tablica').dataTable({
                destroy: true,
                bPaginate:true,
                bFilter:true
            });
        }

    });
});
