import react from 'react'
import axios from "axios";

//https://hacker-news.firebaseio.com/v0/askstories.json?print=prett

var biggerText = [];

export const baseURL = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesURL = `${baseURL}askstories.json`;
export const storyURL = `${baseURL}/item/`;

export const getStory = async (storyID) => {
    const res = await axios
                .get(`${storyURL + storyID}.json`)
                .then(({ data }) => data);
    // console.log(countWords(res.text)) ;
    // res.wordCount = countWords(res.text);
    // console.log(res);

    return res ;
};

export const getStoryIDs = async () => {
   const res = await axios.get(newStoriesURL).then((data) => data);
   //console.log(res.data);
  return res.data;
};

// function countWords(s){
// 	s = s.replace(/(^\s*)|(\s*$)/gi,"");
// 	s = s.replace(/[ ]{2,}/gi," ");
// 	s = s.replace(/\n /,"\n");
// 	return  s.split(' ').length;
// }

