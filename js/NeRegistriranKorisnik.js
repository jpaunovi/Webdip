$(document).ready(function($) {
    var n = 6;
    $.ajax({
        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
        type: "POST",
        dataType: "json",

        success: function (json) {
            if ($('#Tablica').length > 0) {
                                    $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                var tablica = "<table id='Tablica' border='1'><caption>Lokacije</caption><thead>" +
                    "<tr>" +
                    "<th>Id Lokacije</th>" +
                    "<th>Naziv Lokacije</th>" +
                    "<th>drzava</th>" +
                    "<th>Grad</th>" +
                    "<th>Ulica</th>" +
                    "<th>Postanski broj</th>" +
                    "</tr>" +
                    "</thead><tbody></tbody></table>";
                $('#sadrzaj').append(tablica);
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.idlokacija),
                        $('<td>').text(item.NazivLokacije),
                        $('<td>').text(item.drzava),
                        $('<td>').text(item.grad),
                        $('<td>').text(item.ulica),
                        $('<td>').text(item.postanskibroj)
                    ).appendTo('#Tablica tbody'));
                });
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });
                $('#Tablica tr').click(function () {
                    var j=10;
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var lokacijaid = $('#Tablica tr.selected td:nth-child(1)').html();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + j + "&idlokacije=" + lokacijaid,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if ($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                                $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<tr>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Datum projekcije</th>" +
                                    "<th>Vrijeme projekcij</th>" +
                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.datum_projekcije_od),
                                        $('<td>').text(item.vrijeme_projekcij_od)
                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                });
                            }
                            else {
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Datum projekcije</th>" +
                                    "<th>Vrijeme projekcij</th>" +

                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.datum_projekcije_od),
                                        $('<td>').text(item.vrijeme_projekcij_od)
                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                });
                            }
                        }
                    });
                });
            }
            else {
                var tablica2 = "<table id='Tablica' border='1'><caption>Lokacije</caption><thead>" +
                    "<tr>" +
                    "<th>Id Lokacije</th>" +
                    "<th>Naziv Lokacije</th>" +
                    "<th>drzava</th>" +
                    "<th>Grad</th>" +
                    "<th>Ulica</th>" +
                    "<th>Postanski broj</th>" +

                    "</tr>" +
                    "</thead><tbody></tbody></table>";
                $('#sadrzaj').append(tablica2);
                $.each(json, function (i, item) {
                    $($('<tr>').append(
                        $('<td>').text(item.idlokacija),
                        $('<td>').text(item.NazivLokacije),
                        $('<td>').text(item.drzava),
                        $('<td>').text(item.grad),
                        $('<td>').text(item.ulica),
                        $('<td>').text(item.postanskibroj)
                    ).appendTo('#Tablica tbody'));
                })
                $('#Tablica').dataTable({
                    destroy: true,
                    bPaginate:true,
                    bFilter:true
                });
                $('#Tablica tr').click(function () {
                    var j=10;
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var lokacijaid = $('#Tablica tr.selected td:nth-child(1)').html();
                    $.ajax({
                        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + j + "&idlokacije=" + lokacijaid,
                        type: "POST",
                        dataType: "json",
                        success: function (json) {
                            if ($('#Tablica').length > 0) {
                                $('#Tablica').dataTable().fnDestroy();
                    $('#Tablica').remove();
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<tr>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Datum projekcije</th>" +
                                    "<th>Vrijeme projekcij</th>" +

                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.datum_projekcije_od),
                                        $('<td>').text(item.vrijeme_projekcij_od)
                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                });
                            }
                            else {
                                var tablica2 = "<table id='Tablica' border='1'><caption>Projekcije</caption><thead>" +
                                    "<th>Naziv Projekcije</th>" +
                                    "<th>Datum projekcije</th>" +
                                    "<th>Vrijeme projekcij</th>" +

                                    "</tr>" +
                                    "</thead><tbody></tbody></table>";
                                $('#sadrzaj').append(tablica2);
                                $.each(json, function (i, item) {
                                    $($('<tr>').append(
                                        $('<td>').text(item.NazivProjekcije),
                                        $('<td>').text(item.datum_projekcije_od),
                                        $('<td>').text(item.vrijeme_projekcij_od)
                                    ).appendTo('#Tablica tbody'));
                                });
                                $('#Tablica').dataTable({
                                    destroy: true,
                                    bPaginate:true,
                                    bFilter:true
                                });
                                $('#Tablica tr').click(function () {
                                    $(this).addClass('selected').siblings().removeClass('selected');
                                });
                            }
                        }
                    });
                });
            }
        }
    });
});