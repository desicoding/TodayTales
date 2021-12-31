import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { COLORS } from '../utils/Constants'

export default function StoryCardBig(props){

  //console.log("props of storycardbig",props)
  const [story] = React.useState(props.story)

  const [studioPageLink]=React.useState(`/story/${story.slug}`)

  return (
    <div>   
      <div className="SimpleCard">
        <Link href={studioPageLink}>
          <a>
            <div style={{overflow:"hidden"}}>
            <Image alt={story.title} src={story.coverImage.responsiveImage.src} width='640px' height='300px'/>
            </div>
            <div className="Contents">
              <h3>{story.title}</h3>
              <div className='innerGrid'>
                <p>by {story.author.name}</p>
                <div className={`flair ${story.category}`}>{story.category}</div>
              </div>
              
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .SimpleCard {
          max-width: 638px;
          margin: 16px;
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
          color: ${COLORS.cardHalo};
          border-color: ${COLORS.cardHalo};
        }

        .innerGrid{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 1rem;
        }

        .flair {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px 6px;
          border-radius: 16px;
        }

        .Tech {
          color: ${COLORS.sWhite};
          background-color: ${COLORS.techFlairBg};
        }

        .Decor {
          color: ${COLORS.sWhite};
          background-color: ${COLORS.decorFlairBg};
        }

        .Cute {
          color: ${COLORS.sWhite};
          background-color: ${COLORS.cuteFlairBg};
        }

        h3 {
          margin-bottom: 0px;
        }

        p {
          margin-top: 0px;
          margin-bottom: 0px;
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
