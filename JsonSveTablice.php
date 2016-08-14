<?php
include_once '/var/www/webdip.barka.foi.hr/2015_projekti/WebDiP2015x062/RadSbazom.php';
include_once '/var/www/webdip.barka.foi.hr/2015_projekti/WebDiP2015x062/Izradajsona.php';
function IspisKorisnika(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idkorisnici','ime','prezime','email','korisnicko_ime','adresa','slika','	uloga');
    $rezultat=$baza->SelectFunkcija('korisnici',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisUloge(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('iduloge','ime_uloge','opis_uloge');
    $rezultat=$baza->SelectFunkcija('uloge',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisSlike(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idslika','slika','opis_slike','projekcije','korisnik');
    $rezultat=$baza->SelectFunkcija('slika',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisRezervacija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idrezervacije','idrezervacije','korisnici_idkorisnici','projekcije_idproekcije','status');
    $rezultat=$baza->SelectFunkcija('rezervacija',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisProjekcija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idproekcije','NazivProjekcije','broj_gledatelja','misljenje','datum_projekcije','vrijeme_projekcij','ocjena');
    $rezultat=$baza->SelectFunkcija('projekcije',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisLokacija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idlokacija','NazivLokacije','drzava','grad','ulica','postanskibroj','ocjena');
    $rezultat=$baza->SelectFunkcija('lokacija',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}