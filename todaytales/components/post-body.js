import Head from 'next/head'
import Script from 'next/script'
import React from 'react';

export default function PostBody({ content }) {
  const embeddedContent=content?.replace(/&#x3C;/g,'<').replace(/<code>/g,'').replace(/<\/code>/g,'').replace(/<\/pre>/g,'').replace(/<pre>/g,'')
  //console.log('embeddedContent',embeddedContent)
  const ImageResized = embeddedContent?.replace(/<img/g,'<img width="100%"')
  const amazonEmbed = ImageResized?.replace(/&#x26;/g,'&')
  const hasInstagramEmbed = (amazonEmbed?.match(/www.instagram.com\/embed.js/g) != null)
  const hasTwitterEmbed = (amazonEmbed?.match(/platform.twitter.com\/widgets.js/g) != null)
  console.log('hasTwitterEmbed',hasTwitterEmbed,amazonEmbed)

  React.useEffect(() => {
    if(hasInstagramEmbed){
      const instagramScript = document?.createElement("script");
      instagramScript.src = "//www.instagram.com/embed.js";
      instagramScript.async = true;
      document?.body?.appendChild(instagramScript);
      instagramScript.onload = window?.instgrm?.Embeds?.process()
    }
    if(hasTwitterEmbed){
      const twitterScript = document?.createElement("script");
      twitterScript.src = "https://platform.twitter.com/widgets.js";
      twitterScript.async = true;
      document?.body?.appendChild(twitterScript);
    }
  }, [hasInstagramEmbed,hasTwitterEmbed])


  return (
    <div>
      <div 
        dangerouslySetInnerHTML={{ __html: amazonEmbed}}
      />
    </div>
  )
}
