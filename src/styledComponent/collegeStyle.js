import { Button, Typography } from "@mui/material"


export const StyleDiv = ({isMobile, ...props}) => (
<div
{...props}
style={{
    backgroundColor:"#E4E2F4",
    borderRadius:"20px",
    marginTop:"10vh",
    // width: "1280px",
    padding: isMobile ? "20px" : ""
}}
/>
)
export const StyleLevelButton = (props) => (
    <Button
    {...props}
    style={{
        backgroundColor:"#E4E2F4",
        borderRadius:"10px",
        textTransform:"capitalize",
        color:"#9C4DF4",
        fontWeight:"500",
        fontSize:"20px",
        lineHeight:"20px",
        padding:"10px",
        marginTop:"5vh",
    }}
    />
    )
    export const StyleCovid = ({isMobile, ...props}) => (
        <Typography
        {...props}
        style={{
            color:"#0A033C",
            fontWeight:"700",
            fontSize:"45px",
            lineHeight:"55px",
            marginTop:"5vh",
            textAlign: isMobile ? "center" : ""
        }}
        />
        )
        export const StyleHigh = ({isMobile, ...props}) => (
            <Typography
            {...props}
            style={{
                color:"#5D5A6F",
                fontWeight:"400",
                fontSize:"16px",
                lineHeight:"30px",
                marginTop:"5vh",
                textAlign: isMobile ? "center" : ""
            }}
            />
            )
            export const StyleRegistationButton = (props) => (
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
                    padding:"10px",
                    marginTop:"5vh",
                }}
                />
                )