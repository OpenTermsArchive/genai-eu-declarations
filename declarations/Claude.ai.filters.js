export function removeRedirectFromLinks(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.href = link.href.replace(/\/redirect\/[^/]+\//, '/');
  });
}
