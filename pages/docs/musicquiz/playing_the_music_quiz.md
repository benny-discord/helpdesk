export const info = {
    name: "Playing the Music Quiz",
    description: "Going over permissions and how to play the Music Quiz"
}

<PageToolBar title="Music Quiz" />

# Permissions Required in order to work
<Alert style="warn">Setting up permissions: Server Settings > Roles > Benny</Alert>

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

![](/docs/musicquiz/intro.png)

After 5 seconds, the first song will start playing. Send messages in that channel to guess the title and author. 

If you get the title correct, you get 1 point. If you get the author correct, you get 1 point. If you get both correct, you get 3 points. Once somebody has guessed the title, Benny will stop other users also guessing that title, which makes the game a race to get it as quickly as you can!

If you get a guess wrong, Benny will react with a cross, like so:

![](/docs/musicquiz/wrong_guess.png)

If you get it right, a message like the following will be displayed:

![](/docs/musicquiz/right_guess.png)

You are also able to guess the title and author in one message, like so:

![](/docs/musicquiz/two_in_one.png)
