import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, networkAtom, messagingAtom, notificationsAtom, totalCount } from "./store/atoms"
import { useMemo } from "react"

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const finalValue = useRecoilValue(totalCount)
  // const finalValue  = useMemo(() => {
  //   return notificationsCount + jobsCount + messagingCount + networkCount
  // }, [notificationsCount, jobsCount, messagingCount, networkCount]) this is one such way to do this
  return (
   <>
    <button>Home</button>
    <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button onClick={() => {setMessagingCount(messagingCount + 1)}}>Messaging ({messagingCount})</button> 
    <button>Notifications ({notificationsCount})</button>
    <button>Me ({finalValue})</button>
   </>
  )
}

export default App
