<template>
  <div class="container">
    <div class="navbar">
      <span>Benny<span>FAQ</span></span>
    </div>
    <div class="content-container">
      <div class="title-container">
        <h1 class="title">Benny <span>Help</span></h1>
        <p>Got a question? We want to help</p>
        <input type="text" placeholder="Find an answer..." />
      </div>
      <br /><br />
      <h2 style="text-align: center">Frequently Asked Questions</h2>
      <div class="articles-container">
        <div
          class="article"
          v-for="article in articles"
          :key="article.slug"
          :class="{ active }"
        >
          <div class="article-title" @click="setActive(article.slug)">
            <span class="a-t">{{ article.title }}</span>
            <span class="a-desc">{{ article.description }}</span>
            <div v-if="article.tags.length" class="article-tags">
              <span class="a-tag" v-for="tag in article.tags" :key="tag">{{
                tag
              }}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              class="article-svg"
              :class="{ active }"
            >
              <g>
                <path
                  d="M46.7070007,34.2929993c0.3906975,0.3906021,0.3906975,1.0233994,0,1.4140015   c-0.3906021,0.3906975-1.0233955,0.3906975-1.4140015,0L32,22.4141006L18.7070007,35.7070007   c-0.3906002,0.3906975-1.0233955,0.3906975-1.4139996,0C17.0977001,35.5116997,17,35.2559013,17,35   c0-0.2557983,0.0977001-0.5116997,0.2930012-0.7070007l13.9999981-14c0.3906059-0.3906002,1.0233994-0.3906002,1.4140015,0   L46.7070007,34.2929993z"
                  fill="#fff"
                />
                <path
                  d="M32,0c-17.6730995,0-32,14.3268995-32,32s14.3268995,32,32,32c17.6731987,0,32-14.3269005,32-32S49.6731987,0,32,0z M32,2   c16.542099,0,30,13.4580002,30,30c0,16.542099-13.457901,30-30,30s-30-13.457901-30-30C2.0000007,15.4580002,15.4579,2,32,2z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div
            class="article-body"
            :class="{ active: active == article.slug }"
            :id="`article:${article.slug}`"
          >
            <nuxt-content :document="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      active: '',
    }
  },
  async fetch() {
    // console.log(context.$content())
    const articles = await this.$content().sortBy('title').fetch()
    this.articles = articles.map(function (ar) {
      if (!Array.isArray(ar.tags)) ar.tags = []
      return ar
    })
  },
  methods: {
    setActive(text) {
      this.active = this.active == text ? '' : text
      const e = document.getElementById(`article:${text}`)
      if (e) {
        if (e.style.maxHeight) {
          e.style.maxHeight = null
        } else {
          e.style.maxHeight = (60 + e.scrollHeight) + 'px'
        }
      }
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: white;
  background-color: #282828;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.navbar {
  box-sizing: border-box;
  height: 64px;
  padding: 16px;
  background-color: #18171a;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar span {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.12s;
}
.navbar > span > span {
  margin-left: 8px;
  color: hsla(0, 0%, 100%, 0.5);
  font-weight: 400;
}

.content-container {
  padding: 4%;
}

.title-container {
  border-radius: 6px;
  padding: 50px 20px 40px;
  background-color: #40c9dd;
}

.title-container input {
  border: none;
  outline: none;
  background-color: #fafafa;
  border-radius: 5px;
  width: 100%;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  max-width: 400px;
  text-align: center;
  margin: 20px auto 0;
  display: block;
  color: #111;
}

.title-container p {
  text-align: center;
  margin-top: 10px;
}

.title {
  text-align: center;
  font-size: 42px;
}
.title span {
  font-weight: 400;
}

.article {
  margin: 20px 2%;
}

.article-title {
  background-color: #353535;
  padding: 20px 50px 20px 20px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  position: relative;
  transition: all 0.6s;
}

.article-body {
  background-color: #353535;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.6s ease-out;
}

.article-body.active {
  padding: 20px;
}

.article-body a {
  text-decoration: underline;
  font-weight: 600;
  color: #eee;
}

.article-body p {
  margin-bottom: 20px;
  margin-top: 5px;
}

.article-body p ~ ul {
  margin-top: -15px;
}

.article-body p > code {
  background-color: #555;
  padding: 3px;
  border-radius: 4px;
}

.article.active .article-title {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.article-title .a-t {
  font-size: 22px;
}

.article-title .a-desc {
  font-size: 16px;
  display: block;
  color: #bbb;
}

.a-tag {
  background-color: #447583;
  border: 1px solid #09525f;
  padding: 2px 10px;
  border-radius: 3px;
  margin-inline-end: 10px;
  margin-top: 10px;
  margin-right: 10px;
  display: inline-block;
  color: rgb(255, 255, 255);
  user-select: none;
  white-space: nowrap;
}

.article-svg {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  transition: transform 0.4s;
}

.article-svg.active {
  transform: translateY(-50%);
}
</style>
