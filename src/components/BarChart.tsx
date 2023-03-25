import { useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { mockBarData as data } from '../data/mockData'
import { colorsShades } from '../theme/theme'

const data2 = [
  {
    country: 'AD',
    'hot dog': 188,
    'hot dogColor': 'hsl(67, 70%, 50%)',
    burger: 132,
    burgerColor: 'hsl(99, 70%, 50%)',
    sandwich: 159,
    sandwichColor: 'hsl(299, 70%, 50%)',
    kebab: 167,
    kebabColor: 'hsl(263, 70%, 50%)',
    fries: 153,
    friesColor: 'hsl(255, 70%, 50%)',
    donut: 40,
    donutColor: 'hsl(51, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 40,
    'hot dogColor': 'hsl(217, 70%, 50%)',
    burger: 103,
    burgerColor: 'hsl(213, 70%, 50%)',
    sandwich: 9,
    sandwichColor: 'hsl(293, 70%, 50%)',
    kebab: 1,
    kebabColor: 'hsl(141, 70%, 50%)',
    fries: 37,
    friesColor: 'hsl(110, 70%, 50%)',
    donut: 55,
    donutColor: 'hsl(186, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 16,
    'hot dogColor': 'hsl(62, 70%, 50%)',
    burger: 33,
    burgerColor: 'hsl(317, 70%, 50%)',
    sandwich: 128,
    sandwichColor: 'hsl(76, 70%, 50%)',
    kebab: 64,
    kebabColor: 'hsl(280, 70%, 50%)',
    fries: 89,
    friesColor: 'hsl(278, 70%, 50%)',
    donut: 115,
    donutColor: 'hsl(201, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 97,
    'hot dogColor': 'hsl(303, 70%, 50%)',
    burger: 14,
    burgerColor: 'hsl(223, 70%, 50%)',
    sandwich: 1,
    sandwichColor: 'hsl(223, 70%, 50%)',
    kebab: 192,
    kebabColor: 'hsl(78, 70%, 50%)',
    fries: 25,
    friesColor: 'hsl(173, 70%, 50%)',
    donut: 10,
    donutColor: 'hsl(279, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 98,
    'hot dogColor': 'hsl(20, 70%, 50%)',
    burger: 179,
    burgerColor: 'hsl(228, 70%, 50%)',
    sandwich: 62,
    sandwichColor: 'hsl(3, 70%, 50%)',
    kebab: 151,
    kebabColor: 'hsl(259, 70%, 50%)',
    fries: 149,
    friesColor: 'hsl(170, 70%, 50%)',
    donut: 33,
    donutColor: 'hsl(139, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 188,
    'hot dogColor': 'hsl(25, 70%, 50%)',
    burger: 187,
    burgerColor: 'hsl(270, 70%, 50%)',
    sandwich: 181,
    sandwichColor: 'hsl(260, 70%, 50%)',
    kebab: 195,
    kebabColor: 'hsl(274, 70%, 50%)',
    fries: 82,
    friesColor: 'hsl(120, 70%, 50%)',
    donut: 159,
    donutColor: 'hsl(121, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 198,
    'hot dogColor': 'hsl(244, 70%, 50%)',
    burger: 200,
    burgerColor: 'hsl(337, 70%, 50%)',
    sandwich: 15,
    sandwichColor: 'hsl(300, 70%, 50%)',
    kebab: 194,
    kebabColor: 'hsl(206, 70%, 50%)',
    fries: 25,
    friesColor: 'hsl(276, 70%, 50%)',
    donut: 194,
    donutColor: 'hsl(312, 70%, 50%)',
  },
]

const BarChart = ({ isDashboard = false }: { isDashboard?: boolean }) => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  return (
    <ResponsiveBar
      data={data2}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy='country'
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      maxValue={1000}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      valueFormat=' >-'
      colors={{ scheme: 'nivo' }}
      theme={{
        textColor: colors.gray[100],
        // labels: { text: { fill: theme.palette.primary } },
        // labels: { backgroundColor: theme.palette.primary } },
        // labels: {
        //   backgroundColor: 'red'
        // }
        tooltip: {
          container: {
            background: '#ffffff',
            color: '#333333',
            fontSize: 12,
          }, // !
        },
        grid: {
          line: {
            stroke: colors.gray[500],
            // stroke: colors.primary[600],
          },
        }, // !
        //
        axis: {
          domain: {
            line: {
              stroke: colors.gray[500],
            },
          },
          ticks: {
            line: {
              stroke: colors.gray[500],
              strokeWidth: 1,
            },
            text: {
              // fill: colors.gray[100], // textColor instead?
            },
          },
          legend: {
            text: {
              // fill: colors.gray[100], // textColor instead?
            },
          },
        },
        legends: {
          text: {
            // fill: colors.gray[100], // textColor instead?
          },
        },
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'country',
        legend: isDashboard ? undefined : 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'food',
        legend: isDashboard ? undefined : 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          onClick: (e) => {
            console.log(e)
            // {id: 'donut', label: 'donut', hidden: false, color: '#97e3d5'}
          },
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role='application'
      ariaLabel='Nivo bar chart demo'
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }}
    ></ResponsiveBar>
  )
}

export default BarChart
