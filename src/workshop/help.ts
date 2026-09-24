const HELP_SEEN = "kunlun-island-help-v1";

export function mountHelp(root: HTMLElement): {
  open: () => void;
  close: () => void;
  maybeFirstOpen: () => void;
} {
  const el = document.createElement("div");
  el.className = "help-modal hidden";
  el.innerHTML = `
    <article class="help-card">
      <h2>如何造島</h2>
      <ol>
        <li><b>堆高 / 挖低</b>：按住滑鼠在陸地上拖曳。堆過海面即成山丘；挖到海面以下，海水會灌進來。</li>
        <li><b>抹平 / 整地</b>：把陡坡修順，或把一塊地整成平台，方便走路與放樹。</li>
        <li><b>放置</b>：點「放置」，再從右側選草木或鳥獸，點島上安放。</li>
        <li><b>視角</b>：Shift 拖曳或右鍵旋轉，滾輪拉近拉遠。</li>
        <li><b>進入島嶼</b>：先儲存，再按「進入島嶼」，用 WASD 或左下搖桿在自己的島上行走。點畫面可鎖定視角。</li>
      </ol>
      <h3>山海草木</h3>
      <ul>
        <li><b>常木</b>：桂、松、柏、棕、檀、桑、棪、桃、梓、柳、竹、杉。可任意多株。</li>
        <li><b>桑</b>：構、桑同族。探南山招搖之「迷穀」是帶四照的桑，造島只放素桑。</li>
        <li><b>祝餘</b>：草，葉如韭，青華，食之不飢。</li>
        <li><b>異木</b>：建木、扶桑為獨株神木，未至其經，需專用模型。</li>
      </ul>
      <p class="help-note">主世界「探南山」不能鏟改，以保持經文中的山川草木鳥獸。</p>
      <button class="ghost" id="help-close">知道了</button>
    </article>
  `;
  root.appendChild(el);
  const close = () => el.classList.add("hidden");
  el.querySelector("#help-close")!.addEventListener("click", close);
  el.addEventListener("click", (e) => {
    if (e.target === el) close();
  });
  const open = () => el.classList.remove("hidden");
  return {
    open,
    close,
    maybeFirstOpen() {
      if (localStorage.getItem(HELP_SEEN)) return;
      localStorage.setItem(HELP_SEEN, "1");
      open();
    },
  };
}
