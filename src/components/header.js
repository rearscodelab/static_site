import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, FormControl, Grid, Input, MenuItem, Select, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Account from "../assets/heaterAssets/account.svg";
import Cart from "../assets/heaterAssets/cart.svg";
import Rears from "../assets/heaterAssets/rears.svg";
import { StyleHeaderText,  } from "../styledComponent/headerStyle";
import MenuIcon from '@mui/icons-material/Menu';

const kindergarten = ["For Kindergarten"];
const school = ["For High School"];
const college = ["For College"];
const courses = ["Courses"];
 
const Header = () => {
    const [office, setOffice] = useState("For Kindergarten");
    const [highSchool, setHighSchool] = useState("For High School");
    const [forCollege, setForCollege] = useState("For College");
    const [forcourses, setForCourses] = useState("Courses");
    const [openOffice, setOpenOffice] = useState(false);
    const [openSchool, setOpenSchool] = useState(false);
    const [openCollege, setOpenCollege] = useState(false)
    const [open, setOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const handleOfficeChange = (value, type) => {
      switch (type) {
        case 'office':
          setOffice(value);
          break;
        case 'highSchool':
          setHighSchool(value);
          break;
        case 'forCollege':
          setForCollege(value);
          break;
        case 'forcourses':
          setForCourses(value);
          break;
        default:
          break;
      }
    };
    
  return (
    <div>
      
        <Grid container  pt={4} >
            <Grid item lg={1.7} sm={6} xs={10}>
            <img src={Rears} alt='Rears'></img>
            </Grid>
            <Grid item>
            {isMobile && (
  <>
  <Button color="success"><MenuIcon onClick={() => {
      setIsMenuOpen(!isMenuOpen);
    }} /></Button>
  </>
)}

            </Grid>
            {isMobile && !isMenuOpen || (
              <>
           {!isMobile &&  <Grid item lg={0.7}>
           <StyleHeaderText>Shop</StyleHeaderText>
           </Grid>}
        
           <Grid item lg={1.6} xs={10}>
           <FormControl>
            <Select
              onChange={(event) => handleOfficeChange(event.target.value, 'office')}
              open={open}
              onOpen={() => setOpen(!open)}
              onClose={() => setOpen(!open)}
              size="small"
              IconComponent={() =>
                open ? (
                  <ExpandLessIcon style={{ marginLeft: isMobile ? "-.5vh" : "-30px" }} />
                ) : (
                  <ExpandMoreIcon style={{ marginLeft: isMobile ? "-.5vh" : "-30px" }} />
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
                  <StyleHeaderText isMobile={isMobile}>{company}</StyleHeaderText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>
<Grid item lg={1.6} xs={10}>
<FormControl>
            <Select
              onChange={(event) => handleOfficeChange(event.target.value, 'office')}
              open={openOffice}
              onOpen={() => setOpenOffice(!openOffice)}
              onClose={() => setOpenOffice(!openOffice)}
              size="small"
              IconComponent={() =>
                openOffice ? (
                  <ExpandLessIcon style={{ marginLeft: isMobile ? "" : "-30px" }} />
                ) : (
                  <ExpandMoreIcon style={{ marginLeft: isMobile ? "" : "-30px" }} />
                )
              }
              displayEmpty
              value={highSchool}
              input={<Input disableUnderline />}
            >
              {school.map((company, index) => (
                <MenuItem
                  key={index}
                  value={company}
                >
                  <StyleHeaderText isMobile={isMobile}>{company}</StyleHeaderText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>
<Grid item lg={1.6} xs={10}>
<FormControl>
            <Select
              onChange={(event) => handleOfficeChange(event.target.value, 'office')}
              open={openCollege}
              onOpen={() => setOpenCollege(!openCollege)}
              onClose={() => setOpenCollege(!openCollege)}
              size="small"
              IconComponent={() =>
                openCollege ? (
                  <ExpandLessIcon style={{ marginLeft: isMobile ? "4vh" : "-30px" }} />
                ) : (
                  <ExpandMoreIcon style={{ marginLeft: isMobile ? "4vh" : "-30px" }} />
                )
              }
              displayEmpty
              value={forCollege}
              input={<Input disableUnderline />}
            >
              {college.map((company, index) => (
                <MenuItem
                  key={index}
                  value={company}
                >
                  <StyleHeaderText isMobile={isMobile}>{company}</StyleHeaderText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>
<Grid item lg={1.6} xs={10}>
<FormControl>
            <Select
              onChange={(event) => handleOfficeChange(event.target.value, 'office')}
              open={openSchool}
              onOpen={() => setOpenSchool(!openSchool)}
              onClose={() => setOpenSchool(!openSchool)}
              size="small"
              IconComponent={() =>
                openSchool ? (
                  <ExpandLessIcon style={{ marginLeft: isMobile ? "7vh" : "-30px" }} />
                ) : (
                  <ExpandMoreIcon style={{ marginLeft: isMobile ? "7vh" : "-30px" }} />
                )
              }
              displayEmpty
              value={forcourses}
              input={<Input disableUnderline />}
            >
              {courses.map((company, index) => (
                <MenuItem
                  key={index}
                  value={company}
                >
                  <StyleHeaderText isMobile={isMobile}>{company}</StyleHeaderText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>
<Grid item lg={.5} xs={5}>
    <StyleHeaderText isMobile={isMobile}>Cart(0)
    </StyleHeaderText>
</Grid>
<Grid item lg={.7} xs={3}> <img src={Cart} alt='Cart'></img></Grid>
<Grid item lg={.8} xs={5}>
<StyleHeaderText isMobile={isMobile}>My Account
</StyleHeaderText>
</Grid>
<Grid item lg={.8} xs={3}>   
<img src={Account} alt='Account'></img>
</Grid>
</>
)}
            </Grid>
    </div>
  )
}

export default Header
