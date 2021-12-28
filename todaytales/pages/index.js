import Head from 'next/head'
import Header from '../components/Header'
import StoryList from '../components/StoryList'
import {COLORS} from '../utils/Constants'

export default function Home() {
  var dummyTopStories = [
    {
      id:1,
      title: '8 Movies That Prove Dhanush Is A Genius Who Can Make Any Role His Own',
      image_main: '0a41e44c-a30d-458c-b589-421f6dd26e69.jpg.webp'
    },
    {
      id:2,
      title: '6 Sensitive & Crucial Topics Bollywood Shouldn\'t Have Touched In 2021',
      image_main: 'ce27e910-ded4-4607-bc3d-07047e4d1475.jpg.webp'
    },
    {
      id: 4,
      title: '8 Gangster Movies From 2021 On Netflix That You Can Stream This Weekend',
      image_main: 'db5eaa24-c05b-4b54-9806-563945100468.jpg.webp'
    },
    {
      id:5,
      title: 'Momo Lovers: India Ordered Over 1 Crore Momos In 2021 & That is All That Matters',
      image_main: '1b82abed-f346-4f17-9286-b9af160a9c8b.jpg.webp'
    },
    {
      id: 3,
      title: 'If You are Still Grooving To Harrdy Sandhu Bijlee Bijlee, Then Heres What The Song Means',
      image_main: '657c4497-87f8-4ead-ad62-79ff0b8ea2ed.jpg.webp'
    }
  ]
  return (
    <div>
      <Head>
        <title>TalesToday</title>
        <meta name="description" content="Tales Today is the place to be for all the entertainment gossip and fun stories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className='main'>
        <StoryList stories={dummyTopStories} variant='big'/>
        <StoryList stories={dummyTopStories} variant='small'/>
      </main>

      <footer className='footer'>
        <div>Technology Partner: <a href="https://dndev.org/" style={{ textDecoration: 'underline', color:COLORS.faqLinkColor }}>DNDev</a></div>
      </footer>
      <style jsx>
        {`
          .main {
            min-height: 100vh;
            padding: 2rem 0;
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: start;
            flex-wrap: wrap;
          }
          
          .footer {
            display: flex;
            padding: 1rem 0;
            border-top: 1px solid ${COLORS.secondary};
            justify-content: center;
            align-items: center;
          }
          
          .description {
            margin: 4rem 0;
            line-height: 1.5;
            font-size: 1.5rem;
          }
          
          .logo {
            height: 1em;
            margin-left: 0.5rem;
          }
          
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  )
}
