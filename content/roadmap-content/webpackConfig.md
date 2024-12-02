# Webpack 5 & Module Federation Setup

We upgraded to Webpack 5 and set up Module Federation to split our monolith into micro-frontends.

Key changes:

- Moved from Webpack 4 to 5
- Kept existing optimizations
- Updated loaders and plugins
- Added Module Federation config
- Set up shared dependencies
- Created separate configs for host and remotes
- Implemented dynamic remote loading

Host app changes:

- Configured remote module loading
- Managed shared scope
- Set up container config

Remote app changes:

- Made independent builds
- Defined exposed modules
- Aligned shared dependencies
- Enabled standalone deployment

Added dependencies for Webpack 5, build tools, and Module Federation.

PRs:
Host: [Link]
Remote: [Link]
