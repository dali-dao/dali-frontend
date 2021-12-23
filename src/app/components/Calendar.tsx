import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: 200,
      border: `1px solid ${theme.palette.info.main}`,
      borderRadius: 5,
    },
  }),
)

export default function DatePickers() {
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        variant="outlined"
        id="date"
        type="date"
        defaultValue="2021-12-12"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )
}
