# khaos

The shared language of a personal system: PKMS (vault), content-hoarder (save and triage),
and life-os (decisions and direction). One word, one meaning, across all three repos.

## Daily loop

**Ramp**:
A recurring input that brings captures into the vault. Keep, WhatsApp, Discord, and email are ramps.
_Avoid_: onramp, connector, feed, source

**Capture**:
Anything sent into the system before it is sorted.
_Avoid_: note, item, input

**Triage**:
Deciding keep, archive, or done over saved items in content-hoarder.
_Avoid_: sorting, review, processing

**Promote**:
Moving a kept item from content-hoarder into the vault as a real note.
_Avoid_: save, export, import

**Brief**:
A summary of relevant context and suggested next actions.
_Avoid_: digest, report, recap

## System shape

**Vault**:
The canonical plain-file (markdown) store of notes that PKMS owns and every surface reads.
In the public product, each user has their own vault, and it stays the source of truth.
_Avoid_: wiki, knowledge base, database, brain, note store

**Vault home**:
The one live copy of the vault that all writers target; every other copy is a sync client.
_Avoid_: master copy, source of truth, server copy

**Gate**:
A step requiring a user's decision or action, such as an account change, purchase, destructive action, or publication.
_Avoid_: blocker, human step, approval

**Linked-device pairing**:
The one-time phone scan that makes a machine a WhatsApp linked device.
_Avoid_: login, auth, session copy

**MVP**:
The smallest state of khaos that gets real daily use: capture runs, triage happens, keepers land in the vault, the brief arrives.
_Avoid_: v1, release, launch

## Public product

Which project ships publicly, who uses it, and how the software earns money.

**Public product**:
The software that a user can self-host or rent as managed hosting. It is PKMS.
_Avoid_: app, project

**Self-hoster**:
A user who runs the public product on their own machine.
_Avoid_: technical user, power user

**SaaS user**:
A user who pays us to run the public product for them. This user is less
technical and starts from scratch.
_Avoid_: customer, client

**Obsidian model**:
A product style where the user's files stay local and remain the source of
truth. Sync is optional.
_Avoid_: Obsidian (the product)

**Hermes model**:
A business style where the software is free and open source. Users pay for
managed hosting and metered services. Named after Hermes Agent by Nous Research.
_Avoid_: freemium, open-core

**Core loop**:
The v1 surface of the public product. It has five parts: capture, today,
search, tasks, and reading.
_Avoid_: dashboard, feature set

**AI-native**:
AI is a first-class part of the product. Users can disable any AI feature, in
part or fully.
_Avoid_: AI-powered, AI-enhanced

**Plugin**:
A swappable part of the product. The core loop ships as the default plugin
pack.
_Avoid_: add-on, extension, module

**Batteries included**:
The product is complete out of the box. Users can strip or reshape any part.
_Avoid_: minimal core, plugin-only

**Routing**:
The process that sends a capture to its destination. AI can assist routing.
The `intake_route` contract in life-os defines the shape.
_Avoid_: classification, filing
