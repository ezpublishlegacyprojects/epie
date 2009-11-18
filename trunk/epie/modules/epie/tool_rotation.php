<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];

$prepare_action = new EpIEImagePreAction();

$http = eZHTTPTool::instance();
if ($http->hasVariable("angle")) { // TODO: change hasvariable to haspostvariable
    $angle = $http->variable("angle");
} else {
    $angle = 0;
}
if ($http->hasVariable("color")) { // TODO: change hasvariable to haspostvariable
    $color = $http->variable("color");
} else {
    $color = 'FFFFFF';
}


EpIEImageToolRotation::toolRotation($prepare_action->getAbsoluteImagePath(),
    $prepare_action->getAbsoluteNewImagePath(), $angle, $color
);
EpIEImageToolRotation::toolRotation($prepare_action->getAbsoluteThumbnailPath(),
    $prepare_action->getAbsoluteNewThumbnailPath(), $angle, $color
);

$tpl = templateInit();
$tpl->setVariable("result", $prepare_action->responseArray());

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/default_action_response.tpl");


?>
