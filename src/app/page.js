import Frontpage from '@/Components/Frontpage/Frontpage'
import Lastpage from '@/Components/Lastpage/Lastpage'
import Midpage from '@/Components/Middlepage/Midpage'

export default function Home() {
  return (
    <main className=" pt-23">
      <Frontpage/>
      <Midpage/>
      <Lastpage/>     
    </main>
  )
}
