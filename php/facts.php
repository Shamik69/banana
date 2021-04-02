<?php
    $x= $_POST;
    $facts= json_decode(file_get_contents('../json/facts.json'), true);
    // print_r($facts);
    // print_r($x);
    echo $facts[$x[0]];