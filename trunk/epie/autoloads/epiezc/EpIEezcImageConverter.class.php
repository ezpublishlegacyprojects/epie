<?php

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
