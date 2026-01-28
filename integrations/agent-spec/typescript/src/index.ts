import { HttpAgent } from "@ag-ui/client";
import { A2UIMiddleware } from "@ag-ui/a2ui-middleware";

// Minimal Agent-Spec client that speaks the AG-UI protocol over HTTP
// Conditionally enables A2UI rendering via middleware when URL ends with /copilotkita2ui
export class AgentSpecAgent extends HttpAgent {
  constructor(config: ConstructorParameters<typeof HttpAgent>[0]) {
    super(config);

    const rawUrl = config.url ?? "";
    let pathToCheck = rawUrl;
    try {
      const u = new URL(rawUrl);
      pathToCheck = u.pathname;
    } catch {
      // rawUrl might be relative; fall back to string checks
    }

    const trimmed = pathToCheck.replace(/\/+$/, "");
    if (trimmed.endsWith("a2ui_chat")) {
      this.use(new A2UIMiddleware({ systemInstructionsAdded: true }));
    }
  }
}
