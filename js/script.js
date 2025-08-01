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




function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay: false, includedLanguages: ''}, 'google_translate_element');}

document.addEventListener('DOMContentLoaded', function () {
  fetch('assets/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});