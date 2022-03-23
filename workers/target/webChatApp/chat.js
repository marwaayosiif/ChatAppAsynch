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
                $('<li id='+element.sessionId+'><div style="display:inline-block;"><img src="resources/woman.png"></div><div style="display:inline-block;">' +element.name +'<br><div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div></li><br>')
            );
        } else {
            
            $("#users").append(
                
                $('<li id='+element.sessionId+'><div style="display:inline-block;"><img src="resources/man.png"></div><div style="display:inline-block;">' +element.name+'<br><div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div></li><br>')
            );
        }

    } else {
        if (element.gender === "female") {
            $("#chatbox").append(
                $('<div style="display:inline-block;"><img src="resources/woman.png"></div><div style="display:inline-block;">'+element.message+'<br> <div style="font-weight:bold">' +element.name+'</div>  <div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div><br><br>')
            );
        } else {
            $("#chatbox").append(

                $('<div style="display:inline-block;"><img src="resources/man.png"></div><div style="display:inline-block;">'+element.message+'<br> <div style="font-weight:bold">' +element.name+'</div>  <div style="font-size:10px; color:#808080">'+data[0] +'<br>'+data[1]+'</div></div><br><br>')
            );
        }
    }
}

function sendMessage() {
    console.log("fsdgdfhtdgh")
    var name = $("#name").val();
    console.log(name)
    var gender = $("gender:checked").val();
    console.log(gender)
    var message = $("#usermsg").val()
    console.log(message);
    var objJson = { "name": name, "gender": gender, "date": new Date().toString(), "message": message };
    webSocket.send(JSON.stringify(objJson));
    document.getElementById("usermsg").value = "";
}
