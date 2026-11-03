# 0036 — WhatsApp through wacli; agent access through MCP

Date: 2026-10-12

## Status

Accepted. Builds on [0003](0003-many-ramps-one-inbox.md) and replaces the earlier custom bridge design.

## Context

A messaging capture ramp and a personal agent need access to selected conversation data without giving every consumer independent account sessions or direct access to the vault and credentials. A linked-device session can provide broad account access, so reducing the number of sessions and the exposed operations matters. A maintained connector with a read-only interface also avoids maintaining a separate custom bridge.

## Decision

- Use wacli as the shared WhatsApp connector. Consumers access messages through its read-only interface rather than writing its store directly.
- The PKMS ramp converts selected messages into captured notes; the user controls which sources are included.
- The agent accesses system capabilities through the khaos MCP server, rather than directly reading the vault, credentials, or connector store. Messaging tools are read-only and tool calls produce audit events.
- Sending messages, backfill, media download, and account commands are not exposed through this integration. A send path requires a separate decision and per-message approval.
- Additional agent channels and home-automation integrations require their own access and approval decisions.

## Consequences

- The connector must be paired by the user and protected as account-sensitive state.
- Message content and names are untrusted input and must be screened before an agent acts on them.
- Content returned to an agent may be sent to its configured inference provider; users must consider that provider's data handling.
- WhatsApp Web is not a published API. Upstream protocol changes may interrupt the ramp until the connector is updated; other components should not depend on it.
