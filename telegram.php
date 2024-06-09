<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "6851579908:AAGMfrB0HMbKhpHyhO1MjWq_Uz4X6dO-hUw";
$chat_id = "-4242716783";
$arr = array(
  'Имя: ' => $name,
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