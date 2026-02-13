onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const message = document.querySelector(".valentine-message");
  const yesButton = document.querySelector(".valentine-btn--yes");
  const noButton = document.querySelector(".valentine-btn--no");
  const actions = document.querySelector(".valentine-actions");
  const gallery = document.querySelector(".valentine-gallery");
  const messageDelayMs = 8000;
  const noReturnDelayMs = 1800;

  if (message) {
    setTimeout(() => {
      message.classList.add("is-visible");
    }, messageDelayMs);
  }

  if (yesButton && gallery && actions) {
    yesButton.addEventListener("click", () => {
      gallery.classList.add("is-visible");
      actions.classList.add("is-hidden");
    });
  }

  if (noButton) {
    noButton.addEventListener("click", () => {
      noButton.classList.add("is-shrinking");

      setTimeout(() => {
        noButton.classList.add("is-hidden");
      }, 400);

      setTimeout(() => {
        noButton.classList.remove("is-hidden", "is-shrinking");
      }, noReturnDelayMs);
    });
  }
};