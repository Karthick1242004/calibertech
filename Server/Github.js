import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectCard = ({ repository }) => {
  const [readme, setReadme] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        user = 'Karthick1242004';
        pass = 'Shanmitha02112005'
        const readmeResponse = await axios.get(`https://api.github.com/repos/${repository}/readme`);
        setReadme(atob(readmeResponse.data.content)); // Decode base64 encoded content
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    const fetchImage = async () => {
      try {
        const imageResponse = await axios.get(`https://raw.githubusercontent.com/${repository}/master/display.png`, {
          responseType: 'arraybuffer', // Get response as an array buffer
        });
        const imageData = Buffer.from(imageResponse.data, 'binary').toString('base64'); // Convert array buffer to base64
        setImage(`data:image/png;base64,${imageData}`);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchReadme();
    fetchImage();
  }, [repository]);

  return (
    <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
      <div className={Pg.im}>
        {image && <img src={image} alt={repository} className={Pg.w1} />}
      </div>
      <div className={Pg.mn}>
        <div className={Pg.mn1}>
          <h1>{repository}</h1>
          <h6>React JS - Web</h6>
        </div>
        <div className={Pg.mn2}>
          <a href={`https://www.linkedin.com/posts/${repository}`}><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
          <a href={`https://github.com/${repository}`}><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /></a>
          <a href={`https://${repository}.netlify.app/`}><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
        </div>
      </div>
      
      <p className={Pg.prp}>{readme}</p>
      <p className={Pg.prp}> <b>Project Type :</b> Solo Project(Team Leader, Frontend Developer)</p>
    </div>
  );
};

export default ProjectCard;
