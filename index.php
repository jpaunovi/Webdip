
<!DOCTYPE html>
<html>
	<head>
	<title>Poćetna stranica</title>
	 <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="autor" content="Jakša Paunović">
     <meta name="application-name" content="Kino projekt">
     <meta name="description" content="7.6.2016">
	</head>
	<body>
	 <header>
		 <link href="//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/css/jpaunovi.css" rel="stylesheet" type="text/css"/>
<?php include_once 'heder.php'?>
	 </header>
	 <nav id="nav"><ul><li><a href='index.php'>Pocetna</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='NeregistriranKorisnik.php'>Prikaz filmova po lokciji</a></li></ul></nav>


	 <article id="error"></article>
	 <form id="indexForma" name="indexForma" action="http://arka.foi.hr/WebDiP/2014/materijali/zadace/ispis_forme.php" method="post">
	 <table>
	 <tr>
	 <td> Jakša Paunović </td>
	 <td> <img alt="jaksa" src="slike/jaksa.png" height="42" width="42" ></td>
	 </tr>
	 </table>
	 </form>
	</body>
	<?php include_once 'footer.php'?>
</html>