module.exports = {
  env: {
    "NEXT_PUBLIC_API_URL": "https://liteducation-grading-api.nvf.one",
  },
  apps : [{
    name   : "liteducation-grading-web",
    script : "./dist/main.js"
  }]
}
