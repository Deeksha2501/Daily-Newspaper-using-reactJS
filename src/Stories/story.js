import React , { useEffect, useState } from 'react';
import { getStoryIDs , getStory } from "../Services/hacknApi";
import "./story.css"

export const imp =[];

const filterGibberish = (text) =>{
  text = text.replace(new RegExp("&#x2F;" , 'g') , "/")
  text = text.replace(new RegExp('&#x27;' , 'g') , '\'')
  text = text.replace(new RegExp('<p>' , 'g')  , ' ')
  text = text.replace(new RegExp('&quot;' , 'g')  , '\"')
  text = text.replace(new RegExp('Ask HN: ' , 'g')  , '')
  return text;
}

export const Story = ({ storyId }) =>{
    //console.log(storyID.storyId)
    const [story, setStory] = useState([]);
    useEffect(() => {
      try {
        getStory(storyId).then((data) => data && setStory(data));
      } 
      catch (e) {
        console.log("error ", e);
      }
    }, []);

    if(story.text !== undefined){
     story.text =  filterGibberish(story.text);
    }
    
    if(story &&  story.text === undefined && story.title && story.score == '1' && !imp.find(check => check === story)){
      imp.push(story);
    }

    var Title = '';
    if(story && story.title){
      if(story.score === 1){
        console.log('bold 1 assigned' , story.score);
        Title = <p className = "title bold1">{filterGibberish(story.title)}</p>
      }
      else if(1 < story.score && story.score<=10){
        console.log('bold 2 assigned', story.score);
        Title = <p className = "title bold2">{filterGibberish(story.title)}</p>
      }
      else if(10 <story.score && story.score<= 20){
        console.log('bold 3 assigned', story.score);
        Title = <p className = "title bold3">{filterGibberish(story.title)}</p>
      }
      else if(20 <story.score && story.score<= 40){
        console.log('bold 4 assigned', story.score);
        Title = <p className = "title bold4">{filterGibberish(story.title)}</p>
      }
      else if(40 <story.score && story.score<= 1000){
        console.log('bold 5 assigned', story.score);
        Title = <p className = "title bold5">{filterGibberish(story.title)}</p>
      }
    }


    return story && story.title && story.text? 
    (
        <div className="story">
        <b>{Title}</b>
        {story.text}
    </div>
    )
: null;

}