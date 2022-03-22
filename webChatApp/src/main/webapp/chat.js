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
    var sessionId = $("#sessionId").val();
    var objJson = {"sessionId": sessionId, "name": name, "gender": gender }
    webSocket.send(JSON.stringify(objJson));
    console.log(objJson);
}

function messageSocket(event) {
    console.log(event.data.indexOf(0));
    if(event.data.indexOf(0)==0){
        console.log(event.data)
        var string = event.data.substring(1)
        console.log("pkease "+string)
        var jsonClient = JSON.parse(string);
        console.log(jsonClient)
        document.getElementById(jsonClient.sessionId).remove()
        console.log(document.getElementsByTagName("li").length)
        if(document.getElementsByTagName("li").length == 0){
            document.getElementById("wrapper1").style.display = "none";
        }
        
    }else{
        var jsonClient = JSON.parse(event.data);
        addElement(jsonClient);
    }
    
}

function addElement(element) {
    document.getElementById("wrapper1").style.removeProperty("display")
    if (element.gender === "female") {
        $("#users").append(
            $('<li id='+element.sessionId+'><img src="resources/woman.png">' + element.name + '</li>')
        );
    } else {
        $("#users").append(

            $('<li id='+element.sessionId+'><img src="resources/man.png">' + element.name + '</li>')
        );
    }

}

function sendMessage() {
    var name = $("#name").val();
    var gender = $("#gender").val();
    var sessionId = $("#sessionId").val();
    var message = $("#usermsg").val()
    var objJson = {"sessionId": sessionId, "name": name, "gender": gender , "message":message }
    webSocket.send(objJson);
}
