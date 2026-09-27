import { Engine } from "./engine";
import { showHub } from "./hub/hub";
import { startExplore } from "./explore/mode";
import { startWorkshop } from "./workshop/mode";
import { NatureAudio, applyMute, bindAudio } from "./nature/audio";
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
  bindAudio(audio);
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
      applyMute();
      const quality = readQuality();
      if (mode === "explore") {
        await runExplore("zhaoyao");
      } else {
        engine = new Engine(canvas, quality);
        engine.start();
        disposeMode = await startWorkshop(engine, overlay, quality, goHub);
      }
    });
  };

  const runExplore = async (mountainId: string) => {
    disposeMode?.();
    disposeMode = null;
    engine?.dispose();
    const quality = readQuality();
    engine = new Engine(canvas, quality);
    engine.start();
    disposeMode = await startExplore(engine, overlay, quality, goHub, {
      mountainId,
      onSwitchMountain: (_id) => undefined,
    });
  };

  goHub();
}
