<?php

class EpIEEzcGDHandler extends ezcImageGdHandler
implements EpIEezcImageRotate,
EpIEezcImageFlip,
EpIEezcImagePixelate {

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
        if ( $newResource === false ) {
            throw new ezcImageFilterFailedException( 'rotate', 'Rotation of image failed.' );
        }

        imagedestroy( $resource );
        $this->setActiveResource( $newResource );
    }

    public function verticalFlip() {
        $resource = $this->getActiveResource();

        $w = imagesx($resource);
        $h = imagesy($resource);

        $newResource = imagecreatetruecolor($w, $h);

        imagealphablending($newResource, false);
        imagesavealpha($newResource, true);

        $res = imagecopyresampled($newResource, $resource,
            0,  0,
            0, $h,
            $w, $h,
            $w, -$h);

        if ( $res === false ) {
            throw new ezcImageFilterFailedException( 'rotate', 'Rotation of image failed.' );
        }

        imagedestroy( $resource );
        $this->setActiveResource( $newResource );
    }

    public function horizontalFlip() {
        $resource = $this->getActiveResource();

        $w = imagesx($resource);
        $h = imagesy($resource);

        $newResource = imagecreatetruecolor($w, $h);

        imagealphablending($newResource, false);
        imagesavealpha($newResource, true);

        $res = imagecopyresampled($newResource, $resource,
            0,  0,
            $w, 0,
            $w, $h,
            -$w, $h);

        if ( $res === false ) {
            throw new ezcImageFilterFailedException( 'rotate', 'Rotation of image failed.' );
        }

        imagedestroy( $resource );
        $this->setActiveResource( $newResource );
    }

    public function pixelate() {
        $resource = $this->getActiveResource();

        $w = imagesx($resource);
        $h =  imagesy($resource);

        $tmp_w = $w / 10;
        $tmp_h = $h / 10;

        $tmpResource = imagecreatetruecolor($tmp_w, $tmp_h);

        imagealphablending($tmpResource, false);
        imagesavealpha($tmpResource, true);

        $res = imagecopyresampled($tmpResource, $resource,
            0, 0,
            0, 0,
            $tmp_w, $tmp_h,
            $w, $h);

        if ( $res === false ) {
            throw new ezcImageFilterFailedException( 'pixelate', 'First part of pixelate failed.' );
        }
        imagedestroy($resource);

        $newResource = imagecreatetruecolor($w, $h);

        imagealphablending($newResource, false);
        imagesavealpha($newResource, true);

        $res = imagecopyresampled($newResource, $tmpResource, 
            0, 0,
            0, 0,
            $w, $h,
            $tmp_w, $tmp_h);

        if ( $res === false ) {
            throw new ezcImageFilterFailedException( 'pixelate', 'Second part of pixelate failed.' );
        }

        imagedestroy( $tmpResource );
        $this->setActiveResource( $newResource );
    }

}
?>
