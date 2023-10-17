import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'

export const Form = () => {
  return (
    <Box width={{xs:"90vw", md: "50vw"}} backgroundColor="white" borderRadius={2} >

    <Box textAlign={"left"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
<FormGroup sx={{backgroundColor:"white", p:2, borderRadius:3 }}>
    <FormControl>
      <TextField color="success" label="Age" margin="dense" fullWidth sx={{fill:"white"}}/>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio  color="success"/>} label="Female" />
        <FormControlLabel value="male" control={<Radio   color="success"/>} label="Male" />
        <FormControlLabel value="other" control={<Radio  color="success" />} label="Other" />
      </RadioGroup>

    </FormControl>


    <FormGroup>
    <FormControlLabel
            control={
                <Checkbox name="heart_disease" color="success"/>
            }
            label="Has History of Heart Disease"
            />

<FormControlLabel
            control={
                <Checkbox name="stroke" color="success"/>
            }
            label="Has History of Stroke"
            />

    <FormControlLabel
            control={
                <Checkbox name="ever_married" color="success"/>
            }
            label="Ever Married"
            />

    </FormGroup>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Work Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="private" control={<Radio  color="success"/>} label="Private" />
        <FormControlLabel value="self_employed" control={<Radio   color="success"/>} label="Self-Employed" />
        <FormControlLabel value="govt_job" control={<Radio   color="success"/>} label="Governmet Job" />
        <FormControlLabel value="never_worked" control={<Radio   color="success"/>} label="Never Worked" />
        {/* <FormControlLabel value="other" control={<Radio  color="success" />} label="Other" /> */}
      </RadioGroup>

    </FormControl>

    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Residence Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="urban" control={<Radio  color="success"/>} label="Urban" />
        <FormControlLabel value="rural" control={<Radio   color="success"/>} label="Rural" />
      </RadioGroup>

    </FormControl>

    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Smoking Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="smoking" control={<Radio  color="success"/>} label="Smoking" />
        <FormControlLabel value="never_smoked" control={<Radio   color="success"/>} label="Never Smoked" />
        <FormControlLabel value="formerly_smoked" control={<Radio  color="success" />} label="Formerly Smoked" />
      </RadioGroup>

    </FormControl>

    <TextField color="success" label="Average Glucose Level(mg/dL)" margin="dense" fullWidth sx={{fill:"white"}}/>
    <TextField color="success" label="BMI(kg/square meters)" margin="dense" fullWidth sx={{fill:"white"}}/>
    
    


    <Button sx={{color: "#08a29e", fontSize:"1.5rem"}}>Submit</Button>
</FormGroup>

            </Box>
    </Box>
  )
}
