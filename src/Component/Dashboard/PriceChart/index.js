import React from 'react'
import {Tile} from '../../Shared/Tile'
import {AppContext} from '../../../Provider/AppProvider'
import ReactHighcharts from 'react-highcharts'
import highchartsConfig from '../HighchartsConfig'
import HighchartsTheme from '../HighchartsTheme'
import ChartSelect from '../ChartSelect'

ReactHighcharts.Highcharts.setOptions(HighchartsTheme)

export default function () {
  return (
    <AppContext.Consumer>
      {({historical, changeChartSelect, isDark}) => (
        <Tile isDark={isDark}>
          <ChartSelect
            isDark={isDark}
            defaultValue={'months'}
            onChange={(e) => changeChartSelect(e.target.value)}
          >
            <option value={'days'}>Days</option>
            <option value={'weeks'}>Weeks</option>
            <option value={'months'}>Months</option>
          </ChartSelect>
          {historical ? (
            <ReactHighcharts config={highchartsConfig(historical)} />
          ) : (
            <div>Loading Historical Data...</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  )
}
