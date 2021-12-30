import Image from 'next/image'

export default function PostBody({ content }) {
  var embeddedContent=content?.replace(/&#x3C;/g,'<').replace(/<code>/g,'')
  console.log('embeddedContent',embeddedContent)
  var ImageResized = embeddedContent?.replace(/<img/g,'<img width="100%"')
  console.log('ImageResized',ImageResized)
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: ImageResized}}
      />
    </div>
  )
}
