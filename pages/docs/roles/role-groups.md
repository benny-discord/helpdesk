export const info = {
    name: "Role Groups",
    description: "Give or remove role(s) when a user is given a role."
}

<PageToolBar title="Role Groups" />

## Table Of Contents

# Understanding Role Groups

<Alert style="info">
    Is this too difficult or something isn't working? Be sure to join our support server <a href="https://discord.gg/Sq5feYC">here</a>.
</Alert>

## The Base Role
The base role is the base for group functions. This can be any role **except** @everyone.
When you create a role group, it'll ask for a role to be chosen. That will be the base role.

## Grouped Roles
Referred to as sticky or persisted roles, all groups roles will be assigned to a user who has received the base role. If a grouped role is removed, and the user still has the base role, the group role be reassigned, earning it the nickname "sticky".

## Rejected Roles
Once a base role is assigned, all rejected roles will be removed from the user, if he/she has them. If a rejected role is re-assigned, the rejected role will be removed automatically.

## Required Roles
Required Roles are **required** to be present on the user if they receive the base role. If the user does not meet the requirement, then the base role will be removed.
There are two options for this: require one or require all. If require one is selected (meaning that the Require All checkbox is off), the user only requires **one** of the required roles. If require all is selected (meaning that the Require All checkbox is on), the user must have **all** of the roles before he/she can be assigned the base role.

If the only required role the user has for a role group is removed (while Require All is off), the base role is removed. If at least one required role is removed (while Require All is on), the base role is removed.

# Creating a Role Group
<Alert style="destructive">
    The dashboard is currently a work in progress and is not released.
</Alert>

To create a Role Group, you must have access to the dashboard. This means you must own the server or have the Administrator permission.

1. Go to your dashboard.
<Button color="brand" disabled>
    Dashboard
</Button>

2. Select your server.
3. Click on the **Role Groups** tab near the top.
4. Click **Add Role Group** and select your base role.
5. Your Role Group is added and should be the nearest down the bottom. Add your Grouped Roles, Rejected Roles, and Required Roles
6. Your Role Group is set up and complete! :tada: