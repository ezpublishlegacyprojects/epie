<?php

include_once 'kernel/common/template.php';

$prepare_action = new EpIEImagePreAction();

EpIEImageFilterSepia::filterSepia($prepare_action->getAbsoluteImagePath(),
    $prepare_action->getAbsoluteNewImagePath()
);

EpIEImageFilterSepia::filterSepia($prepare_action->getAbsoluteThumbnailPath(),
    $prepare_action->getAbsoluteNewThumbnailPath()
);

$tpl = templateInit();
$tpl->setVariable("result", $prepare_action->responseArray());

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/default_action_response.tpl");

?>
