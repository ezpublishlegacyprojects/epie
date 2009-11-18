<?php

class EpIEImageFilterBlr extends EpIEImageAction {
    static function filterBlr($src_file, $dst_file, $value = 1) {

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        $phpthumb->setParameter('fltr', 'blur|' . $value);

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