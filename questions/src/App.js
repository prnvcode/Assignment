import './App.css';
import {Checkbox} from '@fluentui/react';
import React from 'react';



const questions = 
  [
    {
      id:1,
      type: "multiple choice",
      text:"Do you have any dietary preferences?",
      options:["Avoid gluten","Avoid diary","Avoid wheat","Vegan","Vegetarion"]
    },
    {
      id:2,
      type: "numeric range slider",
      text:"No of meals per day",
      
    },
    {
      id:2,
      type: "date range picker",
      text:"Select a date",
    },
    {
      id:3,
      type:"text",
      text:"Provide comments"
    }
    
  ]
  

  class MultiSelect extends React.Component{
    constructor(props){
      super(props);
      this.state={items:[]};
    }

    handleChange = (event,isChecked,item)=>{
      
      if(isChecked){
        if(this.state.items?.findIndex(ele =>ele==item)<0){
            let items = [...this.state.items]
            console.log(items);
            items.push(item);
            this.setState({items:items});
        }
        
      }
      else {
        var items = [...this.state.items]
        var index = items.indexOf(item); 
            items.splice(index,1);
            this.setState({items:items})
      }
    }
   
    renderCheckBoxes = ()=>{
      const items = this.props.options.map(item =>{
        return <Checkbox label={item} onChange={(event,isChecked)=>{this.handleChange(event,isChecked,item)}}></Checkbox>
      })
      return items;
      
    }
    render=()=>{
      return this.renderCheckBoxes()
    }
  }
function App() {
  return (
    <div className="App">
      <p>Questions</p>
      <MultiSelect {...questions[0]}></MultiSelect>
      <button>Next</button>
    </div>
  );
}

export default App;
