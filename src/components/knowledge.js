import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import KnowledgeImage from "../assets/knowledge/knowledge.png"
import {StyleKnowledge, StyleHigh, StyleCareerButton} from "../styledComponent/knowledgeStyle"

const Knowledge = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div>
      <Grid container mt={ isMobile ? 3 : 15} ml={ isMobile ? 0 : 5} alignItems={"center"} justifyContent={"center"}>
        {!isMobile && (
        <Grid item lg={5}>
            <img src={KnowledgeImage} alt='KnowledgeImage'></img>
        </Grid>
        )}
        <Grid item lg={5} xs={12}>
            <StyleKnowledge isMobile={isMobile}>Want to share your <br /> knowledge? Join us <br /> a Mentor
</StyleKnowledge>
<StyleHigh isMobile={isMobile}>High-definition video is video of higher resolution and quality <br /> than standard-definition. While there is no standardized meaning <br /> for high-definition, generally any video.
</StyleHigh>
<Grid item lg={11} xs={12} display={ isMobile ? "flex" : ""} alignItems={"center"} justifyContent={"center"}>
<StyleCareerButton>Career Information
</StyleCareerButton>
</Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Knowledge
