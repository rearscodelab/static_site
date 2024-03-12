import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { StyleDiv, StyleSubscribe, StyleSmallText, StyleTextField, StyleButton } from "../styledComponent/subscribeStyle"
import Image1 from "../assets/subscribe/image1.svg"
import Image2 from "../assets/subscribe/image2.svg"
import Image3 from "../assets/subscribe/image3.svg"
import Image4 from "../assets/subscribe/image4.svg"
import Image5 from "../assets/subscribe/image5.svg"
import Image6 from "../assets/subscribe/image6.svg"


const Subscribe = (props) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <StyleDiv>
            <Grid container alignItems={"center"} justifyContent={"center"} spacing={4}>
                {!isMobile && (
                    <Grid item lg={3} >
                        <Grid item lg={1} mt={3}>
                            <img src={Image1} alt='Image1'></img>
                        </Grid>
                        <Grid item m={5}>
                            <img src={Image2} alt='Image2'></img>
                        </Grid>
                        <Grid item lg={1} mt={6}>
                            <img src={Image3} alt='Image3'></img>
                        </Grid>
                    </Grid>
                )}
                <Grid item lg={6}>
                    <StyleSubscribe>Subscribe For Get Update <br /> Every New Courses
                    </StyleSubscribe>
                    <StyleSmallText>20k+ students daily learn with Rears. Subscribe for new courses.
                    </StyleSmallText>
                    <Grid item lg={12} xs={12}>
                        <Box>
                            <StyleTextField isMobile={isMobile} placeholder='enter your email' variant='standard'
                                {...props}
                                InputProps={{
                                    disableUnderline: true,
                                    style: { color: "#FFFFFF" },
                                }}></StyleTextField>
                            <StyleButton isMobile={isMobile}>Subscribe
                            </StyleButton>
                        </Box>
                    </Grid>
                </Grid>
                {!isMobile && (
                    <Grid item lg={3}>
                        <Grid item mt={3}>
                            <img src={Image4} alt='Image4'></img>
                        </Grid>
                        <Grid item lg={1} m={5}>
                            <img src={Image5} alt='Image5'></img>
                        </Grid>
                        <Grid item mt={6}>
                            <img src={Image6} alt='Image6'></img>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </StyleDiv>
    )
}

export default Subscribe
