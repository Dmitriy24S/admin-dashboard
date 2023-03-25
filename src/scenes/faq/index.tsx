import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import CategoryHeader from '../../components/CategoryHeader'
import { colorsShades } from '../../theme/theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  return (
    <Box
      m='20px'
      sx={{
        '& .MuiAccordion-root': {
          margin: '16px 0',
        },
        '& .Mui-expanded:before': {
          opacity: '1',
        },
      }}
    >
      <CategoryHeader title='FAQ' subtitle='Frequently Asked questions Page' />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis quisquam
            facere neque nihil possimus numquam quas tempora distinctio quae ullam,
            veritatis ipsum accusamus delectus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis quisquam
            facere neque nihil possimus numquam quas tempora distinctio quae ullam,
            veritatis ipsum accusamus delectus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis quisquam
            facere neque nihil possimus numquam quas tempora distinctio quae ullam,
            veritatis ipsum accusamus delectus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis quisquam
            facere neque nihil possimus numquam quas tempora distinctio quae ullam,
            veritatis ipsum accusamus delectus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis quisquam
            facere neque nihil possimus numquam quas tempora distinctio quae ullam,
            veritatis ipsum accusamus delectus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
