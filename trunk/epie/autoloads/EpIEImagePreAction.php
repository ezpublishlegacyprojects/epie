<?php

class EpIEImagePreAction {
    private $image_path;
    private $image_id;
    private $image_version;
    private $history_version;
    private $key;
    private $original_image;
    private $working_folder;

    public function  __construct() {
        $http = eZHTTPTool::instance(); //(hasPostVariables hasVariable variable);

        // TODO: change hasVariable to hasPostVariable
        if ( !$http->hasVariable('key')
            || !$http->hasVariable('image_id')
            || !$http->hasVariable('image_version')
            || !$http->hasVariable('history_version')
        ) {
        // TODO: manage error
            return;
        }
        $this->key = $http->variable('key');
        $this->image_id = $http->variable('image_id');
        $this->image_version = $http->variable('image_version');
        $this->history_version = $http->variable('history_version');

        // retieve ezimage
        $this->original_image = eZContentObjectAttribute::fetch( $this->image_id,
                                                                 $this->image_version )->attribute('content');
        if ($this->original_image === null) {
        // TODO: manage error (the image_id does not match any existing image)
            return;
        }

        $this->working_folder = eZSys::varDirectory() . "/epie/" . $this->key;

        $this->image_path = $this->working_folder . "/"
            . $this->history_version . "-"
            . $this->original_image->attributeFromOriginal('filename');

        // check if file exists (that will mean the data sent if correct)
        $fs_handler = new eZFSFileHandler();
        if (!$fs_handler->fileExists($absolute_image_path)) {
        // TODO: manage error
            return;
        }
        $absolute_image_path = eZSys::rootDirectory() . "/" . $image_path;

    }

    public function getAbsoluteImagePath() { // var/epie/{user_id}/{image_id}-{image_version}/{history_version}-
        return eZSys::rootDir() . "/" . $this->getImagePath();
    }

    public function getImagePath() {
        return $this->image_path;
    }

    public function getThumbnailPath() {
        return $this->working_folder . "/thumb-" . $this->getHistoryVersion() . "-"
            . $this->original_image->attributeFromOriginal('filename');
    }

    public function getAbsoluteThumbnailPath() {
        return eZSys::rootDir() . "/" . $this->getThumbnailPath();
    }

    public function getAbsoluteNewThumbnailPath() {
        return eZSys::rootDir() . "/" . $this->getNewThumbnailPath();
    }

    public function getNewThumbnailPath() {
        return $this->working_folder . "/thumb-" . $this->getNewHistoryVersion() . "-"
            . $this->original_image->attributeFromOriginal('filename');
    }

    public function getAbsoluteNewImagePath() {
        return eZSys::rootDir() . "/" . $this->getNewImagePath();
    }

    public function getNewImagePath() {
        return $this->working_folder . "/"
            . $this->getNewHistoryVersion() . "-"
            . $this->original_image->attributeFromOriginal('filename');
    }

    public function getVersion() {
        return $this->image_version;
    }

    public function getHistoryVersion() {
        return $this->history_version;
    }

    public function getNewHistoryVersion() {
        return $this->history_version + 1;
    }

    public function responseArray() {
        return array( 'original' => $this->getNewImagePath(),
        'thumbnail' => $this->getNewThumbnailPath(),
        'history_version' => $this->getNewHistoryVersion()
        );
    }

    public function getWorkingFolder() {
        return $this->working_folder;
    }

    public function getAbsoluteWorkingFolder() {
        return eZSys::rootDir() . "/" . $this->working_folder;
    }

    public function getImageHandler() {
        return $this->original_image;
    }
}

?>
