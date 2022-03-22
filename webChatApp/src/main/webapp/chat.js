var webSocket;
$(document).ready(function () {
    webSocket = new WebSocket('ws://localhost:9090/webApp/endpointServer');
    webSocket.onopen = openSocket;
    webSocket.onmessage = messageSocket;
});

function openSocket() {
    console.log("hiiiiiiiiiiiii");
    var name = $("#name").val();
    var gender = $("#gender").val();
    var objJson = { "name": name, "gender": gender }
    webSocket.send(JSON.stringify(objJson));
    console.log(objJson);
}

function messageSocket(event) {
    console.log(event.data);
    var jsonClient = JSON.parse(event.data);
    addElement(jsonClient);
}

function addElement(element) {
    $("#users").append(
        $('<li><img src="resources/man.png">' + element.name + '</li>')
    );
}