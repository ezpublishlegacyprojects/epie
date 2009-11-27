<?php

include_once 'kernel/common/template.php';

$Module = $Params["Module"];

$prepare_action = new EpIEImagePreAction();

$http = eZHTTPTool::instance();

$region = null;
if ($http->hasVariable("selection")) { // TODO: change hasvariable to haspostvariable
    $s = $http->variable("selection");
    $region = array("x" => $s["x"],
                    "y" => $s["y"],
                    "w" => $s["w"],
                    "h" => $s["h"]
    );
}

$imageconverter = new EpIEezcImageConverter(EpIEImageFilterBW::filter($region));

$imageconverter->perform($prepare_action->getAbsoluteImagePath(),
    $prepare_action->getAbsoluteNewImagePath()
);

$imageconverter->perform($prepare_action->getAbsoluteThumbnailPath(),
    $prepare_action->getAbsoluteNewThumbnailPath()
);

$tpl = templateInit();
$tpl->setVariable("result", $prepare_action->responseArray());

$Result = array();
$Result["pagelayout"] = false;
$Result["content"] = $tpl->fetch("design:epie/ajax_responses/default_action_response.tpl");


?>
