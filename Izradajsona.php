<?php


class Izradajsona
{
 public function Izradijson($rezutatUpita){
     $rows=array();
     if ($rezutatUpita != null) {
         while ($r = mysqli_fetch_assoc($rezutatUpita)) {
             $rows[] = $r;
         }
         $json=json_encode($rows);
         if(!$json){
             die("Nije se napravio json");
         }
         else{
             return $json;
         }
     }
 }
}