<?php
function dohvatiPomak(){
    $xml = simplexml_load_file("http://barka.foi.hr/WebDiP/pomak_vremena/pomak.php?format=xml");
    $pomak=0;
    if($xml){
        $pomak = $xml->vrijeme->pomak->brojSati[0];
    }
    $vrijeme=new DateTime(date("Y-m-d H:i:s", strtotime(sprintf("+%d hours", $pomak))));
    $novoVrijeme = $vrijeme->format('Y-m-d H:i:s');
    return $novoVrijeme;

}
?>