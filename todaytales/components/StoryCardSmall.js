import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { COLORS } from '../utils/Constants'

export default function StoryCardSmall(props){
  //console.log(props)

  const [story] = React.useState(props.story)

  const [isTryingToLearn, setIsTryingToLearn]=React.useState(false)
  const [studioPageLink,setStudioPageLink]=React.useState(`/`)

  const tryingToLearn=()=>{
    setIsTryingToLearn(true)
  }

  return (
    <div>   
      <div className="SimpleCard">
        <Link href={studioPageLink}>
          <a>
            <div className="Grid">
              <div style={{overflow:"hidden"}}>
                <Image alt={story.title} src={`/photos/${story.image_main}`} width='320px' height='240px'/>
              </div>
              <div className="Contents">
                <h3>{story.title}</h3>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .Grid{
          display: flex;
          align-items: start;
        }

        .SimpleCard {
          max-width: 450px;
          margin: 16px;
          padding: 10px;
          text-align: left;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        
        .SimpleCard:hover,
        .SimpleCard:focus,
        .SimpleCard:active {
          color: ${COLORS.primary};
          border-color: ${COLORS.secondary};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h3 {
          font-size: 1em;
        }

        .Contents {
          padding: 0 1rem 1rem 1rem;
        }
      `}</style>
    </div>
  )
}
