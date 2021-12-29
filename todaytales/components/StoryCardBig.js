import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { COLORS } from '../utils/Constants'

export default function StoryCardBig(props){

  console.log("props of storycardbig",props)
  const [story] = React.useState(props.story)

  const [isTryingToLearn, setIsTryingToLearn]=React.useState(false)
  const [studioPageLink,setStudioPageLink]=React.useState(`/story/${story.slug}`)

  const tryingToLearn=()=>{
    setIsTryingToLearn(true)//`/photos/${story.image_main}`
  }//<Image alt={story.title} src={props.story.coverImage.responsiveImage.src} width='640px' height='300px'/>

  return (
    <div>   
      <div className="SimpleCard">
        <Link href={studioPageLink}>
          <a>
            <div style={{overflow:"hidden"}}>
            <Image alt={story.title} src={props.story.coverImage.responsiveImage.src} width='640px' height='300px'/>
            </div>
            <div className="Contents">
              <h3>{story.title}</h3>
              <p>by <strong>{story.author.name}</strong></p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .SimpleCard {
          max-width: 660px;
          margin: 16px;
          padding: 10px;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        
        .SimpleCard:hover,
        .SimpleCard:focus,
        .SimpleCard:active {
          color: ${COLORS.primary};
          border-color: ${COLORS.sBlack};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .Contents {
          padding: 0 1rem 1rem 1rem;
        }
      `}</style>
    </div>
  )
}
