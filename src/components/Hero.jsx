import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/images/WhatsApp Image 2024-09-30 at 13.58.48_da07b422.jpg";
import heroImage from "../assets/images/hero-l.png";
function Hero() {
  return (
    <Box
      className=""
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box className="-mt-28">
        <Typography variant="h3" fontWeight={700}>
          Find a developer for
        </Typography>
        <Typography variant="h3" fontWeight={700}>
          live mentorship & freelance projects
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "orangered", mt: 3 }}
        >
          GET HELP NOW
        </Button>
        <img
          src={heroImage}
          alt="Description"
          style={{
            height: "400px",
            marginBottom: "-300px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
