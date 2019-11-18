<?
if((isset($_GET['email'])&&$GET['email']!="")){
        $to  = 'simanova_a@mail.ru';
        $subject = 'Присоединиться';
        if (isset($_GET['about_yuorself'])&&$_GET['about_yuorself']!="") {
         $about_yuorself = '<p>О себе: '.$_GET['about_yuorself'].'</p>';
        }

        if (isset($_GET['name'])&&$_GET['name']!="") {
         $name = '<p>Имя: '.$_GET['name'].'</p>';
        }

        if (isset($_GET['phone'])&&$_GET['phone']!="") {
            $phone = '<p>Телефон: '.$_GET['phone'].'</p>';
        }
        
        $message = '
                <html>
                    <body>  
                     ' . $name . '
                        <p>Email: '.$_GET['email'].'</p>'
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