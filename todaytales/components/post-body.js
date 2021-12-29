export default function PostBody({ content }) {
  //console.log(content?.replaceAll('&#x3C;','<').replaceAll('<code>',''))
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: content?.replaceAll('&#x3C;','<').replaceAll('<code>','') }}
      />
    </div>
  )
}
