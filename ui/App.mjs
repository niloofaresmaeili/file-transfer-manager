import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
import Files from '/component/Files.mjs'
import Header from '/component/Header.mjs'
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

    <${Header} goBack=${goBack} pathName=${pathName} setPathName=${setPathName} />
   
    <main>

        <${Files} files=${directories} onClick=${loadDirectory} />
        <${Files} files=${files} onClick=${downloadFile} />

    </main>
  </div>
    `;
}