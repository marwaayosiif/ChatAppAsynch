<!DOCTYPE html>
<html>

<head>
    <title>jQuery Mobile Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css">
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="jquery-mobile.css">
    <script src="jquery-mobile.js"></script>
</head>

<body>
    <!-------------- First page for form ----------->
    <div data-role="page">
        <!-------------- First page header ----------->
        <div data-role="header">
            <h1>Welcome To Chat App</h1>
        </div>
        <!-------------- First page main content ----------->
        <div data-role="main" class="ui-content">
            <form method="post" action="login" data-ajax="false">
                <label for="name" >Name : <span>*</span></label>
                <input type="text" name="name" id="name" placeholder="Name">

                <fieldset data-role="controlgroup">
                    <legend>Gender:</legend>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="female" value="female">
                </fieldset>
                <input type="submit" data-inline="true" value="Submit" data-theme="b">
            </form>
        </div>
</body>

</html>