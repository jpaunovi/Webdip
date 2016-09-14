<?php
//
include_once 'bazaclass.php';
include_once 'dohvatiPomak.php';
class RadSbazom
{
 public function InsertFunkcija($table,$data){

     $baza = new Baza();
     $baza->spojiDB();
     $key=array_keys($data);
     $val=array_values($data);
     $sql= "INSERT INTO $table (" . implode(', ', $key) . ") " . "VALUES ('" . implode("', '", $val) . "')";
     $insert=$baza->updateDB($sql);
     if (!$insert){
         $baza->pogreskaDB();
     }
     else{
         return true;
     }

 }
    
    public  function  SelectFunkcija($table,$data){
        $baza = new Baza();
        $baza->spojiDB();
        $val=array_values($data);
        $sql="select " . implode(', ', $val) . " from $table;";
        //var_dump($sql);
        $rezultat=$baza->selectDB($sql);
        $baza->zatvoriDB();
        return $rezultat;
    }
    public  function  SelectFunkcija1($table,$where,$select){
        $baza = new Baza();
        $baza->spojiDB();
        foreach ($where as $wherekey=>$whereval){
            $where1[]="$wherekey ='$whereval'";
        }
        $val=array_values($select);
        $sql="select " . implode(",", $val) . " from $table  where " . implode(" and ", $where1);
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);


        return $rezultat;
        $baza->zatvoriDB();
    }
    public function UpdateFunkcija($table,$where,$set){
        $baza = new Baza();
        $baza->spojiDB();
        foreach ($set as $setkey=>$setval){
            $set1[]="$setkey ='$setval'";
        }
        foreach ($where as $key=>$val){
            $where1[]="$key ='$val'";
        }

        $sql = "Update $table set ". implode(', ',$set1)
            . " where " . implode(' and ', $where1);
        //var_dump($sql);
        $update=$baza->updateDB($sql);
        if (!$update){
            $baza->pogreskaDB();
        }
        else{


            return true;
        }
        $baza->zatvoriDB();
    }
    public function DeleteFunkcija($table,$where){
        $baza = new Baza();
        $baza->spojiDB();
        foreach ($where as $key=>$val){
            $where1[]="$key ='$val'";
        }

        $sql = "DELETE From $table" . " where " . implode(' and ', $where1);
        $delete=$baza->updateDB($sql);
        if (!$delete){
            $baza->pogreskaDB();
        }
        else{
            return true;
        }
        $baza->zatvoriDB();
    }
    public function NeregistriraniKorisnik($id){
        $baza = new Baza();
        $Pocetnovrijeme=dohvatiPomak();
        $dijelovi=explode(" ", $Pocetnovrijeme);

        $krajneVrijeme=new DateTime(date("H:i:s", strtotime( $dijelovi[1])));
        //var_dump($krajneVrijeme);
        $krajneVrijeme->modify('+5 hours');
        $novoVrijeme = $krajneVrijeme->format('H:i:s');
        $krajneDatum=new DateTime(date("Y-m-d", strtotime(sprintf($dijelovi[0]))));
        $krajneDatum->modify('+1 month');
        $novidatum=$krajneDatum->format('Y-m-d');

        $baza->spojiDB();
        $sql = "select NazivProjekcije,datum_projekcije_od,vrijeme_projekcij_od from projekcije, lokacije_projekcija WHERE  lokacije_projekcija.idlokacija=". $id . " and vrijeme_projekcij_od BETWEEN " . "'$dijelovi[1]'" ." and " . "'$novoVrijeme'". " and datum_projekcije_od BETWEEN " . "'$dijelovi[0]'" ." and " . "'$novidatum'" . "limit 3";
        $select=$baza->selectDB($sql);
        //var_dump($sql);
        if (!$select){
            $baza->pogreskaDB();
        }
        else{
            
            return $select;
        }
        $baza->zatvoriDB();
    }
    public function RegistriraniKorisnik($id){
        $baza = new Baza();
        $baza->spojiDB();
        $sql = "select projekcije.idproekcije,projekcije.NazivProjekcije,projekcije.broj_slobodnihmjesta,projekcije.datum_projekcije_od,projekcije.datum_projekcije_do,projekcije.vrijeme_projekcij_od,projekcije.vrijeme_projekcij_do from projekcije join lokacije_projekcija WHERE projekcije.idproekcije=lokacije_projekcija.idproekcije and lokacije_projekcija.idlokacija=" . $id;
        $select=$baza->selectDB($sql);
        //var_dump($sql);
        if (!$select){
            $baza->pogreskaDB();
        }
        else{


            return $select;
        }
        $baza->zatvoriDB();
    }
    public  function  SelectFunkcijaUnique($table,$where,$select){
        $baza = new Baza();
        $baza->spojiDB();
        foreach ($where as $wherekey=>$whereval){
            $where1[]="$wherekey ='$whereval'";
        }
        $val=array_values($select);
        $sql="select DISTINCT " . implode(",", $val) . " from $table  where " . implode(" and ", $where1);
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);


        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  Galerijaslika($tag,$idkor){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT slika.slika FROM slika JOIN galerja_slika ON slika.idslika = galerja_slika.idslika WHERE tag=" . "'$tag'" . " AND slika.korisnik=" . $idkor ;
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);


        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  LoikacijeAdmin(){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="select lokacija.idlokacija,lokacija.NazivLokacije,lokacija.drzava,lokacija.grad,lokacija.ulica,lokacija.postanskibroj from lokacija WHERE NOT EXISTS (select * from korisnici_lokacija where  lokacija.idlokacija = korisnici_lokacija.idlokacija)";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  ProjekcijeModerator($korId){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT  projekcije.idproekcije, projekcije.NazivProjekcije, projekcije.broj_slobodnihmjesta, projekcije.datum_projekcije_od, projekcije.datum_projekcije_do, projekcije.vrijeme_projekcij_od, projekcije.vrijeme_projekcij_do,lokacije_projekcija.idlokacija,lokacije_projekcija.korid FROM projekcije JOIN lokacije_projekcija ON projekcije.idproekcije = lokacije_projekcija.idproekcije WHERE korid=" . $korId;
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  KorisniciSlikeModerator($projectId){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT kor.ime, kor.prezime FROM slika s, korisnici kor WHERE s.korisnik = kor.idkorisnici AND s.projekcije=". $projectId . " AND s.slika IS NOT NULL ";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  KorisniciRezervacijeModerator($projectId){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT kor.ime,kor.prezime,rez.NazivProjekcije,rez.idrezervacije,rez.korisnici_idkorisnici,rez.br_rezmjesta FROM rezervacija rez, korisnici kor WHERE rez.korisnici_idkorisnici = kor.idkorisnici AND rez.status='NePotvrdeno' AND rez.projekcije_idproekcije=". $projectId;
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaModeratorLokacija(){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT lokacija.NazivLokacije ,(SELECT  COUNT(*)FROM svida where  lokacija.idlokacija = svida.lokacija) AS 'like',(SELECT COUNT(*)FROM nesvida where lokacija.idlokacija = nesvida.lokacija) AS 'dislike' FROM lokacija group by 1";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaModeratorProjekcija(){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT projekcije.NazivProjekcije, (

SELECT COUNT( * ) 
FROM svida
WHERE projekcije.idproekcije = svida.projekcija
) AS  'like', (

SELECT COUNT( * ) 
FROM nesvida
WHERE projekcije.idproekcije = nesvida.projekcija
) AS  'dislike'
FROM projekcije
GROUP BY 1 ";
        $rezultat=$baza->selectDB($sql);


        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaModeratorLokacijaPretraga($od,$do){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT lokacija.NazivLokacije ,(SELECT  COUNT(*)FROM svida where  lokacija.idlokacija = svida.lokacija and svida.datum between  '" . $od . "' and '" . $do . "') AS 'like',(SELECT COUNT(*)FROM nesvida where lokacija.idlokacija = nesvida.lokacija and nesvida.datum between '". $od . "' and '" . $do ."') AS 'dislike' FROM lokacija group by 1";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaModeratorProjekcijaPretraga($od,$do){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT projekcije.NazivProjekcije ,(SELECT  COUNT(*)FROM svida where  projekcije.idproekcije = svida.projekcija and svida.datum between  '" . $od . "' and '" . $do . "') AS 'like',(SELECT COUNT(*)FROM nesvida where projekcije.idproekcije = nesvida.projekcija and nesvida.datum between '". $od . "' and '" . $do ."') AS 'dislike' FROM projekcije group by 1";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaPosjecenosti(){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT korisnik, stanica, COUNT( * ) as 'broj'
              FROM  posjecenost 
              WHERE  stanica IS NOT NULL 
              GROUP BY 1 , 2";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaUpiti(){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT korisnik, upit, COUNT( * ) as 'broj'
FROM  posjecenost
WHERE  upit IS NOT NULL 
GROUP BY 1 , 2";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaAdminPretragaDatumVrijeme($stupac,$vrijeme,$data){
        $baza = new Baza();
        $baza->spojiDB();
        $timestamp=array_values($data);
        $sql="SELECT korisnik," . $stupac . ", COUNT( * ) as 'broj'
FROM  posjecenost WHERE " . $stupac  . " IS NOT NULL and " . $vrijeme . " between '" . implode("' and '", $timestamp) . "' GROUP BY 1 , 2";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  StatiskaAdminPretragaKorisnik($stupac,$korime){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT korisnik," . $stupac .", COUNT( * ) as 'broj'
FROM  posjecenost WHERE " . $stupac .  " IS NOT NULL and korisnik='" . $korime . "' GROUP BY 1 , 2";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  DnevnikAdminPretragaDatumVrijeme($data){
        $baza = new Baza();
        $baza->spojiDB();
        $timestamp=array_values($data);
        $sql="SELECT * FROM  dnevnik WHERE vrijeme between '" . implode("' and '", $timestamp) . "'";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  DnevnikAdminPretragaKorisnik($korime){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT * FROM  dnevnik WHERE korisnik='" . $korime . "'";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  Zadnji(){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT idproekcije FROM projekcije ORDER BY idproekcije DESC  LIMIT 1";
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
    public  function  moderatornewprojekcija($korid){
        $baza = new Baza();
        $baza->spojiDB();
        $sql="SELECT idlokacija,idkorisnici FROM korisnici_lokacija WHERE idkorisnici=".$korid;
        $rezultat=$baza->selectDB($sql);
        //var_dump($sql);
        return $rezultat;
        $baza->zatvoriDB();
    }
}