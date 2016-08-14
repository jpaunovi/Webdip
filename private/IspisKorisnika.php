<?php
include_once '../bazaclass.php';
include_once '../Izradajsona.php';
$baza=new Baza();
$baza->spojiDB();
$json = new  Izradajsona();
$sql="select * from korisnici";
$rezultat=$baza->selectDB($sql);
$a=$json->Izradijson($rezultat);
echo $a;