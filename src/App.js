import "./App.css"
import React from 'react'
import Navbar from './Navbar'
import Add from './Add'
import Show from './Show'



class App extends React.Component{
constructor(props) {
    super(props)

    this.state = {

        item: [
            {
                id: 0,
                name: 'Rajma Rice',
                ingredients: [
                    'tomato', 'patato', 'Rice'
                ],
                img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe-500x500.jpg"

            },
            {
                id: 1,
                name: 'pizza',
                ingredients: [
                    'garlic', 'paneer', 'cheese'
                ],
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SQBN2uFIdZ57E5ARFnyvz_G4CnbNUAEHZGZL2LbunpKslD-r3Q&s"
            }
            ,
            {
                id: 2,
                name: 'chickpeas',
                ingredients: [
                    'onion', 'patato', 'tomato'
                ],
                img: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg?fit=1840%2C1554&quality=30&strip=all&ssl=1"
            }


        ],
        num: 3 
        ,formshow:false
    }
}

delo=(k)=>{
    var items = this.state.item.filter(m=>(m.id!=k.id))
    this.setState({item:items})
  
}

addnew=()=>{
this.setState({formshow:true})
}
make=(e)=>{
    const {item,num} = this.state;
    e.id=num;
   console.log(e)
    
    this.setState({item:[...item,e],num:num+1});
    console.log(this.state.item)
}

finish=()=>{
this.setState({formshow:false})
}

    render(){
        return (
            <div >
               
                <Navbar shownew={this.addnew} />
               {this.state.formshow==true? <Add listadd={this.make} crossall={this.finish}/>:null}
               <Show list={this.state.item} del={this.delo} />
            </div>
        )
    }
}

export default App;