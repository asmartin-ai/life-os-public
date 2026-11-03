# 0037 — A hosted home with client access

Date: 2026-10-21

## Status

Accepted

## Context

Always-on capture and access from multiple devices require a reliable home for canonical state. A desktop-only deployment is simple and keeps data close, but depends on that desktop being available. A hosted deployment improves availability while introducing network, credential, recovery, and data-custody risks.

## Decision

Use one hosted system as the canonical home for the relevant vault and services, with other devices acting as clients. Avoid running independent writers against divergent copies of canonical state. Protect credentials at rest and limit their delivery to the services that need them.

## Consequences

- Availability no longer depends on a particular client device, but does depend on the hosted system and its network.
- Hosting sensitive data and credentials requires an explicit threat model, least-privilege access, and a recovery plan.
- Backups and restore procedures must account for both canonical data and credentials; host-bound encrypted credentials may require re-provisioning after a rebuild.
- Existing integrations may require reauthentication when moved. Destructive migrations require a verified recovery path before source data is removed.
