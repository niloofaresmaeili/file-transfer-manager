import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default function App(props) {
  const {
    pathName,
    setPathName,
    goBack
  } = props

  return html`
    <header class="py-3 mb-3 border-bottom">
      <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr;">
        <div class="input-group mb-3">
          <button onClick=${goBack} class="input-group-text" id="basic-addon1">back</button>
          <input value=${pathName} onChange=${setPathName} class="form-control" aria-describedby="basic-addon1" type="search" placeholder="path..." aria-label="Search" />
        </div>
      </div>
    </header>
    `;
}