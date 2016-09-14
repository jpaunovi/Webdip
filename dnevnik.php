<?php
include_once 'RadSbazom.php';
include_once 'dohvatiPomak.php';
function upisiDevnik($korisnik,$opis){
    $baza = new RadSbazom();
    $vrijeme=dohvatiPomak();
    $data=array('korisnik'=>$korisnik,'opis'=>$opis, 'vrijeme'=>$vrijeme);
    $sql=$baza->InsertFunkcija('dnevnik',$data);
}
