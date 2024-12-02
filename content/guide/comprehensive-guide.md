# Migrating to Micro Frontend Architecture

This guide explains how to migrate your Next.js application to a Micro Frontend setup.

# Local Development Setup

First, we need to update our dependencies. Our app currently uses webpack 4, and we'll make it compatible with webpack 5 for micro frontend support.

Add these packages to your package.json:

```json
{
  "dependencies": {
    "@module-federation/nextjs-mf": "^6.0.7",
    "webpack": "^5.82.1",
    "webpack-cli": "^4.10.0"
  }
}
```

Next, create a webpack config for local development. Make a new folder called 'config' in your root directory and add webpack.local.config.js inside it.

```
📁 your-project-root
    │
    ├── 📁 config
    │     └── 📄 webpack.local.config.js
    │
    ├── 📄 package.json
    ├── 📄 project-config.js
```

Since we're moving from webpack 4 to webpack 5, we need to adjust our config to work with the newer version. Here's the basic setup:

```javascript
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "your_app_name",
        filename: "remoteEntry.js",
        exposes: {
          "./yourComponent": "./components/YourComponent",
        },
      })
    );
    return config;
  },
};
```

Now open your project-config.js file in the root directory and add your port number:

```javascript
PORT_EXPRESS = 3001; // or your preferred port
```

Time to update your packages. Remove the existing yarn.lock file and install everything fresh:

```bash
rm yarn.lock
yarn
```

Start your application:

```bash
yarn run start
```

To verify your setup worked, open your browser and go to:

localhost:3001/remoteEntry.js

You should see a compiled JavaScript file containing your repo code. This means you've successfully set up the micro frontend configuration.

Remember to keep your port numbers unique if you're running multiple micro frontends locally.

# Prod Setup

Production setup details will be added in the next update of this guide.

Note: Make sure all team members update their local environments with these changes to prevent any build issues.
