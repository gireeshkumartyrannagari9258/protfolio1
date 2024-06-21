import React, { useRef } from 'react'
import './contact.css'
import instagram from '../../img/download-removebg-preview (1).png'
import twitter from '../../img/images-removebg-preview.png'
import telegram from '../../img/download-removebg-preview (2).png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_06jgpdd', 'template_jc4xqtp', form.current, {
                publicKey: 'zUAj9_qhZJKAD8jPW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            }
        return (
            <section id='contacpage'>
                {/* <div id='resum'>
                    <h1>my resum</h1>
                    <a href="https://drive.google.com/file/d/1SFi-0TuGVeDHNaEMAnU5kmPk5O8iHTzX/view?usp=drivesdk" className='linktageresum'>clic me </a>
                        </div> */}
                <div id='contact'>
                    <h1  className='contacttitlepage'> Contact Me......!</h1>
                    <span className='contactdesc'> Please complete the form below to initiate a discussion regarding potential work opportunities.</span>
                    <form className='contactform' ref={form} onSubmit={sendEmail}>
                        <input type='text' className='name' placeholder='your name' name='from_name' />
                        <input type='email' className='email' placeholder='your email' name='from_email' />
                        <textarea className='msg' name='message' rows='5' placeholder='your message'></textarea>
                        <button className='submitbtn' type='submit' value='send' >
                            submit
                        </button>
                        <div className='links'>
                        <a href="https://x.com/girishyada18189?t=hk0coOQasCJJ0Hsu4EvfNA&s=09" target="_blank" rel="noopener noreferrer">
                             <img src={twitter} alt='telegram' className='link' /></a>
                             <a href='https://www.instagram.com/fighter_gk.yadav?igsh=MWlhamsyMDk2MTZyeQ=='><img src={instagram} alt='instagram' className='link' /></a>
                       <a href='https://t.me/+tzU5nLbiWi8zZDM1'><img src={telegram} alt='telegram' className='link' /> </a>
                       
                            
                           
                        </div>
                    </form>
                </div>

            </section>
        )
    }
    export default Contact;