<?php 
    class Contact extends CMSModule{
        const MANAGE_PERM = 'access_contact';
        public function GetVersion(){ return '0.1';}
        public function GetFriendlyName(){ return $this->Lang('friendlyname');}
        public function GetAdminDescription(){ return $this->Lang('admindescription');}
        public function IsPluginModule(){ return TRUE;}
        public function HasAdmin(){ return TRUE;}
        public function VisibleToAdminUser(){return $this->CheckPermission(self::MANAGE_PERM);}
        public function GetAuthor(){return 'Abhishek';}
        public function GetAuthorEmail(){return 'sonu.abhisheksingh143@gmail.com';}
        public function UninstallPreMessage(){return $this->Lang('ask_uninstall');}
    }
?>