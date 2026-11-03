# Research takeaways

These design takeaways inform the architecture; they are not clinical guidance or proof of product outcomes.

## Provenance and action boundaries

- Preserve evidence and source context when turning captured material into a proposed commitment. The [contracts](contracts.md) describe source spans, action envelopes, capability grants, and receipts.
- Keep observation and proposals separate from side effects. Require scoped authority and approval before sensitive or destructive actions, and record what happened. See [agent patterns](agent-patterns.md).
- Model the relationship between derived artifacts and their sources; the [W3C PROV overview](https://www.w3.org/TR/prov-overview/) provides a general provenance vocabulary.

## Human-centered information flow

- Capture first and classify later so that organization does not block saving an idea. See [Decision 0003](../decisions/0003-many-ramps-one-inbox.md).
- Use human-readable files for durable artifacts and operational ledgers where structured state is useful; make derived indexes identifiable and rebuildable. See the [architecture map](architecture.md).
- Help users return after a lapse with a small, optional next step rather than an overdue pile. See [Decision 0023](../decisions/0023-re-entry-after-lapse.md) and the [re-entry examples](re-entry-copy.md).
- Treat engagement as a user-controlled design choice, not an excuse for concealed pressure. See [Decision 0035](../decisions/0035-engagement-mechanics-chosen-measured-switchable.md).

## Evidence and limitations

Research suggestions require independent validation before they become implementation requirements. Prefer primary sources for safety-critical claims, document uncertainty, and distinguish a design hypothesis from measured behavior. In particular, health-related features should not be presented as a substitute for professional care.
