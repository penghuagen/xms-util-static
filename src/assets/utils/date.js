import moment from 'moment'
const FORMAT = {
  SDF_DAY: 'YYYY-MM-DD',
  SDF_DATETIME: 'YYYY-MM-DD'
}
function dateFormat (timeValue) {
  // if (typeof timeValue === 'Number')
  let day = moment(timeValue).format('YYYY-MM-DD')

  console.log(day)
}

export {dateFormat}
