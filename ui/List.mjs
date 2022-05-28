import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import ListContainer from './ListContainer.mjs'
import ListItem from './ListItem.mjs'

const html = htm.bind(h);

export default function List(props) {
  return (
    html`<${ListContainer}>
      ${props.list.map(file => html`<${ListItem} name=${file} />`)}
    </${ListContainer}>`
  )
}