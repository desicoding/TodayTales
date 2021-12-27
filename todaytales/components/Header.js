import React from 'react'
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
        justifyContent: 'center',
        borderBottom: `1px solid ${COLORS.headerAccentColor}`,
        borderRadius: '4px',
        position: 'fixed',
        top: '0px',
        right: '0px',
        left: '0px'
        }}>
        <div className='grid'>
          <div className='innerGrid'>
            <div className='gridItem'><Link href='/'><a className={isSelected('/')?'selected':''}>Stories</a></Link></div>
            <div className='gridItem'><Link href='/memes'><a className={isSelected('/memes')?'selected':''}>Memes</a></Link></div>
          </div>
        </div>
      </header>
        <style jsx>{`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 8px;
          }

          .innerGrid {
            display: flex;
            align-items: center;
            justify-content: center;
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
