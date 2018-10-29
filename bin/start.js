const app = require('../main')
const chalk = require('chalk')

app.listen(app.get('port'), () => {
  console.log(
    '%s App is running at http://localhost:%d',
    chalk.green('✓'),
    app.get('port')
  )
})
