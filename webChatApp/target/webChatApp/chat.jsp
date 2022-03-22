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
    </head>
    <body>
        <div id="wrapper" >
            <div id="menu">
                <p class="welcome">Welcome, ${name} <b></b></p>
                <p class="logout"><a id="exit" href="#">Exit Chat</a></p>
            </div>
 
            <div id="chatbox"></div>
 
            <form name="message" action="">
                <input name="usermsg" type="text" id="usermsg" />
                <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
            </form>
        </div>
        <div id="wrapper">
            <ul data-role="listview" class="ui-listview" style="user-select: auto;">
                <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c" style="user-select: auto;"><div class="ui-btn-inner ui-li" style="user-select: auto;"><div class="ui-btn-text" style="user-select: auto;"><img src="images/gf.png" class="ui-li-icon ui-li-thumb" style="user-select: auto;">France</div></li>
                <!-- <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c" style="user-select: auto;"><div class="ui-btn-inner ui-li" style="user-select: auto;"><div class="ui-btn-text" style="user-select: auto;"><a href="index.html" class="ui-link-inherit" style="user-select: auto;"><img src="images/de.png" class="ui-li-icon ui-li-thumb" style="user-select: auto;">Germany <span class="ui-li-count ui-btn-up-c ui-btn-corner-all" style="user-select: auto;">4</span></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow" style="user-select: auto;">&nbsp;</span></div></li>
                <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c" style="user-select: auto;"><div class="ui-btn-inner ui-li" style="user-select: auto;"><div class="ui-btn-text" style="user-select: auto;"><a href="index.html" class="ui-link-inherit" style="user-select: auto;"><img src="images/gb.png" class="ui-li-icon ui-li-thumb" style="user-select: auto;">Great Britain <span class="ui-li-count ui-btn-up-c ui-btn-corner-all" style="user-select: auto;">0</span></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow" style="user-select: auto;">&nbsp;</span></div></li>
                <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c" style="user-select: auto;"><div class="ui-btn-inner ui-li" style="user-select: auto;"><div class="ui-btn-text" style="user-select: auto;"><a href="index.html" class="ui-link-inherit" style="user-select: auto;"><img src="images/fi.png" class="ui-li-icon ui-li-thumb" style="user-select: auto;">Finland <span class="ui-li-count ui-btn-up-c ui-btn-corner-all" style="user-select: auto;">12</span></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow" style="user-select: auto;">&nbsp;</span></div></li>
                
                
    
                <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c" style="user-select: auto;"><div class="ui-btn-inner ui-li" style="user-select: auto;"><div class="ui-btn-text" style="user-select: auto;"><a href="index.html" class="ui-link-inherit" style="user-select: auto;"><img src="images/sj.png" class="ui-li-icon ui-li-thumb" style="user-select: auto;">Norway <span class="ui-li-count ui-btn-up-c ui-btn-corner-all" style="user-select: auto;">328</span></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow" style="user-select: auto;">&nbsp;</span></div></li>
                <li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c" style="user-select: auto;"><div class="ui-btn-inner ui-li" style="user-select: auto;"><div class="ui-btn-text" style="user-select: auto;"><a href="index.html" class="ui-link-inherit" style="user-select: auto;"><img src="images/us.png" class="ui-li-icon ui-li-thumb" style="user-select: auto;">United States <span class="ui-li-count ui-btn-up-c ui-btn-corner-all" style="user-select: auto;">62</span></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow" style="user-select: auto;">&nbsp;</span></div></li> -->
            </ul>
        </div>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript">
            // jQuery Document
            $(document).ready(function () {});
        </script>
    </body>
</html>