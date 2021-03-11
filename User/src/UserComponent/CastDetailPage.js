import React from "react";
import { useState,useEffect } from "react";
import "../css/CastDetailPage.css";
import Galgadot from "../Assets/cast/gal-gadot.jpg";
import Castcard from "../UserComponent/Castcard";
import { Link } from "react-router-dom";
import Footer from "../UserComponent/Footer";
const CastDetailPage = () => {
  const castName = localStorage.getItem("castName");
  const [cast,setCast]=useState([{}]); 

  useEffect(()=>{
    fetch('/Cast/getCastByName/'+castName)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((jsonRes) => {
      setCast(jsonRes);
    })
    .catch(e => {console.log(e);});
  },[]);
  var castRole =[];
  var castImg = [];
  var castDescription =[];
  var castBirtDate =[];
  if(cast[0] !== undefined){
    console.log(cast[0].castName);
    castDescription.push(cast[0].castDescription);
    castRole.push(cast[0].castRole);
    castImg.push(cast[0].castImageUrl);
    castBirtDate.push(cast[0].BirthDate);
  }
  return (
    <div>
      <div className="main__div">
        <p
          style={{
            marginLeft: "10%",
            fontSize: "30px",
            color: "white",
          }}
        >
          {castName}
        </p>
        <div className="header__div">
          <img src={process.env.PUBLIC_URL+'/Assets/Cast/'+castImg} alt="wonder woman" />
          <div className="basic__detail">
            <h1
              style={{
                marginTop: "45px",
              }}
            >
              {castName}
            </h1>
            <h1>{castRole}</h1>
            <h1>Born: {castBirtDate}</h1>
          </div>
        </div>
      </div>
      <div className="description__div">
        <div className="description">
          <h2>Description :</h2>
          <h6
            style={{
              marginLeft: "15px",
              marginRight: "15px",
            }}
          >
          {castDescription}
          </h6>
        </div>
      </div>
      <div className="foter__div">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CastDetailPage;


// import React from "react";
// import "../css/CastDetailPage.css";
// import Galgadot from "../Assets/cast/gal-gadot.jpg";
// import Castcard from "../UserComponent/Castcard";
// import { Link } from "react-router-dom";
// import Footer from "../UserComponent/Footer";
// const CastDetailPage = () => {
//   return (
//     <div>
//       <div className="main__div">
//         <p
//           style={{
//             marginLeft: "10%",
//             fontSize: "30px",
//             color: "white",
//           }}
//         >
//           as Wonder Woman in wonder woman Movie
//         </p>
//         <div className="header__div">
//           <img src={Galgadot} alt="wonder woman" />
//           <div className="basic__detail">
//             <h1
//               style={{
//                 marginTop: "45px",
//               }}
//             >
//               Gal Gadot
//             </h1>
//             <h1>Actor, Producer</h1>
//             <h1>Born: Apr 30, 1985, Israel</h1>
//           </div>
//         </div>
//       </div>
//       <div className="description__div">
//         <div className="description">
//           <h2>Description :</h2>
//           <h6
//             style={{
//               marginLeft: "15px",
//               marginRight: "15px",
//             }}
//           >
//             Best known to play the roles of `Gisele Yashar` in the Fast &
//             Furious film series and the superhero character, `Wonder Woman,` Gal
//             Gadot is an Israeli actress and model who works in Hollywood films.
//             Before venturing into films, the actress was a popular model and
//             participated in various beauty pageants. After winning the Miss
//             Israeli pageant, she represented Israel at the Miss World beauty
//             contest. Some of her most popular films include Fast & Furious
//             (2009), Fast & Furious 6 (2013) and Batman v Superman: Dawn of
//             Justice (2016), Wonder Woman (2017) and Wonder Woman 1984 (2020).
//             EARLY LIFE Born in Rosh HaAyin, Israel, Gadot is the daughter of
//             Irit Weiss and Micahel Gadot. The actress` mother worked as a
//             teacher, whilst her father was an engineer. The actress, who has a
//             Polish-Jewish, Austrian-Jewish, and Czech-Jewish lineage, hails from
//             a family where her grandparents were Holocaust survivors. Gadot`s
//             parents Hebraized their surname from Greenstein to Gadot. The
//             actress completed her high school with a major in biology and later
//             she studied law at The Reichman. While she was at school, owing to
//             her tall frame, she played on the school basketball team. When she
//             was 18, the beautiful actress aspired to be a fashion model and she
//             participated in several beauty pageants. In 2004, Gadot won the Miss
//             Israel competition and she later, in the year, competed in the Miss
//             Universe pageant in Ecuador. After her tryst with modeling, when she
//             turned 20, she joined the Israeli Army as it is mandatory to serve
//             in the military for every Israeli citizen. The actress served in the
//             army for two years as an enlisted soldier and she excelled through
//             the three-month grueling boot camp. Speaking of her time in the
//             army, Gadot said, "You give two or three years, and it is not about
//             you. You give your freedom away for a while. You learn discipline
//             and respect. The things I have been through as a soldier prepared me
//             to deal with career things as well." After completing her military
//             services, the actress went to study law but she dropped out of
//             college in the first year as a casting director called her to
//             audition for the role Bond girl, Camile Montes in the Quantum of
//             Solace. However, the actress lost the role to Olga Kurylenko and the
//             same casting director later hired Gadot to play the role of Gisele
//             in Fast & Furious.
//           </h6>
//         </div>
//         <div className="other__cast">
//           <h2>cast details</h2>
//           <Link to="castdetailpage">
//             <Castcard />
//           </Link>
//           <Link to="castdetailpage">
//             <Castcard />
//           </Link>
//           <Link to="castdetailpage">
//             <Castcard />
//           </Link>
//           <Link to="castdetailpage">
//             <Castcard />
//           </Link>
//         </div>
//       </div>
//       <div className="foter__div">
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// };

// export default CastDetailPage;
