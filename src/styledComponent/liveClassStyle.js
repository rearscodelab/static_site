import { Button, Card, Typography } from "@mui/material";

export const StyleHigh = (props) => (
<Typography 
{...props}
style={{
    fontWeight:"700",
    fontSize:"45px",
    lineHeight:"55px",
    color:"#0A033C",
    textAlign:"center"
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
        letterSpacing:"1px",
        marginTop: "5vh"
    }}
    />
    )
    export const StyleVisitButton = (props) => (
        <Button 
        {...props}
        style={{
            borderRadius:"10px",
            backgroundColor:"#02885E",
            fontWeight:"500",
            fontSize:"16px",
            lineHeight:"20px",
            textTransform:"capitalize",
            color:"#FFFFFF",
            height:"60px",
            width:"162px",
            marginTop: "5vh"
        }}
        />
        )
        export const StyleCardButton = ({isMobile, ...props}) => (
            <Button 
            {...props}
            style={{
                backgroundColor:"#FFF4F2",
                width: isMobile ? "" : "70px",
                height:"70px",
                borderRadius:"10px",
                display:"flex"
            }}
            />
            )
            export const StyleCard = ({isMobile, ...props}) => (
                <Card 
                {...props}
                style={{
                    backgroundColor:"#FFFFFF",
                    width: isMobile ? "65px" : "305.33px",
                    // height:"100px",
                    borderRadius:"10px",
                    display:"flex",
                    alignItems:"center",
                    padding:"10px",
                    textIndent:"10px"
                }}
                />
                )
                export const StyleClasses = (props) => (
                    <Typography 
                    {...props}
                    style={{
                        fontSize:"25px",
                        lineHeight:"25px",
                        fontWeight:"600",
                        color:"#0A033C"
                    }}
                    />
                    )