<?php
// ## BEGIN COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
// SOFTWARE NAME: eZ Image Editor extension for eZ Publish
// SOFTWARE RELEASE: 0.1 (preview only)
// COPYRIGHT NOTICE: Copyright (C) 2009 eZ Systems AS
// SOFTWARE LICENSE: GNU General Public License v2.0
// NOTICE: >
//   This program is free software; you can redistribute it and/or
//   modify it under the terms of version 2.0  of the GNU General
//   Public License as published by the Free Software Foundation.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//
//   You should have received a copy of version 2.0 of the GNU General
//   Public License along with this program; if not, write to the Free
//   Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//   MA 02110-1301, USA.
//
//
// ## END COPYRIGHT, LICENSE AND WARRANTY NOTICE ##

include_once 'kernel/common/template.php';

$prepare_action = new eZIEImagePreAction();

// delete all the images in working directory
// delete working directory

$working_folder = eZDir::dirpath($prepare_action->getAbsoluteImagePath());

// deletes the working folder recursively
eZDir::recursiveDelete($working_folder);

// TODO: delete the user directory if empty

$Result = array();
$Result["pagelayout"] = false;

$tpl = templateInit();
$Result["content"] = $tpl->fetch("design:ezie/ajax_responses/empty_json_response.tpl");

?>
