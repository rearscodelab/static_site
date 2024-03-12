import { Typography } from "@mui/material";

export const StyleTypographyHeader = (props) => (
    <Typography 
    {...props}
    style={{
        color:"#0A033C",
        fontWeight:"600",
        fontSize:"22px",
        lineHeight:"26.63px"
    }}
    />
    )
    export const StyleSmallText = (props) => (
        <Typography 
        {...props}
        style={{
            color:"#5D5A6F",
            fontWeight:"400",
            fontSize:"16px",
            lineHeight:"26px"
        }}
        />
        )
        export const StyleImage = (props) => (
            <img 
            {...props}
            style={{
               margin:"5px 0 0 15px",               
            }}
            />
            )