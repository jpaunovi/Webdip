<?php
include_once 'dohvatiPomak.php';
include_once 'RadSbazom.php';
$greskaPrezime=$greskaSifra=$greskaAdresa=$greskaEmail=$greskaKorisnickoime=$greskaIme=$greskaAktivacija="";
$ime=$korisnickoIme=$prezime=$adresa=$email=$sifra="";
if (isset($_POST['submit'])) {
	$ime = $_POST['ime'];
	if(empty($ime) || $ime[0] != strtoupper($ime[0]) ){
		$greskaIme="Slovo mora biti veliko";

	}
	else{
		$greskaIme="";
	}
	$prezime = $_POST['prezime'];
	if(empty($prezime) ||  $prezime[0] != strtoupper($prezime[0]) ){
		$greskaPrezime="Slovo mora biti veliko";
	}
	else{
		$greskaIme="";
	}
	$email = $_POST['email'];
	if(empty($email) || !filter_var($email,FILTER_VALIDATE_EMAIL)){
		$greskaEmail ="Krivo uneseni email";
	}
	$korisnickoIme = $_POST['korisnickoIme'];
	if(empty($korisnickoIme)){
		$greskaKorisnickoime="Mora te unjeti korisnicko ime";
	}
	else{
		$greskaKorisnickoime="";
		$korisnikWhere=array('korisnicko_ime'=> $korisnickoIme);
		$korisnikSelect=array('korisnicko_ime');
		$select = new RadSbazom();
		$provjera=$select->SelectFunkcija1("korisnici",$korisnikWhere,$korisnikSelect);
		if ($provjera->num_rows !=0){
			$greskaKorisnickoime="Korisnicko ime postoji";
		}
		else{
			$greskaKorisnickoime="";
		}
	}
	$sifra = $_POST['sifra'];
	if (empty($sifra) || !preg_match("#[0-9]+#", $sifra) || !preg_match("#[a-zA-Z]+#", $sifra)){
		$greskaSifra="Sifra nije dobro unesena";
	}
	else{
		$greskaSifra="";
	}
	$adresa = $_POST['adresa'];
	if (empty($adresa) || strlen($adresa)>100){
		$greskaAdresa="Adresa mora biti manja od 100 znakova";
	}
	else{
		$greskaAdresa="";
	}

	if (empty($greskaPrezime) & empty($greskaIme) & empty($greskaKorisnickoime) & empty($greskaEmail) & empty($greskaAdresa) & empty($greskaSifra)){
		$aktivaciskikod=md5(uniqid(rand()));
		$kodSelect=array('aktivaciski_kod');
		$kodWere=array('aktivaciski_kod'=>$aktivaciskikod);
		$rezultat=$select->SelectFunkcija1("korisnici",$kodWere,$kodSelect);
		if ($rezultat->num_rows !=0){
			$greskaAktivacija= "Ups isti aktivaciski kod pokusajte ponovno";
		}
		else {
			$insert = new RadSbazom();
			$date = dohvatiPomak();
			$data = array('ime' => $ime, 'prezime' => $prezime, 'email' => $email, 'sifra' => $sifra,
				'korisnicko_ime' => $korisnickoIme, 'adresa' => $adresa, 'aktivaciski_kod' => $aktivaciskikod,
				'vrijeme_registracije' => $date, 'uloga' => '1');
			$insert->InsertFunkcija("korisnici", $data);
			if(!$insert){
				die("Problem s Insertom");
			}
			else{
				$poruka="<p>Prima: ". $korisnickoIme . "</p>";
				$poruka .="<p>Kliknite na link za aktivaciju korisnika</p>";
				$poruka .= "<a href=http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/aktivacija.php?email=" . urlencode($email) . "&vrijeme=".  urlencode($date) . "&aktkod=" . urlencode($aktivaciskikod);
				mail($email,'Registration Confirmation',$poruka);
			}
		}
	}

}

?>
<!DOCTYPE html>
<html>
	<head>
	<title>Stranica registracije</title>
	 <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="autor" content="Jakša Paunović">
     <meta name="application-name" content="Kino projekt">
     <meta name="description" content="7.6.2016">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
		<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
		<script type ="text/javascript" src="http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/js/KorisnickoImeProvjera.js"></script>

	</head>
	<body onload="ProvjeraForme();">
	 <header></header>
	 <nav id="nav">
	  <ul style="list-style-type:none">
	   <li>Prijava</li>
	   <li>Registracija</li>
	  </ul>
	 </nav>
	 <article id="error"></article>
	 <form id="RegistracijaForma"  name="RegistracijaForma"  method="POST" >
	 <table>
	 <tr>
	 <td><label for="ime">Unesite ime </label></td>
	 <td> <input class="input" id="ime" type="text" placeholder="Unesite svoje ime" name="ime"  /> </td>
	 <td id="greskaIme" class="greske" ><?php echo  $greskaIme ?></td>
	 </tr>
	 <tr>
	 <td><label for="prezime">Unesite prezime </label></td>
	 <td> <input class="input"id="prezime" type="text" placeholder="Unesite svoje prezime" name="prezime"  /> </td>
	 <td id="greskaPrezime" class="greske"><?php echo  $greskaPrezime?></td>
	 </tr>
	 <tr>
	 <td><label for="email">Unesite email </label></td>
	 <td> <input class="input"  id="email" placeholder="Unesite svoj email" name="email" /></td>
	 <td id="greskaEmail" class="greske"><?php echo  $greskaEmail?></td>
	 </tr>
	 <tr>
	 <td><label for="korisnickoIme">Unesite Korisnicko ime </label></td>
	 <td> <input class="input" type="text" placeholder="Unesite svoje korisnicko ime" name="korisnickoIme" id="korisnickoIme"/></td>
	 <td id="greskaKorisnickoIme" class="greske"><?php echo  $greskaKorisnickoime?></td>
	 </tr>
	 <tr>
	 <td><label for="sifra">Unesite sifru </label></td>
	 <td> <input class="input" id="sifra" type="password" placeholder="Unesite sifra" name="sifra"  /></td>
	 <td id="greskaSifra" class="greske"><?php echo  $greskaSifra?></td>
	 </tr>
	 <tr>
	 <td><label for="adresa">Unesite adresu </label></td>
	 <td> <input class="input" id="adresa" type="text" placeholder="Unesite svoju addresu" name="adresa" /></td>
	 <td id="greskaAdresa" class="greske"><?php echo  $greskaAdresa?></td>
	 </tr>
 
	 </table>
	 <input type="submit" class="submit" id="submit" value="Registriraj se"   name="submit"/>
 	 <input type="reset" class="reset" id="reset" value="Izbrisi podatke"/>
	 </form>
	</body>
</html>
