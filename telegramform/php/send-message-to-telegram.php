<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "7240044497:AAF3qEryVqZYtHRCUUhrqvxnX8Hp6ko15rg";
$chat_id = "422688526";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
 
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: success.html');
} else {
  echo "Error";
}
?>