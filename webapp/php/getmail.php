<?php

// 変数を定義する
$local_file = 'review.html';
$server_file = 'review.html';

// 接続を確立する
$conn_id = ftp_connect('172.16.21.130');

// ユーザー名とパスワードでログインする
$login_result = ftp_login($conn_id, 'www', 'password');

// $server_file をダウンロードし、$local_file への保存を試みる
if (ftp_get($conn_id, $local_file, $server_file, FTP_BINARY)) {
    echo "Successfully written to $local_file\n";
} else {
    echo "There was a problem\n";
}

// 接続を閉じる
ftp_close($conn_id);

?>