import React from "react";
import Controls from "./Controls";
import Value from "./Value";


class Counter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
        // 
    }

    state = {
        value: this.props.initialValue,
    }


    handleIncrement = () => {
        // просто перезаписать поверх НЕ ОСНОВЫВАЯСЬ НА ПРЕДЫДУЩЕМ используем: это
        // this.setState({
        //     value: 8,
        // });


        // обновлять значение используЯ ПРЕДЫДУЩЕЕ ЗНАЧЕНИЕ value это
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        })
    }

    handleDecrement = (event) => {
        // console.log(event.target);
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        })
    }
    render() {
        return (
            <div className="container">
                <Value value={this.state.value}/>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        )
    }
}

export default Counter;