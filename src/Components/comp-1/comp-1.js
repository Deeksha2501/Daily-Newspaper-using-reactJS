import React from 'react';
import {StoriesContainer} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/Containers/storyCont.js';
import {Story} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/Stories/story.js';
import {sorting} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/utilities/sorting'

const calcLength = (arr) =>{
    return arr.length;
}

export const Story_comp1 = () => {
    const stories = StoriesContainer();
    var len = stories.length;
    len = Math.ceil(11 * len / 100);
    console.log("comp 1" , len ,"---" ,  0);
    console.log(stories[0]);
    const res = stories.slice(1 , len);
    return( 
        <>
        {res.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        </>
    );

}