# Global Live Portals

> A map-based, real-time livestream platform for raw, observational glimpses of the world.

Global Live Portals lets users open **live, ephemeral camera streams** from their current location and discover other streams by clicking markers on a **global map**. There are no feeds, no likes, no chat, no filters, and no replays—just live presence.

The project is inspired by physical city-to-city portal installations and is intentionally designed to be **observational rather than performative**.

---

## Core Idea

- 📍 **Location-first discovery**: Streams are discovered spatially on a world map, not through an algorithmic feed.
- 🎥 **Live-only**: Streams exist only while live. Nothing is stored or replayed.
- 🧘 **Minimal & raw**: Single camera feed, minimal UI, no social mechanics.
- 🌍 **Public-space framing**: Visibility and openness discourage misuse, similar to real-world public installations.

---

## Feature Status

### Streaming

- [ ] Live camera capture (WebRTC)
- [ ] Live video playback
- [ ] Stream ends immediately on disconnect
- [ ] Audio support
- [ ] Camera switching (front/back)

### Discovery & Map

- [ ] Interactive world map
- [ ] Real-time stream markers
- [ ] Click marker to join stream
- [ ] Zoom-based stream clustering
- [ ] Region-based stream filtering

### Real-Time Systems

- [ ] WebSocket-based signaling
- [ ] Live stream lifecycle management
- [ ] Heartbeats / presence detection
- [ ] Graceful reconnection handling
- [ ] Multi-region signaling

### Backend & Infrastructure

- [ ] Node.js backend
- [ ] In-memory active stream state
- [ ] Redis-backed pub/sub
- [ ] TURN/STUN deployment
- [ ] SFU support (P2P → SFU)

### Safety & Moderation

- [ ] Periodic snapshot sampling
- [ ] Async AI-based NSFW detection
- [ ] Rolling violation thresholds
- [ ] Escalation-based enforcement
- [ ] Manual moderation tools

### UX & Product Constraints (Intentional)

- [x] No chat
- [x] No likes or follows
- [x] No comments
- [x] No recordings or replays
- [x] No algorithmic feed

---

## Tech Stack

### Frontend

- React (Web MVP)
- WebRTC for live streaming
- Mapbox / Leaflet for map rendering

### Backend

- Node.js
- WebSockets for signaling and discovery
- Optional Redis for active stream state

### Infrastructure (Planned)

- Docker
- Coturn (TURN/STUN)
- SFU (mediasoup / LiveKit)

---

## Architecture Overview

1. User starts a live stream from their current location.
2. Backend registers the stream and broadcasts its presence via WebSockets.
3. Other users see the stream appear as a marker on the map in real time.
4. Clicking a marker establishes a direct WebRTC connection.
5. When the streamer disconnects, the stream disappears immediately.

---

## Design Philosophy

This project prioritizes:

- **Presence over performance**
- **Observation over interaction**
- **Intentional constraint over feature bloat**

Many common livestream features were deliberately excluded to preserve the core experience and reduce abuse vectors.

---

## What This Project Demonstrates

- End-to-end ownership of a real-time system
- WebRTC and low-latency communication
- Distributed systems tradeoffs and scaling paths
- Product judgment and scope control
- Purposeful, non-hype-driven AI integration

---

## Roadmap (High-Level)

- Stabilize WebRTC connections
- Add Redis-backed stream state
- Introduce SFU for scalability
- Implement lightweight AI safety backstop
- Expand to mobile clients

---

## Status

🚧 **Active development** — early MVP stage

This README reflects both implemented features and planned work to clearly communicate scope, intent, and direction.
