import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, List, ListItem, ListItemText, Box, Grid } from '@mui/material';

const Resume = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get('/api/Resume-data.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box p={4} boxShadow={3} borderRadius={4}>
      <Typography variant="h4" gutterBottom>
        {`${data.first_name} ${data.last_name} - ${data.profession}`}
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <List>
          {data.education &&
            data.education.map((education) => (
              <ListItem key={education.education_id}>
                <ListItemText
                  primary={`${education.school_name} - ${education.field_of_study}, ${education.degree}`}
                  secondary={
                    education.current_attend_here
                      ? 'Present'
                      : `${education.degree_start_date} - ${education.degree_end_date}`
                  }
                />
              </ListItem>
            ))}
        </List>
      </Box>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Work Experience
        </Typography>
        <List>
          {data.work_experience &&
            data.work_experience.map((work) => (
              <ListItem key={work.work_id}>
                <ListItemText
                  primary={work.job_title}
                  secondary={`${work.company_name} - ${work.start_date} - ${work.end_date}`}
                />
                <ListItemText primary={work.Description} />
              </ListItem>
            ))}
        </List>
      </Box>
      {/* Add other resume sections as needed */}
    </Box>
  );
};

export default Resume;
