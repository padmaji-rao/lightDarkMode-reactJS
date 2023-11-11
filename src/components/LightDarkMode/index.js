import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'dark',
    bg: 'dark-container',
    head: 'dark-head',
    button: 'dark-button',
    text: 'Light Mode',
  }

  onLight = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {
        mode: 'light',
        bg: 'light-container',
        head: 'light-head',
        button: 'light-button',
        text: 'Dark Mode',
      }
    })
  }

  onDark = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {
        mode: 'dark',
        bg: 'dark-container',
        head: 'dark-head',
        button: 'dark-button',
        text: 'Light Mode',
      }
    })
  }

  render() {
    const {mode, bg, head, button, text} = this.state
    let changeMode
    if (mode === 'dark') {
      console.log('dark')
      changeMode = (
        <div className={bg}>
          <h1 className={head}>Click To Change Mode</h1>
          <button onClick={this.onLight} type="button" className={button}>
            {text}
          </button>
        </div>
      )
    } else {
      changeMode = (
        <div className={bg}>
          <h1 className={head}>Click To Change Mode</h1>
          <button onClick={this.onDark} type="button" className={button}>
            {text}
          </button>
        </div>
      )
    }

    return (
      <div>
        <h1> </h1>
        {changeMode}
      </div>
    )
  }
}

export default LightDarkMode
