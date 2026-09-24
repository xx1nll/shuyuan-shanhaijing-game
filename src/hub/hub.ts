import type { Quality } from "../quality";
import { readQuality, writeQuality } from "../quality";

export function showHub(
  overlay: HTMLElement,
  onPick: (mode: "explore" | "workshop") => void,
): void {
  overlay.innerHTML = `
    <section class="hub">
      <h1>崑崙</h1>
      <div class="sub">南山經 · 草木與海</div>
      <div class="modes">
        <button class="mode-card" data-mode="explore">
          <h2>探南山</h2>
          <p>沿招搖至箕尾步行。桂、祝餘、迷穀依經文所記而生。</p>
        </button>
        <button class="mode-card" data-mode="workshop">
          <h2>造島</h2>
          <p>堆土、開海，把山海草木拖到自己的島上。</p>
        </button>
      </div>
      <p style="margin-top:2rem;opacity:.75">
        畫質
        <button class="ghost" id="q">${readQuality() === "high" ? "細緻" : "流暢"}</button>
        · WASD · 觸控搖桿
      </p>
    </section>
  `;
  overlay.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      onPick((btn as HTMLElement).dataset.mode as "explore" | "workshop");
    });
  });
  overlay.querySelector("#q")!.addEventListener("click", (e) => {
    const next: Quality = readQuality() === "high" ? "low" : "high";
    writeQuality(next);
    (e.currentTarget as HTMLElement).textContent = next === "high" ? "細緻" : "流暢";
  });
}
