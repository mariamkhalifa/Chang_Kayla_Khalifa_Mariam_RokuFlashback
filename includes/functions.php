<?php
    require('connect.php');


    function getUsers($conn) {

        $getUsersQuery = 'SELECT * FROM tbl_users';
        $runQuery = $conn->query($getUsersQuery);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    }


    function getMovies($conn) {

        $getMoviesQuery = 'SELECT * FROM tbl_movies';
        $runQuery = $conn->query($getMoviesQuery);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
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

    function addUser($conn, $username, $password, $avatar, $role) {
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
            $add_user_query = 'INSERT INTO tbl_users (username, password, avatar, role) VALUES (:username, :password, :avatar, :role)';
            $run_query = $conn->prepare($add_user_query);
            $add_user_result = $run_query->execute(
                array(
                    ':username' => $username,
                    ':password' => $password,
                    ':avatar' => $avatar,
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