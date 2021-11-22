<?php
    class Planet {
        public $name;

        public function numberOfSuns(){
            return (rand(1, 4));
        }

        public function minimumTemperature(){
            return(rand(-250, 250));
        }

        public function maximumTemperature($minimum){
            $maximum = rand(-100, 999);

            while($maximum <= $minimum){
                $maximum = rand(-100, 999);
            }

            return $maximum;
        }
    }
?>