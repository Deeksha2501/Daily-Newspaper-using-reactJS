import React from 'react';
import {StoriesContainer} from '../Containers/storyCont';
import {Story} from '../Stories/story';
import {InnerS_comp2} from './innerComp2'
import './component.css'


export const Story_comp5 = () => {
    const stories = StoriesContainer();
    var len = stories.length;
    var len2 = len
    var len1 = Math.ceil(65 * len/100);
    var l = len2-len1;
    const res1 = stories.slice(len1 , len1+(l/3));
    const res2 = stories.slice(len1+(l/3)+4 , len1+(2*l/3));
    const res3 = stories.slice(len1+(2*l/3) , len2);
    const res4 = stories.slice(len1+(l/3) , len1+(l/3)+4);
    const res5 = stories.slice(len1+(2*l/3) , len1+(2*l/3)+2);

    return( 
        <>
        {res1.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        <InnerS_comp2 res = {res4} />
        {res2.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        <InnerS_comp2 res = {res5} />
        {res3.map(storyid => <Story key = {storyid} storyId = {storyid} />)}
        </>
    );
}