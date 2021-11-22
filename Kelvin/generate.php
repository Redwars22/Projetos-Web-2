<?php
    include('planet.php');

    function generatePlanet(){
        $planet = new Planet();
        $planet->name = $_POST['planetName'];
        
        //Parâmetros do planeta
        $numberOfSuns = $planet->numberOfSuns();
        $minimumTemperature = $planet->minimumTemperature();
        $maximumTemperature = $planet->maximumTemperature($minimumTemperature);
        
        echo "Nome: ".$planet->name."<br/>";
        echo "Sóis: ".$numberOfSuns."<br/>";
        echo "Temperatura mínima: ".$minimumTemperature."ºC <br/>";
        echo "Temperatura máxima: ".$maximumTemperature."ºC <br/>";
    }

    generatePlanet();
?>