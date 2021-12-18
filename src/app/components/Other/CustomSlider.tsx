import React from 'react'
import { Grid, TextField, Slider, ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: '#f7db0e',
        height: 30,
        width: 30,
        border: '2px solid #000',
      },
      track: {
        color: '#425064',
        height: 10,
        borderRadius: 5,
        marginTop: 5,
      },
      rail: {
        color: '#2c333f',
        height: 10,
        borderRadius: 5,
        marginTop: 4,
        border: '1px solid #425064',
      },
    },
  },
})

export default function CustomSlider() {
  const [value, setValue] = React.useState<number | string | Array<number | string>>(0)

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue)
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 100) {
      setValue(100)
    }
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  return (
    <Grid container>
      <Grid item xs={12} md={11}>
        <ThemeProvider theme={muiTheme}>
          <Slider
            style={{ width: '97%' }}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </ThemeProvider>
      </Grid>
      <Grid item xs={12} md={1}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            style: { color: '#666', textAlign: 'center', fontSize: 16, width: '90%', height: 40, padding: '0' },
            type: 'text',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
  )
}
