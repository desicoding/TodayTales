import React from 'react';
import StoryCardBig from '../components/StoryCardBig';
import StoryCardSmall from '../components/StoryCardSmall';

var render=1
export default function StoryList(props){
  //console.log("Studio List component renders:", render,props)
  render++

  const getElements=()=>{
    var elements=[];
    if(props.stories && props.variant==='big' && props.stories.allPosts && typeof(props.stories.allPosts.forEach)=='function'){
      props.stories.allPosts.forEach((value,index)=>{
        elements.push(
          <StoryCardBig key={index} story={value}/>
        );
      })
    }
    if(props.stories && props.variant==='small' && props.stories.allPosts && typeof(props.stories.allPosts.forEach)=='function'){
      props.stories.allPosts.forEach((value,index)=>{
        elements.push(
          <StoryCardSmall key={index} story={value}/>
        );
      })
    }
    return elements;
  }

  return(
    <div>
      <div className="grid">
        {getElements()}
      </div>
      <style jsx>{`
          .grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            padding:0 1rem;
          }
        `}</style>
    </div>
  )

}

