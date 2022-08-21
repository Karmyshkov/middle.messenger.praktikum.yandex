import { showTooltip } from 'utils';

function getMessageFromResponse(errText: string) {
  return Object.values(JSON.parse(errText))[0];
}

export function showError(err: XMLHttpRequest) {
  err.responseText &&
    showTooltip({
      text: getMessageFromResponse(err.responseText) as string,
      type: 'error',
    });
}
