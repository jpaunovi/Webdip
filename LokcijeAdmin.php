<?php
include_once 'korisnik.php';
include_once 'StatistikaPosjcenostUpit.php';
$korId=getKorisnik('idkorisnici');
$koruloga=getKorisnik('uloga');
if($koruloga == 1 ) {
    $koricnicko = getKorisnik('korime');
    $koricnicko=getKorisnik('korime');
    posjecenost($koricnicko,'LokacijAdmin.php');
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
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/LoakacijeAdmin.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <body>
    <?php include_once 'heder.php'; ?>
    <div>
    </div>
    <div id="sadrzaj">
    </div>

    </body>
    <?php include_once 'footer.php'?>

</html>
