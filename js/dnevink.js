$(document).ready(function($) {
    var n=29;
    $.ajax ({
        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
        type: "POST",
        dataType: "json",
        success:function(json){
            if($('#Tablica').length > 0) {
                $('#Tablica').remove();
                var tablica2 = "<table id='Tablica' border='1'><caption>Dnevnik</caption><thead>" +
                    "<tr>" +
                    "<th>id</th>" +
                    "<th>korisnik</th>" +
                    "<th>opis</th>" +
                    "<th>vrijeme</th>" +
                    "</tr>" +
                    "</thead><tbody></tbody></table>" +
                    "<div id='gumbi'>" +
                    "<table>"+
                    "<tr><td><input type='date' id='odVrijeme' placeholder='odVrijeme'/></td>" +
                    "<td><input type='date' id='doVrijeme' placeholder='doVrijeme'/></td>" +
                    "<td><input type='button' id='traziVrijeme' value='Trazi po vremenu'/></td></tr>" +
                    "<tr><td><input type='date' id='korime' /></td>" +
                    "<td><input type='button'  class='gumb' id='Korimetrazi' value='Trazi po Korisnickom Imenu'/></td></tr>" +
                    "</table>" +
                    "</div>";
                $('#sadrzaj').append(tablica2);
                
            }
            else{
                var tablica2 = "<table id='Tablica' border='1'><caption>Dnevnik</caption><thead>" +
                    "<tr>" +
                    "<th>id</th>" +
                    "<th>korisnik</th>" +
                    "<th>opis</th>" +
                    "<th>vrijeme</th>" +
                    "</tr>" +
                    "</thead><tbody></tbody></table>" +
                    "<div id='gumbi'>" +
                    "<table>"+
                    "<tr><td><input type='date' id='odVrijeme' placeholder='odVrijeme'/></td>" +
                    "<td><input type='date' id='doVrijeme' placeholder='doVrijeme'/></td>" +
                    "<td><input type='button' id='traziVrijeme' value='Trazi po vremenu'/></td></tr>" +
                    "<tr><td><input type='date' id='korime' /></td>" +
                    "<td><input type='button' class='gumb' id='Korimetrazi' value='Trazi po Korisnickom Imenu'/></td></tr>" +
                    "</table>" +
                    "</div>";
                $('#sadrzaj').append(tablica2);
            }
            $.each(json, function (i, item) {
                $($('<tr>').append(
                    $('<td>').text(item.id),
                    $('<td>').text(item.korisnik),
                    $('<td>').text(item.opis),
                    $('<td>').text(item.vrijeme)
                ).appendTo('#Tablica tbody'));
            });
            $('#Tablica').dataTable({
                destroy: true,
                bPaginate:true,
                bFilter:true
            });
            $('#traziVrijeme').click(function () {
                $('#Tablica').dataTable().fnDestroy();
                var n=30;
                var objekt={
                    'od':$('#odVrijeme').val(),
                    'do':$('#doVrijeme').val()
                };
                var data=JSON.stringify(objekt);
                $('#gumbi').remove();
                $.ajax({
                    url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&data="+ data,
                    type: "POST",
                    dataType: "json",
                    success: function (json) {
                        if($('#Tablica').length > 0) {

                            $('#Tablica').remove();
                            var tablica2 = "<table id='Tablica' border='1'><caption>Dnevnik</caption><thead>" +
                                "<tr>" +
                                "<th>id</th>" +
                                "<th>korisnik</th>" +
                                "<th>opis</th>" +
                                "<th>vrijeme</th>" +
                                "</tr>" +
                                "</thead><tbody></tbody></table>";
                            $('#sadrzaj').append(tablica2);
                        }
                        else{
                            var tablica2 = "<table id='Tablica' border='1'><caption>Dnevnik</caption><thead>" +
                                "<tr>" +
                                "<th>id</th>" +
                                "<th>korisnik</th>" +
                                "<th>opis</th>" +
                                "<th>vrijeme</th>" +
                                "</tr>" +
                                "</thead><tbody></tbody></table>";
                            $('#sadrzaj').append(tablica2);
                        }
                        $.each(json, function (i, item) {
                            $($('<tr>').append(
                                $('<td>').text(item.id),
                                $('<td>').text(item.korisnik),
                                $('<td>').text(item.opis),
                                $('<td>').text(item.vrijeme)
                            ).appendTo('#Tablica tbody'));
                        });
                        $('#Tablica').dataTable({
                            destroy: true,
                            bPaginate:true,
                            bFilter:true
                        });
                    }
                });
            });
            $('#Korimetrazi').click(function () {
                var n=31;
                var korsnik=$('#korime').val();
                $('#Tablica').dataTable().fnDestroy();

                $('#gumbi').remove();
                $.ajax({
                    url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n  + "&korsnik="+ korsnik,
                    type: "POST",
                    dataType: "json",
                    success: function (json) {
                        if($('#Tablica').length > 0) {
                            $('#Tablica').remove();
                            var tablica2 = "<table id='Tablica' border='1'><caption>Dnevnik</caption><thead>" +
                                "<tr>" +
                                "<th>id</th>" +
                                "<th>korisnik</th>" +
                                "<th>opis</th>" +
                                "<th>vrijeme</th>" +
                                "</tr>" +
                                "</thead><tbody></tbody></table>";
                            $('#sadrzaj').append(tablica2);
                        }
                        else{
                            var tablica2 = "<table id='Tablica' border='1'><caption>Dnevnik</caption><thead>" +
                                "<tr>" +
                                "<th>id</th>" +
                                "<th>korisnik</th>" +
                                "<th>opis</th>" +
                                "<th>vrijeme</th>" +
                                "</tr>" +
                                "</thead><tbody></tbody></table>";
                            $('#sadrzaj').append(tablica2);
                        }
                        $.each(json, function (i, item) {
                            $($('<tr>').append(
                                $('<td>').text(item.id),
                                $('<td>').text(item.korisnik),
                                $('<td>').text(item.opis),
                                $('<td>').text(item.vrijeme)
                            ).appendTo('#Tablica tbody'));
                        });
                        $('#Tablica').dataTable({
                            destroy: true,
                            bPaginate:true,
                            bFilter:true
                        });
                    }
                });
            });
        }

    });
});
