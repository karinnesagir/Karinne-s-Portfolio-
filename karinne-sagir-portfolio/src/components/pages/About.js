import React from 'react';

export default function About() {
  return (
    <div>
      <div className="project">
            <h1>Welcome</h1>
          </div>
      <div id="aboutPage">
        <h3 class="about-intro">- Karinne Sagir -</h3>
        <h3 class="about-intro">Full Stack Web Developer</h3>
        <h3 class="about-intro">Northeastern University</h3>
        <h3 class="about-intro">M.S. in Computer Science</h3>
      </div>
      <div class="break">break</div>
      {/* <h1><p id="bold-word">Full Stack</p>Web developer</h1> */}
      <div id="about-section-one">
      {/* <img src="dog.jpg" alt="A black, brown, and white dog wearing a kerchief"></img> */}
        {/* <image id="profile-image"></image> */}
        {/* <img src="profile-image.jpg" alt="Profile" width="50" height="60"></img> */}
        <img 
          src={require('/Users/karinnesagir/Desktop/Karinne-Sagir-Portfolio/karinne-sagir-portfolio/src/assets/images/profile-image.jpg')} 
          alt="profile" 
          height="150px"
          width="170px"
        />
        <div id="about-section-p">
          <p class="about-p">Hello, Welcome to my page.</p>
          <p class="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
            ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
            non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
            ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
            rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
            tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
            porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
            vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
            </p>
        </div>
      </div>
    </div>
  );
}
