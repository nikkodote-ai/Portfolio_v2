import { Box, Stack } from "@mui/material";
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
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <AboutMe />
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

        <Box sx={{ height:{ xs: 0, sm: "25vh"} }} />
      </Stack>
    </>
  );
};
