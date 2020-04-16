<?php
    require('functions.php');


    if(isset($_GET['users'])) {
        $result = getUsers($pdo);
        //echo json_encode($users);
    }

    if(isset($_GET['movies'])) {
        $result = getMovies($pdo);
        //echo json_encode($movies);
    }

    if(isset($_GET['add_user'])) {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        $avatar = trim($_POST['avatar']);
        $role = trim($_POST['role']);

        $result = addUser($pdo, $username, $password, $avatar, $role);
        //echo json_encode($result);
    }

    if(isset($_GET['username'])){
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Log user in
            $result = login($pdo, $username, $password);
        }else{
            $result = 'Please fill out the required field';
        }

        //echo $message;
    }

    

    echo json_encode($result);

    
