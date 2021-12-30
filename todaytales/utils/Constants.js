export const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL

var primary='#ffff00'//green  
var primaryVariant='#ffff00'
var secondary= '#311b92'//blue  1565c0
var background= '#efefef'//light grey
var sWhite= '#ffffff'
var sBlack= '#000000'

export const COLORS = {
  primary,
  secondary,
  background,
  sWhite,
  sBlack,
  primaryVariant,
  //misc
  textDark:sBlack,
  //header
  headerColor: primary,
  headerAccentColor: secondary,
  headerTextColor: secondary,
  //cardBig
  cardHalo: secondary,
  //flairs
  techFlairBg: '#90a4ae',
  entFlairBg: '#ff8a65',
  //tags
  tagBackgroundColor: background,//aliceblue
}

export const STYLES = {

  //Global Styles
  basePageStyle:{
    textAlign:'center',
  },

  linkStyle:{
    color: COLORS.footerLinkColor
  }
}
