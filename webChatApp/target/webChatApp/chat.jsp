<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <title>Tuts+ Chat Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
    <script src="https://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="https://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="chat.css" />
    <script src="chat.js"></script>

</head>

<body>
    <div class="row">

        <div id="wrapper" class="col-8 my-5 mx-0">
            <div id="menu">
                <p class="welcome">Welcome, ${name} <b></b></p>
                <p class="logout">
                    <a
                        onclick="webSocket.close();window.location.replace('/webApp/index.jsp');" id="exit">Exit Chat
                    </a>
                </p>
            </div>

            <div id="chatbox" class="w-75">
            </div>

            <input name="usermsg" type="text" id="usermsg" required/>
            <input name="submitmsg" onclick="sendMessage();" type="button" id="submitmsg" value="Send" />
        </div>

        <div id="wrapper1" class="col-4 my-5 mx-0" style="display: none;">
            <div id="menu">
                <p class="welcome"><b> ONLINE USERS </b></p>
            </div>
            <ul id="users" style="list-style-type: none;">

            </ul>
        </div>
        <input type="hidden" id="name" value="${name}">
        <input type="hidden" id="gender" value="${gender}">
        <input type="hidden" id="sessionId" value="${sessionId}">

    </div>
</body>

</html>