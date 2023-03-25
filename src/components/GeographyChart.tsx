import { useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { mockGeographyData } from '../data/mockData'
import { geoFeatures } from '../data/mockGeoFeatures'
import { colorsShades } from '../theme/theme'

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme()
  const mode = theme.palette.mode
  const colors = colorsShades(mode)

  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
      features={geoFeatures.features}
      theme={{
        tooltip: {
          container: {
            color: colors.gray[600],
          },
        },
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors='nivo'
      domain={[0, 1000000]}
      unknownColor='#666666'
      label='properties.name'
      valueFormat='.2s'
      //   projectionScale={isDashboard ? 40 : 150}
      projectionScale={isDashboard ? 40 : undefined}
      //   projectionTranslation={[0.5, 0.5]}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      //   graticuleLineColor='#dddddd'
      graticuleLineColor={mode === 'dark' ? colors.gray[500] : undefined}
      borderWidth={0.5}
      borderColor='#152538'
      //   defs={[
      //     {
      //       id: 'dots',
      //       type: 'patternDots',
      //       background: 'inherit',
      //       color: '#38bcb2',
      //       size: 4,
      //       padding: 1,
      //       stagger: true,
      //     },
      //     {
      //       id: 'lines',
      //       type: 'patternLines',
      //       background: 'inherit',
      //       color: '#eed312',
      //       rotation: -45,
      //       lineWidth: 6,
      //       spacing: 10,
      //     },
      //     {
      //       id: 'gradient',
      //       type: 'linearGradient',
      //       colors: [
      //         {
      //           offset: 0,
      //           color: '#000',
      //         },
      //         {
      //           offset: 100,
      //           color: 'inherit',
      //         },
      //       ],
      //     },
      //   ]}
      //   fill={[
      //     {
      //       match: {
      //         id: 'CAN',
      //       },
      //       id: 'dots',
      //     },
      //     {
      //       match: {
      //         id: 'CHN',
      //       },
      //       id: 'lines',
      //     },
      //     {
      //       match: {
      //         id: 'ATA',
      //       },
      //       id: 'gradient',
      //     },
      //   ]}
      legends={
        isDashboard
          ? undefined
          : [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 10,
                translateY: -20,
                itemsSpacing: 0,
                itemWidth: 84,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                //   itemTextColor: '#444444',
                itemBackground: colors.blueAccent[900],
                itemTextColor: colors.gray[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      // itemTextColor: '#000000',
                      itemTextColor: colors.gray[200],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  )
}

export default GeographyChart
