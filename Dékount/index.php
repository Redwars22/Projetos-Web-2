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
    <script src="src/help.js"></script>
</head>

<body>
    <header>
        <img src="src/dekount.png" width="50px" />
        <div class="links-section">
            <a href="https://github.com/Redwars22">Mais Projetos</a>
            <a href="https://redwars22.github.io/Portfolio/">O Autor</a>
            <a href="mailto:andrewpereira.megabyte@gmail.com">Feedback</a>
            <a href="">Sobre</a>
            <a onclick="say()">Ajuda</a>
        </div>
    </header>
    <main>
        <section>
            <h1>Calculadora de Descontos</h1>
        </section>
        <form action="discount.php" method="post">
            <label for="">Valor do Produto:</label>
            <input type="number" name="price" value="1.00" min="0.00" step="0.01" id="">
            <label for="">Porcentagem de Desconto:</label>
            <input type="number" name="percent" value="50" min="0" max="100" step="1" id="">
            <div class="buttons-container">
                <button class="send-button" type="submit">
                    <i class="material-icons">send</i>
                </button>
                <button class="reset-button" type="reset">
                    <i class="material-icons">delete</i>
                </button>
            </div>
        </form>
        <aside>
            <h2>Como usar?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur, nam officiis soluta ullam, non saepe provident eaque quam molestiae sit repudiandae autem sequi ducimus repellendus quas amet. Accusantium, explicabo.</p>
        </aside>
    </main>
    <footer>
        <b>Project Dékount.</b>
        <p>Criado por André Pereira com as tecnologias HTML, CSS e PHP</p>
        <a class="github-link" href="https://github.com/Redwars22">
            <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-128.png"width="40px"/>
        </a>
    </footer>
</body>

</html>