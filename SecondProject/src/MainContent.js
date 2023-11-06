import React from 'react';
import './styles/index.css';

export default function MainContent (){
    return(
        <div className="main-content">
            <h1>Reasons why I want to learn React</h1>
            <ol className="list-reasons">
                <li>Find a job</li>
                <li>Improve my coding skills</li>
            </ol>
        </div>
    )
}