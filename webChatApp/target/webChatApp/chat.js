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
$("a").attr("href", "webApp/index.jsp")

function addElement(element, flag = null) {
    var data =element.date.split("\(")
    if (flag == null) {
        document.getElementById("wrapper1").style.removeProperty("display")
        if (element.gender === "female") {
            $("#users").append(
                $('<li class="row" id='+element.sessionId+'><div class="col-1 mx-3 my-1 p-1"><img src="resources/woman.png"></div><div class="col-9">' +element.name +'<br><div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div></li>')
            );
        } else {
            $("#users").append(
                $('<li class="row" id='+element.sessionId+'><div class="col-1 mx-3 my-1 p-1"><img src="resources/man.png"></div><div class="col-9">' +element.name+'<br><div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div></li>')
            );
        }

    } else {
        if (element.gender === "female") {
            $("#chatbox").append(
                $('<div class="row"><div class="col-1 m-3"><img src="resources/woman.png"></div><div class="col-9">'+element.message+'<br> <div style="font-weight:bold">' +element.name+'</div>  <div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div></div>')
            );
        } else {
            $("#chatbox").append(
                $('<div class="row"><div class="col-1 m-3"><img src="resources/man.png"></div><div class="col-9">'+element.message+'<br> <div style="font-weight:bold">' +element.name+'</div>  <div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div></div>')
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
