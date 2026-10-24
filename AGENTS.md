# Project Instructions

This repository is a reusable workspace for making hand-drawn/cartoon music videos from a user-provided song, theme, lyrics, and visual notes.

## Required workflow
1. Read `.agents/skills/painted-music-video/SKILL.md` before planning or editing a video.
2. Do not start a full-length render immediately. First analyze the track, draft a timed storyboard, and show the user a short preview plan. Wait for approval before producing the complete video.
3. Keep animation deterministic: a frame must be reproducible from its timestamp/frame number. Keep one authoritative timeline for song time, shot boundaries, lyric timing, and animation.
4. Use p5.js + p5.brush for expressive hand-drawn characters, linework, and illustrated scenes. Use HyperFrames/GSAP when its timeline, captions, transitions, or composition features add value; do not force both systems into every shot.
5. Prefer short previews and contact sheets before expensive final rendering. Inspect the rendered output, not just the source code.
6. Default to 1080x1920 vertical, 30 fps only when the user has not specified a format. Ask or infer from their platform and references when appropriate.
7. Preserve the user's chosen visual identity across shots: character proportions, line weight, palette, props, and emotional continuity.
8. Use the supplied song as the timing source. Analyze tempo/onsets where tooling permits, but manually verify musical downbeats and lyric alignment. Do not assume every beat is a cut.
9. Do not invent lyrics. If lyrics are unclear or absent, ask for an LRC/text transcript or mark uncertain sections for confirmation.
10. Do not upload audio, lyrics, reference images, API keys, or other private assets to a public repository. Keep local/user-provided media under ignored paths such as `assets/audio-private/`; only commit them if the user explicitly asks and understands repository visibility.
11. Before final export, verify duration, frame rate, dimensions, audio start/end, clipping, black frames, lyric spelling, and audio/video sync.
12. If the environment lacks Chrome/Chromium or FFmpeg, check whether they can be installed in the current cloud environment. If not, still create/test the project and provide the exact remaining export step; never claim an MP4 was rendered unless the file exists and was verified.

## Preferred commands
- `npm run check:env` — inspect runtime prerequisites.
- `npm run skills:hyperframes` — install HyperFrames skills for Codex in the current environment.
- `npm run preview` — launch the HyperFrames preview when a composition exists.
- `npm run render` — render the current composition to `out/final.mp4` when configured.

Keep project setup reproducible and document any environment-specific limitation.