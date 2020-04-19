<?php
    require('connect.php');


    function getAll($conn, $tbl) {

        $get_all_query = 'SELECT * FROM ' . $tbl;
        $run_query = $conn->query($get_all_query);

        $result = array();

        while($row = $run_query->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    }

    function getMoviesByFilter($conn, $args) {
        $filter_query = 'SELECT * FROM ' . $args['tbl'] . ' AS t, ' . $args['tbl2'] . ' AS t2, ' . $args['tbl3'] . ' AS t3';
        $filter_query .= ' WHERE t.' . $args['col'] . ' = t3.' . $args['col'];
        $filter_query .= ' AND t2.' . $args['col2'] . ' = t3.' . $args['col2'];
        $filter_query .= ' AND t2.' . $args['col3'] . ' = "' . $args['filter'] . '"';
        
        $results = $conn->query($filter_query);
        
        //echo $filter_query;
        
        if($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'Something went wrong!';
        }
    }

    function getMoviesByAge($conn, $args) {
        $get_movies_query = 'SELECT * FROM ' . $args['tbl1'] . ' AS t1, ' . $args['tbl2'] . ' AS t2, ' .  $args['tbl3'] . ' AS t3';
        $get_movies_query .= ' WHERE t1.' . $args['col1'] . ' = t3.' . $args['col1'] . ' AND t2.' . $args['col2'] . ' = t3.' . $args['col2'] ;
        $get_movies_query .= ' AND t2.' . $args['col2'] . ' <= ' . $args['permissions'] . ' AND t1.' . $args['type'] . ' = "' . $args['media_type'] . '"';

        //echo $get_movies_query

        $results = $conn->query($get_movies_query);

        if($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'Something went wrong!';
        }
    }

    function getCurrentGenre($conn, $args) {
        $get_genre_query = 'SELECT * FROM ' . $args['tbl1'] . ' AS t1, ' . $args['tbl2'] . ' AS t2';
        $get_genre_query .=	' WHERE t1.' . $args['col1'] . ' = ' . $args['id'] . ' AND t1.' . $args['col2'] . ' = t2.' . $args['col2'];

        //echo $get_genre_query;

        $results = $conn->query($get_genre_query);

        if($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'Something went wrong!';
        }
    }

    function getAgeRating($conn, $args) {
        $get_genre_query = 'SELECT * FROM ' . $args['tbl1'] . ' AS t1, ' . $args['tbl2'] . ' AS t2';
        $get_genre_query .=	' WHERE t1.' . $args['col1'] . ' = ' . $args['id'] . ' AND t1.' . $args['col2'] . ' = t2.' . $args['col2'];

        //echo $get_genre_query;

        $results = $conn->query($get_genre_query);

        if($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'Something went wrong!';
        }
    }

    function login($conn, $username, $password){
        //Check existance
        $check_exist_query = 'SELECT COUNT(*) FROM tbl_users WHERE username= :username';
        $user_set = $conn->prepare($check_exist_query);
        $user_set->execute(
            array(
                ':username' => $username,
            )
        );
    
        if($user_set->fetchColumn()>0){
            //Log user in
            $get_user_query = 'SELECT * FROM tbl_users WHERE username = :username';
            $get_user_query .= ' AND password = :password';
            $user_check = $conn->prepare($get_user_query);
            $user_check->execute(
                array(
                    ':username'=>$username,
                    ':password'=>$password
                )
            );
    
            while($found_user = $user_check->fetch(PDO::FETCH_ASSOC)){

                $user = array();
    
                $user['id'] = $found_user['id'];
                //$user['admin'] = $found_user['admin'];
                $user['avatar'] = $found_user['avatar'];
                $user['permissions'] = $found_user['permissions'];
                $user['username'] = $found_user['username'];
    
                return $user;
            }
    
        } else {
            //User does not exist
            $message = 'User does not exist';
            return $message;
        }    
    }

    function addUser($conn, $username, $password, $avatar, $permissions, $role) {
        $check_exist_query = 'SELECT COUNT(*) FROM tbl_users WHERE username= :username';
        $user_set = $conn->prepare($check_exist_query);
        $user_set->execute(
            array(
                ':username' => $username,
            )
        );
    
        if($user_set->fetchColumn()>0) {
            return 'This username is already taken!';
        } else {
            $add_user_query = 'INSERT INTO tbl_users (username, password, avatar, permissions, role) VALUES (:username, :password, :avatar, :permissions, :role)';
            $run_query = $conn->prepare($add_user_query);
            $add_user_result = $run_query->execute(
                array(
                    ':username' => $username,
                    ':password' => $password,
                    ':avatar' => $avatar,
                    ':permissions' => $permissions,
                    ':role' => $role
                )
                );

            if($add_user_result > 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    function getComments($conn, $tbl1, $tbl2) {
        $get_comments_query = 'SELECT * FROM ' . $tbl1 . ' AS t1, ' . $tbl2 . ' AS t2';
        $get_comments_query .= ' WHERE t1.user_id = t2.user_id';

        //echo $get_comments_query;

        $results = $conn->query($get_comments_query);

        if($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'Something went wrong!';
        }
    }

    function addComment($conn, $user_id, $comment) {
        date_default_timezone_set("America/New_York");
        $time = date('h:i a');
        
        $add_comment_query = 'INSERT INTO tbl_comments (user_id, comment, time) VALUES (:user_id, :comment, :time)';
        $run_query = $conn->prepare($add_comment_query);
        $add_comment_result = $run_query->execute(
            array(
                ':user_id' => $user_id,
                ':comment' => $comment,
                ':time' => $time
            )
        );

        //echo($add_comment_query);

        if($add_comment_result) {
            return true;
        } else {
            return false;
        }
    }
