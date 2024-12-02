# CI/CD & Build Config POC

## Overview

Set up CI/CD for remote modules with AWS S3, enabling versioned deployments. Migrated from Webpack 4 to 5 with updated configs.

## Implementation

- Updated build config: Webpack 4 to 5, shared dependencies
- CI/CD pipeline: Automated builds, S3 deployments, version control
- AWS setup: S3 buckets, public access, CDN integration

## Benefits

- Automated deployments
- Version-controlled modules
- Simplified consumption
- Fewer errors
- Better build performance

## AWS Config

- Bucket: `/[repo-name]/[version]`
- Access: Public Read
- Types: JS, CSS, Assets
- CDN: CloudFront
