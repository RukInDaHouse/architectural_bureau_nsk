<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];


$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru'; 									
$mail->SMTPAuth = true;
$mail->Username = 'nickolscky.vyach@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('nickolscky.vyach@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('nickolscky.vyach@yandex.ru');     // Кому будет уходить письмо 
$mail->isHTML(true); 

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br>Заказ этого пользователя: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>