import { h } from 'https://unpkg.com/preact@latest?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
import { Get, Post } from './http.mjs'
import Files from '/Files.mjs'

const html = htm.bind(h);

const defaultFiles = ['default files']

export default function App() {
  const [pathName, setPathName] = useState('')
  const [token, setToken] = useState('')
  const [directories, setDirectories] = useState(defaultFiles)
  const [files, setFiles] = useState(defaultFiles)
  useEffect(() => {
    Post('/auth/login', { username: 'admin', password: 'password' })
      .then(r => {
        setToken(r.token)
        return Get(`/files/directory/${pathName}`, r.token)
      })
      .then(r => {
        setDirectories(r.data.folders)
        setFiles(r.data.files)
      })
      .catch(console.error)
  }, [])
  const load = () => {
    setFiles(prev => ([...prev, 'a new one   ']))
    console.log(files)
  }
  const downloadFile = (fileName) => { }
  const loadDirectory = (directoryPath) => {
    setPathName(directoryPath)
    Get(`/files/directory/${directoryPath}`, token)
      .then(r => {
        setDirectories(r.data.folders)
        setFiles(r.data.files)
      })
  }
  return html`<div>
      <h1>File manager!</h1>
      <input value=${pathName} onChange=${setPathName} />
      <div><button onClick=${load}>load again</button></div>
      <${Files} files=${directories} onClick=${loadDirectory} />
      <${Files} files=${files} onClick=${downloadFile} />
    </div>`;
}