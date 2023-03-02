import Chat from '../../components/chart/Chat'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetsm/WidgetSm'
import { userdata } from '../../dummyData'
import './home.css'
export default function Home() {
  console.log(userdata)
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chat data={userdata} dataKey="Active User" grid title="User Analytics"/>
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
