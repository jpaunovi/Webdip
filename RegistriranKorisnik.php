<?php
include_once 'korisnik.php';
include_once 'dohvatiPomak.php';
include_once 'StatistikaPosjcenostUpit.php';
if(!isset($_SESSION)){
    session_start();
}
$koruloga=getKorisnik('uloga');
if($koruloga == 3 || $koruloga == 1 || $koruloga == 2 ) {
    $korid = getKorisnik('idkorisnici');
    $vrijeme = dohvatiPomak();
    $korIme = getKorisnik('ime');
    $koricnicko = getKorisnik('korime');
    $datum = new DateTime(date(("Y-m-d H:i:s"), strtotime($vrijeme)));
    $datum2 = $datum->format("Y-m-d");
    posjecenost($koricnicko, 'RegistriranKorisnik.php');
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
    <script type="text/javascript" src="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/RegistriranKorisnik.js"></script>
    <script type="text/javascript" src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script type='text/javascript'></script>

</header>
    <input hidden="hidden" id="datum" value="<?php echo $datum2 ?>"/>
<input hidden="hidden" id="korime" value="<?php echo $korIme ?>"/>
<input hidden="hidden" id="korid" value="<?php echo $korid ?>"/>

    <body>
    <?php include_once 'heder.php'; ?>
    <div id="sadrzaj">

    </div>
    <div id="gumbi"></div>
    <div id="map"></div>

    <script <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeLI2IHgvFgIebUNknWGsb8ZRWvDHcaRw"></script></script>
    <div id='gmap_canvas' style='height:600px;width:1000px;' '></div>
    <script type='text/javascript'>
        function init_map() {
            var myOptions = {zoom: 7, center: new google.maps.LatLng(45.01763189592523, 16.0345458984375),
                mapTypeId: google.maps.MapTypeId.ROADMAP};
            map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(-10.23235, 147.25867)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(-36.27871, 1113.22246)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(79.94405, 132.90539)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(-38.97994, 97.69295)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(2.77066, -114.67963)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(45.3269403, 14.44178020000004)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(44.86792681417607, 13.854907751083374)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(44.11810633650517, 15.236889123916626)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(44.1102186552245, 15.24753212928772)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(45.33008894396532, 18.995168209075928)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(45.1631431, 18.01160809999999)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(43.50778569199324, 16.44181787967682)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(43.51202641629642, 16.432172656059265)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(46.30782323822027, 16.33896052837372)});
            marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(42.64842993667818, 18.09200406074524)});


            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }
        google.maps.event.addDomListener(window, 'load', init_map);
    </script>
        </body>
<?php include_once 'footer.php'?>

</html>
