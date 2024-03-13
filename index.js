window.onload = function() {
    var referrer = document.referrer;
    
    if (referrer === "https://t.co/") {
        window.location.href = "index.html";
    } else {
        displayNotFoundPage();
    }
};

function displayNotFoundPage() {
    var notFoundContent = "<h1>404 Not Found</h1><p>ページが見つかりません。</p>";
    
    document.body.innerHTML = notFoundContent;
}
