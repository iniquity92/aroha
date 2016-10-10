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
        public function InitializeFrontend(){
            $this->SetParameterType('id',CLEAN_INT);
            $this->SetParameterType('name',CLEAN_STRING);
            $this->SetParameterType('email',CLEAN_STRING);
            $this->SetParameterType('phone',CLEAN_STRING);
            $this->SetParameterType('message',CLEAN_STRING);
            $this->SetParameterType('contact_date',CLEAN_STRING);
            $this->SetParameterType('submit',CLEAN_NONE);
        }
        public function InitializeAdmin(){
            $this->CreateParameter('id',null,$this->Lang('id'),TRUE);
            $this->CreateParameter('name',null,$this->Lang('name'),TRUE);
            $this->CreateParameter('email',null,$this->Lang('email'),TRUE);
            $this->CreateParameter('phone',null,$this->Lang('phone'),TRUE);
            $this->CreateParameter('message',null,$this->Lang('message'),TRUE);
            $this->CreateParameter('contact_date',null,$this->Lang('contact_date'),TRUE);
            $this->CreateParameter('submit',null,$this->Lang('submit'),TRUE);
        }
    }
?>