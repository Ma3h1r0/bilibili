import cac from 'cac'
import OPENROOM from './openroom'

const cli = cac()

cli.command('open <room>', 'Open a room').action(OPENROOM)

cli.version('1.0.0')
cli.help()

cli.parse()