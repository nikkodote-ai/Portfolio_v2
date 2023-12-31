import { Box, Stack, Typography, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Project } from "./Project";

const XsProjectsTypo = styled(Typography)({
  fontSize: "15.5vw",
  fontFamily: "viaoda libre",
  color: "#2e2e2e",
  textTransform: "uppercase",
  // overflow: "hidden",
  lineHeight: 0.85,
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
});

const SMProjectsTypo = styled(Typography)({
  fontSize: "23vh",
  fontFamily: "viaoda libre",
  color: "#2e2e2e",
  textTransform: "uppercase",
  wordBreak: "break-word",
  lineHeight: 0.85,
});

export const ProjectList = () => {
  // make project
  let [details, setDetails] = useState([{}]);

  useEffect(() => {
    let data;
    let api_url = "";
    if (import.meta.env.MODE === "production") {
      // WHEN CREATING APP USIGN VITE, USE VITE_... for env variables. if thru create-react-app, use REACT_APP_...
      api_url = import.meta.env.VITE_APP_API_URL;
      console.log("production mode");
      // console.log(import.meta.env.VITE_APP_API_URL)
    } else {
      api_url = "http://localhost:8000/";
    }
    axios
      .get(api_url)
      .then((res) => {
        data = res.data;
        setDetails((details = data));
      })

      .catch((err) => console.log(err));
  });

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          width: "100vw",
          backgroundColor: "#ffffff",
          m: 0,
          p: 0,
          b: 0,
        }}
      >
        <Stack flex={1}>
          <Box
            display={{ xs: "none", sm: "flex" }}
            justifyContent={"center"}
            textAlign={{ xs: "center", sm: "left" }}
            height={{ xs: "25vh", sm: "100vh" }}
            pl={{ sm: 17 }}
            width={{ xs: "100vw", sm: "50%" }}
            component="div"
          >
            <Box pt={10} >
              <SMProjectsTypo>Projects</SMProjectsTypo>
            </Box>
          </Box>
          <Box
            display={{ xs: "flex", sm: "none" }}
            position="relative"
            justifyContent={"center"}
            textAlign={"center"}
            alignContent={"center"}
            alignItems={"center"}
            height="25vh"
            width="100vw"
          >
            <Box>

            <XsProjectsTypo>Projects</XsProjectsTypo>
            </Box>
          </Box>
        </Stack>
        <Stack
          component="div"
          // sx={{overflowY: "auto", overflowX: "hidden"}}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          flex={1.2}
        >
          {/* <Typography variant="h1" mt = {{xs:3, sm:10}}>PROJECTS</Typography> */}

          {details.map((detail, id) => (
            <Project
              key={id}
              title={detail.title}
              description={detail.description}
              image={detail.image}
              created_at={new Date(detail.created_at)}
              url={detail.url}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
