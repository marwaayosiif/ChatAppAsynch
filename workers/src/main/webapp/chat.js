// var webSocket;

function sendMsg() {
    console.log("fsdgdfhtdgh")
    var name = $("#name").val();
    var gender;
    if ($("#male").is(":checked"))
        gender = "male";
    else
        gender = "female";
    var message = $("#usermsg").val()
    var objJson = { "name": name, "gender": gender, "date": new Date().toString(), "message": message };
    // webSocket.send(JSON.stringify(objJson));
    document.getElementById("usermsg").value = "";

    // var username = $("#username").val();
    // var message = $("#message").val();
    // var jsonData = { "username": username, "message": message };
    $.ajax({
        url: 'ChatServlet', //servlet url
        type: 'POST', //servlet request type
        contentType: "application/x-www-form-urlencoded; charset=utf-8", //For input type
        data: { "data": JSON.stringify(objJson) }, //input data
        dataType: 'json', //For output type
        success: (data, status) => {//when will it be called?????
            if (status == "success") {
                console.log("seccuessssssssssssssss");
            }
        }
    });
}

var w;

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("worker.js");
            w.postMessage("")
        }
        w.onmessage = function (event) {
            console.log("from main thread " + event.data)
            console.table(event.data.includes("message"))
            if(event.data.includes("message")){
                var data = event.data.split("\n")
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    console.table( JSON.parse(element));
                    addElement(JSON.parse(element),"msg");
                }
            }
        }
    } else {
        console.log("mafeeeeesh worker");
    }
}

function stopWorker() {
    w.terminate();
    w = "undefined";
}

// $(document).ready(function () {
//     webSocket = new WebSocket('ws://localhost:9090/webApp/endpointServer');
//     webSocket.onopen = openSocket;
//     webSocket.onmessage = messageSocket;
// });



// function openSocket() {
//     var name = $("#name").val();
//     var gender = $("#gender").val();    
//     var sessionId = $("#sessionId").val();
//     var objJson = { "sessionId": sessionId,"date": new Date().toString(), "name": name, "gender": gender }
//     webSocket.send(JSON.stringify(objJson));
//     console.log(objJson);
// }

// function messageSocket(event) {
//     if (event.data.substring(0,1) === "0") {
//         var string = event.data.substring(1)
//         var jsonClient = JSON.parse(string);
//         document.getElementById(jsonClient.sessionId).remove()
//         if(document.getElementsByTagName("li").length == 0){
//             document.getElementById("wrapper1").style.display = "none";
//         }
//     } else if (event.data.trim().substring(0,1) === "a") {
//         var msgObject = event.data.substring(1)
//         var jsonClient = JSON.parse(msgObject);
//         addElement(jsonClient, "msg");

//     } else {

//         var jsonClient = JSON.parse(event.data);
//         addElement(jsonClient);
//     }

// }
// $("a").attr("href", "webApp/index.jsp")

function addElement(element, flag = null) {
    var data = element.date.split("\(")
    if (flag == null) {

        document.getElementById("wrapper1").style.removeProperty("display")
        if (element.gender === "female") {
            $("#users").append(
                $('<li id=' + element.sessionId + '><div style="display:inline-block;"><img src="resources/woman.png"></div><div style="display:inline-block;">' + element.name + '<br><div style="font-size:10px; color:#808080">' + data[0] + '<br>' + data[1] + '</div></div></li><br>')
            );
        } else {

            $("#users").append(

                $('<li id=' + element.sessionId + '><div style="display:inline-block;"><img src="resources/man.png"></div><div style="display:inline-block;">' + element.name + '<br><div style="font-size:10px; color:#808080">' + data[0] + '<br>' + data[1] + '</div></div></li><br>')
            );
        }

    } else {
        if (element.gender === "female") {
            $("#chatbox").append(
                $('<div style="display:inline-block;"><img src="resources/woman.png"></div><div style="display:inline-block;">' + element.message + '<br> <div style="font-weight:bold">' + element.name + '</div>  <div style="font-size:10px; color:#808080">' + data[0] + '<br>' + data[1] + '</div></div><br><br>')
            );
        } else {
            $("#chatbox").append(

                $('<div style="display:inline-block;"><img src="resources/man.png"></div><div style="display:inline-block;">' + element.message + '<br> <div style="font-weight:bold">' + element.name + '</div>  <div style="font-size:10px; color:#808080">' + data[0] + '<br>' + data[1] + '</div></div><br><br>')
            );
        }
    }
}

// function sendMessage() {
//     console.log("fsdgdfhtdgh")
//     var name = $("#name").val();
//     var gender;
//     if($("#male").is(":checked"))
//         gender = "male";
//     else
//         gender = "female";
//     var message = $("#usermsg").val()
//     var objJson = { "name": name, "gender": gender, "date": new Date().toString(), "message": message };
//     webSocket.send(JSON.stringify(objJson));
//     document.getElementById("usermsg").value = "";
// }
