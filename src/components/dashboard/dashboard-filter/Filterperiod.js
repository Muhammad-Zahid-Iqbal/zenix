import { Grid } from '@mui/material'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';

const Filterperiod = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container spacing={3.75}>
      <Grid item sm={6} xs={12}>
        <h2 style={{fontSize:"34px", color:"#fff"}}>Dashboard</h2>
      </Grid>
      <Grid item sm={3} xs={12}>
      <FormControl fullWidth sx={{ minWidth: 120, }} size="small">
        <Select
        sx={{padding:"0px 20px", color:"white", border:"none",'& svg': {
                color: 'white', // Change the color of the select list icon
              },}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: '#3B3363', color:"white", border:"none" // Change the background color of the dropdown
                },
              },
            }}
           
        >
          <MenuItem value="">
            <em>Medan, IDN</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
       
      </Grid>

      <Grid item sm={3} xs={12}>
         <Button variant="contained" sx={{padding:"8px 30px"}} startIcon={<CalendarMonthIcon />}>
        Filter Period
      </Button>
      </Grid>
      
    </Grid>
  )
}

export default Filterperiod
