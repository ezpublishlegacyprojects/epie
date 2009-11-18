<?php

class EpIEImageToolSaturation extends EpIEImageAction {
    static function toolSaturation($src_file, $dst_file, $saturation = 0) {

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        $phpthumb->setParameter('fltr', 'sat|' . $saturation);

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
}

?>