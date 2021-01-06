export const info = {
    name: "Tag Variables",
    description: "A guide on using cool variables in your Tags!"
}

<PageToolBar title="Tag Variables" />

# Table of Contents

Benny has multiple variables you can use in your tags. There are two types of variables.
# Server Variables
Server Variables describe server information.
* Server Name: `{server}`
* Server ID: `{server.id}`
* Server Icon: `{server.icon}`
* Server Owner: `{server.owner}`
* Server Region: `{server.region}`
# User Variables
User Variables describe information of the user who ran the tag command.
* User Mention: `{user}`
* User Discriminator: `{user.tag}`
* User Avatar: `{user.avatar}`
* Username: `{user.name}`
* User ID: `{user.id}`

<Alert style="info">Note: You can configure your tags by going to your dashboard and choosing the tags module.</Alert>

# Examples

## Server Variables

```
**Some information about this server:**
**Server Name:** {server}
**Server ID**: {server.id}
**Server Icon:** {server.icon}
**Server Owner:** {server.owner}
**Server Region:** {server.region}
```

<DiscordMessages>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://bennybot.dev/icon.png"
    key={2}
>

**Some information about this server:**<br />
**Server Name:** Benny Support<br />
**Server ID**: 523525264517496834<br />
**Server Icon:** https://cdn.discordapp.com/icons/523525264517496834/1190e1523f5cb03c8bfa309c23753189.png?size=2048<br />
**Server Owner:** AR#3616<br />
**Server Region:** europe

</DiscordMessage>
</DiscordMessages>

## User Variables
```
Hey, {user}! Did you know, that your **User ID** is {user.id}?
Isn’t that cool? I also know this information about you:
Your **discriminator** is {user.tag} and your **Username** is {user.name}.
You also have a cool avatar: {user.avatar}
Have a nice day!
```

<DiscordMessages>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://bennybot.dev/icon.png"
    key={2}
>

Hey, <DiscordMention>Discord User</DiscordMention>! Did you know, that your **User ID** is 123456789012345678?<br />
Isn’t that cool? I also know this information about you:<br />
Your **discriminator** is Discord User#0000 and your **Username** is Discord User.<br />
You also have a cool avatar: https://cdn.discordapp.com/embed/avatars/0.png
Have a nice day!

</DiscordMessage>
</DiscordMessages>
