/*Dropdown Menu Toggle*/
$(document).ready(function() {
    $('dropdown-toggle').dropdown()
});


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}



$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
        'mailto:jeanhern81@gmail.com?subject=' +
        $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#fr1').submit();
    });
});




