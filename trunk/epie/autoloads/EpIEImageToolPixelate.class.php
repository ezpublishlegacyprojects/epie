<?php

class EpIEImageToolPixelate extends EpIEImageAction {
    static function filter() {
        return (array(new ezcImageFilter(
        'pixelate',
        array())));
    }

}

?>