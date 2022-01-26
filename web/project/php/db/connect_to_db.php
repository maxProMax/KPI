<?php

    function get_DB() {
        $hostname = 'localhost';
        $username = "root";
        $password = "";

        $conn = new mysqli($hostname, $username, $password);

        if ($conn -> connect_error) {
            die("Connection failed: " . $conn -> connect_error);    
        }

        $sql = "USE tourism";

        $conn -> query($sql);

        return $conn;
    }
    
