$('.glyphicon-pause').click( function () { clock.stop(); });
$('.glyphicon-play').click( function () { clock.start(); });
$('.glyphicon-repeat').click( function () { clock.stop(); clock.setTime(900); });
