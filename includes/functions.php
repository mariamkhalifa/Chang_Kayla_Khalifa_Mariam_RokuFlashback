<?php
    require('connect.php');


    function getUsers($conn) {

        $getUsers = 'SELECT * FROM tbl_users';
        $runQuery = $conn->query($getUsers);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    }


    function getMovies($conn) {

        $getMovies = 'SELECT * FROM tbl_movies';
        $runQuery = $conn->query($getMovies);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    }
