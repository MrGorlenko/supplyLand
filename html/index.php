<?php
$dir = __DIR__;
echo '<b style="font-size: 18px;">Last edition</b><br />';
//die();
$dh = scandir($dir);
// Открыть заведомо существующий каталог и начать считывать его содержимое
foreach($dh as $item){
    if (substr($item,strlen($item)-5,5)=='.html') echo '<a href="'.$item.'">'.$item.'</a><br />';
}
?>