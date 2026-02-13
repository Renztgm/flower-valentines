onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const message = document.querySelector(".valentine-message");
  const messageDelayMs = 8000;

  if (message) {
    setTimeout(() => {
      message.classList.add("is-visible");
    }, messageDelayMs);
  }
};