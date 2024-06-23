export function $eval(expr) {
  try {
    return expr();
    // eslint-disable-next-line no-empty
  } catch (error) {}
}

export function $evalArray(expr) {
  const res = $eval(expr);
  return Array.isArray(res) ? res : [];
}

export function $createChildContext(oldContext, ext) {
  const childContext = { ...oldContext, ...ext };
  // eslint-disable-next-line no-proto
  childContext.__proto__ = oldContext;
  return childContext;
}
