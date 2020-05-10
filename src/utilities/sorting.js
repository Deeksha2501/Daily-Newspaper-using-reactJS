import {StoriesContainer} from '../Containers/storyCont'
import { getStoryIDs , getStory } from "../Services/hacknApi";

export const sorting = async() =>{
    const ids = StoriesContainer();
    const arr = ids.map(storyid => getStory(storyid).then((data) => data ))
    if(arr[0])
    console.log("may be sorted" , arr);
}