<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🪐️⚙️ Project Kelvin - Gerador de Planetas</title>
    <link rel="stylesheet" href="resx/style.css">
    <link rel="stylesheet" href="resx/layout.css">

</head>
<body>
    <header>
        <img class="logo" src="resx/kelvin.png"/>
        <div class="">
            <a href="">Sobre</a>
            <a href="">Ajuda</a>
            <a href="">Mais Projetos</a>
            <a href="mailto:">Reporte um bug</a>
        </div>
    </header>
    
    <main>
        <img src="resx/planet.png" width="250px"/>
        <h1>GERADOR DE PLANETAS</h1>
        <em>Gere um planeta aleatório com o Kelvin</em>
        <div class="formContainer">
            <form action="generate.php" method="post">
                <label>INSIRA O NOME DO PLANETA</label>
                <br/>
                <input type="text" name="planetName">
                <br/>
                <button type="submit">GERAR 🪐️</button>
            </form>
        </div>
    </main>

    <footer>
        <p>
            Orgulhosamente criado usando PHP, HTML e CSS.
        </p>
        <a href="">
            <img src="resx/github.png" width="50px"/>
        </a>
    </footer>
</body>
</html>