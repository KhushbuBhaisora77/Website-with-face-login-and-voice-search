let mic_btn = document.getElementById('speechtotext');
search_bar = document.getElementById('search_bar');

mic_btn.addEventListener('click', () => {

  var recognition = new webkitSpeechRecognition || window.SpeechRecognition;

  recognition.lang = "en-GB"
  recognition.onresult = function (event) {
    search_bar.value = event.results[0][0].transcript;
  }

  recognition.start();

  setTimeout(() => {
    if (search_bar.value == "") {
    } else {
      window.location = "http://www.google.com/search?q=" + search_bar.value;
      return false;
    }
  }, 5000);
});

var i = 0;
var txt = "Search Google ot type a URL";

if (location.reload) {
  types();
}
function types() {
  if (i < txt.length) {
    document.getElementById('search_bar').placeholder += txt.charAt(i);
    i++;
  }
  setTimeout(types, 100);
}





