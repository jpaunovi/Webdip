
$(document).ready(function () {
    $('#StatistikaPosjecenost').click(function () {
        $('#Tablica').dataTable().fnDestroy();
        var n=25;
        $('#gumbi1').remove();
        $.ajax({
            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type: "POST",
            dataType: "json",
            success: function (json) {
                if($('#Tablica').length > 0) {
                   //
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                        "<tr>" +
                        "<th>Ime korisnika</th>" +
                        "<th>Ime stranice</th>" +
                        "<th>broj posjeta</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                        var gumbi1="<div id='gumbi1'>" +
                        "<table><tr><td><input type='date' id='od' placeholder='od'/></td>" +
                        "<td><input type='date' id='do' placeholder='do'/></td>" +
                        "<td><input type='button' class='gumb' id='traziDatum' value='Trazi po datumu'/></td></tr>" +
                        "<tr><td><input type='date' id='odVrijeme' placeholder='odVrijeme'/></td>" +
                        "<td><input type='date'  id='doVrijeme' placeholder='doVrijeme'/></td>" +
                        "<td><input type='button' class='gumb' id='traziVrijeme' value='Trazi po vremenu'/></td></tr>" +
                        "<tr><td><input type='date' id='korime' /></td>" +
                        "<td><input type='button' class='gumb' id='Korimetrazi' value='Trazi po Korisnickom Imenu'/></td></tr>" +
                        "</table>" +
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                    $('#gumbi').append(gumbi1);

                }
                else{
                     var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                        "<tr>" +
                        "<th>Ime korisnika</th>" +
                        "<th>Ime stranice</th>" +
                        "<th>broj posjeta</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    var gumbi1="<div id='gumbi1'>" +
                        "<table><tr><td><input type='date' id='od' placeholder='od'/></td>" +
                        "<td><input type='date' id='do' placeholder='do'/></td>" +
                        "<td><input type='button' class='gumb' id='traziDatum' value='Trazi po datumu'/></td></tr>" +
                        "<tr><td><input type='date' id='odVrijeme' placeholder='odVrijeme'/></td>" +
                        "<td><input type='date' id='doVrijeme' placeholder='doVrijeme'/></td>" +
                        "<td><input type='button' class='gumb' id='traziVrijeme' value='Trazi po vremenu'/></td></tr>" +
                        "<tr><td><input type='date' id='korime' /></td>" +
                        "<td><input type='button' class='gumb' id='Korimetrazi' value='Trazi po Korisnickom Imenu'/></td></tr>" +
                        "</table>" +
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                    $('#gumbi').append(gumbi1);

                }
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.korisnik),
                        $('<td>').text(item.stanica),
                        $('<td>').text(item.broj)
                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });

                $('#traziDatum').click(function () {
                    var n=27;
                    var stupac='stanica';
                    var vrijeme='datum';
                    var objekt={
                        'od':$('#od').val(),
                        'do':$('#do').val()
                    };
                    var data=JSON.stringify(objekt);
                    $('#gumbi1').remove();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&stupac=" + stupac + "&vrijeme="+ vrijeme + "&data="+ data,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            else{
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);

                            }
                            $.each(json, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.korisnik),
                                    $('<td>').text(item.stanica),
                                    $('<td>').text(item.broj)

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
                $('#traziVrijeme').click(function () {
                    var n=27;
                    var stupac='stanica';
                    var vrijeme='vrijeme';
                    var objekt={
                        'od':$('#odVrijeme').val(),
                        'do':$('#doVrijeme').val()
                    };
                    var data=JSON.stringify(objekt);
                    $('#gumbi1').remove();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&stupac=" + stupac + "&vrijeme="+ vrijeme + "&data="+ data,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            else{
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);

                            }
                            $.each(json, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.korisnik),
                                    $('<td>').text(item.stanica),
                                    $('<td>').text(item.broj)

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
                    var n=28;
                    var stupac='stanica';
                    var korsnik=$('#korime').val();

                    $('#gumbi1').remove();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&stupac=" + stupac + "&korsnik="+ korsnik,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            else{
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika posjeta</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            $.each(json, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.korisnik),
                                    $('<td>').text(item.stanica),
                                    $('<td>').text(item.broj)

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
    $('#StatistikaUpit').click(function () {
        $('#Tablica').dataTable().fnDestroy();
        $('#gumbi1').remove();
        var n=26;
        $.ajax({
            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type: "POST",
            dataType: "json",
            success: function (json) {
                if($('#Tablica').length > 0) {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Upiti statistika</caption><thead>" +
                        "<tr>" +
                        "<th>Ime korisnika</th>" +
                        "<th>Ime upita</th>" +
                        "<th>broj posjeta</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    var gumbi1="<div id='gumbi1'>" +
                        "<table><tr><td><input type='date' id='od' placeholder='od'/></td>" +
                        "<td><input type='date' id='do' placeholder='do'/></td>" +
                        "<td><input type='button' class='gumb' id='traziDatum' value='Trazi po datumu'/></td></tr>" +
                        "<tr><td><input type='date' id='odVrijeme' placeholder='odVrijeme'/></td>" +
                        "<td><input type='date'  id='doVrijeme' placeholder='doVrijeme'/></td>" +
                        "<td><input type='button' class='gumb' id='traziVrijeme' value='Trazi po vremenu'/></td></tr>" +
                        "<tr><td><input type='date' id='korime' /></td>" +
                        "<td><input type='button' class='gumb' id='Korimetrazi' value='Trazi po Korisnickom Imenu'/></td></tr>" +
                        "</table>" +
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                    $('#gumbi').append(gumbi1);
                }
                else{
                    var tablica2 = "<table id='Tablica' border='1'><caption>Upiti statistika<</caption><thead>" +
                        "<tr>" +
                        "<th>Ime korisnika</th>" +
                        "<th>Ime upita</th>" +
                        "<th>broj posjeta</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>";
                    var gumbi1="<div id='gumbi1'>" +
                        "<table><tr><td><input type='date' id='od' placeholder='od'/></td>" +
                        "<td><input type='date' id='do' placeholder='do'/></td>" +
                        "<td><input type='button' class='gumb' id='traziDatum' value='Trazi po datumu'/></td></tr>" +
                        "<tr><td><input type='date' id='odVrijeme' placeholder='odVrijeme'/></td>" +
                        "<td><input type='date'  id='doVrijeme' placeholder='doVrijeme'/></td>" +
                        "<td><input type='button' class='gumb' id='traziVrijeme' value='Trazi po vremenu'/></td></tr>" +
                        "<tr><td><input type='date' id='korime' /></td>" +
                        "<td><input type='button' class='gumb' id='Korimetrazi' value='Trazi po Korisnickom Imenu'/></td></tr>" +
                        "</table>" +
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                    $('#gumbi').append(gumbi1);
                }
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.korisnik),
                        $('<td>').text(item.upit),
                        $('<td>').text(item.broj)

                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });
                $('#traziDatum').click(function () {
                    $('#Tablica').dataTable().fnDestroy();
                    var n=27;
                    var stupac='upit';
                    var vrijeme='datum';
                    var objekt={
                        'od':$('#od').val(),
                        'do':$('#do').val()
                    };
                    var data=JSON.stringify(objekt);
                    $('#gumbi1').remove();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&stupac=" + stupac + "&vrijeme="+ vrijeme + "&data="+ data,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if($('#Tablica').length > 0) {
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika upita</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime upita</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);

                            }
                            else{
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika upita</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            $.each(json, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.korisnik),
                                    $('<td>').text(item.upit),
                                    $('<td>').text(item.broj)

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
                $('#traziVrijeme').click(function () {
                    $('#Tablica').dataTable().fnDestroy();
                    var n=27;
                    var stupac='upit';
                    var vrijeme='vrijeme';
                    var objekt={
                        'od':$('#odVrijeme').val(),
                        'do':$('#doVrijeme').val()
                    };
                    var data=JSON.stringify(objekt);
                    $('#gumbi1').remove();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&stupac=" + stupac + "&vrijeme="+ vrijeme + "&data="+ data,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if($('#Tablica').length > 0) {
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime upit</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);

                            }
                            else{
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime upit</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);

                            }
                            $.each(json, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.korisnik),
                                    $('<td>').text(item.upit),
                                    $('<td>').text(item.broj)

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
                    var n=28;
                    var stupac='stanica';
                    var korsnik=$('#korime').val();

                    $('#gumbi1').remove();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n + "&stupac=" + stupac + "&korsnik="+ korsnik,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            else{
                                var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                                    "<tr>" +
                                    "<th>Ime korisnika</th>" +
                                    "<th>Ime stranice</th>" +
                                    "<th>broj posjeta</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                            }
                            $.each(json, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.korisnik),
                                    $('<td>').text(item.stanica),
                                    $('<td>').text(item.broj)

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


});