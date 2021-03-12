import react from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../css/Carousel.css"
const carousel =()=>{
    
return(
<section className="container">
<h1>Ticket</h1>
  <div className="row">
    <article className="card fl-left">
    <h2>Total Price:</h2>
      <section className="date">
        <time >
          <span>23</span><span>feb</span>
          <h4>
           8am-11am
           </h4>
        </time>
      </section>
      <section className="card-cont">
      <h6 style={{tectColor:"red",display: 'inline-block'}}>Movie Name:-</h6><span style={{fontWeight: '900',display:'inline-block',marginLeft:'10px'}}> Wonder Women</span><br/>
        <h6 style={{tectColor:"red",display: 'inline-block'}}>Address:-</h6><span style={{fontWeight: '900',display:'inline-block',marginLeft:'10px'}}> Inox, Nadiad</span><br/>
        <h6 style={{tectColor:"red",display: 'inline-block'}}>Seat No:-</h6><span style={{fontWeight: '900',display:'inline-block',marginLeft:'10px'}}> 2 , 3 , 4</span><br/>
    
      </section>
      
    </article>
   </div>
</section>
);
}

export default carousel;