import { Button, Typography } from "@mui/material";

export const StyleKnowledge = ({isMobile, ...props}) => (
    <Typography
    {...props}
    style={{
        color:"#0A033C",
        fontWeight:"700",
        fontSize:"45px",
        lineHeight:"55px",
        marginTop:"5vh",
        textAlign: isMobile ? "center" : "",
    }}
    />
    )
    export const StyleHigh = ({isMobile, ...props}) => (
        <Typography
        {...props}
        style={{
            color:"#0A033C",
            fontWeight:"400",
            fontSize:"16px",
            lineHeight:"30px",
            marginTop:"5vh",
            textAlign: isMobile ? "center" : "",
        }}
        />
        )
        export const StyleCareerButton = (props) => (
            <Button
            {...props}
            style={{
                backgroundColor:"#02885E",
                borderRadius:"10px",
                textTransform:"capitalize",
                color:"#FFFFFF",
                fontWeight:"500",
                fontSize:"16px",
                lineHeight:"20px",
                padding:"15px",
                marginTop:"5vh",
            }}
            />
            )