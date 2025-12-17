import { useState } from 'react';
import {
  AuthControls,
  AuthInputsContainer,
  AuthActionButtons
} from './AuthInputs.styles';
import CustomInput from '../Input/CustomInput';


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <AuthInputsContainer>
      <AuthControls>
          <CustomInput
            label="Email"
            invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <CustomInput
            label="Password"
            invalid={passwordNotValid}
            type="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
      </AuthControls>
      <AuthActionButtons>
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </AuthActionButtons>
    </AuthInputsContainer>
  );
}
