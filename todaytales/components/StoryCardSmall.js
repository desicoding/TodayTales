import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { COLORS } from '../utils/Constants'

export default function StoryCardSmall(props){
  // console.log(props)

  const [story] = React.useState(props.story)

  const [isTryingToLearn, setIsTryingToLearn]=React.useState(false)
  const [studioPageLink,setStudioPageLink]=React.useState(`/story/${story.slug}`)

  const tryingToLearn=()=>{
    setIsTryingToLearn(true)
  }

  return (
    <div>   
      <div className="SimpleCard">
        <Link href={studioPageLink}>
          <a>
            <div className="Grid">
              <div className="smallImage">
                <Image alt={story.title} src={story.coverImage.responsiveImage.src} width='320px' height='180px'/>
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
          align-items: center;
          justify-content: center;
        }

        .SimpleCard {
          max-width: 400px;
          margin: 16px;
          text-align: left;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        
        .SimpleCard:hover,
        .SimpleCard:focus,
        .SimpleCard:active {
          color: ${COLORS.secondary};
          border-color: ${COLORS.secondary};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h3 {
          font-size: 1em;
          margin: 0px;
        }

        .smallImage{
          overflow: hidden;
          flex: 40%;
        }

        .Contents {
          padding: 0 1rem;
          flex: 60%;
          overflow: hidden;
        }

        @media(max-width:800px){
          .Grid{
            flex-direction:column;
          }
          .SimpleCard {
            max-width: 320px;
          }
          .Contents {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
