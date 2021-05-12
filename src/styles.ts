import {DOMProperty, AttributeStore} from 'forest'

export const styles = {
  releaseList() {
    css`
      [data-grid-table='row'] {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        position: relative;
        & > header {
          grid-column: span 1;
        }
        @media only screen and (max-width: 768px) {
          & > header {
            grid-column: span 3;
          }
        }
      }
    `
  }
}
const langs = [
  {
    code: 'it',
    name: 'Italiano'
  },
  {
    code: 'ar',
    name: 'عربى'
  }
]
/**
 * @typedef Lang
 * @type {styles}
 */
/**
 * @const {Lang}
 */
const L = {}
declare const css: (
  words: TemplateStringsArray,
  ...values: Array<DOMProperty | AttributeStore>
) => void
