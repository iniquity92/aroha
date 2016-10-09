<div id="communication">
    <div id="title" class="article" style="text-align:center; margin:5px; font-size:x-large;">Leave us a message</div>
        <div id="communication-form">
            {form_start}
                <div class="form-group">
                    <input class="form-control" type="text" name="{$actionid}name" id="name" placeholder="Full Name" required>
                </div>
                <div class="form-group">
                    <input class="form-control" type="email" name="{$actionid}email" id="email" palceholder="email@domain.com" required>
                </div>
                <div class="form-group">
                    <input class="form-control" type="tel" name="{$actionid}phone" id="phone" palceholder="90xxxxxxxx" required>
                </div>
                <div class="form-group">
                    <label for="message" class="article article-contact-medium">Message</label>
                    <textarea class="form-control" id="message" name="{$actionid}message" rows="5" cols="20"></textarea>
                </div>
                <input type="submit" class="btn btn-large btn-msg article article-contact-small" id="submit" name="{$actionid}submit" value="Submit" style="width:70px;">
            {form_end}
        </div><!-- end communication-form -->
</div><!-- end communication -->