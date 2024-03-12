import { Button, Typography } from "@mui/material";

export const StyleLessonText = ({isMobile, ...props}) => (
<Typography 
{...props}
style={{
    color:"#0A033C",
    fontWeight:"700",
    fontSize:"45px",
    lineHeight: isMobile ? "" : "105px",
    textAlign:"center",
    letterSpacing:"1px"
}}
/>
)
export const StyleSmallText = (props) => (
    <Typography 
    {...props}
    style={{
fontWeight:"400",
fontSize:"16px",
lineHeight:"30px",
color:"#5D5A6F",
textAlign:"center",
letterSpacing:"1px"
    }}
    />
    )
    // export const StyleButton = (props) => (
    //     <Button 
    //     {...props}
    //     style={{
    //       backgroundColor:"#FF6652",
    //       height:"60px",
    //       width:"152px",
    //       borderRadius:"10px",
    //       textTransform:"capitalize",
    //       color:"#FFFFFF",
    //       lineHeight:"20px",
    //       fontWeight:"500",
    //       fontSize:"16px"
    //     }}
    //     />
    //     )
    export const StyleButton = ({ active, ...props }) => (
        <Button
          {...props}
          style={{
            backgroundColor: active ? "#FF6652" : "",
            height: "60px",
            width: "152px",
            borderRadius: "10px",
            textTransform: "capitalize",
            color: active ? "#FFFFFF" : "#0A033C",
            lineHeight: "20px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        />
      );