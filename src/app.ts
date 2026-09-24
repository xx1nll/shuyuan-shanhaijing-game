import { Engine } from "./engine";
import { showHub } from "./hub/hub";
import { startExplore } from "./explore/mode";
import { startWorkshop } from "./workshop/mode";
import { NatureAudio } from "./nature/audio";
import { readQuality } from "./quality";
import { emptyStory } from "./story/types";

export function boot(): void {
  const app = document.querySelector("#app")!;
  const canvas = document.createElement("canvas");
  canvas.className = "game";
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  app.append(canvas, overlay);

  const audio = new NatureAudio();
  emptyStory();

  let engine: Engine | null = null;
  let disposeMode: (() => void) | null = null;

  const goHub = () => {
    disposeMode?.();
    disposeMode = null;
    engine?.dispose();
    engine = null;
    showHub(overlay, async (mode) => {
      audio.start();
      const quality = readQuality();
      engine = new Engine(canvas, quality);
      engine.start();
      if (mode === "explore") {
        disposeMode = await startExplore(engine, overlay, quality, goHub);
      } else {
        disposeMode = await startWorkshop(engine, overlay, quality, goHub);
      }
    });
  };

  goHub();
}
