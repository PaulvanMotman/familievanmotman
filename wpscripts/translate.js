document.write(`
<div id="google_translate_container">
    <div id="google_translate_element"></div>
</div>

<style>
#google_translate_container {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 1000;
    background-color: #f1f1f1;
    border-bottom-left-radius: 5px;
    padding: 5px;
}
</style>
`);

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'nl', layout: google.translate.TranslateElement.InlineLayout.VERTICAL}, 'google_translate_element');
}

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(s);
