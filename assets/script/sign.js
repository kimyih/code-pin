$(document).ready(function () {
    $('.login').click(function () {
        $('#sign__wrap').show();
        $('body').css('overflow', 'hidden');
    });

    $('.sign__close').click(function () {
        $('#sign__wrap').hide();
        $('body').css('overflow', 'auto');
    });
    $('.upch__btn').click(function () {
        $('.sign__in').hide();
        $('.sign__up').show();
        $('#signin__Email').val(null);
        $('#signin__Pass').val(null);
    });
    $('.inch__btn').click(function () {
        $('.sign__in').show();
        $('.sign__up').hide();
        $('#signup__Email').val(null);
        $('#signup__Pass').val(null);
        $('#signup__PassC').val(null);
    });
});
