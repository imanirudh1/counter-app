import React,{Component} from 'react'

class Counter extends Component {
   state={
       count:0
   }
    increment=()=> {
         this.setState({count:this.state.count+1})
    }
    render() { 
        return(
        <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <h1>Counter</h1>
        <span className={this.getBadgeClass()} >{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm' onClick={this.increment } > + </button>
        </div>
        );
    }
    getBadgeClass(){
        let classes='badge m2 badge-'
        classes+=this.state.count === 0 ? 'warning' : 'primary'
        return classes
    }
    formatCount(){
        const {count}=this.state
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;


