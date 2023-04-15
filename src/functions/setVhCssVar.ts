const setVhCssVar = () => {
  const setVh = () => {
    const windowHeight = window.innerHeight;
    document.documentElement.style.setProperty('--vh-full', `${windowHeight}px`);
  };

  let vw = window.innerWidth;

  window.addEventListener('resize', () => {
    if (vw === window.innerWidth) {
      // 画面の横幅にサイズ変動がないので処理を終える
      return;
    }

    // 画面の横幅のサイズ変動があった時のみ高さを再計算する
    vw = window.innerWidth;
    setVh();
  });

  // 初期化
  setVh();
};

export default setVhCssVar;
