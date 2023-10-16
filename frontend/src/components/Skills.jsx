import { Box, List, ListItem, ListItemText, Stack, styled, Typography } from "@mui/material";
import React from "react";

export const Skills = () =>{
  const Header = styled(Typography)({
    fontFamily: "Inter",
    fontWeight: 100,
    letterSpacing:40, 
    color: "white",
  });

  const HeaderXS = styled(Typography)({
    fontFamily: "Inter",
    fontWeight: 100,
    letterSpacing:20, 
    color: "white",
  });


  const Title = styled(Typography)({
    fontSize:"7vw",
    fontFamily: "dela gothic one",
    color: "white",
    wordBreak: "break-word",
    lineHeight: 0.85,
    position:"absolute",
    top:"50%",
    left:"50%",
    width:"75%",
transform: "translate(-50%, -50%)"
})

const SkillTypo = styled(Typography)({
  lineHeight: 1.2,
  color: "white",
  fontFamily: "dela gothic one"
})

const languages_dictionary = {"Python": ["Django", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Jupyter Notebook"], "SQL" : [], "Java": [], "Javascript": [], "CSS": [], "HTML": [], "ShellScript": [], "Git": []}
const languages = ["Python", "SQL", "Java", "Javascript", "CSS", "HTML", "ShellScript", "Git"]
const competencies = ["Django", "React", "MUI", "Selenium", "Pandas", "Numpy",
 "Matplotlib", "Seaborn", "Scikit-learn", "Git", "Github",
 "AWS", "PostgreSQL", "SQLite", "Jupyter Notebook", "Google Colab"]
const skills = ["Software Development", "Data Science", "Data Analytics", "Web Development"];


  return (
    <>
      <Stack
        direction={{xs: "column", lg:"row"}}
        // justifyContent={"center"}
        // alignContent={"center"}
        height="100vh"
        width="100vw"
        m={0}
        p={0}
        disableGutters
      >
        <Stack
        p={0}
        m={0}
        justifyContent={"center"} 
        alignItems={"center"}
        // disableGutters
          flex={1}
          direction="column"
          sx={{ backgroundColor: "#FFB811" }}
        >
          <Box  textAlign={"center"}>
          <Header display={{xs:"none", l:"flex"}} pl={4} fontSize={{xs:"1rem", md: "2vw"}} m={2.5}> LANGUAGES</Header>
          <HeaderXS display = {{xs:"flex", l:"none"}} pl={4} fontSize={{xs:"1rem", md: "2vw"}} m={2.5}> LANGUAGES</HeaderXS>
      
      <Stack direction="column" textAlign={"center"}>

{languages.map((language, id) => (
  <SkillTypo fontSize={{xs: "2rem", md: "3.5vw"}} key={id}> {language} </SkillTypo>
  ))}
  </Stack>

 
      
      </Box>
  
        </Stack>
        <Stack flex={{xs: 1, l:0.6}} direction="column" display="flex" >
            <Box
            
            sx={{ backgroundColor: "#FF3D00", width: "100%", height: "100%",
              justifyContent: "center", textAlign: "center", position: "relative" }}>

<Header pl={4} mt={{xs: 2, l:8}} mb={2} fontSize={{xs:"9vw", md: "2vw"}}>SKILLS</Header>


    {skills.map((skill, id) => (
      <SkillTypo fontSize={{xs:"1.5rem", md: "2.2vw"}} key={id}> {skill} </SkillTypo>
      ))}

            {/* <Title>
            art <span style={{fontFamily:"via"}}>&</span> creativity
            </Title> */}
            </Box>
          <Box
            sx={{ backgroundColor: "#2757FF", width: "100%", height: {xs: "70%", md:"100%"},
             justifyContent:"center", textAlign: "center", position: "relative" }}
          >
            <Title>ART +SCIENCE</Title>
            </Box>

        </Stack>
      </Stack>
    </> 
  );
}
