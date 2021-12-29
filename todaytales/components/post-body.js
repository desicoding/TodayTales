export default function PostBody({ content }) {
  console.log(content?.replace(/&#x3C;/g,'<').replace(/<code>/g,''))
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: content?.replace(/&#x3C;/g,'<').replace(/<code>/g,'')}}
      />
    </div>
  )
}
