import React from 'react'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
    fetch('https://boiling-ridge-36125.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
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
    const { onRouteChange } = this.props
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <div className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6'>Email</label>
                <input
                  onChange={this.handleChange}
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email'
                  id='email'
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6'>Password</label>
                <input
                  onChange={this.handleChange}
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.handleSubmit}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                className='f6 link dim black db pointer'
                onClick={() => onRouteChange('register')}
              >
                Register
              </p>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default SignIn
