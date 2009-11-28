<?php

class EpIEImageToolCrop extends EpIEImageAction {
    public static function filter($selection) {
        $r = array('x' => intval($selection['x']),
            'y' => intval($selection['y']),
            'width' => intval($selection['w']),
            'height' => intval($selection['h'])
        );
        return array(new ezcImageFilter('crop', $r));
    }
}

?>
