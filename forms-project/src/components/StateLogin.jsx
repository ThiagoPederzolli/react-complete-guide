import InputLogin from "./InputLogin";
import { hasMinLength, isEmail } from "../util/validation";
import useInput from "../hook/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    hasError: emailIsInvalid,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlur
  } = useInput({
    defaultValue: '',
    validationFn: isEmail,
  })

  const {
    value: passwordValue,
    hasError: passwordIsInvalid,
    handleChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur
  } = useInput({
    defaultValue: '',
    validationFn: (value) => hasMinLength(value, 6),
  })

  function handleSubmit(event) {
    event.preventDefault();
    
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    console.log('user login info', loginInfo);
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <InputLogin
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={(event) => handleEmailChange(event)}
            value={emailValue}
            error={emailIsInvalid && 'Please enter a valid email'}
        />
        <InputLogin
            label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={() => handlePasswordBlur()}
            onChange={(event) => handlePasswordChange(event)}
            value={passwordValue}
            error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// import { useState } from "react";
// import InputLogin from "./InputLogin";
// import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

// export default function StateLogin() {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
// //   const [loginInfo, setLoginInfo] = useState({
// //     email: '',
// //     password: ''
// //   })
// //   const [edited, setEdited] = useState({
// //     email: false,
// //     password: false
// //   })



//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log('user login info', loginInfo);

//     setLoginInfo({
//     email: '',
//     password: ''
//   })
//   }

//   const emailIsInvalid = edited.email  && !isEmail(loginInfo.email) && isNotEmpty(loginInfo.email);
//   const passwordIsInvalid = edited.password  && !hasMinLength(loginInfo.password, 6);

//   // function handleEmailChange(event) {
//   //   setEmail(event.target.value);
//   // }

//   // function handlePasswordChange(event) {
//   //   setPassword(event.target.value);
//   // }

// //   function handleChange(identifier, event) {
// //     setLoginInfo((prevValue) => ({
// //       ...prevValue,
// //       [identifier]: event.target.value
// //     }))

// //     setEdited((prevValue) => ({
// //       ...prevValue,
// //       [identifier]: false
// //     }))
// //   }

// //   function handleInputBlur(identifier) {
// //     setEdited((prevValue) => ({
// //       ...prevValue,
// //       [identifier]: true
// //     }))
// //   }
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <InputLogin
//             label="Email"
//             id="email"
//             type="email"
//             name="email"
//             onBlur={() => handleInputBlur('email')}
//             onChange={(event) => handleChange('email', event)}
//             value={loginInfo.email}
//             error={emailIsInvalid && 'Please enter a valid email'}
//         />
//         <InputLogin
//             label="Password"
//             id="password"
//             type="password"
//             name="password"
//             onBlur={() => handleInputBlur('password')}
//             onChange={(event) => handleChange('password', event)}
//             value={loginInfo.password}
//             error={passwordIsInvalid && 'Please enter a valid password'}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }

