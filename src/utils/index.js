
export function cssConcat(...css) {
  return css.reduce((p, c) => {
    return c ? p+' '+c : p;
  }, '').trim();
}