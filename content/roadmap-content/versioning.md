# Dynamic Version Management with Contentful

## Overview

Implemented dynamic version management using Contentful CMS for real-time remote module updates without host app redeployment.

## Implementation

- Contentful Integration: Set up space, secure API for config fetching
- Dynamic Module Loading: ExternalTemplateRemotesPlugin, runtime loading, version control

## Architecture

- Runtime Config: URLs and versions in Contentful, dynamic injection
- Version Management: Real-time switching, zero-downtime updates

## Benefits

- Zero-build deployments for version changes
- Simplified A/B testing
- Enhanced deployment flexibility
- Reduced risks

## Contentful Setup

- Model: Remote Module Configuration
- Environment: Production
- Entry: [Contentful Record Link]
