import { Box, Button, Typography } from "@mui/material";
import freelanceJob from "../assets/images/freelance-job.png";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MovingIcon from '@mui/icons-material/Moving';
function ProjectBasedFreelanceWorkSection() {
  return (
    <Box className="-mt-28 text-center">
      <Box className="flex justify-between px-52 gap-20 py-20">
        <Box>
          <img
            src={freelanceJob}
            alt="Description"
            style={{ width: "700px", height: "500px", marginTop: "-75px" }}
          />
        </Box>
        <Box className="text-left flex flex-col">
          <Typography variant="h4" fontWeight={700}>
            Project-based freelance
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            work
          </Typography>
          <Box className="flex flex-col gap-6">
            <Box className="mt-9">
              <FindInPageIcon
                fontSize="medium"
                sx={{ marginRight: "10px", color: "#1a8da8" }}
              />
              <Typography variant="p" sx={{ color: "gray" }}>
                Find experts for on-demand code review
              </Typography>
            </Box>
            <Box>
              <AdminPanelSettingsIcon
                fontSize="medium"
                sx={{ marginRight: "10px", color: "#1a8da8" }}
              />
              <Typography variant="p" sx={{ color: "gray" }}>
                Build features for your existing product
              </Typography>
            </Box>
            <Box>
              <MovingIcon
                fontSize="medium"
                sx={{ marginRight: "10px", color: "#1a8da8" }}
              />
              <Typography variant="p" sx={{ color: "gray" }}>
                Turn your idea into MVP
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "orangered", width: "200px" }}
            >
              FIND A FREELANCER
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectBasedFreelanceWorkSection;
