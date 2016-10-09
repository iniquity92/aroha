<?php
    if(!defined('CMS_VERSION')) exit;
    $this->CreatePermission(Contact::MANAGE_PERM,'Manage the contacts');

    $db = $this->GetDb();
    $dict = NewDataDictionary($db);
    $taboptarray = array('mysql'=>'TYPE=MyISAM');
    $flds = "
        id I(6) AUTOINCREMENT PRIMARY NOTNULL,
        name C(255) NOTNULL,
        email c(255) NOTNULL KEY`,
        phone c(15) NOTNULL KEY,
        message X,
        contact_date T DEFAULT '00-00-0000' INDEX id_cd 
    ";
    $sqlarray = $dict->CreateTableSQL(CMS_DB_PREFIX.'mod_contact',$flds,$taboptarray);
    $dict->ExecuteSQLArray($sqlarray);
?>