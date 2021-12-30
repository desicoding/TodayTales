import Image from 'next/image'

export default function PostBody({ content }) {
  var embeddedContent=content?.replace(/&#x3C;/g,'<').replace(/<code>/g,'').replace(/<\/code>/g,'').replace(/<\/pre>/g,'').replace(/<pre>/g,'')
  //console.log('embeddedContent',embeddedContent)
  var ImageResized = embeddedContent?.replace(/<img/g,'<img width="100%"')
  var amazonEmbed = ImageResized?.replace(/&#x26;/g,'&')
  console.log('ImageResized',amazonEmbed)
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: amazonEmbed}}
      />
    </div>
  )
}
