var webSocket;
$(document).ready(function () {
    webSocket = new WebSocket('ws://localhost:9090/webApp/endpointServer');
    webSocket.onopen = openSocket;
    webSocket.onmessage = messageSocket;
});



function openSocket() {
    var name = $("#name").val();
    var gender = $("#gender").val();
    var sessionId = $("#sessionId").val();
    var objJson = { "sessionId": sessionId,"date": new Date().toString(), "name": name, "gender": gender }
    webSocket.send(JSON.stringify(objJson));
    console.log(objJson);
}

function messageSocket(event) {
    if (event.data.substring(0,1) === "0") {
        var string = event.data.substring(1)
        var jsonClient = JSON.parse(string);
        document.getElementById(jsonClient.sessionId).remove()
        if(document.getElementsByTagName("li").length == 0){
            document.getElementById("wrapper1").style.display = "none";
        }
    } else if (event.data.trim().substring(0,1) === "a") {
        var msgObject = event.data.substring(1)
        var jsonClient = JSON.parse(msgObject);
        addElement(jsonClient, "msg");

    } else {

        var jsonClient = JSON.parse(event.data);
        addElement(jsonClient);
    }

}

function addElement(element, flag = null) {

    if (flag == null) {

        document.getElementById("wrapper1").style.removeProperty("display")
        if (element.gender === "female") {
            $("#users").append(
                $('<li id=' + element.sessionId + '><img src="resources/woman.png"><div>' + element.name+'</div><div>'+ element.date + '</div></li>')
            );
        } else {
            $("#users").append(

                $('<li id=' + element.sessionId + '><img src="resources/man.png"><div>' + element.name+'</div><div>'+ element.date + '</div></li>')
            );
        }

    } else {
        if (element.gender === "female") {
            $("#chatbox").append(
                $('<div class="d-flex"><img src="resources/woman.png"><div><div>' + element.message + '</div><div>' + element.date + '</div><div>' + element.name + '</div></div></div>')
            );
        } else {
            $("#chatbox").append(

                $('<div class="d-flex"><img src="resources/man.png"><div><div>' + element.message + '</div><div>' + element.date + '</div><div>' + element.name + '</div></div></div>')
            );
        }
    }
}

function sendMessage() {
    var name = $("#name").val();
    var gender = $("#gender").val();
    var message = $("#usermsg").val();
    var objJson = { "name": name, "gender": gender, "date": new Date().toString(), "message": message };
    webSocket.send(JSON.stringify(objJson));
    document.getElementById("usermsg").value = "";
}
