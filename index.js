const spawn = require('spawn-promise')
const express = require('express')
const app = express()

app.use('/', express.static('./static'))
app.get('/api', async (req, res) => {
  const dcps = (await spawn('docker-compose', ['ps'])).toString()
  const items = dcps
    .split('\n') // results are newline separated
    .splice(2) // first two lines are blank
    .map(item => {
      try {
        return {
          name: item.split(' ')[0].split('_').splice(1).join(' '),
          port: Number(item.split('      0.0.0.0:')[1].split('-')[0])
        }
      } catch {
        return null
      }
    })
    .filter(a=>a) // filter to not blank/null
  console.table(items)
  res.send(items)
  })

app.listen(process.env.PORT || 3333)
