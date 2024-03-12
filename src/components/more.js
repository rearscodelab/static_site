import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import Book from "../assets/more/book.svg"
import Instagram from "../assets/more/instagram.svg"
import FaceBook from "../assets/more/facebook.svg"
import Twitter from "../assets/more/twitter.svg"
import Linkedin from "../assets/more/linkedIn.svg"
import { StyleTypographyHeader, StyleSmallText, StyleImage } from "../styledComponent/moreStyle"

const More = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div>
      <Grid container columnGap={6} justifyContent={"center"} m={ isMobile ? 0 : 5}>
        <Grid item lg={2} xs={6}>
            <div style={{display:"flex", alignSelf:"center"}}>
        <img src={Book}></img>
            <StyleTypographyHeader >Rears</StyleTypographyHeader>
            </div>
            <div >
            <img src={FaceBook} alt='FaceBook'></img>
            <StyleImage src={Instagram} alt='Instagram' style={{width:"5vh", height:"5vh"}}></StyleImage>
            <StyleImage src={Twitter} alt='Twitter'></StyleImage>
            <StyleImage src={Linkedin} alt='Linkedin'></StyleImage>
            </div>
            <StyleSmallText>©2021 Rears.co</StyleSmallText>
            <StyleSmallText>Rears is a registered <br /> trademark of Rears.co</StyleSmallText>
        </Grid>
        <Grid item lg={2} xs={6}>
            <StyleTypographyHeader>Courses</StyleTypographyHeader>
            <StyleSmallText>Classroom courses</StyleSmallText>
            <StyleSmallText>Virtual classroom courses</StyleSmallText>
            <StyleSmallText>E-learning courses</StyleSmallText>
            <StyleSmallText>Video Courses</StyleSmallText>
            <StyleSmallText>Offline Courses</StyleSmallText>
        </Grid>
        <Grid item lg={2} xs={6}>
            <StyleTypographyHeader>Community</StyleTypographyHeader>
            <StyleSmallText>Learners</StyleSmallText>
            <StyleSmallText>Parteners</StyleSmallText>
            <StyleSmallText>Developers</StyleSmallText>
            <StyleSmallText>Transactions</StyleSmallText>
            <StyleSmallText>Blog</StyleSmallText>
            <StyleSmallText>Teaching Center</StyleSmallText>
        </Grid>
        <Grid item lg={2} xs={6}>
            <StyleTypographyHeader>Quick links</StyleTypographyHeader>
            <StyleSmallText>Home</StyleSmallText>
            <StyleSmallText>Professional Education</StyleSmallText>
            <StyleSmallText>Courses</StyleSmallText>
            <StyleSmallText>Admissions</StyleSmallText>
            <StyleSmallText>Testimonial</StyleSmallText>
            <StyleSmallText>Programs</StyleSmallText>
        </Grid>
        <Grid item lg={2} xs={6}>
            <StyleTypographyHeader>More</StyleTypographyHeader>
            <StyleSmallText>Press</StyleSmallText>
            <StyleSmallText>Investors</StyleSmallText>
            <StyleSmallText>Terms</StyleSmallText>
            <StyleSmallText>Privacy</StyleSmallText>
            <StyleSmallText>Help</StyleSmallText>
            <StyleSmallText>Contact</StyleSmallText>
        </Grid>
      </Grid>
    </div>
  )
}

export default More
