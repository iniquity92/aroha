<div class="pageoptions">
    {if !empty ($contacts)}
    <table class="pagetable">
        <thead>
            <tr>
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
                    <td>{$contact->name}</td>
                    <td>{$contact->email}</td>
                    <td>{$contact->phone}</td>
                    <td>{$contact->message}</td>
                    <td>{$contact->contact_date|date_format:"%x"}</td>
                </tr>
            {/foreach}
        </tbody>
    </table>
    {else}
        {$mod->Lang('empty_message')}
    {/if}
</div>