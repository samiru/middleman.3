import { html, render } from 'lit-html';

function renderTime(time: Date) {
  return html`
    <p>It\'s: ${time.toISOString()}</p>
  `;
}

function renderHello(time: Date) {
  return html`
    <h1>Hello, Sami!</h1>
    ${renderTime(time)}
  `;
}

const root = document.getElementById('root') as HTMLElement;

setInterval(() => {
  const view = renderHello(new Date());
  render(view, root);
}, 1000);
