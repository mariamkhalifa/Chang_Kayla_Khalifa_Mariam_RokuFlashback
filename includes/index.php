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

    if(isset($_POST['username'])){
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Log user in
            $message = login($pdo, $username, $password);
        }else{
            $message = 'Please fill out the required field';
        }

        echo $message;
    }

    
