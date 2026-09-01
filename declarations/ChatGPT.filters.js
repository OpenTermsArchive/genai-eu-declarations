export function removeOpenAITrackingParams(document) {
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href);

    url.searchParams.delete('openaicom-did');
    url.searchParams.delete('openaicom_referred');

    link.href = url.toString();
  });
}

export function removeRelativeUpdatedDate(document) {
  const relativeDatePattern = /^Updated:\s*\d+\s+(minute|minutes|hour|hours|day|days|week|weeks|month|months|year|years)\s+ago$/i;

  const elements = document.querySelectorAll('body *');

  elements.forEach(element => {
    if (relativeDatePattern.test(element.textContent.trim())) {
      const hasMatchingChild = Array.from(element.children).some(child => relativeDatePattern.test(child.textContent.trim()));

      if (!hasMatchingChild) {
        element.remove();
      }
    }
  });
}
