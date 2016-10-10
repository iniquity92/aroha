<?php
    if(!defined('CMS_VERSION')) exit;
    if(!$this->CheckPermission(Contact::MANAGE_PERM)) return;

    $redirect_destination = "home";
    $contact = new ContactItem();
    
    if(isset($params['submit'])){
        $contact->name = trim($params['name']);
        $contact->email = trim($params['email']);
        $contact->phone = trim($params['phone']);
        $contact->message = trim($params['message']);

        $contact->save();
        $this->RedirectContent($redirect_destination);
    }
    $tpl = $smarty->CreateTemplate(
        $this->GetTemplateResource('contact_form.tpl'),null,null,$smarty
    );
    $tpl->assign('contact',$contact);
    $tpl->display();
    
?>