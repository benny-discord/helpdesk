export const info = {
    name: "What are Benny's tags?",
    description: "Information regarding Benny's tags."
}

<PageToolBar title="Benny's tags" />

Benny's tags are designed to help your server with pre-typed messages. You can use Benny's tags to quickly share information, without using the time to type it again.
Here's an example:
<DiscordMessages>
<DiscordMessage
    author="Discord User"
    bot={false}
    avatar="https://cdn.discordapp.com/embed/avatars/0.png"
    key={1}
>

Benny Tag ExampleTag

</DiscordMessage>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://bennybot.dev/icon.png"
    key={2}
>

> This is an example tag

</DiscordMessage>
</DiscordMessages>

# Features
Benny's tags module offers amazing features to help you even more. You can customize these options in your server's [dashboard](https://bennybot.dev/dashboard). You can view articles of these features [here.](https://help.bennybot.dev/docs/tags)
# Permissions
For the Tags module to function correctly, it requires a list of permissions.
<Alert style="info">Configuration: Server Settings > Roles > Benny</Alert>
Benny requires these permissions:

* View Message History
* View Messages
* Send Messages
* Embed Links
