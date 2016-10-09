<?php
    if(!defined('CMS_VERSION')) exit;
    $this->RemovePermission(Contact::MANAGE_PERM);

    $db = $this->GetDb();
    $dict = NewDataDictionary($db);
    $sqlarray = $dict->DropTableSQL(CMS_DB_PREFIX.'mod_contact');
    $dict->ExecuteSQLArray($sqlarray);
?>