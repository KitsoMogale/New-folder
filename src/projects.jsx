import { Quiz, School, Twitter } from "./modals"
import { useState } from "react"
import img4 from './assets/images.jpg'
import img5 from './assets/Screenshot_20240531_000740_com.android.gallery3d.jpg'
import img6 from './assets/images.png'

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
                <img className='imgTwitter' src={img4} alt='img'/>
                <br/>
                <button onClick={school}>Open</button>
                {isVisibleSchool && <School />}
                
                
                </div>
               
               <div className="div1">
                <img className='imgTwitter'  src={img5} alt="img"/>
                <button onClick={imgClicked}>Play video</button>
                {isVisible && <Twitter />}
                </div>
               
            
              <div className="div1">
                <img className='imgTwitter' src={img6} alt='img'/>
                <br/>
                <button onClick={quiz}>Open</button>
                {isVisibleQuiz && <Quiz />}
              </div>
           
        </div>
    )
}

