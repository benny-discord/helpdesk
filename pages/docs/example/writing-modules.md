export const info = {
    name: "Writing Modules",
    description: "Modules are categories that store documentation pages of the same topic."
}

<PageToolBar title="Writing Modules" />

## Table of Contents

## Getting Started
To create your first module, copy and paste the **@/pages/example** folder. You can name it anything URL compatible. This is what will be displayed in the URL. Then, open the index.js file inside of it. 

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