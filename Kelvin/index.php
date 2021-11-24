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
        <div>
            <a href="https://github.com/Redwars22/Web2/tree/main/Kelvin">Sobre</a>
            <a href="https://github.com/Redwars22/Web2/tree/main/Kelvin">Ajuda</a>
            <a href="https://github.com/Redwars22">Mais Projetos</a>
            <a href="mailto:andrewpereira.megabyte@gmail.com">Reporte um bug</a>
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
                <input type="text" name="planetName" autofocus>
                <br/>
                <button type="submit">GERAR 🪐️</button>
            </form>
        </div>
    </main>

    <footer>
        <p>
            Orgulhosamente criado por André Pereira usando PHP, HTML e CSS.
        </p>
        <a href="">
            <img src="resx/github.png" width="50px"/>
        </a>
    </footer>
</body>
</html>