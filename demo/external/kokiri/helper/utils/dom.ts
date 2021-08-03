function getComputedStyle($el: HTMLElement, rule: string): any {
  return window.getComputedStyle($el)[rule];
}

function getDocumentOffset($el: HTMLElement): { top: number; left: number } {
  const $parent = $el.parentElement as HTMLElement;
  const { offsetTop, offsetLeft, scrollTop } = $el;
  const computedTop = offsetTop - scrollTop;

  if (getComputedStyle($parent, 'position') === 'static') {
    return {
      top: computedTop,
      left: offsetLeft,
    };
  }

  const parentOffset = getDocumentOffset($parent);

  return {
    top: computedTop + parentOffset.top,
    left: offsetLeft + parentOffset.left,
  };
}

export { getComputedStyle, getDocumentOffset };
