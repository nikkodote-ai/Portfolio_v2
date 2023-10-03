import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState} from "react";
import { Project } from "./Project";
import { AboutMe } from "./AboutMe";

export const ProjectList = () => {
  // make project
  let [details, setDetails] = useState([{}]);

  useEffect(() => {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        setDetails((details = data));
      })

      .catch((err) => console.log(err));
  });

  return (
    <>
    <Stack direction="row" sx={{
        width:"100vw",
        backgroundColor: "#ffffff",
      }}>
      <Stack flex={1}  >
        <Box pl={17} pt={20} height="100vh" width="50%" component="div" sx={{position: "sticky"}}>
        <Typography
        sx={{
          fontSize:"23vh",
          fontFamily: "viaoda libre",
          color: "2e2e2e",
          textTransform: "uppercase",
          wordBreak: "break-word",
          lineHeight: 0.85,
        }}>Projects</Typography>
        </Box>
</Stack>
      <Stack
        component="div"
        height="100%"
        sx={{overflow: "auto"}}
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
