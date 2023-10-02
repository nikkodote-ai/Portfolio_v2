import React from "react";
import axios from "axios";
import { Grid, Typography, Container, Button, Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "salmon",
    fontFamily: "Roboto",
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

class Home extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
      })
      .catch((err) => console.log(err));
  }

  renderNavigation() {}

  renderWelcome() {
    return (
      <>
        <Grid item xs={12} sx={{m:3}} textAlign={"center"} justifyContent="center">
          <img
            className="responsive-image"
            src="https://portfolioassets.s3.ap-southeast-2.amazonaws.com/staticfiles/assets/web_prof-pic.jpg"
          />
          <Grid item xs={12} sx={{m:3}} textAlign={"center"} justifyContent="center">
          <Button variant="contained" sx={{
            backgroundColor: "primary",
            "&:hover":{
              backgroundColor: "secondary"
            },
          }}> Button </Button>
          </Grid>

        </Grid>
        
        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Typography variant="h1">Hey, I'm Nikko</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} justifyContent={"flex-start"}>
          <Box>
            <Typography variant="body1" sx={{p:2}}>
              Software Development, Biomedical Science, Data Analytics
            </Typography>
          </Box>
        </Grid>
        </>

    );
  }
  renderABoutMe() {
    return (
      <Grid item xs={12}>
        <Box textAlign={"center"}>
          <Typography variant="h3">ABOUT ME</Typography>

          <Box textAlign={"justify"}>
            <Typography variant="body1" sx={{p:2}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              turpis eget arcu vulputate pretium. Nunc ornare justo vitae nunc
              ultrices, tempor vestibulum tortor aliquet. Maecenas quis enim id
              arcu viverra ullamcorper. Ut non eros iaculis, blandit metus vel,
              sodales velit. Phasellus volutpat turpis vehicula dui aliquam
              tempus. Fusce aliquet, urna quis rhoncus volutpat, sem neque
              aliquam sem, eu venenatis velit orci eget ex. Nulla euismod
              finibus felis non porttitor. In sit amet commodo augue, sed
              pellentesque est. Pellentesque sed turpis a dui gravida dapibus eu
              molestie nisi. Cras hendrerit ut odio eget sodales. Proin congue
              lacus ac ligula imperdiet, id dictum ante vehicula.
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  }

  renderProjectList() {
    return (
      <Grid item xs={12}>
        <Box alignContent={"center"} textAlign={"center"}>
          <Typography variant="h3">PROJECTS</Typography>
        </Box>
        <Typography variant="body1" sx={{p:2}}>
          Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Cras id
          turpis eget arcu vulputate pretium. Nunc ornare justo vitae nunc
          ultrices, tempor vestibulum tortor aliquet. Maecenas quis enim id arcu
          viverra ullamcorper. Ut non eros iaculis, blandit metus vel, sodales
          velit. Phasellus volutpat turpis vehicula dui aliquam tempus. Fusce
          aliquet, urna quis rhoncus volutpat, sem neque aliquam sem, eu
          venenatis velit orci eget ex. Nulla euismod finibus felis non
          porttitor. In sit amet commodo augue, sed pellentesque est.
          Pellentesque sed turpis a dui gravida dapibus eu molestie nisi. Cras
          hendrerit ut odio eget sodales. Proin congue lacus ac ligula
          imperdiet, id dictum ante vehicula. Mauris nec molestie ligula, vitae
          mattis tellus. Fusce pulvinar elementum orci nec viverra. Vestibulum
          orci lorem, eleifend id sodales eu, convallis at nulla. Nunc a urna
          metus. Cras vehicula quam justo, eu iaculis lorem sodales vitae.
          Mauris commodo erat ut lacus tincidunt, non congue mauris bibendum.
          Curabitur cursus massa nec orci pharetra, sit amet maximus urna
          consectetur. Cras nec lectus dui. Ut eget lorem ac est congue
          porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus elementum interdum dolor, lacinia hendrerit nisl. Proin
          commodo quam sit amet tortor ornare blandit. Aenean id massa vitae
          enim facilisis malesuada ac hendrerit ex. Proin vitae quam vulputate,
          pretium massa at, laoreet metus. Praesent sapien turpis, convallis sed
          pharetra nec, iaculis sed velit.
        </Typography>
      </Grid>
    );
  }
  
  renderFooter(){
    return(
      <Grid item xs={12}>
        <Typography variant="body1" textAlign={"center"}>© 2021 Nikko Dote</Typography>
      </Grid>
    )
  }

  render() {
    return (
      <div style={classes.root}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
        <Container>
          
          <Grid container spacing={3}>
            {this.renderWelcome()}
            {this.renderABoutMe()}
            {this.renderProjectList()}
            {this.renderFooter()}
          </Grid>
        </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default Home;
