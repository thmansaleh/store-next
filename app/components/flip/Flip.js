"use client"
import './style.css'
import tabby from "@app/components/flip/tabby.png"
import tamara from "./tamara.png"
import { useEffect ,useRef} from 'react';


const Flip = () => {
    const card1 = useRef()
    const card2 = useRef()
    const card3 = useRef()
    useEffect(() => {
        const intervalId = setInterval(() => {
          
            [card1,card2,card3].map(card=>{

                card.current.className.indexOf('is-flipped')==-1?card.current.className="card is-flipped":card.current.className="card"
            })
            
        
        },
             1500);
    
        return () => clearInterval(intervalId);
      }, []);
    
  return (
    <div className="filp-container">
  <div className="scene scene--card" style={{padding: '0 5px'}}>
    <div ref={card1} className="card">
      <img className="card__face card__face--front" src={tamara}  alt='rr'/>
      <img className="card__face card__face--back" src={tabby} alt='ff'/>
    </div>
  </div>
  <span>Pay in</span>
  <div style={{width: 'fit-content', padding: '0 10px'}} className="scene scene--card">
    <div ref={card2} className="card">
      <div className="card__face card__face--front">3</div>
      <div className="card__face card__face--back">4</div>
    </div>
  </div>
  <span> installments with</span>
  <div style={{width: 0, padding: '0 30px'}} className="scene scene--card">
    <div ref={card3} className="card">
      <div className="card__face card__face--front"> Tamara</div>
      <div className="card__face card__face--back">Tabby</div>
    </div>
  </div>
</div>

  )
}

export default Flip
