import { useRef, useState } from "react";

export default function Login() {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log('user login info', userEmail, userPassword);

    const emailIsInvalid = !userEmail.includes('@');
    console.log('emailIsInvalid', emailIsInvalid)
    if(emailIsInvalid) {
      setEmailInvalid(true);
      return;
    }

    // this needs to be done with precaution
    // because normally Reacts to update the DOM
    // and you shouldn't imperative perform updates or changes like that
    emailRef.current.value = '';
    passwordRef.current.value = '';

    // is the same function that triggers when clicking a button
    // inside the form that has the type="reset"
    event.target.reset();
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
          />
          <div className="control-error">
            {emailInvalid && <p>Please, enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
