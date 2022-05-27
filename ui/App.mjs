import { h } from 'https://unpkg.com/preact@latest?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
import Files from '/Files.mjs'
const html = htm.bind(h);

const defaultFiles = ['hi', 'name 1']

export default function App() {
  const [pathName, setPathName] = useState('/')
  const [files, setFiles] = useState(defaultFiles)
  useEffect(() => {
    fetch('/auth/login', { method: 'POST', body: { username: 'username', password: 'password' } })
      .then(r => r.status === 200)
      .then(r => fetch(`/file/directory${pathName}`))
      .then(r => r.json())
      .then(r => setFiles(r.data.files))
      .catch(console.error)
  }, [])
  const load = () => {
    setFiles(prev => ([...prev, 'a new one   ']))
    console.log(files)
  }
  return html`<div>
      <h1>File manager!</h1>
      <input value=${pathName} onChange=${setPathName} />
      <div><button onClick=${load}>load again</button></div>
      <${Files} files=${files} />
    </div>`;
}