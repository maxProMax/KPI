<?php
$conn = get_DB();
$username = "";
$loginError = FALSE;

session_start();

if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    $username = $_SESSION['name'];
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['username'])) {
    if ($stmt = $conn->prepare('SELECT id, password FROM users WHERE username = ?')) {
        $stmt->bind_param('s', $_POST['username']);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $password);
            $stmt->fetch();

            if ($_POST['password'] == $password) {
                session_regenerate_id();
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['name'] = $_POST['username'];
                $_SESSION['id'] = $id;

                $username = $_SESSION['name'];
            } else {
                $loginError = TRUE;
            }
        } else {
            $loginError = TRUE;
        }

        $stmt->close();
    }
}
