<?php

class EpIEImageFilterCrop extends EpIEImageAction {
    static function filterCrop($src_file, $dst_file, $height, $width, $imgHeight, $imgWidth, $x1 = 0, $y1 = 0) {

        if ($height <= 0 || $width <= 0) {
            return true;
        }
        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        $phpthumb->setParameter('fltr', 'crop|' + $x1 + '|' + ($imgWidth - $width) + '|' + $y1 + '|' + ($imgHeight - $height));

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