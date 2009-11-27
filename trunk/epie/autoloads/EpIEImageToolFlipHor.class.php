<?php

class EpIEImageToolFlipHor extends EpIEImageAction {
    static function toolFlipHor($src_file, $dst_file) {

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        $phpthumb->setParameter('fltr', 'flip|x');

        if ($phpthumb->GenerateThumbnail()) {
            if ($phpthumb->RenderToFile($dst_file)) {
                return true;
            } else {
                eZDebug::writeDebug("", "phpthumb debug : " . $phpthumb->debugmessages);
                return false;
            }
        } else {
            eZDebug::writeDebug("", "phpthumb debug : " . $phpthumb->debugmessages);
            return false;
        }
    }

    static function filter($region = null) {
        return (array(new ezcImageFilter(
        'horizontalFlip',
        array(
            "region" => $region
        ))));
    }

}

?>