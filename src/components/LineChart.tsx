import { useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import { mockLineData as data } from '../data/mockData'
import { colorsShades } from '../theme/theme'

const data2 = [
  {
    id: 'japan',
    color: 'hsl(108, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 13,
      },
      {
        x: 'helicopter',
        y: 164,
      },
      {
        x: 'boat',
        y: 67,
      },
      {
        x: 'train',
        y: 183,
      },
      {
        x: 'subway',
        y: 246,
      },
      {
        x: 'bus',
        y: 3,
      },
      {
        x: 'car',
        y: 10,
      },
      {
        x: 'moto',
        y: 267,
      },
      {
        x: 'bicycle',
        y: 148,
      },
      {
        x: 'horse',
        y: 240,
      },
      {
        x: 'skateboard',
        y: 171,
      },
      {
        x: 'others',
        y: 229,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(86, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 296,
      },
      {
        x: 'helicopter',
        y: 136,
      },
      {
        x: 'boat',
        y: 22,
      },
      {
        x: 'train',
        y: 64,
      },
      {
        x: 'subway',
        y: 267,
      },
      {
        x: 'bus',
        y: 28,
      },
      {
        x: 'car',
        y: 190,
      },
      {
        x: 'moto',
        y: 289,
      },
      {
        x: 'bicycle',
        y: 241,
      },
      {
        x: 'horse',
        y: 254,
      },
      {
        x: 'skateboard',
        y: 173,
      },
      {
        x: 'others',
        y: 131,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(238, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 192,
      },
      {
        x: 'helicopter',
        y: 254,
      },
      {
        x: 'boat',
        y: 220,
      },
      {
        x: 'train',
        y: 27,
      },
      {
        x: 'subway',
        y: 178,
      },
      {
        x: 'bus',
        y: 166,
      },
      {
        x: 'car',
        y: 280,
      },
      {
        x: 'moto',
        y: 89,
      },
      {
        x: 'bicycle',
        y: 292,
      },
      {
        x: 'horse',
        y: 248,
      },
      {
        x: 'skateboard',
        y: 151,
      },
      {
        x: 'others',
        y: 72,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(351, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 273,
      },
      {
        x: 'helicopter',
        y: 97,
      },
      {
        x: 'boat',
        y: 169,
      },
      {
        x: 'train',
        y: 10,
      },
      {
        x: 'subway',
        y: 248,
      },
      {
        x: 'bus',
        y: 139,
      },
      {
        x: 'car',
        y: 245,
      },
      {
        x: 'moto',
        y: 231,
      },
      {
        x: 'bicycle',
        y: 60,
      },
      {
        x: 'horse',
        y: 275,
      },
      {
        x: 'skateboard',
        y: 233,
      },
      {
        x: 'others',
        y: 24,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(229, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 72,
      },
      {
        x: 'helicopter',
        y: 128,
      },
      {
        x: 'boat',
        y: 153,
      },
      {
        x: 'train',
        y: 243,
      },
      {
        x: 'subway',
        y: 261,
      },
      {
        x: 'bus',
        y: 144,
      },
      {
        x: 'car',
        y: 252,
      },
      {
        x: 'moto',
        y: 245,
      },
      {
        x: 'bicycle',
        y: 244,
      },
      {
        x: 'horse',
        y: 130,
      },
      {
        x: 'skateboard',
        y: 61,
      },
      {
        x: 'others',
        y: 113,
      },
    ],
  },
]

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme()
  const mode = theme.palette.mode
  //   const colors = colorsShades(theme.palette.mode)
  const colors = colorsShades(mode)

  return (
    <ResponsiveLine
      data={data2}
      theme={{
        textColor: colors.gray[100],
        tooltip: {
          container: {
            color: colors.gray[500],
          },
        },
        crosshair: {
          line: {
            stroke: colors.blueAccent[500], // !
            strokeWidth: 2, // !
          },
        },
        legends: {
          hidden: {
            symbol: {
              // fill: 'red',
              // fill: 'currentColor',
              opacity: 1,
              fill: colors.gray[500], // !
            },
            // text: 'red',
            text: {
              //   color: 'red',
              //   fill: 'red',
              opacity: 1,
              fill: colors.gray[500], // !
            },
          },
        },
        grid: {
          line: {
            // stroke: colors.gray[300], // !
            stroke: mode === 'dark' ? colors.gray[500] : undefined, // !
          },
        },
      }}
      //   colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo' }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=' >-.2f'
      //   curve='natural'
      curve='catmullRom'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        // orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'transportation',
        legend: isDashboard ? undefined : 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        // orient: 'left',
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'count',
        legend: isDashboard ? undefined : 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          //   itemTextColor: 'red',
          //   itemTextColor: data.map((item)=> {
          // item.id
          //   }),
          toggleSerie: true, // ! enable toggle on/off line
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default LineChart
