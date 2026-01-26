# Copilot Instructions for Global Live Portals

## Overview

This document provides essential guidance for AI coding agents working on the Global Live Portals project. Understanding the architecture, workflows, and conventions is crucial for effective contributions.

## Architecture

- **Core Idea**: The project is a real-time livestream platform focused on observational experiences. It emphasizes location-based discovery and live-only streams without social mechanics.
- **Key Components**:
  - **Frontend**: Built with React, utilizing WebRTC for live streaming and Mapbox/Leaflet for map rendering.
  - **Backend**: Node.js with WebSockets for signaling and Redis for managing active stream states.
  - **Infrastructure**: Planned use of Docker, Coturn for TURN/STUN, and SFU technologies like mediasoup or LiveKit.

## Developer Workflows

- **Building**: Use standard Node.js commands to build the project. Ensure all dependencies are installed via `npm install`.
- **Testing**: Implement tests using Jest or similar frameworks. Follow the testing conventions outlined in the codebase.
- **Debugging**: Utilize browser developer tools for frontend issues and Node.js debugging tools for backend problems.

## Project-Specific Conventions

- **No Social Features**: The project intentionally excludes likes, comments, and chat to maintain focus on live presence.
- **Stream Lifecycle**: Streams are ephemeral; they disappear immediately upon disconnection. Ensure that this behavior is consistently implemented across components.

## Integration Points

- **WebRTC**: Direct connections are established when users click on stream markers. Familiarize yourself with the WebRTC API and its integration in the project.
- **WebSocket Communication**: Understand how the backend broadcasts stream presence and manages connections.

## External Dependencies

- **Redis**: Used for managing active stream states. Ensure Redis is properly configured in your development environment.
- **Coturn**: Required for TURN/STUN services to facilitate WebRTC connections.

## Conclusion

This document should serve as a foundational guide for AI agents to navigate the Global Live Portals codebase effectively. For any unclear sections or additional details needed, please provide feedback for further iterations.
