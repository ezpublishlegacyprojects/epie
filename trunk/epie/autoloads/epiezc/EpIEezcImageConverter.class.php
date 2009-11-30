<?php
// ## BEGIN COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
// SOFTWARE NAME: Ep Image Editor extension for eZ Publish
// SOFTWARE RELEASE: 0.1 (preview only)
// COPYRIGHT NOTICE: Copyright (C) 2009 eZ Systems AS
// SOFTWARE LICENSE: GNU General Public License v2.0
// NOTICE: >
//   This program is free software; you can redistribute it and/or
//   modify it under the terms of version 2.0  of the GNU General
//   Public License as published by the Free Software Foundation.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//
//   You should have received a copy of version 2.0 of the GNU General
//   Public License along with this program; if not, write to the Free
//   Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//   MA 02110-1301, USA.
//
//
// ## END COPYRIGHT, LICENSE AND WARRANTY NOTICE ##

class EpIEezcImageConverter {
   private $converter;

    public function __construct($filter) {
    // TODO: check for presence of IM and/or GD here
        $settings = new ezcImageConverterSettings(array(
            new ezcImageHandlerSettings( 'GD',          'EpIEEzcGDHandler' ),
            //new ezcImageHandlerSettings( 'ImageMagick', 'EpIEEzcImageMagickHandler' ),
            )
        );
        $this->converter = new ezcImageConverter( $settings );

        $mimeType = array('image/jpeg', 'image/png');

        try {
        $this->converter->createTransformation( 'transformation', $filter, $mimeType);
        } catch (ezcBaseSettingValueException $e) {
            die("error applying the transformation => " . $e->getMessage());
        }
    }

    public function perform($src, $dst) {
        try {
            $this->converter->transform('transformation', $src, $dst);
        }
        catch ( ezcImageTransformationException $e) {
            var_dump($e);
            die( "Error transforming the image: lol =><{$e->getMessage()}>" );
        }
    }
}

?>
