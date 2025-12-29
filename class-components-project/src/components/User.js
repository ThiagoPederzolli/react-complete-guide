import { Component } from 'react';
import classes from './User.module.css';

// to be able to access props on class components
// we need to extends Component from react
// and access this.props
class User extends Component{
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
