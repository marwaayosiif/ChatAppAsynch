/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var count = 0;
function sendMessage() {
    var req = new XMLHttpRequest();
    req.open("post", "ChatServlet", true);
    req.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    req.send("msg=" + document.getElementById("msg").value);

}
function receiveMessages() {
    if (window.EventSource) {
        var eventSource = new EventSource("ChatServlet"); // Get
        eventSource.onmessage = function (event) {
            console.log(event.lastEventId);

            document.getElementById('received').innerHTML += event.data;
            count++;


        }
    } else
        alert("SSE not supported");

}
