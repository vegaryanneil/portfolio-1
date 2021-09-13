import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle>
            <div className="question">
                <h2>How do I start?</h2>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="faq-line"></div>
            </div>
            </Toggle>
            <Toggle>
            <div className="question">
                <h2>How do I start?</h2>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="faq-line"></div>
            </div>
            </Toggle>
            <Toggle>
            <div className="question">
                <h2>How do I start?</h2>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="faq-line"></div>
            </div>
            </Toggle>
            <Toggle>
            <div className="question">
                <h2>How do I start?</h2>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="faq-line"></div>
            </div>
            </Toggle>
            
        </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2 {
    padding-bottom: 2rem;
    font-weight: lighter
}
.faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
}
.question{
padding: 3rem 0;
cursor: pointer;
}
.answer{
    padding: 2rem 0;
    p{
        padding: 1rem 0;
    }
}
`
export default FaqSection
