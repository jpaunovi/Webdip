$(document).ready(function () {
    var n = 14;
    $.ajax({
        url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n,
        type: "POST",
        dataType: "json",
        success: function (json) {
            var list ="<ul id='taglist'></ul>";
            $('#sadrzaj').append(list);
            $.each(json, function (i, item) {
                var tag = "<li>" + item.tag + "</li>";
                $('#taglist').append(tag);
            });
            $('#taglist li').click(function () {
                if ($('#Tablica').length > 0) {
                    $('#Tablica').remove();
                }
                $(this).addClass('selected').siblings().removeClass('selected');
                var n = 15;
                var tag= $('li.selected').html();
                var tablica="<table id='Tablica'><caption>Galerija</caption><tbody><tr></tr></tbody></table>";
                $('#sadrzaj').append(tablica);
                $.ajax({
                    url: "//barka.foi.hr/WebDiP/2015_projekti/WebDiP2015x062/phpIspisJsona/IspisTabliceJson.php?n=" + n  + "&tag=" + tag,
                    type: "POST",
                    dataType: "json",
                    success: function (json) {
                        $.each(json, function (i, item) {
                            var slika="<td><img src="+item.slika+"></td>";
                            $('#Tablica tr').append(slika);
                        });
                    }
                });
            });
        }
    });
});