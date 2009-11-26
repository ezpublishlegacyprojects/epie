<?php

class EpIEEzcImageMagickHandler extends ezcImageImagemagickHandler
                                                       implements EpIEezcImageRotate {
    public function rotate($angle, $background) {
        $angle = intval($angle);
        if ( !is_int($angle) || $angle < 0 || $angle > 360) {
            throw new ezcBaseValueException( 'height', $height, 'int > 0 && int < 360' );
        }

//        $this->addFilterOption(
//            $this->getActiveReference(),
//            '-background',
//            '#' + $background
//        );

        $this->addFilterOption(
            $this->getActiveReference(),
            '-rotate',
            $angle
        );
    }
}

?>
