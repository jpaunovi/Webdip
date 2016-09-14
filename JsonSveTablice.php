<?php
include_once '/var/www/webdip.barka.foi.hr/2015_projekti/WebDiP2015x062/RadSbazom.php';
include_once '/var/www/webdip.barka.foi.hr/2015_projekti/WebDiP2015x062/Izradajsona.php';
include_once 'korisnik.php';
include_once 'StatistikaPosjcenostUpit.php';

function IspisKorisnika(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idkorisnici','ime','prezime','email','korisnicko_ime','status','adresa','slika','uloga');
    $rezultat=$baza->SelectFunkcija('korisnici',$select);
    $data=$json->Izradijson($rezultat);

    echo $data;
}
function zadnji(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->Zadnji();
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
function IspisDnevnik(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('id','korisnik','opis','vrijeme');
    $rezultat=$baza->SelectFunkcija('dnevnik',$select);
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
    $select=array('idrezervacije','korisnici_idkorisnici','projekcije_idproekcije','NazivProjekcije' ,'status');
    $rezultat=$baza->SelectFunkcija('rezervacija',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisProjekcija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idproekcije','NazivProjekcije','broj_slobodnihmjesta','datum_projekcije_od','datum_projekcije_do','vrijeme_projekcij_od','vrijeme_projekcij_do');
    $rezultat=$baza->SelectFunkcija('projekcije',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisLokacija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idlokacija','NazivLokacije','drzava','grad','ulica','postanskibroj');
    $rezultat=$baza->SelectFunkcija('lokacija',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function Ispiskorisnici_lokacija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('id','idkorisnici','idlokacija');
    $rezultat=$baza->SelectFunkcija('korisnici_lokacija',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function Ispislokacije_projekcija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('id','idproekcije','idlokacija');
    $rezultat=$baza->SelectFunkcija('lokacije_projekcija',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisKino(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idGalerije','idslika','tag','idkorisnici');
    $rezultat=$baza->SelectFunkcija('galerja_slika',$select);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisNeRegistriraniKorisnik($id){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->NeregistriraniKorisnik($id);


    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisRegistriraniKorisnik($id){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->RegistriraniKorisnik($id);
    $korime=getKorisnik('korime');
    upit($korime,'IspisRegistriraniKorisnik');
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisVrsteRezervacija($status){
    $korId=getKorisnik('idkorisnici');
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idrezervacije','projekcije_idproekcije','NazivProjekcije','status');
    $where=array('status'=>$status,'korisnici_idkorisnici'=>$korId);
    $rezultat=$baza->SelectFunkcija1('rezervacija',$where,$select);
    $korime=getKorisnik('korime');
    upit($korime,'IspisVrsteRezervacija');
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function ispisTagova(){
    $korId=getKorisnik('idkorisnici');
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('tag');
    $where=array('idkorisnici'=>$korId);
    $rezultat=$baza->SelectFunkcijaUnique('galerja_slika',$where,$select);
    $korime=getKorisnik('korime');
    upit($korime,'ispisTagova');
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisGalerija($tag){
    $korId=getKorisnik('idkorisnici');
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->Galerijaslika($tag,$korId);
    $korime=getKorisnik('korime');
    upit($korime,'IspisGalerija');
    //var_dump($rezultat);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisLokacijaAdmin(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->LoikacijeAdmin();
    $korime=getKorisnik('korime');
    upit($korime,'LoikacijeAdmin');
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisModeratora(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $select=array('idkorisnici','ime','prezime','email','korisnicko_ime','status','adresa','slika','uloga');
    $where=array('uloga'=>2);
    $rezultat=$baza->SelectFunkcija1('korisnici',$where,$select);

    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisProjekcijaModeratora(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $idkor=getKorisnik('idkorisnici');
    $rezultat=$baza->ProjekcijeModerator($idkor);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisKorisnikSlikaModeratora($projectId){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->KorisniciSlikeModerator($projectId);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function IspisNEpotvdenihRezervacija($pojectionID){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->KorisniciRezervacijeModerator($pojectionID);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function ModeratorStatistikaLokacija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaModeratorLokacija();
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function ModeratorStatistikaProjekcija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaModeratorProjekcija();
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function ModeratorStatistikaLokacijaPretraga($od,$do){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaModeratorLokacijaPretraga($od,$do);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function ModeratorStatistikaProjekcijaPretraga($od,$do){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaModeratorProjekcijaPretraga($od,$do);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function StatistikaPosjecenost(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaPosjecenosti();
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function StatistikaUpiti(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaUpiti();
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function StatistikaPredtagaDatumVrijeme($stupac,$vrijeme,$data){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaAdminPretragaDatumVrijeme($stupac,$vrijeme,$data);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function StatistikaPredtagaKorisnik($stupac,$korime){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->StatiskaAdminPretragaKorisnik($stupac,$korime);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function DnevnikPredtagaDatumVrijeme($data){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->DnevnikAdminPretragaDatumVrijeme($data);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function DnevnikPredtagaKorisnik($korime){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $rezultat=$baza->DnevnikAdminPretragaKorisnik($korime);
    $data=$json->Izradijson($rezultat);
    echo $data;
}
function moderatorlokacija(){
    $baza=new  RadSbazom();
    $json=new Izradajsona();
    $korime=getKorisnik('idkorisnici');
    $rezultat=$baza->moderatornewprojekcija($korime);
    $data=$json->Izradijson($rezultat);
    echo $data;
}

