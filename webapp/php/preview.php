<?PHP
header('Content-type: application/json; charset=utf-8');
$data = filter_input( INPUT_POST, 'データ' );

// ファイルのパスを変数に格納
$filename = 'preview.html';
 
// ファイルに書き込む
file_put_contents($filename, $data,FILE_APPEND);
 
// ファイルを出力する
readfile($filename);

$param = $data;	//　やりたい処理

echo json_encode( $param ); //　JSON形式に変換してから返す