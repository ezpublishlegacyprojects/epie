<?php

class EpIEImageToolResize extends EpIEImageAction {
    static function filter($w, $h) {
        return (array(new ezcImageFilter(
        'scale',
        array(
        'width' => intval($w),
        'height' => intval($h),
        'direction' => ezcImageGeometryFilters::SCALE_BOTH
        ))));
    }

    static function resize($src, $dst, $w, $h) {
        $imageconverter = new EpIEezcImageConverter(self::filter($h, $w));
        $imageconverter->perform($src, $dst);
    }

    static function doThumb($src, $dst) {
        self::resize($src, $dst, 250, 250);
    }
}
?>
