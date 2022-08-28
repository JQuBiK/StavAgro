<?php

require 'vendor/autoload.php';
require 'Mailer.php';

try {
$subjectTech = $_POST['technical'];
$subjectServ = $_POST['service'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$subject = "Без темы";

if ($subjectTech == "true") {
	$subject = "Техника";
} elseif ($subjectServ == "true") {
	$subject = "Сервис";
}

$mailer = new Mailer();

$mailer->sendMail(Config::$baseMail, $subject, $name, $email, $phone);
} catch (Exception $e) {
	echo $e;
}
?>
