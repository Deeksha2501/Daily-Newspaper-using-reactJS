import React from 'react';
import {StoriesContainer} from '../Containers/storyCont';
import {Story} from '../Stories/story';

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