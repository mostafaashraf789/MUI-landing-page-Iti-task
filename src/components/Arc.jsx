import { Box, Link, Typography } from "@mui/material";
import arcImage from "../assets/images/arc.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Arc() {
  return (
    <Box className="-mt-10 text-center">
      <Box className="flex justify-between px-40 py-20">
        <Box>
          <img
            src={arcImage}
            alt="Description"
            style={{ width: "600px", height: "400px", marginTop: "-75px" }}
          />
        </Box>
        <Box className="text-left flex flex-col mx-28">
          <Typography variant="h5" fontWeight={700}>
            arc ( )
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ marginBottom: "20px", marginTop: "20px" }}
          >
            Hiring for a bigger project?
          </Typography>
          <Typography variant="p" sx={{ color: "gray", fontSize: "20px" }}>
            Arc helps you find senior developers for both permanent
          </Typography>
          <Typography variant="p" sx={{ color: "gray", fontSize: "20px" }}>
            full-time roles and +40 hour contract projects
          </Typography>
          <Link href="#" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "blue",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Visit Arc to learn more
              <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Arc;
