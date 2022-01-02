import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header'
import StoryList from '../components/StoryList'
import {COLORS} from '../utils/Constants'
import { getAllPostsForRandom } from '../lib/api'
import React from 'react';

export default function Tech(props) {
  //console.log(props)
  return (
    <div>
      <Head>
        <title>TalesToday</title>
        <meta name="description" content="Tales Today is the place to be for all the entertainment gossip and fun stories" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href='https://talestoday.com'/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6060997364623360"
        crossOrigin="anonymous"></script>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-06NRFHRH9X"></Script>
      <Script type="text/javascript" src="/googletag.js"></Script>
      
      <Header/>

      <main className='main'>
        <StoryList stories={props} variant='big'/>
        <StoryList stories={props} variant='small'/>
      </main>

      <footer className='footer'>
        <div>Technology Partner: <a href="https://dndev.org/" style={{ textDecoration: 'underline', color:COLORS.faqLinkColor }}>DNDev</a></div>
      </footer>
      <style jsx>
        {`
          .main {
            min-height: 100vh;
            padding: 1rem 0;
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

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForRandom(preview)) || []
  return {
    props: { allPosts },
  }
}
