handleWidth();
window.removeEventListener("resize", handleWidth);
window.addEventListener("resize", handleWidth);

/* If text (title) wraps, its `width` will be equal to `max-width`
 * even if the wrapping causes it's visual width to be smaller.
 *
 * This function fixes this issue;
 * There is no css solution.
 */
function handleWidth() {
  const links = document.querySelectorAll(".posts__link");
  links.forEach((link) => {
    const title = link.querySelector(".posts__title");
    title.style.width = null; // reset width to auto

    const range = document.createRange();
    const text = title.childNodes[0];
    range.setStartBefore(text);
    range.setEndAfter(text);
    const clientRect = range.getBoundingClientRect();
    title.style.width = `${clientRect.width}px`;
  });
}
