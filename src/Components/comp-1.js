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
    const res = stories.slice(0 , len);
    return( 
        <>
        {res.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        </>
    );

}
