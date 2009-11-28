<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];

$prepare_action = new EpIEImagePreAction();

$http = eZHTTPTool::instance();

$r = $prepare_action->getRegion();

if ($prepare_action->hasRegion()) {
    $imageconverter = new EpIEezcImageConverter(EpIEImageToolCrop::filter($prepare_action->getRegion()));
} else {
    // TODO: manage error (just return an empty response?)
}


$imageconverter->perform($prepare_action->getAbsoluteImagePath(),
    $prepare_action->getAbsoluteNewImagePath()
);

EpIEImageToolResize::doThumb( $prepare_action->getAbsoluteNewImagePath(),
    $prepare_action->getAbsoluteNewThumbnailPath());


$tpl = templateInit();
$tpl->setVariable("result", $prepare_action->responseArray());

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/default_action_response.tpl");

?>
