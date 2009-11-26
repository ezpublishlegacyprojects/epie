<?php

class EpIEEzcGDHandler extends ezcImageGdHandler
implements EpIEezcImageRotate {

    private function bgArrayFromHex($hex) {
        return array(
            'r' => hexdec(substr($hex, 0, 2)),
            'g' => hexdec(substr($hex, 2, 2)),
            'b' => hexdec(substr($hex, 4, 2)),
            'a' => 127
        );
    }

    public function rotate($angle, $background) {
        $angle = intval($angle);
        if ( !is_int($angle) || $angle < 0 || $angle > 360) {
            throw new ezcBaseValueException( 'height', $angle, 'int > 0 && int < 360' );
        }

        $resource = $this->getActiveResource();

        $bg = $this->bgArrayFromHex($background);
        $gdBackgroundColor = imagecolorallocatealpha($resource, $bg['r'], $bg['g'], $bg['b'], $bg['a']);

        $newResource  = ImageRotate($resource, $angle, $gdBackgroundColor);
        if ( $res === false ) {
            throw new ezcImageFilterFailedException( 'rotate', 'Rotation of image failed.' );
        }

        imagedestroy( $resource );
        $this->setActiveResource( $newResource );
    }

}
?>
