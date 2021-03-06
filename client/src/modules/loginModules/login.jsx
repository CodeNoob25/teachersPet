import React, {useState} from 'react';
import {
  Icon,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import axios from 'axios';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = (dbCode, email, password) => {
    axios.post('/login', { dbCode, email, password })
      .then((res) => {
        if (res.data.success) {
          // go to homepage
        } else {
          
          console.log(res.data.message)
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }

    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%', marginTop: '3em' }} verticalAlign='middle' >
          <Grid.Column style={{ maxWidth: 450 }}>
            <div>
              <Header as='h2' icon textAlign='center'>
                <Icon name='student' circular />
                <Header.Content>teachersPet</Header.Content>
              </Header>
            </div>
            <Header as='h2' color='teal' textAlign='center'>
               {props.school.name} ({props.school.address})
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e) => setEmail(e.target.value)}/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>

                <Button color='teal' fluid size='large' onClick={() => login(props.school.dbCode, email, password)}>
                  Login
                </Button>

                <Message error={error} content={errorMessage} size="large" style={{display: error ? "block" : "none"}}/>

              </Segment>
            </Form>
            <Message>
            If your admin has verified your email, create an account <a onClick={() => this.props.propsPackage.changeView('CreateAccount')}>here</a>!
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
