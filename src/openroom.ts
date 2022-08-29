import { KeepLiveWS } from 'bilibili-live-ws'
import pc from 'picocolors'

const OPENROOM = async (roomId: string) => {
const live = new KeepLiveWS(parseInt(roomId))

live.on('open', () => console.log('Connection is established'))

live.on('heartbeat', online =>{
    console.log(`${pc.cyan(online)} hots`)
})
live.on('SEND_GIFT', data => {
    const {uname, giftName, num, action } = data.data
    console.log(pc.bgRed(`${uname} ${action} ${num} 个 ${giftName}`));
})
live.on('DANMU_MSG', data => {
    const USERNAME = data.info[2][1] 
    const DANMU = data.info[1]
    const BADGE = {
       BADGE_NAME: data.info[3][1],
       BADGE_LEVEL: data.info[3][0],
    }
    const BADGE_TEXT = BADGE.BADGE_NAME ? pc.bgRed(pc.white(` ${BADGE.BADGE_NAME} `)) + pc.bgWhite(` ${pc.red(BADGE.BADGE_LEVEL)} `) + ' ' : ''
    console.log(BADGE_TEXT + pc.bold(USERNAME) + '：'+ DANMU)
        })
    }

export default OPENROOM 