<?php
include '../db/connect_to_db.php';

$conn = get_DB();

$sql = 'SELECT Name as Country FROM countries';

$result = $conn->query($sql);

$countries = array();

while ($row = $result->fetch_assoc()) {
    $countries[] = $row['Country'];
}

$data = array('countries' => $countries);


echo json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
