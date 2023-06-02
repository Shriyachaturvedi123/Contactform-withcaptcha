<?php
// Replace this file with your own CAPTCHA generation logic
session_start();

// Generate a random CAPTCHA string (replace with your own logic)
$captchaString = substr(md5(rand()), 0, 7);

// Save the CAPTCHA string in a session variable for validation
$_SESSION['captcha'] = $captchaString;

// Generate the CAPTCHA image
header('Content-type: image/png');
$captchaImage = imagecreate(120, 40);
$bgColor = imagecolorallocate($captchaImage, 255, 255, 255);
$textColor = imagecolorallocate($captchaImage, 0, 0, 0);
imagestring($captchaImage, 5, 30, 10, $captchaString, $textColor);
imagepng($captchaImage);
imagedestroy($captchaImage);
?>