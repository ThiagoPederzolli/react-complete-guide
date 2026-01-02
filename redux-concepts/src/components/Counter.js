import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';
// import { Component } from 'react';

const Counter = () => {
  const dispatch = useDispatch();
  
  const { counter, showCounter } = useSelector(state => state.counter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment())
    
  }

  const handleIncrease = () => {
    dispatch(counterActions.increase(5))
    // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   constructor() {
//     super();
//   }

//   toggleCounterHandler = () => {};

//   handleIncrement = () => {
//     this.props.increment()
//   }
//   handleDecrement = () => {
//     this.props.decrement()
//   }

//   render () {
//       return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//         <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>
//   );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
