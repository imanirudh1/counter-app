import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    
    render() { 
        return ( 
            <div>
                <button className='btn btn-danger btn-sm' onClick={this.props.onReset}>Reset</button>
               {this.props.counter.map(counter => <Counter key={counter.id} counter={counter} 
               onDelete={this.props.onDelete}
               onIncrese={this.props.onIncrement}
               onDecrese={this.props.onDecrement}
               />)}
            </div>
         );
    }
}
 
export default Counters;