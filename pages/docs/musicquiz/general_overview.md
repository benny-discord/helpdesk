export const info = {
    name: "What is Music quiz?",
    description: "A little bit of detail on our Music Quiz module"
}

<PageToolBar title="Music Quiz" />

# What is Music Quiz?
Music Quiz is a fun module for your users to interact and have fun with one another. It can be fast paced and challenging but that is what makes it fun.

<Alert style="info">Note: You can earn up to 45 points in total by guessing the Song Title and Author</Alert>
<Alert style="destructive">Note: A lot of messages are sent when playing the game so it is advised to have a different channel for this plugin!</Alert>

<DiscordMessages>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://bennybot.dev/icon.png"
    key={1}
>

<DiscordEmbed color="#1abc9c" title="Welcome to the Music Quiz">
This is a fun game where I will play you a list of songs, and you have to guess what they are.<br />You will get 1 point if you guess the author of the song, 1 point if you guess the title, and 3 points if you guess both!<br />To guess, just write a message in this channel.
</DiscordEmbed>

</DiscordMessage>
</DiscordMessages>




