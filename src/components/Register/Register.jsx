import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      email: null,
      password: null
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    fetch('https://git.heroku.com/boiling-ridge-36125.git/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        }
      })
  }

  render() {
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <div className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6'>Name</label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.handleChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6'>Email</label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email'
                  id='email'
                  onChange={this.handleChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6'>Password</label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.handleChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.handleSubmit}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
              />
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default Register
