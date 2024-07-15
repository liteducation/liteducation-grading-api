module.exports = {
  env: {
    "PORT": 3001,
    "MONGODB_URI": "",
    "OPENAI_API_KEY": "",
    "OPENAI_BASE_URL": "",
  },
  apps : [{
    name   : "liteducation-grading-web",
    script : "./dist/main.js"
  }]
}
