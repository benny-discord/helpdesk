export const info = {
    name: "Playing the Music Quiz",
    description: "Going over permissions and how to play the Music Quiz"
}

<PageToolBar title="Music Quiz" />

# Permissions Required in order to work
<Alert style="info">Setting up permissions: Server Settings > Roles > Benny</Alert>

#### Next is giving Benny the right permissions in order for benny to play the Music Quiz
- Read Text Channels & See Voice Channels
- Send Messages 
- Connect 
- Speak 
- Embed Links
- Add Reactions


#### Playing and stopping the Music Quiz
``Benny start-quiz`` will start the Music Quiz

``Benny stop-quiz`` will stop the Music Quiz
<Alert style="destructive">Note: A lot of messages are sent when playing the game so it is advised to have a different channel for this plugin!</Alert>

Once you start the quiz, this message will be sent.

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

After 5 seconds, the first song will start playing. Send messages in that channel to guess the title and author. 

If you get the title correct, you get 1 point. If you get the author correct, you get 1 point. If you get both correct, you get 3 points. Once somebody has guessed the title, Benny will stop other users also guessing that title, which makes the game a race to get it as quickly as you can!

If you get a guess wrong, Benny will react with a cross, like so:

![](/docs/musicquiz/wrong_guess.png)

If you get it right, a message like the following will be displayed:

<DiscordMessages>
<DiscordMessage
    author="Discord User"
    key={2}
>

Years & Years

</DiscordMessage>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://bennybot.dev/icon.png"
    key={3}
>

**Discord User#0000** guessed the song title correctly! The song was "**Years & Years**"!

</DiscordMessage>
</DiscordMessages>

You are also able to guess the title and author in one message, like so:

<DiscordMessages>
<DiscordMessage
    author="Discord User"
    key={2}
>

Years & Years Breathe

</DiscordMessage>
<DiscordMessage
    author="Benny"
    bot={true}
    avatar="https://bennybot.dev/icon.png"
    key={3}
>

**Discord User#0000** guessed the song title and author correctly! The song was "**Breathe**" by "**Years & Years**"!

</DiscordMessage>
</DiscordMessages>