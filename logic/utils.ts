import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(duration)
dayjs.extend(relativeTime)


export function timeDifference(posted: Date) {
  return dayjs.duration(dayjs(posted).diff(dayjs())).humanize(true)
}