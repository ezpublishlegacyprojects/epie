<?php

class EpIEImageToolPixelate extends EpIEImageAction {
    static function filter($region = null) {
        return (array(new ezcImageFilter(
        'pixelate',
                    array(
                        "region" => $region
                    )
                )));
    }

}

?>