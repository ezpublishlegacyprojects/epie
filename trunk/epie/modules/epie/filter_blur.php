<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];

$prepare_action = new EpIEImagePreAction();

$http = eZHTTPTool::instance();
if ($http->hasPostVariable("value")) {
    $value = $http->variable("value");
} else {
    $value = 1;
}

EpIEImageFilterBlur::filterBlur($prepare_action->getAbsoluteImagePath(),
    $prepare_action->getAbsoluteNewImagePath(), $value
);
EpIEImageToolResize::doThumb( $prepare_action->getAbsoluteNewImagePath(),
    $prepare_action->getAbsoluteNewThumbnailPath());

$tpl = templateInit();
$tpl->setVariable("result", $prepare_action->responseArray());

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/default_action_response.tpl");


?>
