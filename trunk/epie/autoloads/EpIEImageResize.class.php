<?php

class EpIEImageResize extends EpIEImageAction {
    static function resizeTo($src_file, $dst_file, $new_max_width = false, $new_max_height = false) {
        if (!$new_max_width && !$new_max_height) {
        // no new size => we just copy the $src_file to $dst_file

        // TODO: can't use eZFSFileSystem::fileExists because even if it's documented
        // as static, it's not defined likewise.
            $ezfs = new eZFSFileHandler();

            return $ezfs->fileCopy($src_file, $dst_file);
        }

        $phpthumb = new phpthumb();
        $phpthumb->setSourceFilename($src_file);

        if ($new_max_height !== false) {
            $phpthumb->setParameter('h', $new_max_width);
        }

        if ($new_max_width !== false) {
            $phpthumb->setParameter('w', $new_max_height);
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
