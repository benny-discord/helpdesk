export const info = {
    name: "Configuration",
    description: "Set functional roles and change the prefix."
}

<PageToolBar title="Configuration" />

## Table of Contents

## Changing the Prefix

<Alert style="warn">
    Your prefix can <b>not</b> be more than 2 characters.
</Alert>

You can change Wizard's prefix for you server by running `^prefix [new prefix]`.

## Functional Roles
#### Linkup Roles
Users in this role have access to the Server Linkup.

> `linkuprole [roles...] [add/remove]`

#### Immunity Roles
Immunity roles cannot be moderated.

> `immunityrole [roles...] [add/remove]`

#### Command Roles
Command roles are allowed to use Wizard. If a user doesn't have at least on these roles, they may not use Wizard.

> `commandrole [roles...] [add/remove]`

#### Rejected Roles
Wizard ignores these roles.

> `rejectedrole [roles...] [add/remove]`

#### Dashboard Access Roles
<Alert style="info">
    No matter the role, any role with the Administrator permission is automatically considered a Dashboard Access role. This will include the owner.
</Alert>

Dashboard Access roles, as it implies, may access the dashboard.

> This does not have a command. It may only be configured on the dashboard.

#### Settings Command Roles
Settings Command roles are allowed to use the settings commands found in ^help.

> This does not have a command. It may only be configured on the dashboard.