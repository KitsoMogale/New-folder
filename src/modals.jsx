import { useState } from "react"
import vid1 from "./assets/SVID_20240226_190526_1.mp4"

export const Twitter = () => {

    const [displayStyle,setDisplay] = useState('block');


    return (
        <div id='video' style={{ display: displayStyle }}>

            <div>
                <p>
                   <b>This is a screen recording of my Twitter Clone.
                    It contained a registering page, sign in page, sign out page and the pages appearing below.
                    </b> 

               <p> <a href='https://github.com/KitsoMogale/Twitter_Clone'>GitHub Repo </a></p>

                </p>
            </div>

              <video width="640" height="360" controls loop muted poster="poster.jpg">
                <source src={vid1} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
           <br/>
           <button onClick={()=>setDisplay('none')}>Close</button>
            
        
        </div>
    )
}



export const About = ()=>{

    const [displayStyle,setDisplay] = useState('block');

    return(
        <div id='aboutModal' style={{ display: displayStyle }}>

            <p>
                My name is Kitso Mogale.
                This is my technical and professional portfolio.

                Take a look at a screen recording of my Twitter clone.
                Visit my GitHub repositories via the provided links for each project.

            </p>
          
         <button onClick={()=>setDisplay('none')}>Close</button>
        </div>
    )
}


export const Portfolio = ()=>{

    const [displayStyle,setDisplay] = useState('block');

    return(
        <div id='porfolioModal' style={{ display: displayStyle }}>

            <p>
               I'm an aspiring software developer, in the midst of learning to program with JavaScript.
               I have attained sufficient knowledge in web development using the popular languages , HTML and CSS.
               My first simple web projects are in the following GitHub repository links:
               <ul>
                 <li><a href='https://github.com/KitsoMogale/CodeSpace_Cat_Project'>CodeSpace_Cat_Project</a></li>
                 <li><a href='https://github.com/KitsoMogale/Animated_Scrum'>Animated_Scrum</a></li>
               </ul>
            </p>

            <br/>

          
         <button onClick={()=>setDisplay('none')}>Close</button>
        </div>
    )
    
}


export const Contact = ()=>{

    const [displayStyle,setDisplay] = useState('block');

    return(
        <div id='contactModal' style={{ display: displayStyle }}>

            <p id='contactDetails'>
                <span>Email: kitsoMogaleCode@gmail.com</span>
                <span> Number: 063 577 4198</span>
                <span>Twitter: @TrollFootball</span>
                <span> WhatsApp: 078 570 9551</span>
            </p>
          
         <button onClick={()=>setDisplay('none')}>Close</button>
        </div>
    )
    
}

export const Quiz = ()=>{

    const [displayStyle,setDisplay] = useState('block');

    return(
        <div id='quizModal' style={{ display: displayStyle }}>

          <p style={{fontWeight:'bold'}}>
            I have previously built a 2 player quiz for my cohort.
            The player enters their student number,picks one of the other students to a quiz challenge, answers the quiz, recieves their score and waits for the other person to complete the challenge.
            <br/>
            The code can be found here: <a href='https://github.com/KitsoMogale/Quiz_2'>GitHub</a>
          </p>
          
         <button onClick={()=>setDisplay('none')}>Close</button>
        </div>
    )
    
}


export const School = ()=>{

    const [displayStyle,setDisplay] = useState('block');

    return(
        <div id='schoolModal' style={{ display: displayStyle }}>

          <p style={{fontWeight:'bold'}}>
           This project tries to tackle an unpopular issue in the educational system.
           Learners have on average, 7 subjects.They get tasks from about 7 teachers per week. 
           Sometimes learners can get a 3 subject homework and a test from another subject for the next day.
           This is clearly overwhelming  for a learner.
           <br/>
           This project use an API from chatgpt to calculate the average time it takes to complete a task.
           Teachers from each subject enter the task they gave the learners. A response from the api contains a number in minutes.
           If the number is above a certain range, some teachers have to adjust their task amount, until it is comfortably possible for the leaner to complete all tasks given.
            <br/>
            The code can be found here: <a href='https://github.com/KitsoMogale/BCL_COMMUNITY_PROJECT_01'>GitHub</a>
          </p>
          
         <button onClick={()=>setDisplay('none')}>Close</button>
        </div>
    )
    
}