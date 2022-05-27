import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

export default function Files(props) {
  return html`<div>
    ${props.files.map(file => html`<div>${file}</div>`)}
  </div>`
}
