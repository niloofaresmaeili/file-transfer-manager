import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

export default function Files(props) {
  const loadFiles = (name) => () => {
    props.onClick(name)
  }
  return html`<div>
    ${props.files.map(file => html`<div>
    <span class="btn" onClick=${loadFiles(file)}> ${file} </span>
    </div>`)}
  </div>`
}
