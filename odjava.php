<?php
include_once 'dnevnik.php';
ob_start();
session_start();
$kor_ime=$_SESSION["korIme"];
upisiDevnik($kor_ime,'Odjava s stranice');
session_destroy();
header("Location: prijava.php");