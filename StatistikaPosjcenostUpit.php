<?php
include_once 'RadSbazom.php';
include_once 'dohvatiPomak.php';


function posjecenost($korisnik,$stranica){
    $baza = new RadSbazom();
    $vrijeme=dohvatiPomak();
    $pieces = explode(" ", $vrijeme);
    $datum=$pieces[0];
    $time=$pieces[1];
    $data=array('korisnik'=>$korisnik,'stanica'=>$stranica,'datum'=>$datum ,'vrijeme'=>$time);
    $sql=$baza->InsertFunkcija('posjecenost',$data);
}
function upit($korisnik,$upit){
    $baza = new RadSbazom();
    $vrijeme=dohvatiPomak();
    $pieces = explode(" ", $vrijeme);
    $datum=$pieces[0];
    $time=$pieces[1];
    $data=array('korisnik'=>$korisnik,'upit'=>$upit, 'datum'=>$datum ,'vrijeme'=>$time);
    $sql=$baza->InsertFunkcija('posjecenost',$data);
}