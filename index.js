$(document).ready(function () {
    renderCurrentTime();
    renderQuote();

    setInterval(renderCurrentTime, 1000);
});


function renderCurrentTime() {
    const el = document.getElementById("time");
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    const isColonVisible = second % 2 === 0;
    timeText = `${hour}<span style="visibility:${isColonVisible ? 'visible' : 'hidden'}">:</span>${minute}`;
    el.innerHTML = timeText;
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}
