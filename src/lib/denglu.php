<?php
    // 登陆逻辑
    // 1. 连接数据库
    // 2. 接收前端数据
    // 3. 在数据库中查询数据
    // 4. 如果用户存在  那么判断 密码是否正确
    // 如果用户名不存在  直接登陆失败
    // 密码正确 登陆成功  否则 登陆失败

    include('./conn.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "select * from user where name='$username' and password='$password'";

    $res = $mysqli->query($sql);

    
    if($res->num_rows == 1){
        echo "<script>alert('登陆成功');location.href='../html/index.html';</script>";
    }else{
        echo "<script>alert('登陆失败');location.href='../html/denglu.html';</script>";
    }
?>