<?php
include_once 'RadSbazom.php';
function getKorisnik($odabir){
    $baza=new RadSbazom();
    if(!isset($_SESSION)){
        session_start();
    }
    $korime=$_SESSION['korIme'];
    $select=array('idkorisnici','ime','prezime','email','adresa','slika','uloga');
    $where=array('korisnicko_ime' => $korime);
    $upit=$baza->SelectFunkcija1('korisnici',$where,$select);
    $dataKorisnik=mysqli_fetch_assoc($upit);
    switch ($odabir){
        case 'ime':
            return $dataKorisnik['ime'];
            break;
        case  'prezime':
            return $dataKorisnik['prezime'];
            break;
        case 'email':
            return $dataKorisnik['email'];
        case 'adresa':
            return $dataKorisnik['adresa'];
            break;
        case 'slika':
            return $dataKorisnik['slika'];
            break;
        case 'uloga':
            return $dataKorisnik['uloga'];
            break;
        case 'idkorisnici':
            return $dataKorisnik['idkorisnici'];
            break;
        case 'korime':
            return $korime;
        break;
    }

}

