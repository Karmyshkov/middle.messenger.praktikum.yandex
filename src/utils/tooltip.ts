import { config } from 'utils/constants';

type TooltipProp = {
  text: string;
  type: 'error' | 'success';
};

const tooltip = document.createElement('div');
tooltip.classList.add(config.tooltipSelector);

function showTooltip({ text, type }: TooltipProp) {
  const classes =
    type === 'success' ? config.tooltipIsSuccessSelector : config.tooltipIsErrorSelector;
  tooltip.textContent = text;
  tooltip.classList.add(classes);
  document.body.append(tooltip);

  tooltip.addEventListener('click', handleCloseTooltip);

  setTimeout(() => {
    tooltip.classList.remove(classes);
    document.body.contains(tooltip) && document.body.removeChild(tooltip);
  }, 3000);
}

function handleCloseTooltip() {
  document.body.removeChild(tooltip);
}

export { showTooltip };
