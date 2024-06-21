<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $company = $_POST["company"];
    $service = $_POST["service"];
    $budget = $_POST["budget"];
    $description = $_POST["description"];

    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.yourdomain.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@yourdomain.com'; // SMTP username
        $mail->Password = 'your-email-password'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('your-email@yourdomain.com', 'Your Name or Business Name');
        $mail->addAddress('your-email@gmail.com'); // Add a recipient

        // Content
        $mail->isHTML(false); // Set email format to HTML
        $mail->Subject = "New Contact from $name";
        $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nService of Interest: $service\nBudget: $budget\nDescription:\n$description\n";

        $mail->send();
        echo 'Thank you! Your message has been sent.';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>


