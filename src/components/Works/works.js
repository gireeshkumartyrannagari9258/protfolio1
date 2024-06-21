import React from 'react';
import './works.css';
import furnitur from '../../img/FURNITUR1.jpeg';
import educonnect from '../../img/SCHOOL.jpeg';
import medsttart3 from '../../img/haspetal.jpeg';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Works</h2>
            <span className='worksdesc'>Here are some of my works.</span>
            <div className='worksimgs'>
                <div className='worksimg-container'>
                    <img src={furnitur} alt='furnitur' className='worksimg' />
                    <div className='img-description'>
                        Hn Furniture is a web application that provides detailed information It categorizes products by price,sofas,beds,tables etc.,
                        making it easy for users to find and choose furniture that fits their specific needs.
                    </div>
                </div>
                <div className='worksimg-container'>
                    <img src={educonnect} alt='educonnect' className='worksimg' />
                    <div className='img-description'>
                        EduConnect is a comprehensive platform designed to provide detailed information about courses.
                    </div>
                </div>
                <div className='worksimg-container'>
                    <img src={medsttart3} alt='medsttart3' className='worksimg' />
                    <div className='img-description'>
                        Med Start is a web application that provides detailed information about hospitals, including email addresses, contact numbers, websites, and other important details.
                    </div>
                </div>
            </div>
            <button className='workbtn'>  <a href="">  </a> See More</button>
        </section>
    );
}

export default Works;
