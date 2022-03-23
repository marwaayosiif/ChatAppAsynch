<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <title>Tuts+ Chat Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
    <script src="https://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="https://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
    <link rel="stylesheet" href="chat.css" />
    <script src="chat.js"></script>

</head>

<body>
    <div id="wrapper">
        <div id="menu">
            <p class="welcome">Welcome, ${name} <b></b></p>
            <p class="logout"><a href="/webApp/index.jsp" onclick="webSocket.close()" id="exit">Exit Chat</a></p>
        </div>

        <div id="chatbox">
           
        </div>

        <input name="usermsg" type="text" id="usermsg" />
        <input name="submitmsg" onclick="sendMessage()" type="button" id="submitmsg" value="Send" />
    </div>

    <div id="wrapper1" style="display: none;">
        <ul id="users" style="list-style-type: none;">

        </ul>
    </div>
    <input type="hidden" id="name" value="${name}">
    <input type="hidden" id="gender" value="${gender}">
    <input type="hidden" id="sessionId" value="${sessionId}">

</body>

</html>