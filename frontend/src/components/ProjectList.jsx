import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState} from "react";
import { Project } from "./Project";
import { AboutMe } from "./AboutMe";


const XsProjectsTypo= styled(Typography)({
  fontSize: "17.5vw",
  fontFamily: "viaoda libre",
  color: "2e2e2e",
  textTransform: "uppercase",
  overflow: "hidden",
  lineHeight: 0.85,
  position:"absolute",
  top:"50%",
  left:"50%",
transform: "translate(-50%, -50%)",
})

const SMProjectsTypo= styled(Typography)({
  fontSize: "23vh",
  fontFamily: "viaoda libre",
  color: "2e2e2e",
  textTransform: "uppercase",
  wordBreak: "break-word",
  lineHeight: 0.85,

})

  
export const ProjectList = () => {
  // make project
  let [details, setDetails] = useState([{}]);

  useEffect(() => {
    let data;
    axios
      .get("http://54.206.56.53:8000/")
      // .get("http://localhost:8000/")
      .then((res) => {
        data = res.data;
        setDetails((details = data));
      })

      .catch((err) => console.log(err));
  });

  return (
    <>
    <Stack direction={{xs:"column", sm:"row"}}
     sx={{
        width:"100vw",
        backgroundColor: "#ffffff",
        m: 0,
      }}>
      <Stack flex={1}  >
        <Box display = {{xs:"none", sm: "flex"}} justifyContent={"center"} textAlign={{xs:"center", sm:"left"}} height={{xs:"25vh", sm:"100vh"}} pl={{sm: 17}} pt={{sm:20}} width={{xs:"100vw", sm:"50%"}} component="div" >
        <SMProjectsTypo>Projects</SMProjectsTypo>
        </Box>
        <Box display = {{sm: "none"}}position="relative" justifyContent={"center:"} textAlign={"center"} height="25vh" width="100vw">
        
        <XsProjectsTypo>Projects</XsProjectsTypo>
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
