<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'Config.php';

class Mailer {

	private $phpMailer;
		
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

	public function sendMail($sendTo, $subject, $mail, $phone) {
		$this->phpMailer->setFrom("dimibazi123@gmail.com", "DMITRIISUKABLYAD");
		$this->phpMailer->Subject = $subject;
		$this->phpMailer->Body = $this->toTable($mail, $phone);
		$this->phpMailer->isHTML(true);	
		$this->phpMailer->addAddress($sendTo);
		
		return $this->phpMailer->send();

	}

	private function toTable($mail, $phone) {
		return "<table border=1>" .
			"<tr>" .
			"<td> Email </td> " .
			"<td>" . $mail . "</td>" .
			"</tr>" .
			"<tr>" .
			"<td> Phone Number </td> " .
			"<td>" . $phone . "</td>" .
			"</tr>" .
			"</table>";
	}
}

?>
