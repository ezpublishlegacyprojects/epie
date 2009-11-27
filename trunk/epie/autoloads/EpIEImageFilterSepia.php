<?php

class EpIEImageFilterSepia extends EpIEImageAction {
    static function filterSepia($src_file, $dst_file, $value = 50, $color = 'A28065') {

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        $arg = 'sep'; //|' . $value . '|' . $color; TODO: change this once we figured how to make it work
        $phpthumb->setParameter('fltr', $arg);
        //$phpthumb->setParameter('fltr', 'sep');
        //$phpthumb->setParameter('fltr', 'gray');

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
        'colorspace',
        array(
            'space' => ezcImageColorspaceFilters::COLORSPACE_SEPIA,
            'region' => $region
        ))));
    }


}

?>