import React from 'react';
import {StoriesContainer} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/Containers/storyCont.js';
import {Story} from 'C:/Users/hp/Desktop/PROJECTS/ASSIGNMENTS/assignment-privado/src/Stories/story.js';

export const Story_comp3 = () => {
    const stories = StoriesContainer();
    var len = stories.length;
    var len2 = Math.ceil(52 * len / 100);
    var len1 = Math.ceil(40 * len/100);
    console.log("comp 3" , len2 ,"---" ,  len1);
    const res = stories.slice(len1 , len2);
    return res.map(storyid => <Story key = {storyid} storyId = {storyid} />);
}