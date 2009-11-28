<?php

class EpIEImageFilterBW extends EpIEImageAction {

    static function filter($region = null) {
        return (array(new ezcImageFilter(
        'colorspace',
        array(
        'space' => ezcImageColorspaceFilters::COLORSPACE_GREY,
        'region' => $region,
        ))));
    }
}

?>