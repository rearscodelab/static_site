import { Button, Typography } from "@mui/material";

export const StyleNeverButton = ({ isMobile, ...props }) => (
<Button 
{...props}
style={{
    backgroundColor: "#FFFFFF",
    color:"#FF6652",
    fontWeight:"500",
    fontSize:"20px",
    borderRadius:"10px",
    textTransform:"capitalize",
    marginTop : isMobile ? "3vh" : "",
}}
/>
)
export const StyleTypography = ({ isMobile, ...props }) => (
    <Typography 
    {...props}
    style={{
       fontWeight:"700",
       fontSize: isMobile ? "45px" : "65px",
       color:"#0A033C",
       lineHeight: isMobile ? "" :"75px",
       marginTop: isMobile ? "1vh" : "3vh",
       textAlign: isMobile ? "center" : "",
    }}
    />
    )
    
export const StyleSmallTypography = ({ isMobile, ...props }) => (
    <Typography 
        {...props}
        style={{
           fontWeight:"400",
           fontSize:"16px",
           color:"#5D5A6F",
           lineHeight:"30px",
           letterSpacing:".9px",
           marginTop: isMobile ? "1vh" :"5vh",
           textAlign: isMobile ? "center" : "",
    }}
        />
        )    
 export const StyleBoxText = (props) => (
            <Typography 
            {...props}
            style={{fontSize:"16px",
            fontWeight:"500",
            color:"#0A033C",
            }}
            />
            )
            export const StyleSearchButton = (props) => (
                <Button 
                {...props}
                style={{
                    backgroundColor:"#02885E",
                    borderRadius:"10px",
                    fontWeight:"500",
                    fontSize:"16px",
                    lineHeight:"20px",
                    textTransform:"capitalize",
                    color:"#FFFFFF",
                    height:"50px",
                    width: "143px",
                    textIndent:"10px"
                }}
                />
                )