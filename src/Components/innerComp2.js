import React from 'react';
import {StoriesContainer} from '../Containers/storyCont';
import {Story} from '../Stories/story';
import './component.css'

export const InnerS_comp2 = (res) => {   
    console.log("check" , res)
    return( 
        res.res.length>0 ?
        <div className = "cols_ex innerC">
            {res.res.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        </div>
        : null
    );
}