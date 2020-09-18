import React, { Component } from 'react';
import Counters from './counters';
import NavBar from './navbar';
class App extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:1},
            {id:3,value:2},
            {id:4,value:3}]
     };

     deleteHandler=counterId => {
            const counters=this.state.counters.filter(c=> c.id !== counterId)
            this.setState({counters})
     }
     incrementHandler=counter =>{
         const counters=[...this.state.counters]
         const index=counters.indexOf(counter)
         counters[index]={...counter};
         counters[index].value++;
         this.setState({counters})
     }
     decrementHandler=counter=>{
         const counters=[...this.state.counters]
         const index=counters.indexOf(counter)
         counters[index]={...counter};
         counters[index].value--;
         this.setState({counters})
     }
     resethandeller=()=>{
         const counters=[...this.state.counters]
         counters.map(c=> c.value=0)
         this.setState(counters)
     }
    render() { 
        return ( 
            <React.Fragment>
            <NavBar totalCount={this.state.counters.filter(c=> c.value>0).length} />
            <Counters 
            onIncrement={this.incrementHandler}
            onDelete={this.deleteHandler}
            onReset={this.resethandeller}
            counter={this.state.counters}
            onDecrement={this.decrementHandler}
            />
            </React.Fragment>
         );
    }
}
 
export default App;