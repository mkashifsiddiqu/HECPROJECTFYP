import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
const RecentActivities = () => {
  return (

    <div>
      <Box>
        <Paper sx={{ margin: `1em`, padding: `1em 1em 0em 1em` }}>
          <Typography fontFamily={`montserrat`} fontSize={`1rem`} color={`#797D86`} fontWeight={700}>RECENT ACTIVITIES</Typography>
          <Box padding={`1em`}></Box>
          <Timeline>
          <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            21-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Cancel Application</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          26-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Scrutiny</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          15-11-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Review</TimelineContent>
        </TimelineItem>
        </Timeline>
        </Paper>

      </Box>
    </div>
  )
}

export default RecentActivities