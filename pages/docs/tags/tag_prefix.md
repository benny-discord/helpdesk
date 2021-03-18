export const info = {
    name: "Tag Prefix",
    description: "What's a Tag Prefix and what does it do?"
}

<PageToolBar title="Tag Prefix" />

# We want to make Benny as helpful and useful as possible.
A tag prefix can be used to speed up the amount of time it takes to send a tag. For example, instead of sending `!tag ExampleTag` you can use `?ExampleTag`, just like seen here:
<DiscordMessages>
<DiscordMessage
    author="Discord User"
    bot={false}
    avatar="https://cdn.discordapp.com/embed/avatars/0.png"
    key={1}
>

?ExampleTag

</DiscordMessage>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://benny.sh/icon.png"
    key={2}
>

> This is an example tag

</DiscordMessage>
</DiscordMessages>

#### Note:

<Alert style="info">You can setup your tag prefix on your dashboard in the tags module.</Alert>