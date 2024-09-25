import banner from '../../assets/img/banner.png'
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

const Banner = () => {
  return (
      <div className='relative px-10 md:px-[100px] font-rubick'>
          <img src={banner} alt="banner" className='w-full'/>
          <FlipClockCountdown
              style={{position:"absolute", left:"28%", top:"75%", bottom:"50%"}}
              labelStyle={{ color:"#D18A00", fontSize: 15, fontWeight: 500, textTransform: 'uppercase' }}
              className='bg-red-800'
              digitBlockStyle={{ backgroundColor:"#FFA500",opacity:"70%", width: 60, height: 70, fontSize: 60 }}
              dividerStyle={{ color: 'white', height: 1 }}
              separatorStyle={{ color: '#D18A00', size: '8px' }}
              to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
              labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
              duration={0.5}
          />
      </div>
  )
}

export default Banner