let chris = {
    "name": "Chris",
    "height": "180cm",
    "age": "26",

}

fetch('script.php', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(chris)
}).then(function (response) {
    return response.text();
}).then(function (data) {
    console.log(data);
})