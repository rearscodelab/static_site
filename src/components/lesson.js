import React, { useState } from 'react'
import { Grid, useMediaQuery } from '@mui/material';
import { StyleLessonText, StyleSmallText, StyleButton } from "../styledComponent/lessonStyle"

const Lesson = () => {
  const [activeButton, setActiveButton] = useState('High School');
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Grid container mt={15} alignItems={"center"} justifyContent={"center"}>
        <Grid item lg={6} xs={12}>
          <StyleLessonText isMobile={isMobile}>Qualified lessons for students
          </StyleLessonText>
          <StyleSmallText>A lesson or class is a structured period of time where learning is intended to occur. It <br /> involves one or more students being taught by a teacher or instructor.
          </StyleSmallText>
          <Grid item mt={6} display={"flex"} justifyContent={"space-evenly"}>
            <StyleButton
              active={activeButton === 'Kindergarten'}
              onClick={() => handleButtonClick('Kindergarten')}
            >
              Kindergarten
            </StyleButton>
            <StyleButton
              active={activeButton === 'High School'}
              onClick={() => handleButtonClick('High School')}
            >
              High School
            </StyleButton>
            <StyleButton
              active={activeButton === 'College'}
              onClick={() => handleButtonClick('College')}
            >
              College
            </StyleButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Lesson