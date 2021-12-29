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
            <Image alt='Tales Today Banner Image' src={`/headingText.png`} width="154" height="40"/>
          </div>
          <div className='innerGrid' style={{flex:'40%'}}>
            <div className='gridItem'><Link href='/'><a className={isSelected('/')?'selected':''}>Stories</a></Link></div>
            <div className='gridItem'><Link href='/memes'><a className={isSelected('/memes')?'selected':''}>Memes</a></Link></div>
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
  
          a:hover,
          a:focus,
          a:active {
            color: ${COLORS.headerColor};
            background-color: ${COLORS.headerAccentColor}
          }
        `}</style>
    </div>
  )
}
