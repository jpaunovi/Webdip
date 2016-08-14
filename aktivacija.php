<?php
include_once  'dohvatiPomak.php';
include_once 'RadSbazom.php';
$baza=new RadSbazom();
if(isset($_GET['email']) && preg_match('/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/', $_GET['email'])){
    $email=$_GET['email'];
}
else{
    die("Nije postavljen email");
}
if(isset($_GET['aktkod']) && (strlen($_GET['aktkod']) == 32)){
    $akt_kod=$_GET['aktkod'];
}
else{
    die("Nije postavljen aktKod");
}
if(isset($_GET['vrijeme']) ){
    $vrijeme=new DateTime($_GET['vrijeme']);
    $trenut_vrijeme=new DateTime(dohvatiPomak());
    $razlika=$vrijeme->diff($trenut_vrijeme);

}
else{
    die("Nije postavljeo vrijeme");
}
if (isset($email) && isset($akt_kod)) {
    $data=array('aktivaciski_kod'=>$akt_kod, 'email'=>$email);
    $select=array('1'=>'status');
    $rezultat=$baza->SelectFunkcija1("korisnici",$data,$select);
    $dohvti=$rezultat->fetch_array();
    $status=$dohvti[0];
    if($status==2){
        die( "Korisnik je isteko");
    }
    if(!($razlika->format('%R%a') == 0)) {
        $where=array('email'=>$email, 'aktivaciski_kod'=>$akt_kod);
        $set=array('status'=>'2');
        $aktivacija=$baza->UpdateFunkcija("korisnici",$where,$set);
        die( "Isteko je ativaciski link");
    }
    else{
        $where=array('email'=>$email, 'aktivaciski_kod'=>$akt_kod);
        $set=array('status'=>'1');
        $aktivacija=$baza->UpdateFunkcija("korisnici",$where,$set);
        if (!$aktivacija){

            die("Neuspjesna aktivacija");
        }
        else{
            //header("Location: index.html");
        }
    }
}
else{
    die("dogodila se pogreska");
}