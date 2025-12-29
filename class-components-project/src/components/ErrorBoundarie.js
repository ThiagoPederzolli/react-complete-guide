import { Component } from "react";

class ErrorBoundarie extends Component {
    constructor() {
        super();
        this.state = {
          hasError: false,  
        }
    }
    componentDidCatch(error) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            <p>Something went wrong!</p>
        }
        return this.props.children
    }
}

export default ErrorBoundarie;