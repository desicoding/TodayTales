import React from 'react'
import Image from 'next/image'
import {COLORS} from '../utils/Constants'
import Link from 'next/link'

export default function Header(){

  const [windowPath,setWindowPath]=React.useState('')

  React.useEffect(()=>{
    setWindowPath(window.location.pathname)
  },[]);

  const isSelected=(path)=>{
    if(windowPath===path){
      return true
    }
    return false
  }

  return(
    <div>
      <header style={{
        backgroundColor: COLORS.headerColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'stretch',
        borderBottom: `1px solid ${COLORS.headerColor}`,
        borderRadius: '4px',
        }}>
        <div className='grid'>
          <div className='innerGrid' style={{flex:'30%'}}>
            <Link href='/' passHref>
              <a style={{display:'flex',padding:0,margin:0}}>
                <Image alt='Tales Today Banner Image' src={`/headingText2.png`} width="154" height="40"/>
              </a>
            </Link>
          </div>
          <div className='innerGrid' style={{flex:'40%'}}>
            <div className='gridItem'><Link href='/tech'><a className={isSelected('/tech')?'selected':'unselected'}>Tech</a></Link></div>
            <div className='gridItem'><Link href='/random'><a className={isSelected('/random')?'selected':'unselected'}>Random</a></Link></div>
            <div className='gridItem'><Link href='/home-decor'><a className={isSelected('/home-decor')?'selected':'unselected'}>Decor</a></Link></div>
          </div>
          <div style={{flex:'30%'}}>
          </div>
        </div>
      </header>
        <style jsx>{`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }

          .innerGrid {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.20rem;
          }

          .gridItem {
            margin: 4px;
            padding: 4px;
          }

          a {
            text-decoration: none;
            padding: 4px;
            margin: 8px;
            border-radius: 4px;
            color: ${COLORS.headerTextColor};
          }

          .selected {
            color: ${COLORS.headerColor};
            background-color: ${COLORS.headerAccentColor}
          }
  
          .unselected:hover,
          .unselected:focus,
          .unselected:active {
            color: ${COLORS.headerColor};
            background-color: ${COLORS.headerAccentColor}
          }

          @media(max-width: 800px){
            .gridItem {
              margin: 2px;
              padding: 2px;
            }
          }
        `}</style>
    </div>
  )
}
