import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Header from '../../components/Header'
import StoryList from '../../components/StoryList'
import {COLORS} from '../../utils/Constants'
import { dummyTopStories } from '../../utils/Stories'
import PostBody from '../../components/post-body'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'

export default function StoryPage({ post, morePosts, preview }) {

  //console.log("story is",post,morePosts)
  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.excerpt} />
        <meta name="keywords" content={post?.tags} />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href={`https://talestoday.com/${post?.slug}`} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6060997364623360"
        crossOrigin="anonymous"></script>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-06NRFHRH9X"></Script>
      <Script type="text/javascript" src="/googletag.js"></Script>
      <Header/>

      <main className='main'>
        <div className="mainStory">
          <Image alt={post?.title} src={post?.coverImage.responsiveImage.src} width='640px' height='300px'/>
            <h1>{post?.title}</h1>
          <PostBody content={post?.content} />
          <div className="notInMobile">
            <h3>Keep Reading:</h3><br/>
            <StoryList stories={morePosts} variant='small'/>
          </div>
        </div>
        <StoryList stories={morePosts} variant='small'/>
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
            padding: 16px;
          }

          .main {
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

            .notInMobile {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  //console.log("Storypage params",params)
  const data = await getPostAndMorePosts(params.uniq, preview)
  // console.log("Storypage data",data)
  const content = await markdownToHtml(data?.post?.content || '')
  //console.log("Storypage content",content)

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: {
        allPosts: data?.morePosts ?? [],
      }
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
