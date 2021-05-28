<?php

// 
// sample 
//
// Please use double backslash in the file path. 
// The first one escapes the second to imply an actual backslash.
// For instance, for a file located at "c:\xampp\htdocs\revAction\test.txt",
//  use "c:\\xampp\\htdocs\\revAction\\test.txt" as path. 
// 

$file_path = "C:\\xampp\\htdocs\\revAction\\sample.txt"; 

$file_data = file($file_path);
echo $file_data[count($file_data)-1];


?>
