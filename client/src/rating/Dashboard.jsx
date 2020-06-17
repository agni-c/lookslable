import React from 'react';
import {Rating} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';

export default function SimpleRating() {
  const [value, setValue] = React.useState(2);
 
 
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={4}
          onChange={(event, newValue) => {
			setValue(newValue);
			const response =  axios
			.post(
			  'http://localhost:5000/spring-internship/us-central1/app/api/rating',{
          
            iuid:"oFf5YC7ARfcTM19y10XNyvdg1JQ2",
            bookingdate:"2020-06-05",
            time:"10:10",
             rating:newValue
             }
        
			)
			.then(function (response) {
			  console.log(response.data);
			});
		  
          }}
        />
      </Box>
      
      
    </div>
  );
}