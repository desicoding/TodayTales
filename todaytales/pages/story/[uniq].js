import Head from 'next/head'
import Header from '../../components/Header'
import StoryList from '../../components/StoryList'
import {COLORS} from '../../utils/Constants'
import { dummyTopStories } from '../../utils/Stories'

export default function StoryPage(props) {

  console.log("story is",props)
  
  const makeStory=()=>{
    return 'ok'
  }

  return (
    <div>
      <Head>
        <title>Chacha</title>
        <meta name="description" content='Chacha' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className='main'>
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


export async function getStaticPaths() {
  var paths=[]

  //console.log("paths are",paths)
  return {
    paths: paths,
    fallback: true
  }
}



export async function getStaticProps({params}) {
  var data={}

  //console.log('data is',data)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {story: data}, // will be passed to the page component as props
  }
}
