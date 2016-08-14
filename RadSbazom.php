<?php
//
include_once 'bazaclass.php';
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
}