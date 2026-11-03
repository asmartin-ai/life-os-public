# Onramps

Capture onramps bring information from different surfaces into a shared shaping workflow. Browser, mobile, messaging, email, and manual entry are possible surfaces; availability depends on the component and deployment.

## Onramp contract

Per [Decision 0003](../decisions/0003-many-ramps-one-inbox.md), capture is append-only, confirms save promptly, and does not require tags, project, priority, or due date. Preserve the available source and context metadata in the [capture envelope](contracts.md) and route captures through a shaping queue before they become canonical knowledge or work. Classification follows capture.

## Integration between content-hoarder and PKMS

content-hoarder holds captured external content and triage state; PKMS holds durable knowledge. Saving an item need not automatically promote it. A reviewable promotion path should preserve a reference to the content-hoarder item and, through it, the original source.

Source-platform save states differ across services. Any cleanup of a source-platform item is a separate external action: preview it, require appropriate approval, preserve a receipt, and offer recovery where supported. Do not assume that promotion authorizes deletion or unsaving.

A notes integration can capture both text and links; routing should distinguish knowledge notes from external content without forcing a classification at capture time.
