<?php
if(!isset($_SESSION)){
    session_start();
}
include_once 'korisnik.php';
include_once 'StatistikaPosjcenostUpit.php';
$korId=getKorisnik('idkorisnici');
$koruloga=getKorisnik('uloga');
if($koruloga == 1 ) {
    $koricnicko = getKorisnik('korime');
    $koricnicko=getKorisnik('korime');
}
else{

    header("Location: index.php");
}
function lokcije()
{
    if (($handle = fopen("lokacije.csv", "r")) !== FALSE) {

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            include_once 'bazaclass.php';
            $baza = new Baza();
            $baza->spojiDB();
            $import = "INSERT into lokacija(NazivLokacije,drzava,grad,ulica,postanskibroj)values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]')";
            $insert = $baza->updateDB($import);
            //var_dump($import);
            $baza->zatvoriDB();


        }
        fclose($handle);

    }
}
function projekci(){
if (($handle = fopen("projekcije.csv", "r")) !== FALSE) {

    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        include_once 'bazaclass.php';
        $baza = new Baza();
        $baza->spojiDB();
        $import = "INSERT into projekcije(NazivProjekcije,broj_slobodnihmjesta,datum_projekcije_od,datum_projekcije_do,vrijeme_projekcij_od,vrijeme_projekcij_do)values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]')";
        $insert = $baza->updateDB($import);
        //var_dump($import);
        $baza->zatvoriDB();


    }
    fclose($handle);
    }
}
?>
<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" type="text/css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <body>
    <?php include_once 'heder.php'; ?>
    <div>
        <input type="button" class="gumb" id="updatelokacije" value="update lokacije" onclick="<?php lokcije() ?>"/>
        <input type="button" class="gumb" id="updateProjekcija" value="update Projekcija" onclick="<?php projekci() ?>"/>

    </div>
    <div id="sadrzaj">

    </div>
    <div id="dialog"></div>
    <form id="insert"></form>
    <form id="update"></form>
    <form id="delete"></form>
    </body>
    <?php include_once 'footer.php'?>
</html>
