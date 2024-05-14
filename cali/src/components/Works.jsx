import React from 'react';
import Pg from './Page.module.css';
import Work1 from './Imagess/netflix.png';
import Work2 from './Imagess/insta.png';
import Work3 from './Imagess/infotube.png';
import Work4 from './Imagess/portfolio.png';
import Work5 from './Imagess/visionpro.png';
import Work6 from './Imagess/google.png';
import Work7 from './Imagess/caliber.png';
import Work8 from './Imagess/airmagic.png';
import Work9 from './Imagess/iphone.png';
import Work10 from './Imagess/smart.png';
import Work11 from './Imagess/cog.png';
import Work12 from './Imagess/vms.png';
import Work13 from './Imagess/jass.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Works() {
  return (
    <div className={Pg.maincont3}>
    <div className={Pg.mainc1}>
      <h1 id='works' data-aos="fade-left" data-aos-delay="500">Our Works</h1>
    </div>
    <div className={Pg.mainc2}>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work1} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Netflix Clone</h1>
             <h6>MERN Stack - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_mernstack-netflixclone-fullstackdev-activity-7160298236484677632-3Zeo?utm_source=share&utm_medium=member_ios'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/Netflix-Clone-App'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://karthicknetflixclone.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
         <p className={Pg.prp}> • This is a Netflix website clone created for practicing API fetch , post , rendering components in other pages and also for writing API for Email and Password GET and POST in MongoDB using Node JS and Express JS . It also gave a good knowlegde over React states and hooks.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work3} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Infotube (SIH2023)</h1>
             <h6>MERN Stack - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
           </div>
         </div>
        
         <p className={Pg.prp}> • As a part of Smart India Hackathon 2023, we selected a problem statement for developing a <b>'Online integrated platform for students to upload project details'</b>. We developed this project and got selected for college level hackathon after clearing project presetation round.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Frontend Developer)</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work12} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>CSEA-Cognissance Website</h1>
             <h6>React JS - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://csea-cognissance.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
        
         <p className={Pg.prp}> • As a part of <b>Computer Science and Engineering Association</b> ,I developed this webpage for my Computer Science Department symposium named <b>'Cognissance2k24'</b> with great passion and detication in my work.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project(Team Leader, Frontend Developer)</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work11} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Vehicle Management System</h1>
             <h6>MERN Stack - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://kec-vms.vercel.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
        
         <p className={Pg.prp}> • As a part of Web-App event conducted by <b>'EHORYZON2024'</b> we developed a <b>Vehicle Management System</b> for our college vehicles with a feature of notifying the drivers and VMS admin about next service date via SMS.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Full Stack Developer)</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work13} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Jass-Media (Freelancing)</h1>
             <h6>MERN Stack - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://jassmedia.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
        
         <p className={Pg.prp}> • By doing freelancing via our company <b>Caliber Tech</b> we got a project for developing a webpage with a contact us form connected via email for a company named <b>Jass-Media</b> , It is a media company in Tamil Nadu. </p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Full Stack Developer)</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work2} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Instagram Clone</h1>
             <h6>NEXT JS - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_nextjs-frontenddevelopment-instagramclone-activity-7157236046735310848-tgA6?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/Instagram-Clone'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
           </div>
         </div>
         <p className={Pg.prp}> • This is a Instagram clone created using NEXT JS framework. This is my first project in NEXT JS.It is just a complete frontend clone of Instagram. It gave a brief knowlegde about NEXT JS project structure , routing and rendering components across pages . It was a great experience in frontend development</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>   
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work4} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>3D Portfolio</h1>
             <h6>React JS & Three JS - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdevelopment-threejs-blenderart-activity-7157677820071084032-uJof?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/3Dportfolio'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /></a>
           </div>
         </div>
         <p className={Pg.prp}> • This a prototype of my 1st 3D model integration in ReactJS. With the help of Blender,Spline and Three JS I was able to make a 3D immersible game world into the hands of web. This gave a good experience in using Blender and Spline. ThreeJS gave a good knowledge on orbit controlling and scene management.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>   
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work5} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Vision Pro Web Clone - Web</h1>
             <h6>HTML,CSS & JS</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdesign-javascriptmagic-responsivedesign-activity-7106280737900740608-EWa1?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/applevisionproui'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://karthick1242004.github.io/applevisionproui/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
         <p className={Pg.prp}> • This is Apple Vision Pro website clone . This project gave a good handson experience in javascript parallax animation and adaptive scrolling in web page. The website inspired me to a lot and I wanted to try to make it and i did it. This is one of the project that took me so much time to complete than other projects.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>   
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work6} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Elder To-Do List</h1>
             <h6>React JS - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_teamwork-hackathon-frontenddesign-activity-7126593601203048448-T-6q?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/Googlehackathon'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
           </div>
         </div>
         <p className={Pg.prp}><b>•</b> Created with the problem statement provided by Google Hackathon ,IIT Patna. This is a To-Do list app for elderly people , they can maintain their daily activities and reminders for medicine timeings and hospital appointments and also to chat with their caretakers . This is only a frontend of the application in ReactJS.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Frontend Developer)</p>   
      </div>


      {/* from herer */}


      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work7} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Caliber Tech</h1>
             <h6>MERN Stack - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdevelopment-reactjs-nodejs-activity-7162115397318627328-1q_j?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/Caliber-Tech-App'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://calibertech.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
         <p className={Pg.prp}><b>•</b> This is a landing page created for my own startup named <b>Caliber Tech</b>. Caliber Tech is a web based startup which provides web pages for small shops and vendors in affordable price with unaffordable quality. This is started using three of my classmates who are so enthusiastic about web development .</p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Designer and Frontend Developer)</p>    
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work8} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>AirMagic</h1>
             <h6>HTML,CSS,JS & NodeJS - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://github.com/Karthick1242004/airmagic'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
           </div>
         </div>
         <p className={Pg.prp}><b>•</b> This is a freelancing project done by <b>Caliber Tech</b>. A ecommerce page for photo frames . We (Caliber Tech) were only asked to develope the frontend for the ecommerce site. The backend team needs the project only in HTML . With constent meetings with the coustomer , we were able to develope the website .</p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Designer and Full-Frontend Developer)</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="100" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work9} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>iPhone 14 Pro Web Clone</h1>
             <h6>React JS - Web</h6>
           </div>
           <div className={Pg.mn2}>
           <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_reactjs-hooks-ui-activity-7100661194142691328-Qlz7?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://iphone14propromax124.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
         <p className={Pg.prp}><b>•</b> This is a iPhone 14 Pro Max website clone . The design , style , images , animations and layouts inspired me to clone this website . It was challenging and also intresting  to devlope . It made me understand more about ReactJS Hooks concept. Apple websites are fun to clone. A good process for beginners like me.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work10} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>iPhone 14 Pro Web Clone</h1>
             <h6>React JS - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://applevisionproui.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
         <p className={Pg.prp}><b>•</b> This is a UI concept for <b>Smart Home App</b> in apple vision pro. Creating a UI and developing the frontend for this application in Spatial Computing is such a challenging work. So i just tried a sample ReactJS clone. The technology needed to implement this app is no were near a comman man's power.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>
      </div>
      {/* <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
        <div className={Pg.im}>
            <img src={Work11} alt="Netflix" className={Pg.w1}></img>
         </div>
         <div className={Pg.mn}>
          <div className={Pg.mn1}>
             <h1>Vehicle Management System</h1>
             <h6>MERN Stack - Web</h6>
           </div>
           <div className={Pg.mn2}>
             <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
             <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
             <a href='https://kec-vms.vercel.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
           </div>
         </div>
        
         <p className={Pg.prp}> • As a part of Web-App event conducted by <b>'EHORYZON2024'</b> we developed a <b>Vehicle Management System</b> for our college vehicles with a feature of notifying the drivers and VMS admin about next service date via SMS.</p>
         <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Full Stack Developer)</p>
      </div> */}
    </div>
  </div>

  )
}

export default Works