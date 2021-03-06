import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFirstName: '',
      lastName: '',
      age: ''
    }
    this.firstName = React.createRef()
    this.lastName = React.createRef()
    this.age = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  focusTextInput() {
    // console.log(this.firstName)
    console.log(this.lastName)
    // this.lastName.current.focus()
  }

  onKeyUpDong(passed, e) {
    console.log(passed)
    console.log(e)

    if (e.keyCode === 13) {
      switch (passed) {
        case 'firstName':
          this.lastName.focus()
          break

        default:
          break
      }
    }
  }
  render() {
    console.log(this.firstName)

    return (
      <div className="App">
        <div>
          <span>first Name</span>
          <input
            ref={input => {
              this.firstName = input
              console.log(this.firstName)
            }}
            onKeyUp={this.onKeyUpDong.bind(this, 'firstName')}
            value={this.state.inputFirstName}
            onChange={e => {
              this.setState({
                inputFirstName: e.target.value
              })
            }}
            type="text"
          />
        </div>
        <div>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            ref={input => {
              console.log(input)

              this.lastName = input
            }}
            onKeyUp={this.onKeyUpDong.bind(this, 'lastName')}
          />
        </div>
        <div>
          <span>Age</span>
          <input
            type="text"
            type="text"
            name="lastName"
            ref={input => {
              this.age = input
            }}
            onKeyUp={this.onKeyUpDong}
          />
        </div>
        <button type="submit" value="submit" onClick={this.focusTextInput}>
          submit
        </button>
      </div>
    )
  }
}

export default App
