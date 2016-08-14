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

}
