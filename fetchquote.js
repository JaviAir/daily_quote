
let http = new XMLHttpRequest();



function getQuote() {

http.open('GET', 'http://quotes.rest/qod');
http.onreadystatechange = () => {

    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        let data = JSON.parse(http.responseText);
        let quote = data.contents.quotes[0].quote;
        document.getElementById('quote').innerHTML = quote;
        //get the returned data
    }

    // end of state change
}

http.send();







}