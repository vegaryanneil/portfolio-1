import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
import {motion} from 'framer-motion';

const AboutSection = () => {

    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity:1, transition: {duration: 2}},
    }
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show">We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, exercitationem qui rem ullam est molestiae obcaecati ad repudiandae illo inventore.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
            <img src={home1} alt="guy with camera" />
            </Image>
        </About>
    )
}

export default AboutSection;