import React from 'react'

class Show extends React.Component{
  
    render(){
        return(
        <div className='container'>
            <div className='row justify-content-center mt-5'>

                {
                   this.props.list.map((m, k) => (
                        <div className='col-md-4 mt-4 mb-4' key={k}>
                            <h1>{m.name}</h1>
                            <h6>INGREDIENTS</h6>
                            {m.ingredients.map((q, k) => (
                                <li key={k}>{q}</li>
                            ))}
                            <img src={m.img} alt='not found'></img>
                            <button className='btn btn-danger mt-1 ml-5' type='button' onClick={()=>this.props.del(m)}>DELETE</button>

                        </div>


                    ))
                }

            </div>

        </div>
        )
    }
        
}


export default Show;