<?php
/**
 * File containing the ezie no save & quit menu item handler
 *
 * @copyright Copyright (C) 1999-2010 eZ Systems AS. All rights reserved.
 * @license http://ez.no/licenses/gnu_gpl GNU GPL v2
 * @version //autogentag//
 * @package ezie
 */
include_once 'kernel/common/template.php';

$prepare_action = new eZIEImagePreAction();

// @todo Use the cluster handler code

// delete all the images in working directory
// delete working directory
$working_folder = eZDir::dirpath( $prepare_action->getAbsoluteImagePath() );

// deletes the working folder recursively
eZDir::recursiveDelete($working_folder);

// @todo delete the user directory if empty

// @todo Use proper JSON
$Result = array();
$Result["pagelayout"] = false;

$tpl = templateInit();
$Result["content"] = $tpl->fetch("design:ezie/ajax_responses/empty_json_response.tpl");

?>