import { NavBar } from '../../NavBar'
import { Box, Stack, Typography, styled} from '@mui/material'
import { Form } from './Form'

export const StrokePrediction = () => {
    const Title = styled(Typography)({
        color: "#ffffff",
        fontWeight: "bold",
        fontFamily: "dela gothic one",
        letterSpacing: "0.1rem",
        lineHeight: "1.2",
        textTransform: "uppercase",
        wordBreak: "break-word",
    })

    const Subtext=styled(Typography)({
        color:"#d0f5e8",
        fontFamily: "Inter",
        fontWeight: 300,
        fontSize: "0.9rem",

    })
     const Line=styled(Box)({
        width:"50%",
        height:"1px",
        backgroundColor:"#08a29e",
     })
    
    const IntroductionText=`
    Introduction:
    Welcome to our Stroke Prediction Machine Learning App! This app estimates stroke risk based on your health and lifestyle data.
    The current machine learning classifier used is LightGBM. The data is preprocessed using pandas and imblearn SMOTE was used to overcome the class
    imbalance. The model was trained on the Kaggle Stroke Prediction Dataset. The model has moderate accuracy but will be improved in the future. (last updated: 24/10/2023)
    `
    const DisclaimerText = `
    Disclaimer:
    This app is for educational use only and not a substitute for professional medical advice. Consult a healthcare expert for personalized guidance.`

  
  return (
    <Box disableGutters p={2} sx={{ backgroundColor: "#326164",  height:"100vh", width:"100vw"}} >
        <NavBar />

        <Box p={3} >
        <Stack direction={"column"} spacing={2} justifyContent={"center"} textAlign={"center"} alignItems={"center"} display={"flex"}>
            <Title sx={{fontSize:{
                xs:"2.2rem",
                md:"4rem"
            }}}>Stroke Prediction</Title>
            <Line/>
            <Box width={{xs: "90%", md:"60%"}} pb={4}>

            <Box mb={2}>

            <Subtext>
{IntroductionText}
                </Subtext>
</Box>
    <Box mb={2}>

                <Subtext>
{DisclaimerText}
                </Subtext>
    </Box>
            </Box>
            <Stack spacing={3} width="60vw" direction={{xs:"column", sm:"row"}} justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
        
        <Box flex={1}  justifyContent={"center"} textAlign={'center'} alignItems={'center'} display={"flex"}>

        <Form />
        </Box>
        

</Stack>
        </Stack>
        </Box>


    </Box>
  )
}
