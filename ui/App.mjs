import { h } from 'https://unpkg.com/preact@latest?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
import { Get, Post } from './http.mjs'
import Files from '/Files.mjs'

const html = htm.bind(h);

const defaultFiles = ['default files']

const localHistory = []

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
  }, [pathName])

  const downloadFile = (fileName) => { }

  const loadDirectory = (directoryPath) => {
    setPathName(prev => prev + directoryPath)
    localHistory.push(pathName)
  }

  const goBack = () => {
    const len = localHistory.length
    const previousPath = localHistory.pop()
    setPathName(previousPath)
  }

  return html`<div>
      <h1>File manager!</h1>
      <button onClick=${goBack}>back</button>
      <input value=${pathName} onChange=${setPathName} />
      <${Files} files=${directories} onClick=${loadDirectory} />
      <${Files} files=${files} onClick=${downloadFile} />
    </div>`;
}