<?php
    function getDiscount($price, $percentOfDiscount){
        return(
            $price - (($price * $percentOfDiscount)/100)
        );
    }