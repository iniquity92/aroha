<?php 
    if(!defined('CMS_VERSION')) exit;
    if(!$this->CheckPermission(Contact::MANAGE_PERM)) return;

    $query = new ContactQuery;
    $contacts = $query->GetMatches();
    $tpl = $smarty->CreateTemplate(
        $this->GetTemplateResource('defaultadmin.tpl'),null,null,$smarty
    );
    $tpl->assign('contacts',$contacts);
    $tpl->display();
?>