
$(document).ready(function($) {
   $.ajax ({
       url:"http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/private/IspisKorisnika.php",
       type:"POST",
       dataType:"json",

       success:function(json){
           var tablica="<table id=IspisKoeisnikaPrivatno>" +
               "<caption>Korisnici</caption><thead>" +
               "<tr>" +
               "<th>id</th><th>Ime</th><th>Prezime</th><th>Email</th><th>Korisnicko Ime</th>" +
               "<th>sifra</th><th>Adresa</th><th>status</th><th>Vrijeme registracije</th><th>Neuspjesnost prijave</th><th>Uloga</th><th>Slika</th></tr></thead>" +
               "<tbody>";

           for(var i=0;i<json.length;i++){
               tablica += "<tr>"
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

           tablica += "</tbody></table>";
           $('#sadrzaj').append(tablica);

           $('#IspisKoeisnikaPrivatno').dataTable
           ( {
               "bPaginate":true,
               "bFilter":true,
               "ordering": false
           } );
       }

    });
});