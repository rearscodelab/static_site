import { Button, TextField, Typography } from "@mui/material";

export const StyleDiv = (props) => (
<div 
{...props}
style={{
    backgroundColor:"#0A033C",
    textAlign:"center",
    borderRadius:"20px",
    padding:"5vh",
    marginTop:"15vh"
}}
/>
)
export const StyleSubscribe = (props) => (
    <Typography 
    {...props}
    style={{
          color:"#FFFFFF",
          fontWeight:"700",
          fontSize:"45px",
          lineHeight:"55px",
    }}
    />
    )
    export const StyleSmallText = (props) => (
        <Typography 
        {...props}
        style={{
              color:"#FFFFFFB2",
              fontWeight:"400",
              fontSize:"16px",
              lineHeight:"30px",
              marginTop:"5vh"
        }}
        />
        )
        export const StyleTextField = ({isMobile, ...props}) => (
            <TextField 
            {...props}
            style={{
                backgroundColor:"#FFFFFF33",
                  fontWeight:"500",
                  fontSize:"16px",
                  lineHeight:"30px",
                  borderRadius: isMobile ? "10px 10px 10px 10px" : "10px 0 0 10px",
                  textIndent:"16px",
                  padding:"5px",
                  marginTop:"5vh"
            }}
            />
            )
            export const StyleButton = ({isMobile, ...props}) => (
                <Button 
                {...props}
                style={{
                    backgroundColor:"#02885E",
                      color:"#FFFFFF",
                      fontWeight:"500",
                      fontSize:"16px",
                      lineHeight:"19.36px",
                      borderRadius: isMobile ? "10px 10px 10px 10px" : "0 10px 10px 0",
                      textTransform:"capitalize",
                      padding:"10px",
                      marginTop:"5vh"
                    }}
                />
                )