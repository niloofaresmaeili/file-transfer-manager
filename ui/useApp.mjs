import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { Get, Post } from './http.mjs'

const defaultFiles = ['default files']
const localHistory = []

export default function useApp() {
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
    if (localHistory.length > 0) {
      const previousPath = localHistory.pop()
      setPathName(previousPath)
    }
  }


  return {
    pathName,
    setPathName,
    token,
    setToken,
    directories,
    setDirectories,
    files,
    setFiles,
    downloadFile,
    loadDirectory,
    goBack,
  }
}