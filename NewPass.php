<?php
include_once 'RadSbazom.php';
include_once 'korisnik.php';
$greskekorisnik="";
$baza= new RadSbazom();
if(isset($_POST['submit']))
{
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $length=8;
    $korIme=$_POST['korisnickoIme'];
    $email=$_POST['email'];
    
        $sifra = substr(str_shuffle($chars), 0, $length);
        $where = array('korisnicko_ime' => $korIme, 'email' => $email);
        $set = array('sifra' => $sifra);
        $upit = $baza->UpdateFunkcija('korisnici', $where, $set);
        if (!$upit) {
            die("Krivo uneseni korisnik ili email");
        } else {
            $poruka = "Nova sifra: " . $sifra . "</br>";
            mail($email, 'New password', $poruka);
        }
}
?>
<!DOCTYPE html>
<html>
	<head>
	<title>Nova sifra</title>
	 <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="autor" content="Jakša Paunović">
     <meta name="application-name" content="Kino projekt">
     <meta name="description" content="7.6.2016">
	</head>
	<body>
	 <header></header>
<?php  include_once 'heder.php'?> 
	 <article id="error"></article>
	 <form id="indexForma" name="indexForma"  method="POST">
	 <table>
		 <tr><td></td></tr>
<tr>
    <td><label for="korisnickoIme">Unesite Korisnicko ime </label></td>
    <td> <input class="input" type="text" placeholder="Unesite svoje Korisnicko ime" name="korisnickoIme"/></td>
    <td> <p><?php echo $greskekorisnik?></p></td>
</tr>
<tr>
    <td><label for="email">Unesite email </label></td>
    <td> <input class="input"  id="email" placeholder="Unesite svoj email" name="email" /></td>
</tr>
<tr><td><input type="submit" class="submit" id="submit" value="Dobi novu sifru"   name="submit"/></td>
</tr>
</table>
</form>
</body>
    <?php include_once 'footer.php'?>

</html>