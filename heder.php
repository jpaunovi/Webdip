<?php
include_once 'korisnik.php';
$navAdmin = $navModerator = $navKorisnik = $navneKorisnik ="";
if(!isset($_SESSION)){
    session_start();
}
if(isset($_SESSION)) {
    if (!empty($_SESSION['korIme'])) {
        $korime = $_SESSION['korIme'];
    if ($korime != null) {
        $uloga = getKorisnik('uloga');
        $_SESSION['uloga'] = $uloga;
        if ($uloga == '1') {
            $navAdmin = "<li><li><a href='oAutoru.php'>O autoru</a></li><li><a href='dokumentacija.php'>dokumentacija</a></li><a href='IspisTablica.php'>Ispis svih tablica</a></li><li><a href='//barka.foi.hr/WebDiP/pomak_vremena/vrijeme.html'>Pomak vremena</a></li><li><a href='IspsiKorisnikaAdmin.php'>Ispis Korisnika</a></li><li><a href='StatistikaAdmin.php'>Ispis Statistike</a></li><li><a href='IspisDnevnik.php'>Ispis Dnevnika</a></li><li><a href='csv.php'>Csv</a></li><li><a href='LokcijeAdmin.php'>Dodavanje lokacija</a></li><li><a href='index.php'>Pocetna</a></li><li><a href='StatistikaModerator.php'>Statistika</a></li><li><a href='ModeratorProjekcija.php'>Moderatorska stranica</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='odjava.php'>Odjavi se</a></li><li><a href='RegistriranKorisnik.php'>Projekcije i lokacije</a></li><li><a href='PregledRezervacija.php'>Pregled rezervacija</a></li><li><a href='galerija.php'>Galerija</a></li>";
        } elseif ($uloga=='2') {
            $navModerator = "<li><li><a href='oAutoru.php'>O autoru</a></li><li><a href='dokumentacija.php'>dokumentacija</a></li><a href='index.php'>Pocetna</a></li><li><a href='StatistikaModerator.php'>Statistika</a></li><li><a href='ModeratorProjekcija.php'>Moderatorska stranica</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='odjava.php'>Odjavi se</a></li><li><a href='RegistriranKorisnik.php'>Projekcije i lokacije</a></li><li><a href='PregledRezervacija.php'>Pregled rezervacija</a></li><li><a href='galerija.php'>Galerija</a></li>";
        }elseif ($uloga=='3') {
            $navKorisnik = "<li><li><a href='oAutoru.php'>O autoru</a></li><li><a href='dokumentacija.php'>dokumentacija</a></li><a href='index.php'>Pocetna</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='odjava.php'>Odjavi se</a></li><li><a href='RegistriranKorisnik.php'>Projekcije i lokacije</a></li><li><a href='PregledRezervacija.php'>Pregled rezervacija</a></li><li><a href='galerija.php'>Galerija</a></li>";
        }
    }}

}
else{
    $navneKorisnik= "<li><a href='index.php'>Pocetna</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='NeregistriranKorisnik.php'>Prikaz filmova po lokciji</a></li>";

}
?>
<html>
<body>
<head>
    <link href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi.css" rel="stylesheet" type="text/css"/>
    <link media='screen and (max-width: 450px)' href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_mobitel.css" rel="stylesheet" type="text/css"/>
    <link media="all and (min-width: 800px) and (max-width: 1000px)" href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_pc.css" rel="stylesheet" type="text/css"/>
    <link media="all and (min-width: 450px) and (max-width: 800px)" href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_tableti.css" rel="stylesheet" type="text/css"/>
    <link media="all and (min-width: 1000px)" href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_tv.css" rel="stylesheet" type="text/css"/>
    <script src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/vanjskebiblioteke/jquery.dataTables.js"></script>
    <link href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/vanjskebiblioteke/jquery.dataTables.css" rel="stylesheet" type="text/css" />
</head>
<header></header>
<nav id="nav">
    <ul style="list-style-type:none">
        <?php echo $navModerator; echo $navAdmin; echo $navKorisnik; echo $navneKorisnik?>
    </ul>
</nav>
</body>
</html>
