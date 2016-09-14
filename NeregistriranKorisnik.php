<?php
if(!isset($_SESSION)){
    session_start();
}

?>
<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" type="text/css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/NeRegistriranKorisnik.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <body>
    <nav id="nav"><ul><li><a href='index.php'>Pocetna</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='NeregistriranKorisnik.php'>Prikaz filmova po lokciji</a></li></ul></nav>

    <?php include_once 'heder.php'; ?>
    <div>
    </div>
    <div id="sadrzaj">
    </div>

    </body>
    <?php include_once 'footer.php'?>

</html>
