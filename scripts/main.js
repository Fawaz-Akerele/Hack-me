var body = document.getElementById("newsletter");
var oldNewsLetterContent = body.innerHTML;
setTimeout(function() {
    body.innerHTML = "<span>Hello</span>"
}, 1000);
setTimeout(function() {
    body.innerHTML = oldNewsLetterContent;
}, 3000);