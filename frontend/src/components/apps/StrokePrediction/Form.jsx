import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  styled,
  Typography
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const Form = () => {
  const [values, setValues] = useState({
    age: "",
    gender: "",
    hypertension: false,
    heart_disease: false,
    // stroke: false,
    ever_married: false,
    residence_type: false,
    work_type: "",
    smoking_status: "",
    avg_glucose_level: "",
    bmi: "",
  });


  const ResultTypo=styled(Typography)({
    fontFamily: "dela gothic one",
    color:"#555555",
    fontSize:"3rem",
  })
    

  const [result, setResult] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    if (    e.target.type === "checkbox" )
    {setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.checked };
    })} else
    {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  }
  };

  const handleSubmit = (e) => {
    let api_url ="";
    if (import.meta.env.REACT_APP_MODE==="production") {
    api_url = import.meta.env.REACT_APP_API_URL}
    else {
    api_url = "http://localhost:8000/api/apps/stroke_prediction/"}
    e.preventDefault(
      axios.post(api_url, values)
        .then((response) => setResult(response.data.prediction))
        // .then((data) => setResult(data.prediction))
        .then(() => setShowResult(true))
        // .catch((error) => console.log("Authorization failed: " + error.message))
    );

    // console.log(values);
    // console.log(result);
  };

  return (
    <Box
      width={{ xs: "90vw", md: "50vw" }}
      backgroundColor="white"
      borderRadius={2}
      
    >
         <Box m={5.5} display={showResult ? "flex" : "none"}>
        <ResultTypo>{result===0? "You are unlikely to have a stroke" : "You are LIKELY to have a stroke"}</ResultTypo>
        
         </Box>
      <Box
        textAlign={"left"}
        justifyContent={"center"}
        alignItems={"center"}
        display={showResult ? "none" : "flex"}
      >
        <form onSubmit={handleSubmit}>
          <FormGroup sx={{ backgroundColor: "white", p: 2, borderRadius: 3 }}>
            <FormControl>
              <TextField
                color="success"
                name="age"
                onChange={handleChange}
                label="Age"
                margin="dense"
                fullWidth
                sx={{ fill: "white" }}
              />
            </FormControl>

            <FormControlLabel
                control={
                  <Checkbox
                    name="hypertension"
                    onChange={handleChange}
                    color="success"
                  />
                }
                label="Has History of Hypertension"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="heart_disease"
                    onChange={handleChange}
                    color="success"
                  />
                }
                label="Has History of Heart Disease"
              />


              <FormControlLabel
                control={
                  <Checkbox
                    name="ever_married"
                    onChange={handleChange}
                    color="success"
                  />
                }
                label="Ever Married"
              />

            <TextField
              name="avg_glucose_level"
              onChange={handleChange}
              color="success"
              label="Average Glucose Level(mg/dL)"
              margin="dense"
              fullWidth
              sx={{ fill: "white" }}
            />

            <Button
              onClick={handleSubmit}
              sx={{ color: "#08a29e", fontSize: "1.5rem" }}
            >
              Submit
            </Button>
          </FormGroup>
        </form>
      </Box>
    </Box>
  );
};
