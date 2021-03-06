import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AUTHENTICATE_USER } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';
import { signUpURL } from '../../utils/urls';

export default function ConsumerSignUpForm() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.children[0].children[1].value;
    const email = e.target.children[1].children[1].value;
    const password = e.target.children[2].children[1].value;
    const telephone = e.target.children[3].children[1].value;
    const address = e.target.children[4].children[1].value.split(' ');

    fetch(signUpURL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({ username, email, password, telephone, address, role: 'consumer' }),
    })
      .then(res => res.json())
      .then(response => {
        if (!response.success) console.log(response.message);
        else {
          const { user } = response;
          localStorage.setItem('user_id', user._id.toString());
          dispatch({
            type: AUTHENTICATE_USER,
            payload: user,
          });
        }
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId='formBasicUserName'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' placeholder='Enter your name' required pattern='^[a-zA-Z](.[a-zA-Z0-9_-]*)$' />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' required
                      pattern='[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' required />
      </Form.Group>

      <Form.Group controlId='formBasicTelephone'>
        <Form.Label>Telephone</Form.Label>
        <Form.Control type='tel' placeholder='Add your telephone' required />
      </Form.Group>

      <Form.Group controlId='formBasicAddress'>
        <Form.Label>Address</Form.Label>
        <Form.Control type='text' placeholder='Add your address' required />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

