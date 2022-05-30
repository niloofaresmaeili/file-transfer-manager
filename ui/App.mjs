import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
import Files from '/component/Files.mjs'
import useApp from './useApp.mjs'

const html = htm.bind(h);

export default function App() {
  const {
    pathName,
    setPathName,
    directories,
    files,
    downloadFile,
    loadDirectory,
    goBack
  } = useApp()

  return html`
  <div class="container-xl">
    <header class="py-3 mb-3 border-bottom">
      <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr;">
        <div class="input-group mb-3">
          <button onClick=${goBack} class="input-group-text" id="basic-addon1">back</button>
          <input value=${pathName} onChange=${setPathName} class="form-control" aria-describedby="basic-addon1" type="search" placeholder="path..." aria-label="Search" />
        </div>
      </div>
    </header>
   
    <main>
      <div class="row">
        <${Files} files=${directories} onClick=${loadDirectory} />
        <${Files} files=${files} onClick=${downloadFile} />
      </div>
    </main>
  </div>
    `;
}