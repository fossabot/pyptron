module.exports = {
  apps: [
    {
      name: "pyptron",
      script: "src/api",
      env_production: {
        NODE_ENV: "production",
        PORT: 3245,
        IP: "127.0.0.1"
      }
    }
  ],
  deploy: {
    production: {
      user: process.env.PYPTRON_PRODUCTION_USER,
      host: process.env.PYPTRON_PRODUCTION_HOST,
      port: process.env.PYPTRON_PRODUCTION_PORT,
      ssh_options: "StrictHostKeyChecking=no",
      ref: "origin/master",
      repo: "git@bitbucket.org:archemiro/pyptron.git",
      path: "/home/pyphoy/pyptron",
      "post-deploy":
        "npm install && pm2 startOrRestart ecosystem.config.js --env production && pm2 save"
    }
  }
};
