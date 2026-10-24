import { spawnSync } from "node:child_process";
import process from "node:process";

const candidates = process.platform === "win32"
  ? {
      node: [["node", ["--version"]]],
      ffmpeg: [["ffmpeg", ["-version"]]],
      chrome: [["chrome", ["--version"]], ["msedge", ["--version"]]]
    }
  : process.platform === "darwin"
    ? {
        node: [["node", ["--version"]]],
        ffmpeg: [["ffmpeg", ["-version"]]],
        chrome: [["google-chrome", ["--version"]], ["chromium", ["--version"]], [""/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"", ["--version"]]]
      }
    : {
        node: [["node", ["--version"]]],
        ffmpeg: [["ffmpeg", ["-version"]]],
        chrome: [["google-chrome", ["--version"]], ["google-chrome-stable", ["--version"]], ["chromium", ["--version"]], ["chromium-browser", ["--version"]]]
      };

function probe(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8", timeout: 5000 });
  if (result.error || result.status !== 0) return null;
  return (result.stdout || result.stderr || "").split("\n")[0].trim();
}

console.log("Painted Music Video — environment check");
console.log(`Platform: ${process.platform} ${process.arch}`);
console.log(`Node: ${process.version}`);

for (const [tool, options] of Object.entries(candidates)) {
  let found = null;
  for (const [command, args] of options) {
    found = probe(command, args);
    if (found) break;
  }
  console.log(`${tool}: ${found ?? "not found"}`);
}

console.log("\nNode is available because this check is running. Chrome/Chromium and FFmpeg may be needed for rendering.");
console.log("If a prerequisite is missing, install it in the cloud environment if permitted; otherwise use a supported render environment.");
