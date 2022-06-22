import Block from './Block';

export default function renderDOM(block: Block) {
  const root = document.querySelector('#app');

  if (root) {
    root.innerHTML = '';
    root.appendChild(block.getContent());
  }
}
