
// import React from "react";
// import './skill.css'
// import uidesign from '../../img/ui-and-ux-design-removebg-preview.png'
// import webdesign from '../../img/website-design-removebg-preview.png'
// import appdesign from '../../img/app.png.png'


// const Skills = ()=>{
//     return(
//       <section id="skills">
//         <span className="skillstitle"> what i do</span>
//         <span className="skilldesc"> i am a skilled and passionate web designer with experience </span>
//         <div className="skillbares">
//         <div className="skillbare">
//             <img src={uidesign} alt="uidesign"  className="skillbareimg"/>
//             <div className="skillbaretext">
//             <h2>UI/UX Design</h2>
//             <p>this is demo text, you can own content hear </p>
//             </div>
//         </div>
//         <div className="skillbare">
//             <img src={webdesign} alt="webdesign"  className="skillbareimg"/>
//             <div className="skillbaretext">
//                 <h2>website Design</h2>
//                 <p>this demo text can be change whil making the production ready website.</p>
//             </div>
//         </div>
//         <div className="skillbare">
//             <img src={appdesign} alt="appdesign"  className="skillbareimg"/>
//             <div className="skillbaretext">
//                 <h2>app design</h2>
//                 <p>you can write related to mobile app development </p>
//             </div>
//         </div>
//         </div>
//       </section>
//     )
// }

// export default Skills ;


/*hear stating from this */



import React from "react";
import './skill.css';
import uidesign from '../../img/ui-and-ux-design-removebg-preview.png';
import webdesign from '../../img/website-design-removebg-preview.png';
import appdesign from '../../img/app.png.png';

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="tech-skillstitle">Technical Skills</h2>
            <span className="skilldesc">I'm a skilled and passionate web designer with extensive experience in HTML, CSS, JavaScript, React.js, Redux, Node.js, and responsive design, creating high-quality, innovative, and user-friendly websites that exceed client expectations.</span>
            <div className="skills-container">
                <div className="skillbares">
                    <div className="skillbare">
                        <img src={uidesign} alt="uidesign" className="skillbareimg" />
                        <div className="skillbaretext">
                            <h2>UI/UX Design</h2>
                            <p>Proficient in tools like Adobe XD and Canva, I enhance usability and satisfaction through meticulous user research and iterative prototyping."</p>
                        </div>
                    </div>
                    <div className="skillbare">
                        <img src={webdesign} alt="webdesign" className="skillbareimg" />
                        <div className="skillbaretext">
                            <h2>Website Design</h2>
                            <p>"I specialize in website design, utilizing HTML, CSS, JavaScript, React, and Node.js to create dynamic and responsive web experiences."</p>
                        </div>
                    </div>
                    <div className="skillbare">
                        <img src={appdesign} alt="appdesign" className="skillbareimg" />
                        <div className="skillbaretext">
                            <h2>App Design</h2>
                            <p>"I specialize in app design, leveraging my expertise in UI/UX principles, along with proficiency in technologies such as React Native and Node.js, to create intuitive and engaging mobile applications."</p>
                        </div>
                    </div>
                </div>

                <div className="tech-skills">
                    <div className="tech-skill">
                        <span>HTML      :</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="tech-skill">
                        <span>CSS     :</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="tech-skill">
                        <span>JavaScript</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="tech-skill">
                        <span>React</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="tech-skill">
                        <span>Redux</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="tech-skill">
                        <span>MUI</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="tech-skill">
                        <span>Node.js</span>
                        <div className="tech-skill-bar">
                            <div className="tech-skill-level" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

