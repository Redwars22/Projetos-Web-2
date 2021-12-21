<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Dékount - Aplicador de Descontos</title>
    <link rel="stylesheet" href="src/layout.css">
    <link rel="stylesheet" href="src/theme.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <header>
        <a href="index.php">
            <img src="src/dekount.png" width="50px" />
        </a>
        <div class="links-section">
            <a href="https://github.com/Redwars22">Mais Projetos</a>
            <a href="https://redwars22.github.io/Portfolio/">O Autor</a>
            <a href="mailto:andrewpereira.megabyte@gmail.com">Feedback</a>
            <a href="">Sobre</a>
            <a href="">Ajuda</a>
        </div>
    </header>
    <main>
        <section>
            <h1>Calculadora de Descontos</h1>
        </section>
        <div class="displayData">
            <?php 
                function getDiscount($price, $percentOfDiscount){
                    return(
                        $price - (($price * $percentOfDiscount)/100)
                    );
                }

                $price = $_POST['price'];
                $percentOfDiscount = $_POST['percent'];
                $discount = getDiscount($price, $percentOfDiscount);
                echo "<h1 align='right' style='color: red'>DE</h1><span class='number'>".$price."</span>";
                echo "<h1 align='right' style='color: red'>POR</h1><span class='number'>".$discount."</span>";
                echo "<h1 align='right' style='color: red'>DESCONTO: </h1><span class='number'>".$percentOfDiscount."%</span>";
            ?>
        </div>
        <aside style="margin-top: 55px">
            <a href="index.php" class="goBackButton">
                <i class="material-icons">arrow_back</i>
                CALCULAR NOVAMENTE
            </a>
        </aside>
    </main>
    <footer style="margin-top: 55px">
        <b>Project Dékount.</b>
        <p>Criado por André Pereira com as tecnologias HTML, CSS e PHP</p>
        <a class="github-link" href="https://github.com/Redwars22">
            <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-128.png"width="40px"/>
        </a>
    </footer>
</body>

</html>