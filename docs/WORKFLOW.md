# Music Video Production Workflow

## Inputs
- Song audio file (keep private; do not commit to this public repository)
- Lyrics or LRC file if available
- Theme/story in a few sentences
- Visual notes or reference images
- Target platform/aspect ratio, if known

## Production stages
1. **Song map:** duration, sections, beat estimate, downbeats, energy, lyrical anchors.
2. **Visual bible:** character design, line quality, palette, background language, recurring symbols, animation rules.
3. **Storyboard:** timestamped shots, action, lyric/musical cue, camera, transition.
4. **Short proof of concept:** 5–15 seconds, including one meaningful lyric moment and one beat-synced transition.
5. **Review:** inspect rendered keyframes/contact sheets and check timing against the track.
6. **Full sequence:** build in manageable shots with a shared timeline.
7. **Final QC:** spelling, continuity, timing, duration, audio sync, dimensions, frame rate, ending.
8. **Export:** render MP4 and verify the actual output file.

## Tool selection
- p5.js + p5.brush: procedural hand-drawn character and scene animation.
- HyperFrames + GSAP: composition timeline, typography, subtitles, transitions, and render pipeline when useful.
- FFmpeg: audio/video encoding and technical checks.
- Python audio tools: optional for beat/onset analysis; automatic output must be checked by listening.

## Privacy
The repository is public. Do not add the user's music, lyrics, private references, or generated full-resolution video here unless the user explicitly requests it after understanding that visibility.
