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
        <a href="/index.php">
            <img class="logo" src="resx/kelvin.png"/>
        </a>
        <div class="">
           <h1>GERADOR DE PLANETAS</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <?php
                include('planet.php');

                function generatePlanet(){
                    $planet = new Planet();
                    $planet->name = $_POST['planetName'];
                    $minimumTemperature = $planet->minimumTemperature();
                    $maximumTemperature = $planet->maximumTemperature($minimumTemperature);
                    
                    echo "<div class='element'>";
                    echo "<strong class='blueText'>Nome:</strong> ".$planet->name."<br/>";
                    echo "<strong class='blueText'>Sóis:</strong> ".$planet->numberOfSuns()."<br/>";
                    echo "<strong class='blueText'>Temperatura mínima:</strong> ".$minimumTemperature."ºC <br/>";
                    echo "<strong class='blueText'>Temperatura máxima:</strong> ".$maximumTemperature."ºC <br/>";
                    echo "<strong class='blueText'>Temperatura média:</strong> ".$planet->averageTemperature($minimumTemperature, $maximumTemperature)."ºC <br/>";
                    echo "<strong class='blueText'>Classificação:</strong> ".$planet->classification()."<br/>";
                    echo "<strong class='blueText'>Gravidade:</strong> ".$planet->gravity()."m/s²";
                    echo "</div><div class='element'>";
                    echo "<strong class='blueText'>Distância da Terra:</strong> ".$planet->distanceFromEarth()." anos-luz<br/>";
                    echo "<strong class='blueText'>Anéis:</strong> ".$planet->rings()."<br/>";
                    echo "<strong class='blueText'>Luas:</strong> ".$planet->numberOfMoons()."<br/>";
                    echo "<strong class='blueText'>Duração do dia:</strong> ".$planet->dayLength()."<br/>";
                    echo "<strong class='blueText'>Período orbital:</strong> ".$planet->orbitalPeriod()."<br/>";
                    echo "<strong class='blueText'>Massa:</strong> ".$planet->mass()."<br/>";
                    echo "<strong class='blueText'>Raio médio:</strong> ".$planet->radius()."";
                    echo "</div>";
                }

                generatePlanet();
            ?>
        </div>
    </main>
    <footer>
        <p align="center">
            ⚠️ RECARREGUE ESTA PÁGINA OU VOLTE PARA A PÁGINA INICIAL PARA GERAR OUTRO PLANETA COM OUTRAS INFORMAÇÕES
        </p>
    </footer>
</body>
</html>