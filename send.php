<?
if((isset($_POST['email'])&&$_POST['email']!="")){
        $to  = 'simanova_a@mail.ru';
        $subject = 'Присоединиться';
        if (isset($_POST['about_yuorself'])&&$_POST['about_yuorself']!="") {
         $about_yuorself = '<p>О себе: '.$_POST['about_yuorself'].'</p>';
        }

        if (isset($_POST['name'])&&$_POST['name']!="") {
         $name = '<p>Имя: '.$_POST['name'].'</p>';
        }

        if (isset($_POST['phone'])&&$_POST['phone']!="") {
            $phone = '<p>Телефон: '.$_POST['phone'].'</p>';
        }
        
        $message = '
                <html>
                    <body>  
                     ' . $name . '
                        <p>Email: '.$_POST['email'].'</p>'
                        . $phone . 
                        . $about_yuorself . '
     </body>
                </html>'; 
        $headers = "MIME-Version: 1.0" . PHP_EOL .
        "Content-Type: text/html; charset=utf-8" . PHP_EOL .
        'From: Intelcon' . PHP_EOL .
        'Reply-To: Intelcon' . PHP_EOL;
        mail($to, $subject, $message, $headers);
}
?>