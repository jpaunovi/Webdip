<?php
include_once  'RadSbazom.php';
include_once 'dnevnik.php';
$baza=new RadSbazom();
$json=$_GET['objekt'];
$satusRez=$_GET['status'];
$data=json_decode($json);
$were=(array)$data;
$select=array('idkorisnici','email','korisnicko_ime');
$sql=$baza->SelectFunkcija1('korisnici',$were,$select );
$rezultat=mysqli_fetch_array($sql);
$korisnickoIme=$rezultat[2];
$email=$rezultat[1];

if($satusRez == 1) {
    $poruka="Postovani " . $were['ime'] . " " . $were['prezime'] . " vasa registracija je Odbijena";
    mail($email, 'Odbijena Registracija', $poruka);
    upisiDevnik($korisnickoIme, 'Odbijena Rezervacija');
}
else{
    $poruka="Postovani " . $were['ime'] . " " . $were['prezime'] . " vasa registracija je Prihvacena";
    mail($email, 'Potvrđena Registracija', $poruka);
    upisiDevnik($korisnickoIme, 'Potvrđena Rezervacija');
}