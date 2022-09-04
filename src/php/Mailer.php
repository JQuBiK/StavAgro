<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'Config.php';

class Mailer {

	public $phpMailer;
		
	function __construct() {
		$this->phpMailer = new PHPMailer();
		if (Config::$isSMTP) {
			$this->phpMailer->isSMTP();
			$this->phpMailer->Host = Config::$hostSMTP;

			$this->phpMailer->SMTPAuth = true;
			$this->phpMailer->Username = Config::$usernameSMTP;
			$this->phpMailer->Password = Config::$passwordSMTP;
			$this->phpMailer->SMTPSecure = Config::$secureSMTP;
			$this->phpMailer->Port = Config::$port;
		}
		$this->phpMailer->CharSet = Config::$charSet;
	}
	
	function __destruct() {
		$this->phpMailer->smtpClose();
	}

	public function sendMail($sendTo, $subject, $name, $mail, $phone) {
		$this->phpMailer->setFrom("freezof1x@gmail.com", "Email bot");
		$this->phpMailer->Subject = $subject;
		$this->phpMailer->Body = $this->toTable($name, $mail, $phone);
		$this->phpMailer->isHTML(true);	
		$this->phpMailer->addAddress($sendTo);
		
		return $this->phpMailer->send() == true ? "true" : "false";

	}

	private function toTable($name, $mail, $phone) {
		return "<table border=1>" .
			"<tr>" .
			"<td> Имя клиента </td>" .
			"<td>" . $name . "</td>" .
			"</tr>" .
			"<tr>" .
			"<td> Номер телефона </td> " .
			"<td>" . $phone . "</td>" .
			"</tr>" .
			"<tr>" .
			"<td> Email </td> " .
			"<td>" . $mail . "</td>" .
			"</tr>" .
			"</table>";
	}
}

?>
