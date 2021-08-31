import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt="clock" />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt ad, doloremque dolores rem dolore veritatis at amet veniam eveniet.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt="diaphragm" />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt ad, doloremque dolores rem dolore veritatis at amet veniam eveniet.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="teamwork" />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt ad, doloremque dolores rem dolore veritatis at amet veniam eveniet.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="money" />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt ad, doloremque dolores rem dolore veritatis at amet veniam eveniet.</p>
                        </div>
                    </div>
                        <div className="image">
                            <img src={home2} alt="home" />
                        </div>
            </div>    
        </div>
    )
}

export default ServicesSection
