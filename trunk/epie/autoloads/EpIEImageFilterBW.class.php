<?php

class EpIEImageFilterBW extends EpIEImageAction {
    // TODO: remove once the version bellow has been correctly tested
    static function filterBW($src_file, $dst_file) {

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        $phpthumb->setParameter('fltr', 'gray');

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
        'space' => ezcImageColorspaceFilters::COLORSPACE_GREY,
        'region' => $region,
        ))));
    }
}

?>