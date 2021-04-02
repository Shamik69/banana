<?php
    $x= $_POST;
    $reasons=json_decode(file_get_contents('../json/reasons.json'), true);
    echo $reasons[$x[0]];