import React from 'react'
import { Grid, useMediaQuery } from '@mui/material';
import { StyleHigh, StyleSmallText, StyleVisitButton, StyleCardButton, StyleCard, StyleClasses } from "../styledComponent/liveClassStyle";
import LiveImage from "../assets/liveAssets/liveImage.png";
import Live from "../assets/liveAssets/live.svg";
import Recard from "../assets/liveAssets/recard.svg";
import Speaker from "../assets/liveAssets/speaker.svg"

const LiveClass = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <Grid container mt={10}>
        <Grid item lg={12} xs={12}>
          <StyleHigh>High quality video, audio <br /> & live classes
          </StyleHigh>
          <StyleSmallText>High-definition video is video of higher resolution and quality than standard-definition. While there is no <br />
            standardized meaning for high-definition, generally any video image with considerably more than <br />
            480 vertical scan lines or 576 vertical lines is considered high-definition.
          </StyleSmallText>
          <Grid display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <StyleVisitButton>Visit Courses
            </StyleVisitButton>
          </Grid>
          {!isMobile && (
            <Grid mt={-6} alignItems={"center"} justifyContent={"center"} display={"flex"}>
              <img src={LiveImage} alt='LiveImage'></img>
            </Grid>
          )}
          <Grid item mt={isMobile ? 5 : -19} columnGap={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Grid lg={2.5} xs={3}>
              <StyleCard isMobile={isMobile} elevation={0}>
                <StyleCardButton isMobile={isMobile}>
                  <img src={Speaker} alt='Speaker'></img>

                </StyleCardButton>
                {!isMobile && (
                  <StyleClasses>Audio Classes
                  </StyleClasses>)}
              </StyleCard>
            </Grid>
            <Grid lg={2.5} xs={3}>
              <StyleCard elevation={0} isMobile={isMobile}>

                <StyleCardButton>
                  <img src={Live} alt='Live'></img>

                </StyleCardButton>
                {!isMobile &&
                  <StyleClasses>Live Classes
                  </StyleClasses>}
              </StyleCard>
            </Grid>
            <Grid lg={2.5} xs={3}>
              <StyleCard elevation={0} isMobile={isMobile}>
                <StyleCardButton>
                  <img src={Recard} alt='Recard'></img>
                </StyleCardButton>
                {!isMobile &&
                  <StyleClasses>Recorded Classes
                  </StyleClasses>}
              </StyleCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default LiveClass