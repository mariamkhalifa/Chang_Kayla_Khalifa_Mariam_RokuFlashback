<?php
    require('functions.php');


    if (isset($_GET['users'])) {
        $users = getUsers($pdo);
        echo json_encode($users);
    }

    elseif (isset($_GET['movies'])) {
        $movies = getMovies($pdo);
        echo json_encode($movies);
    }

    
