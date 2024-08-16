import { About, Contact, Portfolio } from "./modals"
import { useState } from "react";

export const NavBar = () =>{


    const [isVisible,setVisible] = useState(false);

    const about = ()=>{

           setVisible(!isVisible)

    }


    const [isVisiblePortfolio,setVisiblePortfolio] = useState(false);

    const portfolio = ()=>{

           setVisiblePortfolio(!isVisiblePortfolio)

    }

    const [isVisibleContact,setVisibleContact] = useState(false);

    const contact = ()=>{

           setVisibleContact(!isVisibleContact)

    }

    return(
        <>

        <div id='navDiv'>
           
              <span id='about' onClick={about}><u style={{color:'blue',textDecoration:'none'}}>About</u></span> 
              <span><a style={{color:'blue'}} href='https://main--superlative-trifle-df2409.netlify.app/'>Articles</a></span>  
              <span id='portfolio'  onClick={portfolio}><u style={{color:'blue',textDecoration:'none'}}>Portfolio</u></span>  
              <span id='contact' onClick={contact}><u style={{color:'blue',textDecoration:'none'}}>Contact</u></span>  
            
        </div>

        {isVisible && <About />}
        {isVisiblePortfolio && <Portfolio />}
        {isVisibleContact && <Contact />}
        </>
    )
}