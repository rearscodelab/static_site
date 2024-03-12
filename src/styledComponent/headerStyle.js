import { Typography } from "@mui/material";

export const StyleHeaderText = ({isMobile, ...props}) => (
<Typography 
{...props}
style={{
fontSize:  "16px",
fontWeight: "500",
color:"#0A033C",
}}
/>
)
