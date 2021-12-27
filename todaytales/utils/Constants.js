export const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL

var primary='#2e7d32'//green  
var secondary= '#a6685b'//brass 
var background= '#efefef'//light grey
var sWhite= '#ffffff'
var sBlack= '#000000'

export const COLORS = {
  primary,
  secondary,
  background,
  sWhite,
  sBlack,
  //misc
  textDark:sBlack,
  circularProgressColor: primary,
  //header
  headerColor: sWhite,
  headerAccentColor: primary,
  headerTextColor: primary,
  //booking boxes
  bookingBoxDefault: sWhite,//white
  bookingBoxtextLight: sWhite,//white
  bookingBoxtextDark:'#6a6a6a',//grey
  bookingBoxSelected:'#66bb6a',//green
  bookingBoxBooked:'#e57373',//red
  //tags
  tagBackgroundColor: background,//aliceblue
  //payment button
  paymentButtonColor:'#66bb6a',//green
  paymentButtonBorderColor:'#66bb6a',//green
  paymentButtonTextColor:'#ffffff',
  //message button
  messageButtonColor:secondary,
  messageButtonBorderColor:secondary,//green
  messageButtonTextColor:sWhite,//green
  mapInfoWindowBackground:'#ffffff',
  //book now button
  bookNowButtonColor: secondary,
  bookNowButtonBorderColor: secondary,
  bookNowButtonTextColor: sWhite,
  //learn more button
  learnMoreButtonColor: secondary,
  learnMoreButtonTextColor: sWhite,
  learnMoreButtonColorClosed:'grey',
  learnMoreButtonTextColorClosed:sWhite,
  statusLineColorClosed:'red',
  statusLineOnlineClasses:'#f9a825',//kinda orange?
  //filter area
  filterBorderColor: sWhite,
  filterLabelColor: sWhite,
  faqLinkColor: sBlack,
  //fab
  fabCallBackground: primary,
  fabCallForeground: sWhite
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
