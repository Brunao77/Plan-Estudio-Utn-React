import React from 'react';
import Header from './Head'
    
function Subject(props){

    const subj=props;

    const style=(state)=>{
        switch(state){
            case "Aprobado":return{
                borderColor: "#000" ,
                backgroundColor:  "#99E3AA" 
            }
            case "Cursando": return{
                borderColor: "#000" ,
                backgroundColor:  "#9FD1EA" 
            }
            case "Regular":return{
                borderColor: "#000" ,
                backgroundColor:  "#FFFFA6" 
            }
        }
    }

    return(
        <div className="body-subj">
            {subj.change && <Header year={subj.year}/>}
            <ul className="subject" style={style(subj.state)}>
                <li>
                    <div className="subject-name">{subj.text}</div>
                </li>
                <li>
                    <select value={subj.state} className="selector"  onChange={(e)=>subj.handleChange(subj.id,e.target.value)} style={style(subj.state)}>
                        <option value="NoCursado">No cursado</option>
                        <option value="Cursando">Cursando</option>
                        <option value="Aprobado">Aprobado</option>
                        <option value="Regular">Regular</option>
                    </select>
                </li>
            </ul>
        </div>
    );
}

export default Subject;