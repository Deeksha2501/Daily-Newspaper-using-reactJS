import React from 'react';
import {StoriesContainer} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/Containers/storyCont.js';
import {Story} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/Stories/story.js';
import './component.css'

export const InnerS_comp2 = (res) => {   
    console.log("check" , res)
    return( 
        res.res.length>0 ?
        // <div className= "page-wrap">
        <div className = "cols_ex innerC">
            {res.res.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        </div>
        : null
    );
}