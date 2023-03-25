import {
  DateSelectArg,
  EventAddArg,
  EventApi,
  EventClickArg,
  formatDate,
} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import CategoryHeader from '../../components/CategoryHeader'
import { colorsShades } from '../../theme/theme'

const Calendar = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])

  const handleDateClick = (selected: DateSelectArg) => {
    console.log('handleDateClick')
    const title = prompt('Please enter a new title for your event') // native browser alert
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        // id: `${selected.dateStr}-${title}`, // ! Property 'dateStr' does not exist on type 'DateSelectArg'.
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allday: selected.allDay,
      })
    }
  }

  // const handleEventClick = (selected: EventAddArg) => {
  const handleEventClick = (selected: EventClickArg) => {
    console.log('handleEventClick')
    if (
      window.confirm(`Are you sure you want to delete the event ${selected.event.title}`)
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box m='20px'>
      <CategoryHeader title='CALENDAR' subtitle='Full Calendar Interactive Page' />
      <Box display='flex' justifyContent='space-between'>
        {/* CALENDAR SIDEBAR */}
        <Box
          flex='1 1 20%' // grow shrink width // !
          p='15px'
          borderRadius='4px'
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {/* // ! Date | null */}
                      {event.start &&
                        formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box
          flex='1 1 100%'
          ml='15px'
          sx={{
            '& .fc-popover-header': {
              backgroundColor: `${colors.blueAccent[500]} !important`,
            },
            '& .fc-popover-body': {
              backgroundColor: `${colors.blueAccent[600]} !important`,
            },
            '& .fc-list-day-cushion': {
              backgroundColor: `${colors.blueAccent[500]} !important`,
            },
            '& .fc-list-event:hover td': {
              backgroundColor: `${colors.blueAccent[600]} !important`,
            },
          }}
        >
          <FullCalendar
            height='75vh'
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: '4321', title: 'Timed event', date: '2023-03-22' },
              { id: '9876', title: 'Timed event', date: '2023-06-22' },
              { id: '4567', title: 'All-day event', date: '2023-07-14' },
              { id: '1234', title: 'All-day event', date: '2023-09-14' },
              // { id: '4321', title: 'Timed event', date: '2023-22-03' }, // converts to 2024 Oct 3
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar
