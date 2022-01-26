<?php
include 'php/components/table-title.php';

$conn = get_DB();

$sql = 'SELECT 
        countries.Name as Country, 
        cities.Name as City, 
        hotels.Name as Hotel, 
        hotels.Date, 
        hotels.Price
        FROM hotels
        INNER JOIN countries
        ON hotels.ContryID = countries.ContryID
        INNER JOIN cities
        ON hotels.CityID = cities.CityID';

if (isset($_POST['country']) && $_POST['country']) {
    $sql .= " WHERE countries.Name = '{$_POST['country']}'";
}

$result = $conn->query($sql);

$table = '<table class="search-result-table">
        <thead>
            <tr>
                <th>Країна</th>
                <th>Місто</th>
                <th>Готель</th>
                <th>Дата</th>
                <th>Ціна</th>
            </tr>
        </thead>
        <tbody>';

while ($row = $result->fetch_assoc()) {
    $table .= "<tr>
            <td>" . $row["Country"] . "</td>
            <td>" . $row["City"] . "</td>
            <td>" . $row["Hotel"] . "</td>
            <td>" . $row["Date"] . "</td>
            <td>" . $row["Price"] . "грн</td>
        </tr>";
}

echo $table . "</tbody></table>";
