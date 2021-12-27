import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {COLORS} from '../utils/Constants'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TalesToday</title>
        <meta name="description" content="Tales Today is the place to be for all the entertainment gossip and fun stories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className='main'>
        <div className='grid'>
          <a href="https://nextjs.org/docs" className='card'>
            <h2>Story 1 &rarr;</h2>
            <p>Lorem ipsum chicksum gleesum.</p>
          </a>
        </div>
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .footer {
            display: flex;
            padding: 1rem 0;
            border-top: 1px solid ${COLORS.primary};
            justify-content: center;
            align-items: center;
          }
          
          .description {
            margin: 4rem 0;
            line-height: 1.5;
            font-size: 1.5rem;
          }
          
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
          }
          
          .card {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 4px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 300px;
          }
          
          .card:hover,
          .card:focus,
          .card:active {
            color: ${COLORS.primary};
            border-color: ${COLORS.primary};
          }
          
          .card h2 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
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
