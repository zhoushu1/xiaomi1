<?php
    //注册的业务逻辑
    // 1. 连接数据库
    // 2. 接收前端传过来的数据
    // 3. 在数据库中查询 用户名是否存在
    // 4. 存在 注册失败  不存在 将数据写入数据库 注册成功

    include('./conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from user where name='$username'";

    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo "<script>alert('用户名已存在');location.href='../html/zhuce.html';</script>";
        die;
    }
    
    $sql_ins = "insert into user(name,password)values('$username','$password')";

    $res = $mysqli->query($sql_ins);

    if($res){
        // echo '注册成功';
        echo "<script>alert('注册成功');location.href='../html/denglu.html';</script>";
    }
    // echo $sql_ins;
   
?>