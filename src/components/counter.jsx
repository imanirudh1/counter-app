import React,{Component} from 'react'
class Counter extends Component {
   
    render() { 
        return(
        <div style={{padding:10,fontSize:25,display:"flex",justifyContent:"space-between",
        width:250
        }}>
          
        <span className={this.getBadgeClass()} >{this.formatCount()}</span>
        <button 
        className='btn btn-secondary btn-sm' 
        onClick={() => this.props.onIncrese(this.props.counter) 
        } >
             + 
             </button>
             <button 
        className='btn btn-secondary btn-sm' 
        onClick={() => this.props.onDecrese(this.props.counter) 
        } 
        disabled={this.props.counter.value === 0 ? 'disabled' : ''}
        >
             - 
             </button>
        <button className='btn btn-danger btn-sm' onClick={()=>this.props.onDelete(this.props.counter.id)} >Delete</button>
        </div>
        );
    }
    getBadgeClass(){
        let classes='badge m2 badge-'
        classes+=this.props.counter.value === 0 ? 'warning' : 'primary'
        return classes
    }
    formatCount(){
        const {value}=this.props.counter
        return value === 0 ? '0' : value
    }
}
 
export default Counter;


