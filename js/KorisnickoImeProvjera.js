/**
 * Created by jaksa on 17.7.2016..
 */
$(document).ready(function($) {
    $('#korisnickoIme').focusout(function(event){
        $korisnickoIme=$('#korisnickoIme').val();
        $.ajax({
            type : 'GET',
            url : 'http://barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/ProvjeraKorisnickogimena.php?korisnickoIme=' + $korisnickoIme,
            success: function( odaziv ){
                    if(odaziv == 1){
                        $('#korisnickoIme').css("background-color", "red");
                    }
                    else{
                        $('#korisnickoIme').css("background-color", "blue");
                    }
                }
        });
    });
});