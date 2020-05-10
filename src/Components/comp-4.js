import React from 'react';
import {StoriesContainer} from '../Containers/storyCont';
import {Story} from '../Stories/story';

export const Story_comp4 = () => {
    const stories = StoriesContainer();
    var len = stories.length;
    var len2 = Math.ceil(65 * len / 100);
    var len1 = Math.ceil(54 * len/100);
    console.log("comp 4" , len2 ,"---" ,  len1);
    const res = stories.slice(len1 , len2);
    return res.map(storyid => <Story key = {storyid} storyId = {storyid} />);
}