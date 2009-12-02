<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];

$prepare_action = new EpIEImagePreAction();

$http = eZHTTPTool::instance();



if ($prepare_action->hasRegion() && $http->hasPostVariable('watermark_image')) {
    $imageconverter = new EpIEezcImageConverter(EpIEImageToolWatermark::filter($prepare_action->getRegion(), $http->variable('watermark_image')));
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
