import {React,useState} from 'react'
import { ThemeProvider, Grid } from '@mui/material';
import theme from '../theme/theme';
import Header from '../Components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import SearchBar from '../Components/Header/SearchBar';
import JobCard from '../Components/Job/JobCard';
import NewJobModal from '../Components/Job/NewJobModal';
import jobsData from '../JobData.js';
import NavBar from '../Components/NavBar/NavBar';


const JobList = () => {
  const [isNewJobModalOpen, setNewJobModalOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <CssBaseline />
      <Header openNewJobModal={() => setNewJobModalOpen(true)}/>
      <NewJobModal open={isNewJobModalOpen} setOpen={setNewJobModalOpen}/>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
            <SearchBar />
            {jobsData.map(job =><JobCard key={job.id} {...job}/>)}
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default JobList