<?php

class EpIEImageToolRotation extends EpIEImageAction {
    static function toolRotation($src_file, $dst_file, $angle = 0, $bgColor = 'FFFFFF') {
//        $phpthumb = new phpthumb();
//        $phpthumb->setSourceFilename($src_file);
//
//        $phpthumb->setParameter('ra', $angle); // TODO: find a way to specify the background color
//        //$phpthumb->setParameter('fltr', 'rot|' . $angle . '|' . $bgColor);
//
//        if ($phpthumb->GenerateThumbnail()) {
//            if ($phpthumb->RenderToFile($dst_file)) {
//                return true;
//            } else {
//                eZDebug::writeDebug("", "phpthumb debug : " . $phpthumb->debugmessages);
//                return false;
//            }
//        } else {
//            eZDebug::writeDebug("", "phpthumb debug : " . $phpthumb->debugmessages);
//            return false;
//        }

    }

    static function filter($angle, $bgColor = 'FFFFFF') {
        return array(new ezcImageFilter(
        'rotate',
        array(
            'angle' => $angle,
            'background' => $bgColor
        )));
    }
}

?>