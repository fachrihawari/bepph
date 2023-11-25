module.exports = {
  apps: [
    {
      name: "bepph-stack",
      script: "bun",
      args: "start",
      env: {
        PORT: 3003
      }
    }
  ]
}
