import React from 'react'
import { render } from 'react-dom'
import styles from './ui/theme.css'

render(<div className={styles.app}>Hello world!</div>, document.querySelector('#root'))
