import Head from 'next/head'
import Header from '../components/Header'
import StoryList from '../components/StoryList'
import {COLORS} from '../utils/Constants'

export default function Home() {
  var dummyTopStories = [
    {
      id:1,
      title: 'Leopard spotted in Lucknow, scares the shit out of nawabs',
      image_main: 'Leopard.jpg'
    },
    {
      id: 2,
      title: '"Dekh Dekh Dekh tu yahan wahan na fenk" Netizens spotted dancing to this "garbage tune"',
      image_main: 'dustbin.jpg'
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
