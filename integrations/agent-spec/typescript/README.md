# @ag-ui/agent-spec

Implementation of the AG-UI protocol for Agent-Spec runtimes (e.g., LangGraph / Wayflow).

Connects Agent Spec agents to frontend applications via the AG-UI protocol using HTTP communication.

## Installation

```bash
npm install @ag-ui/agent-spec
pnpm add @ag-ui/agent-spec
yarn add @ag-ui/agent-spec
```

## Usage

```ts
import { AgentSpecAgent } from "@ag-ui/agent-spec";

// Create an AG-UI compatible Agent Spec client
const agent = new AgentSpecAgent({
  url: "https://your-agent-spec-server.com/agent",
  headers: { Authorization: "Bearer your-token" },
});

// Run with streaming
const result = await agent.runAgent({
  messages: [{ role: "user", content: "Hello from Agent‑Spec!" }],
});
```

## Notes

- Works with any Agent Spec backend that exposes an AG-UI compatible HTTP endpoint (SSE for events).
- For advanced features (surfaces, activities, tool calls), see the AG-UI client docs and examples.
