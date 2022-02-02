import * as React from 'react'
import {
  Box,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

function App() {
  const [ answer,    setAnswer    ] = React.useState('')
  const [ attempts,  setAttempts  ] = React.useState('')
  const [ inclAns,   setInclAns   ] = React.useState(true)
  const [ upperCase, setUpperCase ] = React.useState(true)

  function tile(key: string, char: string, col: string) {
    return <Grid item key={key}
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        lineHeight: '2rem',
        boxSizing: 'border-box',
        width:  '62px',
        height: '62px',
        color: 'white',
        backgroundColor: `${col}.main`,
        mb: '5px',
        mr: '5px',
      }}>{char}</Grid>
  }

  const attemptsArray = attempts.split('\n')
  const board = attemptsArray.map((attempt, i) => {
    const attemptArray = attempt.split('')
    const res = attemptArray.map((attemptChar, j) => {
      const attemptIndex = answer.indexOf(attemptChar)
      const key = i + ' ' + j
      if (attemptIndex >= 0) {
        if (attemptIndex === j)
          return tile(key, attemptChar, 'success')
        else
          return tile(key, attemptChar, 'warning')
      } else {
        return tile(key, attemptChar, 'error')
      }
    })
    return <Grid key={'r' + i} item container>{res}</Grid>
  })
  if (inclAns) {
    const answerArray = answer.split('')
    board.push(<Grid key='answer' item container>
      { answerArray.map((ansChar, i) => tile('a' + i, ansChar, 'success')) }
    </Grid>)
  }

  function handleAnswerChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (upperCase)
      setAnswer(event.target.value.toUpperCase())
    else
      setAnswer(event.target.value) // to support composition input
  }

  function handleAttemptsChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (upperCase)
      setAttempts(event.target.value.toUpperCase())
    else
      setAttempts(event.target.value) // to support composition input
  }

  function handleIncludeAnswerChecked(event: React.ChangeEvent<HTMLInputElement>) {
    setInclAns(event.target.checked)
  }

  function handleUpperCaseChecked(event: React.ChangeEvent<HTMLInputElement>) {
    setUpperCase(event.target.checked)
  }

  return (<>
    <Container maxWidth='sm'>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h2'>
          Wordle Art
        </Typography>
        <Typography variant='overline'>
          Screenshot to make social media posts
        </Typography>
      </Box>
      <Grid container spacing={1} sx={{ mt: 2}}>
        <Grid item xs={6}>
          <TextField value={answer} label='Answer'
            fullWidth onChange={handleAnswerChange} />
          <br />
          <Checkbox checked={inclAns}
            onChange={handleIncludeAnswerChecked} /> Include answer
          <br />
          <Checkbox checked={upperCase}
            onChange={handleUpperCaseChecked} /> Upper case
        </Grid>
        <Grid item xs={6}>
          <TextField multiline rows={4} fullWidth
            value={attempts} label='Attempts (1 word per line)'
            onChange={handleAttemptsChange} />
        </Grid>
        <Grid item xs={12} container sx={{
          mt: 3,
          mb: 6,
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          { board }
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ position: 'fixed', bottom: 10, width: '100%', textAlign: 'center' }}>
      <Typography variant='caption'>
        Jiin Joo's <a href='https://wp.jiinjoo.com'>blog</a> | <a href='https://github.com/jiinjoo/wordle-art'>Github</a> | Made with ❤️ in Singapore
      </Typography>
    </Box>
  </>)
}

export default App
