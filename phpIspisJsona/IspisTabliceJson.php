<?php
include_once '../JsonSveTablice.php';
$n=$_GET['n'];
switch ($n) {
    case 1:
        IspisKorisnika();
        break;
    case 2:
        IspisUloge();
        break;
    case 3:
        IspisSlike();
        break;
    case 4:
        IspisRezervacija();
        break;
    case 5:
        IspisProjekcija();
        break;
    case 6:
        IspisLokacija();
        break;
    case 7:
        Ispiskorisnici_lokacija();
        break;
    case 8:
        Ispislokacije_projekcija();
        break;
    case 9:
        IspisKino();
        break;
    case 10:
        $id=$_GET['idlokacije'];
        IspisNeRegistriraniKorisnik($id);
        break;
    case 11:
        $id=$_GET['idlokacije'];
        IspisRegistriraniKorisnik($id);
        break;
    case 12:
        $status='Potvrdeno';
        IspisVrsteRezervacija($status);
        break;
    case 13:
        $status='NePotvrdeno';
        IspisVrsteRezervacija($status);
        break;
    case 14:
        ispisTagova();
        break;
    case 15:
        $tag=$_GET['tag'];
        IspisGalerija($tag);
        break;
    case 16:
        IspisLokacijaAdmin();
        break;
    case 17:
        IspisModeratora();
        break;
    case 18:
        IspisProjekcijaModeratora();
        break;
    case 19:
        $projectID=$_GET['projectID'];
        IspisKorisnikSlikaModeratora($projectID);
        break;
    case 20:
        $projectID=$_GET['projectID'];
        IspisNEpotvdenihRezervacija($projectID);
        break;
    case 21:
        ModeratorStatistikaLokacija();
        break;
    case 22:
        ModeratorStatistikaProjekcija();
        break;
    case 23:
        $od=$_GET['od'];
        $do=$_GET['do'];
        ModeratorStatistikaLokacijaPretraga($od,$do);
        break;
    case 24:
        $od=$_GET['od'];
        $do=$_GET['do'];
        ModeratorStatistikaProjekcijaPretraga($od,$do);
        break;
    case 25:
        StatistikaPosjecenost();
        break;
    case 26:
        StatistikaUpiti();
        break;
    case 27:
        $stupac=$_GET['stupac'];
        $vrijeme=$_GET['vrijeme'];
        $json=$_GET['data'];
        $objekt=json_decode($json);
        $data=(array)$objekt;
        StatistikaPredtagaDatumVrijeme($stupac,$vrijeme,$data);
        break;
    case 28:
        $stupac=$_GET['stupac'];
        $korime=$_GET['korsnik'];
        StatistikaPredtagaKorisnik($stupac,$korime);
        break;
    case 29:
        IspisDnevnik();
        break;
    case 30:
        $json=$_GET['data'];
        $objekt=json_decode($json);
        $data=(array)$objekt;
        DnevnikPredtagaDatumVrijeme($data);
        break;
    case 31:
        $korime=$_GET['korsnik'];
        DnevnikPredtagaKorisnik($korime);
        break;
    case 32:
        zadnji();
        break;
    case 33:
        moderatorlokacija();
        break;
}

