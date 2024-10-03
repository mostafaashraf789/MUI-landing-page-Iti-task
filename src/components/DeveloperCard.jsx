/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

function DeveloperCard({ name, avatar, position, icons, icons2, icons3, sx }) {
  return (
    <Card sx={{ width: 350, borderRadius: 5 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: 2,
          textAlign: "left",
        }}
      >
        <Box>
          <Avatar src={avatar} sx={{ width: 100, height: 100, marginTop: 2 }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", margin: 1 }}>
          <Typography variant="p" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography
            variant="p"
            sx={{ fontWeight: 600, color: "gray", marginBottom: 2 }}
          >
            {position}
          </Typography>
          <Typography variant="p" sx={{ fontWeight: 600, color: "gray" }}>
            <Box
              className="flex gap-2"
              sx={{ fontSize: "30px", color: "gray" }}
            >
              {icons}
              {icons2}
              {icons3}
            </Box>
            {sx}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DeveloperCard;
