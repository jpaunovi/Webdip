$(document).ready(function () {
    $('#StatistikaLokacija').click(function () {
        $('#Tablica').dataTable().fnDestroy();
        var n =21;
        $('#gumbi1').remove();
        $.ajax({
            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type: "POST",
            dataType: "json",
            success: function (json) {
                if($('#Tablica').length > 0) {
                    $('#Tablica').remove();
                    $('#gumbi1').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                        "<tr>" +
                        "<th>Naziv Lokacije</th>" +
                        "<th>Like</th>" +
                        "<th>dislike</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>" +
                        "<div id='gumbi1'>" +
                        "<input type='date' id='od' placeholder='od'/>" +
                        "<input type='date' id='do' placeholder='do'/>" +
                        "<input type='button' class='gumb' id='trazi' value='Trazi po datumu'/>" +
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                }
                else{
                    $('#gumbi1').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                        "<tr>" +
                        "<th>Naziv Lokacije</th>" +
                        "<th>Like</th>" +
                        "<th>dislike</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>" +
                        "<div id='gumbi1'>" +
                        "<input type='date' id='od' placeholder='od'/>" +
                        "<input type='date' id='do' placeholder='do'/>" +
                        "<input type='button' class='gumb' id='trazi' value='Trazi po datumu'/>"
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                }
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.NazivLokacije),
                        $('<td>').text(item.like),
                        $('<td>').text(item.dislike)

                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });

                $('#trazi').click(function () {
                    if($('#Tablica').length > 0){
                        $('#Tablica').dataTable().fnDestroy();
                        $('#Tablica').remove();
                        var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                            "<tr>" +
                            "<th>Naziv Lokacije</th>" +
                            "<th>Like</th>" +
                            "<th>dislike</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);

                    }
                    else {
                        var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                            "<tr>" +
                            "<th>Naziv Lokacije</th>" +
                            "<th>Like</th>" +
                            "<th>dislike</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                    }
                    var odd=$('#od').val();
                    var doo=$('#do').val();
                    var n2=23;
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n2 +"&od=" + odd + "&do=" + doo,
                        type: "POST",
                        dataType: "json",
                        success: function (json2) {
                            $.each(json2, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.NazivLokacije),
                                    $('<td>').text(item.like),
                                    $('<td>').text(item.dislike)

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
    $('#StatistikaProjekcija').click(function () {
        var n =22;
        $('#Tablica').dataTable().fnDestroy();
        $.ajax({
            url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
            type: "POST",
            dataType: "json",
            success: function (json) {
                if($('#Tablica').length > 0) {
                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                    $('#gumbi1').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                        "<tr>" +
                        "<th>Naziv Lokacije</th>" +
                        "<th>Like</th>" +
                        "<th>dislike</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>" +
                        "<div id='gumbi1'>" +
                        "<input type='date' id='od' placeholder='od'/>" +
                        "<input type='date' id='do' placeholder='do'/>" +
                        "<input type='button' class='gumb' id='trazi' value='Trazi po datumu'/>";
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                }
                else{
                    $('#gumbi1').remove();
                    var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                        "<tr>" +
                        "<th>Naziv Lokacije</th>" +
                        "<th>Like</th>" +
                        "<th>dislike</th>" +
                        "</tr>" +
                        "</thead><tbody></tbody></table>" +
                        "<div id='gumbi1'>" +
                        "<input type='date' id='od' placeholder='od'/>" +
                        "<input type='date' id='do' placeholder='do'/>" +
                        "<input type='button' class='gumb' id='trazi' value='Trazi po datumu'/>";
                        "</div>";
                    $('#sadrzaj').append(tablica2);
                }
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.NazivProjekcije),
                        $('<td>').text(item.like),
                        $('<td>').text(item.dislike)

                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });
                $('#trazi').click(function () {
                    if($('#Tablica').length > 0){
                        $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();

                        var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                            "<tr>" +
                            "<th>Naziv Lokacije</th>" +
                            "<th>Like</th>" +
                            "<th>dislike</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                        
                    }
                    else {
                        var tablica2 = "<table id='Tablica' border='1'><caption>Statistika like/dislike</caption><thead>" +
                            "<tr>" +
                            "<th>Naziv Lokacije</th>" +
                            "<th>Like</th>" +
                            "<th>dislike</th>" +
                            "</tr>" +
                            "</thead><tbody></tbody></table>";
                        $('#sadrzaj').append(tablica2);
                        
                    }
                    var odd=$('#od').val();
                    var doo=$('#do').val();
                    var n2=24;
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n2 +"&od=" + odd + "&do=" + doo,
                        type: "POST",
                        dataType: "json",
                        success: function (json2) {
                            $.each(json2, function (i, item) {
                                $($('<tr>').append(
                                    $('<td>').text(item.NazivProjekcije),
                                    $('<td>').text(item.like),
                                    $('<td>').text(item.dislike)

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