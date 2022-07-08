type TooltipProp = {
  text: string;
  type: 'error' | 'success';
};

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

function showTooltip({ text, type }: TooltipProp) {
  tooltip.textContent = text;
  tooltip.classList.add(type === 'success' ? 'tooltip_is-success' : 'tooltip_is-error');
  document.body.append(tooltip);

  setTimeout(() => {
    tooltip.classList.remove(
      type === 'success' ? 'tooltip_is-success' : 'tooltip_is-error'
    );
    document.body.contains(tooltip) && document.body.removeChild(tooltip);
  }, 5000);
}

export { showTooltip };
