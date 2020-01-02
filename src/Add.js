import React,{Component} from 'react'

class Add extends Component{
   
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            ingredients: [''],
            img: '',
        }
        this.chng=this.chng.bind(this)
        this.make=this.make.bind(this)
        this.subm=this.subm.bind(this)
        this.ingr=this.ingr.bind(this)
        this.cross=this.cross.bind(this)
    }
    
     chng(e){
         this.setState(
             {[e.target.name]:e.target.value}
         )
     }
     make(e){
         const index=Number(e.target.name.split('-')[1])
         const ingredients =this.state.ingredients.map((ing,k)=>(
               (k==index)?e.target.value:ing
         ))
         this.setState({ingredients})
     }
     subm(e){

        e.preventDefault();
        
        this.props.listadd(this.state);
       this.setState({name:'',ingredients:[''],img:''})  
    this.props.crossall()

     }
ingr(e){

    const {ingredients}=this.state;
    this.setState({ingredients:[...ingredients,'']})
}

cross(e){
    this.props.crossall() 
}



    render(){
        return (
      
            <form  style={{marginLeft:'35%',marginTop:'3%',width:'30%'}} onSubmit={this.subm}>
                <div className='form'>
                    <button className='btn btn-secondary mb-3' type='button' onClick={this.cross}>X</button>
                    <div className='form-group' >
                        <label>TITLE</label>
                        <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.chng}></input>
                    </div>
                    <div className='form-group'>
                        <label>INGREDIENTS</label>
                        {this.state.ingredients.map((m, k) => (
                            <div >
                                {k + 1}
                                <input type='text' className='form-control' value={m} name={`ingredients-${k}`} onChange={this.make}></input>

                            </div>
                        ))
                        }
                    </div>

                    <button className='btn-md mb-2' type='button' onClick={this.ingr}>+</button>
                    <div className='form-group'>
                        <label>IMAGE</label>
                        <input type='text' value={this.state.img} className='form-control' name='img' onChange={this.chng} ></input>
                    </div>


                </div>
                

<button type='submit' style={{width:'100%'}} className='btn-md btn btn-secondary'>ADD</button>
            </form>
        )
    }
}

export default Add;