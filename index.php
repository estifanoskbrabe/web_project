<html>

<head>
  <title>Student Result Management System</title>
  <link rel="stylesheet" href="csss/style.css" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Flamenco" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
  <script defer src="../web_project/javascript/index.js"></script>
</head>

<body>
  <header>
    <nav>
      <div class="row clearfix">
        <ul class="main-nav" animate slideInDown>
          <li><a href="index.php">HOME</a></li>
          <li><a href="aboutus.php">ABOUT</a></li>
          <li><a href="contactus.php">CONTACT</a></li>
          <li><a href="login.php">ADMIN LOGIN</a></li>
        </ul>
      </div>
    </nav>
    <div class="main-content-header">
      <div id="error"></div>
      <form id="form" method="post" action="result.php" onsubmit="return validateForm()">
        <table class="table">
          <br>
          <h2 class="search">GET YOUR RESULT HERE!</h2>
          <br><br>
          <tr>
            <th class="name1">Rollno</th>
            <td class="name2"><input id="rollno" type="text" name="rollno" required class="box1" /></td>
          </tr>
          <tr>
            <th class="standered1">class</th>
            <td class="standered2"><input id="std" type="text" name="std" required class="box2" /></td>
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