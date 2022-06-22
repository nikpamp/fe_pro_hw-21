let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.onload = function() {
    if (xhr.status === 200) {
        try {
            console.log(xhr.response);
        } catch {
            console.log(xhr.status)
        }
    }
};
xhr.send();

//---------------------------------

let xhr2 = new XMLHttpRequest();
xhr2.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
xhr2.onload = function() {
    if (xhr.status === 200) {
        try {
            console.log(xhr2.response);
        } catch {
            console.log(xhr2.status)
        }
    }
};
xhr2.send(JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
}));