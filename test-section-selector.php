<?php require 'header.php'; ?>
<div class="wrapper">
    <?php
    $pdo=new PDO('mysql:host=localhost;dbname=A.S.D.S;charset=utf8', 'shotaro', 'password');
    foreach ($pdo->query('select * from sectiontop') as $row) {
        echo '<h1>', $row['sectionname'], '</h1>';
        echo '<div><img src="img/', $row['img'], '-min.png"></div>';
    }
?>
</div>
<?php require 'footer.php'; ?>