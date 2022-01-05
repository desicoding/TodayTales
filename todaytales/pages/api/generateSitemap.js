import fs from 'fs'
import { getAllPostsWithSlug } from '../../lib/api';

export default async function handler(req, res) {

  var xmlHead=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  var bodyConstantURL=['/','/tech','/random','/home-decor']

  var xmlTail=`\n</urlset>`

  var xmlBodyConstantURL = ``
  bodyConstantURL.forEach((url)=>{
    xmlBodyConstantURL+=`\n\t<url>\n\t\t<loc>\n\t\t\thttps://talestoday.com`+url+`\n\t\t</loc>\n\t</url>`
  })

  const allSlugs = await getAllPostsWithSlug()
  var xmlBodySlugs=``
  allSlugs.forEach((url)=>{
    //console.log(url.slug)
    xmlBodySlugs+=`\n\t<url>\n\t\t<loc>\n\t\t\thttps://talestoday.com/story/`+url.slug+`\n\t\t</loc>\n\t</url>`
  })


  var Sitemap = xmlHead + xmlBodyConstantURL + xmlBodySlugs + xmlTail

  //console.log('Sitemap',Sitemap)

  fs.writeFile('public/sitemap.xml', Sitemap, function(err) {
    if (err) {
       return console.error(err);
    }
    //console.log("Sitemap written successfully!")
 });
 
  res.status(200).json({ name: 'John Lovely Doe' })
}
