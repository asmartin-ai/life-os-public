# life-os

**The architecture and decision layer for a personal operating system.**

life-os describes how the parts of Khaos work together: [PKMS](https://github.com/asmartin-ai/pkms) for knowledge, [content-hoarder](https://github.com/asmartin-ai/content-hoarder) for saving and triaging external content, and shared contracts for capture, provenance, permissions, and decisions.

This repository provides architecture and planning documents, not an application to install. Markdown files are the source of truth; apps, agents, dashboards, and indexes are derived layers.

## Start here

1. [Charter](docs/charter.md): purpose and operating principles.
2. [Architecture](docs/architecture.md): system shape and cross-system flows.
3. [Contracts](docs/contracts.md): shared objects and safety boundaries.
4. [Onramps](docs/onramps.md): capture surfaces and integration requirements.
5. [Roadmap](docs/roadmap.md): product directions.
6. [Glossary](GLOSSARY.md): shared terminology.

Architecture decision records live in `decisions/`; reusable document templates live in `templates/`. The [publication policy](docs/publication-safety.md) describes the reviewed public mirror and its boundaries.

## Design principles

- Capture should not require a filing decision.
- One practical next action beats an overwhelming plan.
- Surfaced items should explain their source and why they matter.
- Agents propose bounded actions; sensitive side effects require scoped permission and approval.
- Re-entry after a lapse should not create guilt or mandatory catch-up.

## License

[MIT](LICENSE).
