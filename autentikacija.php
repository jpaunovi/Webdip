<?php
include_once 'RadSbazom.php';
function autentikacija($user,$pas){
    $baza = new  RadSbazom();
    $rezultat=0;
    $whereKorisnik=array(
        'korisnicko_ime'=> $user,

    );
    $select=array(
        'status'=>'status',
        'sifra'=>'sifra',
        'neuspjesnost_prijave'=>'neuspjesnost_prijave'
    );
    $upit=$baza->SelectFunkcija1('korisnici',$whereKorisnik,$select);
    if($upit ->num_rows !=0) {
        $status = mysqli_fetch_array($upit);
        if ($status['sifra'] == $pas) {
            $data = array('neuspjesnost_prijave' => '0');
            $insert = $baza->UpdateFunkcija('korisnici', $whereKorisnik, $data);
            if (!$insert) {
                die('Pokreska kod upita');
            }
            if ($status[0] == '1') {
                $rezultat = 1;
            } elseif ($status[0] == '2') {
                $rezultat = 2;
            } elseif ($status[0] == '3') {
                $rezultat = 3;
            }
        }
        else{
            $brojPrijava=$status['neuspjesnost_prijave'];
            $brojPrijava+=1;
            if($status['neuspjesnost_prijave'] == 3){
                $set=array('status'=>'3');
                $zakljucaj=$baza->UpdateFunkcija('korisnici',$whereKorisnik,$set);
                if(!$zakljucaj){die('Pokreska kod upita');}
            }
            else {
                $data = array('neuspjesnost_prijave' => $brojPrijava);
                $insert1 = $baza->UpdateFunkcija('korisnici', $whereKorisnik, $data);
                if (!$insert1) {
                    die('Pokreska kod upita');
                }
            }
        }
    }
    else{
        $rezultat = 0;
    }
    return $rezultat;
}

