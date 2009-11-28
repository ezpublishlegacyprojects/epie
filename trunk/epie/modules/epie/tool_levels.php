<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];

$prepare_action = new EpIEImagePreAction();

$http = eZHTTPTool::instance();

$channels = array('r', 'g', 'b', 'a');
$thresholds = array();
foreach ($channels as $c) {
    if ($http->hasPostVariable($c)) {
        $thresholds[$c] = $http->variable($c);
    } else {
        $thresholds[$c] = 0.1;
    }
}

EpIEImageToolLevels::toolLevels($prepare_action->getAbsoluteImagePath(),
    $prepare_action->getAbsoluteNewImagePath(), $thresholds
);

EpIEImageToolResize::doThumb( $prepare_action->getAbsoluteNewImagePath(),
    $prepare_action->getAbsoluteNewThumbnailPath());


$tpl = templateInit();
$tpl->setVariable("result", $prepare_action->responseArray());

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/default_action_response.tpl");


?>
