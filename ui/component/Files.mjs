import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

export default function Files(props) {
  const loadFiles = (name) => () => {
    props.onClick(name)
  }

  return html`<div>
    ${props.files.map(file => {
    const isFolder = file[file.length - 1] === '/'
    const splitted = file.split('.')
    const [nm, ext2] = splitted
    const lstExt = splitted[splitted.length - 1]
    const isMapFile = lstExt === 'map'
    const isEmptyName = nm === ''
    const extension = isFolder
      ? ''
      : splitted.length <= 1
        ? '-'
        : isEmptyName
          ? splitted.length <= 2
            ? file
            : (isMapFile
              ? splitted.slice(-2).join('.')
              : lstExt)
          : (isMapFile
            ? splitted.slice(-2).join('.')
            : lstExt)
    const name = isFolder
      ? file.split('/')[0]
      : isEmptyName
        ? splitted.length <= 2
          ? file
          : '.' + ext2
        : nm

    return html`<div 
          style="max-width: 10rem;"
          class="border-secondary col-2 m-1 btn" 
          onClick=${loadFiles(file)} 
          data-toggle="tooltip"
          title=${file}
        >
    ${extension &&
      html`
      <div class="fi fi-${extension}">
        <div class="fi-content">${extension}</div>
      </div>
      `}
      <p> ${name} </p>
    </div>`}
  )}
  </div>`
}
