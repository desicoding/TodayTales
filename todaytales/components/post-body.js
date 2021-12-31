import Script from 'next/script'
import React from 'react';

export default function PostBody({ content }) {
  const embeddedContent=content?.replace(/&#x3C;/g,'<').replace(/<code>/g,'').replace(/<\/code>/g,'').replace(/<\/pre>/g,'').replace(/<pre>/g,'')
  //console.log('embeddedContent',embeddedContent)
  const ImageResized = embeddedContent?.replace(/<img/g,'<img width="100%"')
  const amazonEmbed = ImageResized?.replace(/&#x26;/g,'&')
  const hasInstagramEmbed = (amazonEmbed.match(/www.instagram.com\/embed.js/g) != null)
  //console.log('hasInstagramEmbeded',hasInstagramEmbed)

  React.useEffect(() => {
    if(hasInstagramEmbed){
      const instagramScript = document.createElement("script");
      instagramScript.src = "//www.instagram.com/embed.js";
      instagramScript.async = true;
      document.body.appendChild(instagramScript);
      instagramScript.onload = window.instgrm.Embeds.process()
    }
  }, [hasInstagramEmbed])


  return (
    <div>
      <div 
        dangerouslySetInnerHTML={{ __html: amazonEmbed}}
      />
    </div>
  )
}
