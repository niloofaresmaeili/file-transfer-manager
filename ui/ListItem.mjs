import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

export default function ListItem(props) {
  const [fileName, ...rest] = props.name.split('.')
  const extension = rest[rest.length - 1]
  const description = props.name
  return (
    html`
    <a href="#" class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
      <div class="d-flex w-100 align-items-center justify-content-between">
        <strong class="mb-1">${fileName ? fileName : '.' + extension}</strong>
        <small>${extension}</small>
      </div>
      <div class="col-10 mb-1 small">${description}</div>
    </a>
    `
  )
}