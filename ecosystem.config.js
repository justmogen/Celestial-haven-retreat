module.exports = {
  apps: [
    {
      name: 'hotel-management',
      script: 'npm',
      args: 'start -- -H 192.168.0.109',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
      },
      watch: true, // Enable watch mode to restart the app on file changes
    },
  ],
};
