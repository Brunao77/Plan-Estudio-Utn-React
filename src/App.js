import React,{useState,useEffect} from "react";
import subjectsData from "./sample/SubjectsData";
import Subject from './Subject'
import Header from './Head'

function App() {

  const [subjects,setSubjects]=useState(subjectsData);
  

  const handleState=(id,state)=>{
    const newSubjects=[...subjects];
    const subject=newSubjects.find((e)=>
    e.id===id
    )
    subject.state=state;
    setSubjects(newSubjects);
  }

  useEffect(()=>{
    const storedSubjects = JSON.parse(localStorage.getItem('subjectsApp'))
    if(storedSubjects){
      setSubjects(storedSubjects);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('subjectsApp', JSON.stringify(subjects));
  },[subjects]);

  return (
    <div>
      <Header year="1"/>
      <div>{subjects.map(e=>
          <Subject text={e.name} state={e.state} change={e.change} year={e.year} id={e.id} handleChange={handleState}/>
        )}
      </div>
    </div>
  );
}


export default App;
