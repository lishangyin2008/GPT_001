---
name: painted-music-video
description: Plan and create hand-drawn cartoon, doodle, and painted lyric/music videos from a user-provided song, theme, and visual notes. Use when the task involves beat-synced animation, lyric storytelling, p5.js/p5.brush, shot planning, music timing, preview sheets, or final MP4 export.
---

# Painted Music Video Workflow

Create a coherent animated music video, not a generic audio visualizer. Translate the song's rhythm, lyrics, emotional arc, and the user's visual direction into a consistent hand-drawn visual story.

## Before coding
1. Inspect the repository, read `AGENTS.md`, check `package.json`, and run `npm run check:env`.
2. Identify available inputs: audio file, lyrics/transcript or LRC timestamps, theme, visual references, desired aspect ratio/duration, and anything to avoid. Ask only for missing information that materially changes the result.
3. Listen/analyze the whole song if audio inspection is available. Record duration, sections, approximate BPM, downbeat offset, energy changes, pauses, transitions, and important lyrical moments. Treat automatic beat detection as a draft and verify it against the music.
4. Produce a song map and timed storyboard before implementing. For each shot specify start/end time, lyric or musical cue, visual idea, character action, camera/motion, transition, and why it fits the music.
5. Ask the user to approve the visual direction/storyboard or short sample plan before a full render.

## Visual direction
- Prefer simple, memorable hand-drawn/cartoon line art unless the user asks otherwise: expressive poses, slightly imperfect/boiling linework, limited palette, readable silhouettes, purposeful negative space, and meaningful visual metaphors.
- Maintain a character/style sheet: proportions, face, stroke width, colors, props, and animation principles. Reuse it consistently across scenes.
- Every shot should change something meaningful. Avoid static slides, random particles with no narrative purpose, and transitions that do not match the music.
- Use beat-synced movement for accents, not just cuts. Let lyrics determine story beats; let melody and harmony influence movement, color, and pacing.
- Avoid overcrowding: a few clear visual ideas are stronger than many unrelated effects.
- Use original drawings and code-generated visuals; do not imitate a living artist exactly. Treat reference videos as inspiration, not material to copy shot-for-shot.

## Technical architecture
- Prefer p5.js + p5.brush for hand-drawn character animation, expressive linework, brush texture, and procedural scene drawing. Read the upstream MIT-licensed reference project and its animation guide when useful: https://github.com/JohnHeibel/ClaudeAnimationBase
- Consider the workflow inspiration at https://github.com/Joker-chichi/claude-mv-skill. It was written for Claude Code/Opus, so adapt its methods and scripts to the current Codex environment rather than assuming its Claude-specific install commands will work.
- Use HyperFrames + GSAP where useful for timeline composition, lyric/caption timing, transitions, layering, and final video assembly. Official docs: https://hyperframes.app/docs/1-startup/2-quickstart
- Install the HyperFrames agent skills in the current environment with `npm run skills:hyperframes` when the environment permits. Confirm the command succeeds; otherwise document the failure and continue using the repository skill.
- Do not create competing clocks. Define a single song-time timeline; derive shot, lyric, and animation state from it. If p5 canvas content is embedded in HyperFrames, synchronize it to the composition's supplied time rather than an independent wall clock.
- Prefer deterministic rendering: frame state derives from `t) or frame index, not accumulated frame-by-frame mutations that drift.
- Keep audio assets out of version control unless explicitly approved. The repository may be public.

## Preview and quality control
1. Build a 5–15 second representative sample first, including at least one lyric/beat transition and one character action.
2. Render contact sheets/keyframes and inspect them. Fix anatomy/continuity errors, inconsistent strokes, unreadable text, abrupt transitions, or timing mismatches before extending.
3. Review each shot separately, then review the whole sequence with music.
4. Render a low-resolution/low-frame-rate draft first if full rendering is expensive.
5. Before final export, verify exact duration, frame rate, aspect ratio, audio synchronization, lyric spelling, no accidental blank/black frames, no clipped text, and a clean ending.

## Output expectations
- Save the song map, storyboard, visual bible, and timing notes under `docs/production/`.
- Keep code organized by shot/scene, not one enormous file.
- Put temporary previews and final renders under `out/` (ignored by Git).
- At completion, report what was actually tested, the actual output path, render settings, and any known limitations. Never claim a render or installation succeeded without checking the result.