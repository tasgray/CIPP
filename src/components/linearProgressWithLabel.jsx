import { Box, LinearProgress } from "@mui/material";

export const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 135 }}>{`${Math.round(props.value)}% ${props?.addedLabel ?? ""}`}</Box>
    </Box>
  );
};
