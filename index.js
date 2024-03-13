function getReferrer() {
  console.log(document.referrer);
  return document.referrer;
}

function checkReferrerAndRedirect() {
  var referrer = getReferrer();
  var allowedReferrer = "https://t.co/";

  if (referrer === allowedReferrer) {
    window.location.href = "index.html";
  } else {
    window.location.href = "about:blank";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkReferrerAndRedirect();
});
