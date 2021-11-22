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

        public function averageTemperature($minimum, $maximum){
            return(($maximum+$minimum)/2);
        }

        public function classification(){
            $types = ['gasoso', 'rochoso'];
            return($types[rand(0, 1)]);
        }

        public function distanceFromEarth(){
            return(rand(4, 30999));
        }

        public function gravity(){
            return(rand(5, 40));
        }

        public function rings(){
            $argument = rand(0, 1);
            $hasRings = $argument == 1 ? "Possui anéis" : "Não possui anéis";
            return($hasRings);
        }

        public function numberOfMoons(){
            return(rand(0, 100));
        }

        public function dayLength(){
            return(rand(2, 36)." horas");
        }

        public function orbitalPeriod(){
            return(rand(2, 100000)." anos");
        }

        public function mass(){}

        public function radius(){}
    }
?>