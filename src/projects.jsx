import { Quiz, School, Twitter } from "./modals"
import { useState } from "react"

export const Projects = ()=>{

    const [isVisible,setVisible] = useState(false);

    const imgClicked = () =>{
       
       setVisible(!isVisible);

    }

    const [isVisibleQuiz,setVisibleQuiz] = useState(false);

    const quiz = () =>{
       
       setVisibleQuiz(!isVisibleQuiz);

    }

    const [isVisibleSchool,setVisibleSchool] = useState(false);

    const school = () =>{
       
       setVisibleSchool(!isVisibleSchool);

    }
    return(
        <div id='projects'>
               <div className="div1">
                <img className='imgTwitter' src='src\assets\images.jpg' alt='img'/>
                <br/>
                <button onClick={school}>Open</button>
                {isVisibleSchool && <School />}
                
                
                </div>
               
               <div className="div1">
                <img className='imgTwitter'  src='src\assets\Screenshot_20240531_000740_com.android.gallery3d.jpg' alt="img"/>
                <button onClick={imgClicked}>Play video</button>
                {isVisible && <Twitter />}
                </div>
               
            
              <div className="div1">
                <img className='imgTwitter' src='src\assets\images.png' alt='img'/>
                <br/>
                <button onClick={quiz}>Open</button>
                {isVisibleQuiz && <Quiz />}
              </div>
           
        </div>
    )
}

