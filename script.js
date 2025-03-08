const pages = Array.from({ length: 10 }, (_, i) => `images/${String(i + 1).padStart(2, '0')}.png`);
let currentPageIndex = 0;

const currentPage = document.getElementById("current-page");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// ページを更新する関数
const updatePage = (index) => {
  currentPageIndex = index;
  currentPage.src = pages[currentPageIndex];
  prevButton.disabled = currentPageIndex === 0; // 最初のページでは「前へ」を無効化
  nextButton.disabled = currentPageIndex === pages.length - 1; // 最後のページでは「次へ」を無効化
};

// 初期ページを設定
updatePage(0);

// ページ切り替えイベント
prevButton.addEventListener("click", () => {
  if (currentPageIndex > 0) updatePage(currentPageIndex - 1);
});

nextButton.addEventListener("click", () => {
  if (currentPageIndex < pages.length - 1) updatePage(currentPageIndex + 1);
});