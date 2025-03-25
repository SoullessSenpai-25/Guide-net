<?php
/*
session_start();
// Destroying All Sessions
if(session_destroy())
{
// Redirecting To Home Page
    header("location: home.php");
    exit();
}*/
?>

<?php
session_start();
session_unset();
session_destroy();
/*
// Redirect to login page
header("Location: login.php");
exit();*/
?>

<script>
    localStorage.removeItem("id");
    sessionStorage.removeItem("id");
    window.location.href = "login.php";  // Redirect to login page
</script>