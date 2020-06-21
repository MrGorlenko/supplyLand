<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/ie6/img/img/top.php'); 
$o['USERNAME'] = '3264582EE23369671C0E13B1E54C4C4E';
$client_lnk = new MLClient($o);
echo $client_lnk->build_links(); 
?>