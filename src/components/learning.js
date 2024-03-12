import { Divider, FormControl, Grid, Input, MenuItem, Select, TextField, useMediaQuery } from '@mui/material'
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from 'react'
import LearningImage from "../assets/learningAssets/learningImage.png"
import { StyleNeverButton, StyleTypography, StyleSmallTypography, StyleBoxText, StyleSearchButton, } from "../styledComponent/learningStyle"
import Box from '@mui/material/Box';
import Search from "../assets/learningAssets/search.svg"

const kindergarten = ["Kindergarten"];

const Learning = () => {
  const [open, setOpen] = useState(false);
  const [office, setOffice] = useState("Kindergarten");
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleOnClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Grid container alignItems="center" justifyContent={"center"} >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <StyleNeverButton isMobile={isMobile}>Never Stop Learning</StyleNeverButton>
          <StyleTypography isMobile={isMobile}>Grow up your skills <br /> by online courses <br /> with Rears Code Lab
          </StyleTypography>
          <StyleSmallTypography isMobile={isMobile}>Rears Code Lab is a Global training provider based across the UK that specialises in <br /> accredited and bespoke training courses. We crush the barriers togetting a <br />degree.
          </StyleSmallTypography>
          <Grid item lg={8} md={10} sm={12}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderColor: 'divider',
                borderRadius: 2,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                marginTop: "5vh",
                '& svg': {
                  m: 1,

                },
              }}
            >
              <Grid item lg={3.5} p={1} pl={3}>
                <FormControl>
                  <Select
                    onChange={(event) => handleOnClick(event.target.value, 'office')}
                    open={open}
                    onOpen={() => setOpen(!open)}
                    onClose={() => setOpen(!open)}
                    size="small"
                    IconComponent={() =>
                      open ? (
                        <ExpandLessIcon style={{ marginLeft: "-30px" }} />
                      ) : (
                        <ExpandMoreIcon style={{ marginLeft: "-30px" }} />
                      )
                    }
                    displayEmpty
                    value={office}
                    input={<Input disableUnderline />}
                  >
                    {kindergarten.map((company, index) => (
                      <MenuItem
                        key={index}
                        value={company}
                      >
                        <StyleBoxText>{company}</StyleBoxText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item lg={5.63} pl={3}>
                <TextField placeholder='Class/Course' variant='standard' InputProps={{
                  disableUnderline: true
                }}></TextField>
              </Grid>
              <Grid item pr={1}>
                <StyleSearchButton>
                  <img src={Search} alt='Search'></img>
                  Search</StyleSearchButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {!isMobile && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={LearningImage} alt='LearningImage'></img>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default Learning