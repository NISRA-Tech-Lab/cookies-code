let cookieBanner = document.getElementById("cookie-banner");

function loadGoogleAnalytics() {

    (function(w, d, s, l, i){
      w[l] = w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),
                  event:'gtm.js'});
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !='dataLayer'?'&l='+l: '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j,f);
  })
  (window,document,'script','dataLayer','GTM-5JBDKRW');

}

today = new Date();

document.getElementById('accept-cookies').onclick = function() {
  localStorage.setItem('cookie_answered', true);
  localStorage.setItem('cookie_date', today);
  cookieBanner.style.display = 'none';
  loadGoogleAnalytics();
}

document.getElementById('reject-cookies').onclick = function() {
  localStorage.setItem('cookie_answered', true);
  localStorage.setItem('cookie_date', today);
  cookieBanner.style.display = 'none';
}

function showCookieBanner() {

  diff = (today - new Date(localStorage.cookie_date)) / 1000 / 60 / 60 / 24;

  if (diff > 365) {
    localStorage.removeItem("cookie_answered");
    localStorage.removeItem("cookie_date");
  }

  if (!localStorage.cookie_answered) {
    cookieBanner.style.display = 'block';
  }
};

window.setInterval(function() {
  if (document.cookie == "") {
    localStorage.removeItem("cookie_answered");
    localStorage.removeItem("cookie_date");
  }
  showCookieBanner();
} , 100)

