import React, { useState, useEffect } from 'react';
import './intro.css';
import btnimg from '../../img/hireme-removebg-preview.png';
import html from '../../img/html-removebg-preview.png';
import css from '../../img/css-removebg-preview.png';
import javascript from '../../img/js.ipg-removebg-preview.png';
import react from '../../img/RJ.IPG-removebg-preview.png';
import nodejs from '../../img/NJ-removebg-preview.png';
import redux from '../../img/REDUX-removebg-preview.png';
import bg from '../../img/coding-is-my-superpower-click-coder-software-mens-t-shirt (1).jpg';

const Intro = () => {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [jobIndex, setJobIndex] = useState(0);

    const greetings = ['Hello', 'Gracious to meet you .....!'];
    const jobs = ['front end developer', 'web developer', 'full stack developer'];

    useEffect(() => {
        const greetingInterval = setInterval(() => {
            setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 2000); // Change greeting every 3 seconds

        return () => clearInterval(greetingInterval);
    }, []);

    useEffect(() => {
        const jobInterval = setInterval(() => {
            setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        }, 1000); // Change job title every 3 seconds

        return () => clearInterval(jobInterval);
    }, []);

    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>{greetings[greetingIndex]}</span>
                <span className='im'>
                    I'M <span className='introname'>gireesh kumar</span> <br />
                    {jobs[jobIndex]}
                </span>
                <p className='intropara'>
                    I am a skilled web designer in creating <br /> visually appealing and user-friendly websites
                </p>
                <button className='btn'>
                    <img src={btnimg} alt='hire me' className='btnimg' />
                    <a href="https://drive.google.com/file/d/1SFi-0TuGVeDHNaEMAnU5kmPk5O8iHTzX/view?usp=drivesdk"> click me </a> <br/>  Hire me
                </button>
                <div className='skillstech'>
                    <img src={html} alt='' className='timg'/>
                    <img src={css} alt='' className='timg'/>
                    <img src={javascript} alt='' className='timg'/>
                    <img src={react} alt='' className='timg'/>
                    <img src={nodejs} alt='' className='timg'/>
                    <img src={redux} alt='' className='timg'/>
                </div>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    );
};

export default Intro;
