import { Box, Button, Typography } from "@mui/material";
import devImage from "../assets/images/mentorship.jpg";
import AdbIcon from "@mui/icons-material/Adb";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import ArticleIcon from "@mui/icons-material/Article";
function SoftwareDevelopersSection() {
  return (
    <Box className="mt-40 text-center ">
      <Typography variant="h3" fontWeight={700}>
        Get help from vetted software developers
      </Typography>
      <Box className="flex justify-between px-64 py-20">
        <Box className="text-left flex flex-col">
          <Typography variant="h4" fontWeight={700}>
            One-on-one live mentorship
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            mentorship
          </Typography>
          <Box className="flex flex-col gap-6">
            <Box className="mt-9">
              <AdbIcon
                fontSize="medium"
                sx={{ marginRight: "10px", color: "#1a8da8" }}
              />
              <Typography variant="p" sx={{ color: "gray" }}>
                Debug with the help of an expert
              </Typography>
            </Box>
            <Box>
              <SettingsAccessibilityIcon
                fontSize="medium"
                sx={{ marginRight: "10px", color: "#1a8da8" }}
              />
              <Typography variant="p" sx={{ color: "gray" }}>
                Personalize your learning experience
              </Typography>
            </Box>
            <Box>
              <ArticleIcon
                fontSize="medium"
                sx={{ marginRight: "10px", color: "#1a8da8" }}
              />
              <Typography variant="p" sx={{ color: "gray" }}>
                Get answers to complex problems
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "orangered", width: "200px" }}
            >
              FIND A MENTOR
            </Button>
          </Box>
        </Box>
        <Box>
          <img
            src={devImage}
            alt="Description"
            style={{ width: "500px", height: "500px", marginTop: "-75px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SoftwareDevelopersSection;
