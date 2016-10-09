<?php
    class ContactItem{
        const MAIL_TO = "sonu.abhisheksingh143@gmail.com";
        const MAIL_SUBJECT = "Request of information";
        private $_data = array(
            'id'=>0,
            'name'=>'',
            'email'=>'',
            'phone'=>'',
            'message'=>'',
            'contact_date'=>''
        );

        public function _get($key){
            switch($key){
                case'id':
                case'name':
                case'email':
                case'phone':
                case'message':
                case'contact_date':
                    return $this->_data[$key];
            }
        }

        public function _set($key,$val){
            switch($key){
                case'name':
                case 'email':
                case 'phone':
                case 'message':
                    $this->_data[$key] = htmlspecialchars(trim($val));
                    break;
                case 'contact_date':
                    $this->_data[$key] = strftime('%d-%m-%Y',time());
            }
        }

        public function is_valid(){
            $name_pattern = "/^[a-zA-Z\u0020]+$/i";
            $email_pattern = "/^[a-zA-Z0-9\u002e\u002d]+\u0040[a-z]+\.[com]|[in]|[co.in]$/i";
            $phone_pattern = "/^\d{10}$/";
            if(!preg_match($name_pattern,$this->name)) return FALSE;
            if(!preg_match($email_pattern,$this->email)) return FALSE;
            if(!preg_match($phone_pattern,$this->phone)) return FALSE;
            return TRUE;
        }

        public function save(){
            if(!$this->is_valid()) return FALSE;
            if($this->id==0){
                $this->insert();
            }
        }

        protected function insert(){
            $db = \cms_utils::get_db();
            $sql = 'INSERT INTO '.CMS_DB_PREFIX.'mod_contact (name,email,phone,mesage,contact_date) VALUES(?,?,?,?,?)';
            $dbr = $db->Execute($sql,array($this->name,$this->email,$this->phone,$this->message,$this->contact_date));
            if(!$dbr) return FALSE;
            $this->_data['id'] = $db->Insert_id();

            mail(MAIL_TO,MAIL_SUBJECT,$this->message);
            
            return TRUE;
        }

        public function delete(){
            if(!$this->id) return FALSE;
            $db = \cms_utils::get_db();
            $sql = 'DELETE FROM '.CMS_DB_PREFIX.'mod_contact where id=?';
            $dbr = $db->Execute($sql,array($this->id));
            if(!$dbr) return FALSE;
            $this->_data['id']=null;
            return TRUE;
        }

        /** internal **/
        public function fill_from_array($row){
            foreach($row as $key=>$val){
                if(array_key_exists($key,$this->_data)){
                    $this->_data[$key] = $val;
                }
            }
        }

        public static function &load_by_id($id){
            $id = (int)$id;
            $db = \cms_utils::get_db();
            $sql = 'SELECT * FROM '.CMS_DB_PREFIX.'mod_contact where id=?';
            $row = $db->GetRow($sql,array($id));
            if(is_array($row)){
                $obj = new self();
                $obj->fill_from_array($row);
                return $obj;
            }
        }
    }
?>