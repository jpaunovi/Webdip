<?php
include_once './RadSbazom.php';
$baza=new RadSbazom();
$korisnickoIme=trim(strtolower($_GET['korisnickoIme']));
$korisnikSelect=array('korisnicko_ime');
$korisnikWhere=array('korisnicko_ime'=>$korisnickoIme);
$sql=$baza->SelectFunkcija1('korisnici',$korisnikWhere,$korisnikSelect);
if($sql->num_rows != 0) {
    echo 1;
}
else{
    echo 0;
}
