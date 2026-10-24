# GPT_001 — Painted Music Video Workspace

A reusable Codex workspace for creating hand-drawn cartoon / doodle music videos from a song, theme, lyrics, and visual notes.

## Start here

1. Open this repository in Codex Cloud.
2. Read `AGENTS.md` and the `painted-music-video` skill at `.agents/skills/painted-music-video/SKILL.md`.
3. Run `npm run check:env` to inspect the current cloud runtime.
4. Run `npm run skills:hyperframes` (currently `npx hyperframes skills update`) to install/update the current HyperFrames core skills for the coding agent in this environment.
5. When ready to create a video, provide the audio, lyrics (LRC if available), theme, and visual suggestions. Plan and approve a short sample before the full render.

## Important privacy note

This repository is currently public. Do not commit your song, lyrics, private reference images, or rendered video here unless you explicitly want those files to be public. Private media paths and generated outputs are excluded by `.gitignore`.

## Tooling

- p5.js + p5.brush for procedural hand-drawn characters and scenes.
- HyperFrames + GSAP when helpful for timeline composition, captions, transitions, and rendering.
- Chrome/Chromium + FFmpeg for browser-based rendering and MP4 encoding.

See [the production workflow](docs/WORKFLOW.md) for the end-to-end process.
