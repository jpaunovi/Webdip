<?php
include_once 'RadSbazom.php';
$baza=new RadSbazom();
$odabir=$_GET['odabir'];
switch ($odabir){
    case 1:
        $json=$_GET['objekt'];
        $tablica=$_GET['tablica'];
        $data = json_decode($json);
        $polje=(array)$data;
        $baza->InsertFunkcija($tablica,$polje);
        break;
    case 2:
        $json=$_GET['objekt'];
        $tablica=$_GET['tablica'];
        $jsonid=$_GET['id'];
        $data = json_decode($json);
        $id=json_decode($jsonid);
        $idpolje=(array)$id;
        $polje=(array)$data;
        $baza->UpdateFunkcija($tablica,$idpolje,$polje);
        break;
    case 3:
        $idjson=$_GET['id'];
        $tablica=$_GET['tablica'];
        $id=json_decode($idjson);
        $idpolje=(array)$id;
        $baza->DeleteFunkcija($tablica,$idpolje);
        break;
}
