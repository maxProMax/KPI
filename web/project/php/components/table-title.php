<?php
$country = "";

if (isset($_POST['country'])) {
    $country = $_POST['country'];
    echo  "<h3>Результати пошуку для <i>{$country}</i>:</h3>";
} else {
    echo "<h3>Bсі результати :</h3>";
}
