let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }), 50000
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100
});

Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})