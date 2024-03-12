import React from 'react'
import { Grid, useMediaQuery } from '@mui/material';
import { StyleDiv, StyleLevelButton, StyleCovid, StyleHigh, StyleRegistationButton } from "../styledComponent/collegeStyle";
import CollegeImage from "../assets/collegeLevel/collegeImage.png"

const College = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <StyleDiv isMobile={isMobile}>
      <Grid container  alignItems={"center"} justifyContent={"center"}>
        <Grid item lg={5}>
<StyleLevelButton>College Level</StyleLevelButton>
<StyleCovid isMobile={isMobile}>Don’t waste time in <br /> COVID-19 pandemic. <br /> Develop your skills.
</StyleCovid>
<StyleHigh isMobile={isMobile}>High-definition video is video of higher resolution and quality <br /> than standard-definition. While there is no standardized <br /> meaning for high-definition, generally any video.
</StyleHigh>
<Grid item lg={11} xs={12} display={ isMobile ? "flex" : ""} alignItems={"center"} justifyContent={"center"}>
<StyleRegistationButton >Registation Now
</StyleRegistationButton>
</Grid>
        </Grid>
        {!isMobile && (
        <Grid item lg={6}>
            <img src={CollegeImage} alt='CollegeImage'></img>
        </Grid>
        )}
      </Grid>
    </StyleDiv>
  )
}

export default College
