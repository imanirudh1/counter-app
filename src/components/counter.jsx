import React,{Component} from 'react'

class Counter extends Component {
   state={
       value:this.props.value
   }
    increment=()=> {
         this.setState({value:this.state.value + 1})
    }
    render() { 
        return(
        <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
          
        <span className={this.getBadgeClass()} >{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm' onClick={this.increment } > + </button>
        </div>
        );
    }
    getBadgeClass(){
        let classes='badge m2 badge-'
        classes+=this.state.value === 0 ? 'warning' : 'primary'
        return classes
    }
    formatCount(){
        const {value: count}=this.state
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;


