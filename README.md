# revAction

![sample_demo](https://user-images.githubusercontent.com/83494645/119923576-de500b80-bfac-11eb-939e-2fe5314ae513.gif)

## Overview

This is a JavaScript function to extract text information stored on a PC through a web server. This function is provided to JavaScript or IoT learners. For example, when information in a local text file updates on your PC, the information can be accessed through a web server using this JavaScript function. Other programs, such as PHP, are occasionally needed to extract such information. This page provides a sample PHP program. A web server, such as xampp, is needed.
We use the JavaScript function to display updated acceleration sensor information on the web using IoT tools, such as MESH. The photograph indicates the MESH acceleration sensor values, as displayed on a webpage.

## Operating instructions
-	Prepare a web server (e.g., xampp)
-	Copy the files (revAction.js, revAction.php, test.html, and sample.txt) in the document root directory ("C:\xampp\htdocs\).
-	Edit the location of a local text file in revAction.php. 
"C:\\xampp\\htdocs\\revAction\\sample.txt" is the default (sample) location.
-	Edit the interval time (intervalTime) and access PHP URL (accessUrl) in revAction.js.
The default intervalTime was 800 ms. 
The accessURL was `http://localhost/revAction/revAction.php `
-	Access `http://localhost/revAction/test.html`. Check for information changes upon updating the local text file.
-	Customize “test.html”.

## Caution
- Please refer to the access log in the web server, when you encounter some issues.
- Please do not use shorter intervalTimes. They may increase web server load.
- Do not set an intervalTime shorter than the browser limitation. For instance, the information updates were received within 5 s with Firefox browser, but not with other browsers.


## Options for customization

in revAction.js 
- intervalTime: 800

　Interval time (ms) to access from JavaScript (Ajax). Do not use shorter interval times.

- accessUrl: ` http://localhost/revAction/revAction.php `
  
  Webpage to access using JavaScript (Ajax).

in test.html 
- Please customize “test.html”.
- The information can be obtained using the following function. (Please use 's')


```
my_revAction.prototype.onChange = function (s) {

// sample
    document.getElementById("test_message").innerHTML += s +"<br />";

```




in revAction.php 
-	This is a sample PHP program to extract the last line in a local text file.
-	Please specify the local text file location.
-	Caution: Please use double backslash in the file path. The first one escapes the second to imply an actual backslash.
For instance, for a file located at "c:\xampp\htdocs\revAction\test.txt",
use "c:\\\\xampp\\\\htdocs\\\\revAction\\\\test.txt" as path. 

## Comments from the Author
We created a tool to display the information updates using an IoT tool (MESH) and revAction function. We tried to use IFTTT libraries; however, it did not work the way we expected. Therefore, we used revAction for displaying the information on the webpage.


