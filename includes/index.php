<?php
    require('functions.php');


    if(isset($_GET['users'])) {
        $tbl_users = 'tbl_users';
        $result = getAll($pdo, $tbl_users);
    }

    if(isset($_GET['genre'])) {
        $tbl_video_genre = 'tbl_video_genre';
        $result = getAll($pdo, $tbl_video_genre);
    }

    if(isset($_GET['music_genre'])) {
        $tbl_audio_genre = 'tbl_audio_genre';
        $result = getAll($pdo, $tbl_audio_genre);
    }

    if(isset($_GET['media'])) {
        $tbl = trim($_GET['media']);
    }

    if(isset($_GET['genre'])) {
        $genre = trim($_GET['genre']);
    }

    if(isset($_GET['filter'])) {
        $args = array(
            'tbl' => 'tbl_' . $tbl,
            'tbl2' => 'tbl_' . $genre .'_genre',
            'tbl3' => 'tbl_link_' . $tbl . '_genre',
            'col' => $tbl . '_id',
            'col2' => 'genre_id',
            'col3' => 'genre_name',
            'filter' => $_GET['filter']
        );

        $result = getMoviesByFilter($pdo, $args);
    }

    // if(isset($_GET['movies'])) {
    //     $tbl_movies = 'tbl_movies';
    //     $result = getAll($pdo, $tbl_movies);
    // }

    if(isset($_GET['tv'])) {
        $tbl_tv = 'tbl_tv';
        $result = getAll($pdo, $tbl_tv);
    }

    if(isset($_GET['music'])) {
        $tbl_music = 'tbl_music';
        $result = getAll($pdo, $tbl_music);
    }

    if(isset($_GET['media'])) {
        $args = array(
            'tbl1' => 'tbl_media',
            'tbl2' => 'tbl_arating',
            'tbl3' => 'tbl_media_arating',
            'col1' => 'media_id',
            'col2' => 'arating_id',
            'type' => 'type',
            'media_type' => $_GET['media'],
            'permissions' => $_GET['permissions']
        );
        
        $result = getMoviesByAge($pdo, $args);
    }

    if(isset($_GET['comments'])) {
        $tbl_comments = 'tbl_comments';
        $tbl_users = 'tbl_users';
        $result = getComments($pdo, $tbl_comments, $tbl_users);
    }

    if(isset($_GET['add_comment'])) {
        $user_id = $_GET['user_id'];
        $comment = trim($_POST['comment']);
        $result = addComment($pdo, $user_id, $comment);
    }

    if(isset($_GET['add_user'])) {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        $avatar = trim($_POST['avatar']);
        $role = trim($_POST['role']);

        $result = addUser($pdo, $username, $password, $avatar, $role);
    }

    if(isset($_GET['username'])){
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            $result = login($pdo, $username, $password);
        }else{
            $result = 'Please fill out the required field';
        }
    }

    

    echo json_encode($result);

    
