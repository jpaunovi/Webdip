<?php
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
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/IspsiKorisnikaAdmin.js"></script>
</header>
<body>
<?php include_once 'heder.php'?>
<div id="sadrzaj">

</div>

<div id="inf"></div>
</body>
<?php include_once 'footer.php'?>

</html>
