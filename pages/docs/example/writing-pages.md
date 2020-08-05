export const info = {
    name: "Writing Pages",
    description: "Pages are stored under modules."
}

<PageToolBar title="Writing Pages" />

## Table of Contents

## Getting Started
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

Copy and paste this into your file: 
```jsx
<PageToolbar title="" />
```
Give the title a string value of your choice. This is what will be displayed as the header.

#### Optional: Table of Contents
If you add `# Table of Contents` under the page header, all headings will automatically be applied to it with links.

#### Using Emojis
Because the documentation is built for Discord bots, I've included a few things like twemoji and emoji names. For example, `:star:` will turn into :star:.

#### Using Components
I've included a few components into the system. There is no need to import them--they are already imported. 
<Alert>
    Read the `Using Components` page to see how to use them.
</Alert>