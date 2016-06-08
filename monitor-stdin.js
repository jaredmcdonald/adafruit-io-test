process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    try {
      const { last_value, last_value_at } = JSON.parse(chunk)
      process.stdout.write(`${last_value_at}: ${last_value}\n`)
    } catch (e) {
      process.stderr.write(e.toString())
    }
  }
})
