import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import StoryList from '../../components/StoryList'
import {COLORS} from '../../utils/Constants'
import { dummyTopStories } from '../../utils/Stories'
import PostBody from '../../components/post-body'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'

export default function StoryPage({ post, morePosts, preview }) {

  console.log("story is",post)
  
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
        <div className="mainStory">
          <Image alt={post?.title} src={post?.coverImage.responsiveImage.src} width='640px' height='300px'/>
            <h1>{post?.title}</h1>
          <PostBody content={post?.content} />
          <div></div>
        </div>
        <StoryList stories={dummyTopStories} variant='small'/>
      </main>

      <footer className='footer'>
        <div>Technology Partner: <a href="https://dndev.org/" style={{ textDecoration: 'underline', color:COLORS.faqLinkColor }}>DNDev</a></div>
      </footer>
      <style jsx>
        {`

          .mainStory {
            display: flex;
            flex-direction: column;
            max-width: 660px;
            overflow: hidden;
          }

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

export async function getStaticProps({ params, preview = false }) {
  console.log("Storypage params",params)
  const data = await getPostAndMorePosts(params.uniq, preview)
  //console.log("Storypage data",data)
  const content = await markdownToHtml(data?.post?.content || '')
  //console.log("Storypage content",content)

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/story/${post.slug}`) || [],
    fallback: true,
  }
}
