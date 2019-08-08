<?php
    include('./conn.php');

    $sql = "select * from xiaomi";

    $res = $mysqli->query($sql);

    $arr = array();  //创建一个PHP数组

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>