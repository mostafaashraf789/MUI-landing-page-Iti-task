import { Box, Button, Grid2, Typography } from "@mui/material";
import DeveloperCard from "./DeveloperCard";
import { FaPython } from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import { DiDjango } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { GiSharkBite } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { FaCcApplePay } from "react-icons/fa6";
import JS from "../assets/avatars/JS.jpeg";
import DH from "../assets/avatars/DH.jpeg";
import MP from "../assets/avatars/MP.jpg";
import IB from "../assets/avatars/IB.jpg";
import MK from "../assets/avatars/MK.jpeg";
import BG from "../assets/avatars/BG.jpeg";

function ConnectWithDevelopers() {
  return (
    <Box
      className="-mt-20"
      style={{
        backgroundColor: "#003e46",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box className="mx-48 mt-48">
        <Typography variant="h3" fontWeight={700}>
          Connect with
        </Typography>
        <Typography variant="h3" fontWeight={700}>
          12000+ top developers anytime
        </Typography>

        <Box className="my-10" >
          <Grid2
            container
            spacing={{ xs: 3, sm: 3, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 4 }}
          >
            <DeveloperCard
              avatar={JS}
              name="Jessamyn Smith"
              position="Experienced Full-Stack Web Developer"
              icons={<FaPython />}
              icons2={<PiFileSqlBold />}
              icons3={<DiDjango />}
            />
            <DeveloperCard
              avatar={DH}
              name="Daniel Hamilton"
              position="Senior Software Engineer @ Indeed"
              icons={<IoLogoJavascript />}
              icons2={<FaReact />}
              icons3={<SiIndeed />}
            />
            <DeveloperCard
              avatar={MP}
              name="Martijn Pieters"
              position="#1 Stack Overflow Python Answerer"
              icons={<FaPython />}
              icons2={<FaHtml5 />}
              icons3={<GiSharkBite />}
            />
            <DeveloperCard
              avatar={IB}
              name="Ionica Bizau"
              position="Full-Stack Developer"
              icons={<IoLogoJavascript />}
              icons2={<FaNodeJs />}
              icons3={<FaHtml5 />}
            />
            <DeveloperCard
              avatar={MK}
              name="Miroslav Kutak"
              position="Senior iOS Developer"
              icons={<FaApple />}
              icons2={<GiHummingbird />}
              icons3={<FaCcApplePay />}
            />
            <DeveloperCard
              avatar={BG}
              name="Ben Gottlieb"
              position="Senior iOS Developer and Consultant"
              icons3={<FaCcApplePay />}
              icons2={<GiHummingbird />}
              icons={<FaApple />}
            />
          </Grid2>
        </Box>

        <Typography variant="h6" fontWeight={700}>
          Start working with our developers
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "orangered", mt: 3 }}
        >
          GET Started
        </Button>
      </Box>
    </Box>
  );
}

export default ConnectWithDevelopers;
