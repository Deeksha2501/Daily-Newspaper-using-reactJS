import React from 'react';
import {Story_comp1} from './comp-1'
import {Story_comp2} from './comp-2'
import {Story_comp3} from './comp-3'
import {Story_comp4} from './comp-4'
import {Story_comp5} from './comp-5'
import {UpperComp} from './upperComp'
import './component.css'


export const Component = () => {
    return(
        <div className= "page-wrap">
           
        <div className = "main" id = "main-div">
        <UpperComp />  
        <div className = "container">
        <div className = "comp-1 comp">
        <Story_comp1 />
        </div>
        <div className = "comp-2 comp">
        <Story_comp2 />
        </div>
        <div className = "comp-3 comp">
        <Story_comp3 />
        </div>
        <div className = "comp-4 comp">
        <Story_comp4 />
        </div>
        <div className = "comp-5 comp">
        <Story_comp5 />
        </div>
        </div>
        </div>
        </div>
    );
}