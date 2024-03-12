import { Button, Card, Typography } from "@mui/material";

export const StylestandardsCard = (props) => (
<Card 
{...props}
style={{
     height:"300px",
     width: "240px",
     borderRadius:"15px",
     backgroundColor:"#FFFFFF",
     padding:"40px",
     textAlign:"center"
}}
/>
)
export const StyleStandardTypography = (props) => (
    <Typography 
    {...props}
    style={{
        fontWeight:"600",
        fontSize:"25px",
        lineHeight:"25px",
        color:"#0A033C",
        marginTop: "15px"
    }}
    />
    )
    export const StyleSmallTypography = (props) => (
        <Typography 
        {...props}
        style={{
            fontWeight:"400",
            fontSize:"16px",
            lineHeight:"30px",
            color:"#5D5A6F",
            marginTop: "15px"
        }}
        />
        )
        export const StyleButton = (props) => (
            <Button 
            {...props}
            style={{
                borderRadius:"5px",
                textTransform:"capitalize",
                border:"1px solid #9C4DF4",
                color:"#9C4DF4",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight:"20px",
                marginTop: "15px",
                width: "162px",
                height: "44px",
                
            }}
            />
            )
            export const StyleVisitButton = (props) => (
                <Button 
                  {...props}
                  style={{
                    width: "202px",
                    height:"60px",
                    borderRadius:"10px",
                    backgroundColor:"#02885E",
                    fontWeight:"500",
                    fontSize:"16px",
                    lineHeight:"20px",
                    color:"#FFFFFF",
                    textTransform:"capitalize",
                    marginTop:"5vh"
                  }}
                />
              );