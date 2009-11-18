<?php

class EpIEImageToolLevels extends EpIEImageAction {
    static function toolLevels($src_file, $dst_file, $thresholds) {

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        foreach ($thresholds as $key => $value) {
            $phpthumb->setParameter('fltr', 'lvl|' . $key . '|0|' . $value);
        }

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