<div class="pageoptions">
    {if !empty ($contacts)}
    {*get_template_vars}
    {$contacts|print_r*}
    <table class="pagetable">
        <thead>
            <tr>
                <th>{$mod->Lang('id')}</th>
                <th>{$mod->Lang('name')}</th>
                <th>{$mod->Lang('email')}</th>
                <th>{$mod->Lang('phone')}</th>
                <th>{$mod->Lang('message')}</th>
                <th>{$mod->Lang('contact_date')}</th>
                <th class="pageicon">{*delete icon*}</th>
            </tr>
        </thead>
        <tbody>
            {foreach $contacts as $contact}
                <tr>
                    <td>{$contact->_get('id')}</td>
                    <td>{$contact->_get('name')}</td>
                    <td>{$contact->_get('email')}</td>
                    <td>{$contact->_get('phone')}</td>
                    <td>{$contact->_get('message')}</td>
                    <td>{$contact->_get('contact_date')|date_format:"%x"}</td>
                </tr>
                <!--tr>
                    <td>{$contact->_get('id')}</td>
                </tr-->
            {/foreach}
        </tbody>
    </table>
    {else}
        {$mod->Lang('empty_message')}
    {/if}
</div>