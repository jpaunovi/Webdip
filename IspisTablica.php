<?php
include_once 'korisnik.php';
if(!isset($_SESSION)){
    session_start();
}
include_once 'korisnik.php';
$korId=getKorisnik('idkorisnici');
$koruloga=getKorisnik('uloga');
if($koruloga == 1 ) {
    $koricnicko = getKorisnik('korime');
    $koricnicko=getKorisnik('korime');
}
else{

    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" type="text/css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/IspisTablica.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/vanjskebiblioteke/jquery.dataTables.js"></script>
    <link href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/vanjskebiblioteke/jquery.dataTables.css" rel="stylesheet" type="text/css" />
    </header>
<body>
<?php include_once 'heder.php'; ?>
<div id="Glavnigumbi">
    <input type="button" class="gumb" id="KorTable" value="Tablica korisnika"/>
    <input type="button" class="gumb" id="UlogaTable" value="Tablica uloga"/>
    <input type="button" class="gumb" id="SlikeTable" value="Tablica Slika"/>
    <input type="button" class="gumb" id="RezervacijaTable" value="Tablica Rezervacija"/>
    <input type="button" class="gumb" id="ProjekcijeTable" value="Tablica Projekcija"/>
    <input type="button" class="gumb" id="LokacijeTable" value="Tablica Lokacija"/>
    <input type="button" class="gumb" id="Galerja_slika" value="Galerja slika"/>
    <input type="button" class="gumb" id="LokacijeKorisnikTable" value="Tablica KorisnikLokacija"/>
    <input type="button" class="gumb" id="LokacijeProjekcijaTable" value="Tablica ProjekcijaLokacija"/>
</div>
<div id="sadrzaj">

</div>
<div id="gumbi"></div>
<div id="dialog"></div>
<form id="insert"></form>
<form id="update"></form>
<form id="delete"></form>
</body>
<?php include_once 'footer.php'?>

</html>
