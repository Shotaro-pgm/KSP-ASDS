<?php require '../header.php'; ?>
<?php
$pdo=new PDO('mysql:host=localhost;dbname=A.S.D.S;charset=utf8', 'staff', 'password');
$sql=$pdo->prepare('select * from sectiontop where id=?');
$sql->execute([$_REQUEST['id']]);
foreach ($sql as $row) {
    echo '<p><img alt="image" src="img/', $row['img'], '-min.png"></p>';
    echo '<p>', $row['catchcopy'], '</p>';
    echo '<p>', $row['text'], '</p>';
}
?>
<?php require '../footer.php'; ?>