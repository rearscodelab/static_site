import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Standard1 from '../assets/standardsAssets/standard1.svg';
import Standard2 from '../assets/standardsAssets/standard2.svg';
import Standard3 from '../assets/standardsAssets/standard3.svg';
import Standard4 from "../assets/standardsAssets/standard4.svg"
import Standard5 from "../assets/standardsAssets/standard5.svg"
import Standard6 from "../assets/standardsAssets/standard6.svg"
import Standard7 from "../assets/standardsAssets/standard7.svg"
import Standard8 from "../assets/standardsAssets/standard8.svg"
import { StylestandardsCard, StyleStandardTypography, StyleSmallTypography, StyleButton, StyleVisitButton } from "../styledComponent/standarsStyle"

const standardsCards = [
  { image: Standard1, alt: 'Standard1', name :"Standard One", lable: "Standard 1 is a foundation Standard that reflects 7 important concepts...", button: "Class Details"},
  { image: Standard2, alt: 'Standard2', name :"Standard Two", lable: "Standard 2 builds on the foundations of Standard 1 and includes requirements...", button: "Class Details" },
  { image: Standard3, alt: 'Standard3', name :"Standard Three", lable: "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...", button: "Class Details" },
  { image: Standard4, alt: 'Standard4', name :"Standard Four", lable: "Standard 4 of the Aged Care Quality Standards focuses on services and supports...", button: "Class Details" },
  { image: Standard5, alt: 'Standard5', name :"Standard Five", lable: "Standard 5 Learning Resources. Learning Resources ensure that the school has the...", button: "Class Details" },
  { image: Standard6, alt: 'Standard6', name :"Standard six", lable: "Standard 6 requires an organisation to have a system to resolve complaints...", button: "Class Details" },
  { image: Standard7, alt: 'Standard7', name :"Standard seven", lable: "Standard 7 Blood Management mandates that leaders of health service organisations...", button: "Class Details" },
  { image: Standard8, alt: 'Standard8', name :"Standard Eight", lable: "Standard 8 Course from NCERT Solutions help students to understand...", button: "Class Details" },
];

const Standards = () => {
    const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

    const handleButtonClick = (index) => {
      setClickedButtonIndex(index);
    };
  return (
    <div>
      <Grid container mt={3} spacing={5} alignItems={"center"} justifyContent={"center"}>
        {standardsCards.map((standard, index) => (
          <Grid item key={index} >
            <StylestandardsCard elevation={0}>
              <img src={standard.image} alt={standard.alt} />
              <StyleStandardTypography>{standard.name}</StyleStandardTypography>
              <StyleSmallTypography>{standard.lable}</StyleSmallTypography>
              <StyleButton onClick={() => handleButtonClick(index)}>{standard.button}</StyleButton>
            </StylestandardsCard>
          </Grid>
        ))}
        <Grid item lg={12} xs={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <StyleVisitButton>Visit More Classes
</StyleVisitButton>
</Grid>
      </Grid>
    </div>
  );
};

export default Standards;
