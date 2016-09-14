<?php
include_once 'autentikacija.php';
include_once 'dnevnik.php';
$greskaPrijava="";
if (!isset($_SERVER['HTTPS']) || !$_SERVER['HTTPS']) {
	$url = 'https://' . $_SERVER['HTTP_HOST']
		. $_SERVER['REQUEST_URI'];
	header('Location: ' . $url);
	exit;
}
if(!isset($_SESSION))
{
	session_start();
}

if(isset($_POST['submit'])) {
	$user = $_POST['korisnickoIme'];
	$pass = $_POST['sifra'];
	$provjera=autentikacija($user,$pass);
	if($provjera==1){
		header("Location: index.php");
		$greskaPrijava="";
		setcookie('korisnicko_ime', $user);
		$_SESSION["korIme"]=$user;
		upisiDevnik($user,'Uspjesna prijava');
	}
	elseif ($provjera==2){
		$greskaPrijava = "Nije aktiviran korisnicki racun";
		upisiDevnik($user,'Neusmjesna prijava nije aktiviro racun');
		setcookie('korisnicko_ime', $user, time() - 3600);
	}
	elseif ($provjera==3){
		$greskaPrijava = "Zakljucan je korisnicki racuna";
		upisiDevnik($user,'Neusmjesna prijava zakljucan racun');
		setcookie('korisnicko_ime', $user, time() - 3600);
	}
	elseif ($provjera==0){
		$greskaPrijava = "Nije dobro unesena lozinka ili sifra";
		upisiDevnik($user,'Neusmjesna prijava krivo unesni podatci');
		setcookie('korisnicko_ime', $user, time() - 3600);
	}
}
if(isset($_POST['new_pas'])) {
	header("Location: NewPass.php");
}
?>
<!DOCTYPE html>
<html>
	<head>
	<title>Stranica Prijave</title>
	 <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="autor" content="Jakša Paunović">
     <meta name="application-name" content="Kino projekt">
     <meta name="description" content="7.6.2016">
	</head>
	<link media='screen and (max-width: 450px)' href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_mobitel.css" rel="stylesheet" type="text/css"/>
	<link media="all and (min-width: 800px) and (max-width: 1000px)" href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_pc.css" rel="stylesheet" type="text/css"/>
	<link media="all and (min-width: 450px) and (max-width: 800px)" href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_tableti.css" rel="stylesheet" type="text/css"/>
	<link media="all and (min-width: 1000px)" href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi_tv.css" rel="stylesheet" type="text/css"/>
	<header></header>
	<nav id="nav"><ul><li><a href='index.php'>Pocetna</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='NeregistriranKorisnik.php'>Prikaz filmova po lokciji</a></li></ul></nav>

	<body>
	 <article id="error"></article>
	 <form id="indexForma" name="indexForma"  method="POST">
	 <table>
		 <tr><td><?php
		echo $greskaPrijava;
				 ?></td></tr>
	 <tr>
     <td><label for="korisnickoIme">Unesite Korisnicko ime </label></td>
	 <td> <input class="input" type="text" placeholder="Unesite svoje Korisnicko ime" name="korisnickoIme" value="<?php if(isset($_COOKIE['korisnicko_ime'])) echo $_COOKIE['korisnicko_ime']; ?>"/></td>
	 </tr>
	 <tr>
	 <td><label for="sifra">Unesite sifru </label></td>
	 <td> <input class="input" type="password" placeholder="Unesite sifra" name="sifra"/></td>
	 </tr>
		 <tr><td><input type="submit" class="submit" id="submit" value="Prijavi se"   name="submit"/></td>
			 <td><input type="submit" class="submit" id="new_pas" value="Resetiraj lozinku"   name="new_pas"/></td>
		 </tr>
	 </table>
	 </form>

	</body>
<?php include_once 'footer.php' ?>
</html>