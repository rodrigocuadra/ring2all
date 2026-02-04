# Ring2All – FreeSWITCH DEB Builder & Voice Guides

This repository contains the **publicly shared components of the Ring2All project** that are intended for the FreeSWITCH and VoIP community.

In addition, it includes a dedicated documentation section that centralizes Ring2All technical documentation.

The goal of this repository is to document and share:

* A **real-world process to build custom FreeSWITCH `.deb` packages**
* **Multilingual voice guide texts** intended to be used for the creation of Ring2All voice guides for general use

This is not a full Ring2All source release, but a **community-facing subset** focused on build processes and reusable assets.

---

## FreeSWITCH custom `.deb` build process

The `freeswitch` path contains documentation, scripts and configuration files that describe **how to build your own FreeSWITCH Debian packages** in a controlled and reproducible way.

This section is based on practical production experience and focuses on:

* Preparing a clean build environment
* Managing build dependencies
* Customizing the Debian packaging process
* Generating `.deb` packages suitable for production systems
* Avoiding common pitfalls when compiling FreeSWITCH from source

The intention is to help system administrators and integrators who want **full control over their FreeSWITCH builds**, instead of relying solely on precompiled packages.

---

## Voice guides (IVR prompts)

The `voice_guide` path contains **text scripts for voice prompts** used across different voice applications and call scenarios.

These guides are:

* Organized by language
* Neutral and reusable
* Designed to work well with both TTS engines and human recordings

They can be directly adapted for FreeSWITCH or any other VoIP platform that uses audio prompts.

---

## Documentation

The `docs` path contains **Ring2All documentation**, including technical notes, design decisions, implementation details and guides related to the project.

This section serves as the main reference point for understanding how Ring2All is designed, built and operated.

---

## Scope and philosophy

This repository is intentionally focused and opinionated:

* It documents **how Ring2All builds and packages FreeSWITCH**
* It shares assets that are commonly needed across VoIP projects
* It favors clarity and reproducibility over automation magic

It is meant to **complement official FreeSWITCH documentation**, not replace it.

---

## Contributions

Contributions are welcome.

You are encouraged to contribute:

* Improvements to the build process documentation
* Adjustments for newer Debian or FreeSWITCH versions
* Additional languages or improvements to voice guides
* Fixes, clarifications or optimizations

Please use Pull Requests or Issues to collaborate.

---

## License

This repository is shared for community use under an open license.
Please refer to the `LICENSE` file for details.

---

## Acknowledgements

Thanks to the FreeSWITCH and VoIP community for continuously sharing knowledge and making projects like Ring2All possible.

---

**Ring2All – Real-world VoIP engineering, shared with the community.**


