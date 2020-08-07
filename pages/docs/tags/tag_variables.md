export const info = {
    name: "Tag Variables",
    description: "A guide on using cool variables in your Tags!"
}

<PageToolBar title="Tag Variables" />

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
**Server Variables**
```
<:BennySip:731922765246103562> Some information of this server:
**Server Name:** {server}
Server ID: {server.id}
**Server Icon:** {server.icon}
**Server Owner:** {server.owner}
**Server Region:** {server.region}
```

points to: ![ServerVariables](/docs/tags/server_variables.PNG)

**User Variables**
```
Hey, {user}! Did you know, that your **User ID** is {user.id}? Isn’t that cool? I also know this information about you <:BennyWizard:734809658325205124>:
Your **discriminator** is {user.tag} and your **Username** is {user.name}.
You also have a cool avatar: {user.avatar}
Have a nice day! <:BennyLove:732658898216943737>
```
points to: ![UserVariables](/docs/tags/user_variables.jpg)
