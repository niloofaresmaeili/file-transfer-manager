import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

export default function ListContainer(props) {
  return (
    html`<div class="d-flex flex-column align-items-stretch flex-shrink-0" style="width: 380px;">
      <div class="list-group list-group-flush border-bottom scrollarea">

        ${props.children}

      </div>
    </div>`
  )
}