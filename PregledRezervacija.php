<?php
include_once 'korisnik.php';
include_once 'RadSbazom.php';
include_once 'StatistikaPosjcenostUpit.php';
$baza=new RadSbazom();
$uloga=getKorisnik('uloga');
$koruloga=getKorisnik('uloga');
if($koruloga == 3 || $koruloga == 1 || $koruloga == 2 ) {
    $koricnicko = getKorisnik('korime');
    posjecenost($koricnicko,'galerija.php');
    $korid=getKorisnik('idkorisnici');
}
else{

    header("Location: index.php");
}
$korid=getKorisnik('idkorisnici');

?>
<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" type="text/css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/IspisRezervacija.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <body>
    <?php include_once 'heder.php'; ?>
    <div id="glavnigumbi">
        <input type="button" class="gumb" id="Potvrdene_rezervacije" value="Potvrdene rezervacije"/>
        <input type="button" class="gumb" id="NEPotvrdene_rezervacije" value="Nepotvrdene rezervacije"/>
    </div>
   
    <input id="idprojekc" hidden="hidden" value="" />
    <input id="idkor" hidden="hidden" value="<?php echo $korid ?>" />
    <div id="sadrzaj">
    </div>
    <div id="gumbi"></div>
    </body>
    <?php include_once 'footer.php'?>

</html>
