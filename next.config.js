const emoji = require("remark-twemoji")
const emojiparser = require("remark-emoji")
const toc = require('remark-toc')
const slug = require('remark-slug')
const kdb = require('remark-kbd')

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [emojiparser, emoji, toc, slug, kdb]
    }
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    }
})