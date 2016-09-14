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
?>
<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" type="text/css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/StatistikaAdmin.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

    <body>
    <?php include_once 'heder.php'; ?>
    <div id="glavnigumbi">
        <input type="button" class="gumb" id="StatistikaPosjecenost" value="Statistika Posjecenost"/>
        <input type="button" class="gumb" id="StatistikaUpit" value="Statistika Upit"/>
        <input type="button"  class="gumb" value="Print this page" onClick="window.print()">

        
    </div>
    <div id="sadrzaj">

    </div>
    <div id="gumbi"></div>


    </body>
    <?php include_once 'footer.php'?>

</html>
