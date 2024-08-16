import img1 from './assets/download.png'
import img2 from "./assets/IMG_20230805_171429.jpg"
import img3 from './assets/download (4).jpg'


export const Body = () =>{


    return(
        <div id='body'>

          <div>

       
            <p id='bodyP'><i>Product designer, specializing in UI design and design systems</i></p>

          </div>

          <div id='imgDiv'>
             <div>
                <h1 id='h1first'>DESIGNER</h1>
                <img className='imgPaint' src={img3} alt='img'/>
                
            </div>
           
           
            <img id='me' src={img2} alt='img'/>
            
            <div>
                <h1 id='h12nd'>{'<CODER>'}</h1>
                <img className="imgPaint"  src={img1} alt='img'/>
            </div>
            
            
          </div>

          <div>
          <p id='bodyP2'><i>Frontend developer who writes clean, elegant and efficient code</i></p>
            
         </div>
        </div>
    )
}