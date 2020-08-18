# How to write Benny Documentation
Thanks to [Davien](https://github.com/RealSGII2) for designing our helpdesk.

## Writing a module
To create your first module, copy and paste the **example-pages** folder into a new folder within the **docs** folder. The name of the folder is what the name of the module will be. You can name it anything URL compatible. This is what will be displayed in the URL. Then, open the index.js file inside of it. 

### Module Properties
*index.js* configures how your module looks and is a page itself, which automatically displays all `.md` files in the folder. There are three properties in it.

#### `id`
The ID should be **exactly** the same as the name of the folder. This is used internally due to the problem of not being able to get the current folder automatically.

#### `name`
This is what will be displayed as the header of the module page, and is what will be inside the module's button.

#### `description`
Also displayed in the button and header, this can be a small description of what the module is about.

### Setting Up
After you give the module its properties, you're ready to start writing!

## Writing a page
To create your first page, you need to give it an ID that will be displayed in the URL. Once you've thought of one, create a new file under the module you want the page under, and name it `your-id-here.md`.

### Setting Up
Copy & paste this into the file: 
```jsx
export const info = {
    name: "",
    description: ""
}
```

#### Properties
##### `name`
This is the name of your file, displayed in the button.

##### `description`
Also displayed in the button, this is the description of your page.

### Writing
Although the file extension is `.md`, the documentation uses a parser named MDX. This is JSX and markdown.
That's what allows the `export const info` to work. Another plus is that you can use JSX components in it.

Next, copy and paste this into your file: 
```jsx
<PageToolBar title="" />
```
Give the title a string value of your choice. This is what will be displayed as the header.

#### Optional: Table of Contents
If you add `# Table of Contents` under the page header, all headings will automatically be applied to it with links.

#### Using Emojis
Because the documentation is built for Discord bots, I've included a few things like twemoji and emoji names. For example, `:star:` will turn into ⭐.

#### Components
I've included a few components into the system. There is no need to import them--they are already imported. Read the `Using Components` section to see how to use them.


## Using Components

### Alert
> **style**: "info" | "warn" | "destructive" | "success"
>
> The state (colour) of the Alert.
```html
<Alert style="info|warn|destructive|success">Text</Alert>
```

### Button
> **color**: "brand" | "secondary" | "destructive" | "light"
>
> The colour of the button.
```html
<Button color="brand|secondary|destructive|light">Text</Button>
```

> **disabled**: bool
>
> Is the button disabled?
```html
<Button disabled>Text</Button>
```

> **onClick**: func
>
> The method to run on click. This can be used like so to create links.
```JSX
<Button onClick={()=>window.location.href = 'https://your.link/goes/here'}>Text</Button>
```

### Discord Messages:
Container for Discord Message components (See below)

```JSX
<DiscordMessages>

</DiscordMessages>
```

### Discord Message
> **author**: string
> 
> This is the author's username
>
> Example: `username="Username!"`

> **avatar**: string
>
> Link to the user's avatar
>
> Example: `avatar="https://avatar.com"`

> **bot**: boolean
>
> Whether to give the bot tag or not
>
> Example: `bot={true}` `bot={false}`

> **edited**: boolean
>
> Whether to give the edited tag or not
>
> Example: `edited={true}` `edited={false}`

> **role-color**: string
>
> Colour of the user to display
>
> Example: `role-color="#ABCDEF"`

```JSX
<DiscordMessages>
<DiscordMessage
author="Username"
avatar="https://avatar.com"
bot={true}
edited={true}
role-color="#FF0000"
>

This is my message content. It supports **markdown**.

</DiscordMessage>
</DiscordMessages>
```

### Discord Mentions
Inside your `<DiscordMessage>` components, you can have `<Mention>` components.
> **type**: string
>
> Values: 'channel', 'role', 'user'
>
> Example: 
>
> `<Mention type="channel">channel-1</Mention>`
>
> `<Mention type="user">Username</Mention>`

### Discord Embeds
| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| color | String | ✅ | | The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp). |
| author-name | String | ✅ | | The author's name. |
| author-image | String | ✅ | | The author's avatar URL. |
| author-url | String | ✅ | | The URL to open when you click on the author's name. |
| title | String | ✅ | | The embed title. |
| url | String | ✅ | | The URL to open when you click on the embed title. |
| thumbnail | String | ✅ | | The thumbnail image to use. |
| image | String | ✅ | | The embed image to use (displayed at the bottom). |
| footer-image | String | ✅ | | The image to use next to the footer text. |
| timestamp | Date\|String | ✅ | | The timestamp to use for the footer text. When supplying a string, the format must be `01/31/2000`. |

To set a description, place it inside the `<DiscordEmbed>` component, like so:
```html
<DiscordEmbed color="#0099ff" slot="embeds" fields={[]}>
	Hi, I'm the embed description.
</DiscordEmbed>
```
This must go inside a `<DiscordMessage>` component.

**Notes**:
- You MUST add `slot="embeds"` and `fields={[]}` to your component, otherwise it will cause issues.

### PageToolbar
> **title**: string
>
> This is the title bar of your page
```html
<PageToolBar title="Using Components" />
```