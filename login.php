<html>

<head>
    <title>Login here</title>

    <link rel="stylesheet" href="csss/login.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Flamenco" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

</head>

<body>
    <header>
        <nav>
            <div class="row clearfix">
                <ul class="main-nav" animate slideInDown>
                    <li><a href="index.php">HOME</a></li>
                    <li><a href="aboutus.php">ABOUT</a></li>
                    <li><a href="contactus.php">CONTACT</a></li>

                </ul>
            </div>
        </nav>
        <div class="login-content-header">
            <form action="login.php" method="post">
                <h1 class="login_heading">Admin Login</h1>
                <table class="form1">
                    <tr>
                        <th>Username </th>
                        <td class="table"><input type="text" name="username" placeholder="Enter Username" class="field1" /></td>
                    </tr>
                    <tr>
                        <th>Password </th>
                        <td class="table"><input type="password" name="password" placeholder="Enter Password" class="field1" /></td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2"><input type="submit" name="submit" value="SUBMIT" class="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    </header>
</body>

</html>