<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];
$Params = $Module->getNamedParameters();
// TODO: make sure it's an actual image class node id ?

// retrieve the original image path
$NodeId = $Params['node_id'];
$Version = $Params['version'];

$img = eZContentObjectAttribute::fetch( $NodeId, $Version )->attribute('content');
$image_path = $img->attributeFromOriginal('url');
$absolute_image_path = eZSys::rootDir() . "/" . $image_path;

// TODO: Check for editing rights

// Creation of the edition arborescence

// /{var folder}/epie/user_id/image_id-version_id
$user = eZUser::instance();

$working_folder_path = eZSys::varDirectory() . "/epie/"
    . $user->id() . "/" . $NodeId . "-" . $Version;
$working_folder_absolute_path = eZSys::rootDir() . "/" . $working_folder_path;

// TODO: can't use eZFSFileSystem::fileExists because even if it's documented
// as static, it's not defined likewise.
$fs_handler = new eZFSFileHandler();

if (!$fs_handler->fileExists($working_folder_absolute_path)) {
// TODO: manage errors
    $res = eZDir::mkdir($working_folder_absolute_path, false, true);
}

// Copy the original file in the temp directory
// $work_folder/{history_id}-{file_name}
// (thumb: $working_folder/thumb_{history_id}-{file_name}
$file = "0-" . basename($image_path);
$thumb = "thumb-" . $file;

// TODO: manage possible errors
$fs_handler->fileCopy($absolute_image_path,
    $working_folder_absolute_path . "/" . $file);

// TODO: Creation of a thumbnail

if (EpIEImageResize::resizeTo($working_folder_absolute_path . "/" . $file,
$working_folder_absolute_path . "/" . $thumb,
250, 250))
    eZDebug::writeDebug(null, "Error while creating thumbnail");

$tpl = templateInit();
$tpl->setVariable("result", array( 'original' => $working_folder_path . "/" . $file,
                                   'thumbnail' => $working_folder_path . "/" . $thumb,
                                   // the key is the folder where the working image is stored
                                   'key' => $user->id() . "/" . $NodeId . "-" . $Version,
                                   'image_id' => $NodeId,
                                   'image_version' => $Version,
                                   'history_version' => 0,
                                   'module_path' => 'epie'
                                 ));

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/prepare.tpl");


?>
