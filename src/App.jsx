import tw from 'twin.macro';

{/* used images */}
import imgBg from './assets/images/Rainbow-iPhone-P3-100kb.webp';
const imgAlt = 'Rainbow iPhone P3 Background | iPhone Notification using Reactjs, Vite, Tailwindcss, Twin.Macro';
import imgSurferAtSunset from './assets/images/surfer-at-sunset.webp';
const imgAltSurferAtSunset = 'Surfer at Sunset | iPhone Notification using Reactjs, Vite, Tailwindcss, Twin.Macro';
import imgBasketball from './assets/images/basketball.webp';
const imgAltBasketball = 'CP3 vs the Greek Freak | iPhone Notification using Reactjs, Vite, Tailwindcss, Twin.Macro';

{/* Cellphone container and shell */}
const Container = tw.section`grid min-h-screen bg-purple-50 place-items-center`;
const PhoneShell = tw.section`mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl`;

{/* black on top mid */ }
const TopMidWrapper = tw.div`absolute top-0 inset-x-0`;
const TopMidStyle = tw.div`mx-auto bg-black h-6 w-40 rounded-b-3xl`;

{/* Phone background image */ }
const PhoneBgImg = tw.img`absolute inset-0 h-full object-cover`;

{/* Small icons on top right */ }
const WrapperOfTopRightIcons = tw.div`mr-5 mt-2 flex justify-end space-x-1`;
const TopRightSvg = tw.svg`h-4 w-4 text-white`;

{/* Lock Icon , Date & time */ }
const WrapperOfLockIconDateAndTime = tw.div`mt-2 flex flex-col items-center`;
const LockIcon = tw.svg`h-8 w-8 text-white`;
const TimeText = tw.p`mt-3 text-white text-6xl font-extralight`;
const DateText = tw.p`mt-1 text-white text-lg font-light`;

{/* Notification Summary */}
const NotificationWrapper = tw.div`relative mt-4 mx-2`;
const BottomPanel = tw.div`absolute -bottom-4 scale-[0.85] origin-bottom inset-x-0 h-full w-full bg-white/10 backdrop-blur-md rounded-2xl`;
const MidPanel = tw.div`absolute -bottom-2 scale-95 origin-bottom inset-x-0 h-full w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-sm`;
const MainPanel = tw.div`p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow`;


function App() {
  return (
    <div>
      <Container>
        <PhoneShell>
          <PhoneBgImg src={imgBg} alt={imgAlt} />
          <PhoneBgImg></PhoneBgImg>
          <TopMidWrapper>
            <TopMidStyle></TopMidStyle>
          </TopMidWrapper>
          <div className="relative">
            <WrapperOfTopRightIcons>
              {/* Sim Signal */}
              <TopRightSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </TopRightSvg>
              {/* Wifi Signal */}
              <TopRightSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </TopRightSvg>
              {/* Battery Indicator */}
              <TopRightSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </TopRightSvg>
            </WrapperOfTopRightIcons>
            <div className="h-0.5 w-10 mt-1.5 mr-7 bg-white rounded ml-auto" />
            {/* Lock Icon , Date & time */}
            <WrapperOfLockIconDateAndTime>
              <LockIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </LockIcon>
              <TimeText>9:41</TimeText>
              <DateText>Monday, June 7</DateText>
            </WrapperOfLockIconDateAndTime>
            {/* Notification Summary */}
            <NotificationWrapper>
              {/* Stacked panels (sitting below) */}
              <BottomPanel />
              <MidPanel />
              {/* Main, current panel */}
              <MainPanel>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold">9:30 AM</p>
                    <h2 className="text-lg font-bold">Your Morning Summary</h2>
                  </div>
                  <span className="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">11</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div>
                    <img className="rounded-lg h-24 w-full object-cover" src={imgSurferAtSunset} alt={imgAltSurferAtSunset} />
                    <h3 className="mt-2 text-xs font-bold leading-tight">Surfing: heals the soul, kills the ribs</h3>
                    <p className="mt-1 text-xs">It's all fun and thrills until you get sucked over the falls.</p>
                  </div>
                  <div>
                    <img className="rounded-lg h-24 w-full object-cover" src={imgBasketball} alt="CP3 vs the Greek Freak" />
                    <h3 className="mt-2 text-xs font-bold leading-tight">The NBA Finals are here!</h3>
                    <p className="mt-1 text-xs">Bucks vs Suns is shaping up to be a very intriguing series!</p>
                  </div>
                </div>
                <hr className="mt-4 border-black/20" />
                <div className="mt-3 grid grid-cols-3 items-end">
                  <div className="col-span-2">
                    <h3 className="text-xs font-bold">More Updates</h3>
                    <p className="mt-0.5 text-xs">Polywork, Keystone 6, and Sarah Drasner</p>
                  </div>
                  <ul className="flex -space-x-4 flex-row-reverse space-x-reverse">
                    <li>
                      <img className="h-8 w-8 rounded-xl object-cover" src="https://seeklogo.com/images/K/keystonejs-logo-C77FDB0662-seeklogo.com.png" alt="" />
                    </li>
                    <li>
                      <img className="h-8 w-8 rounded-xl object-cover" src={imgSurferAtSunset} alt={imgAltSurferAtSunset} />
                    </li>
                    <li>
                      <img className="h-8 w-8 rounded-xl object-cover" src={imgBasketball} alt={imgAltBasketball} />
                    </li>
                  </ul>
                </div>
              </MainPanel>
            </NotificationWrapper>
          </div>
          {/* Flashlight, camera and bottom swipe menu */}
          <div className="absolute bottom-0 inset-x-0 h-20">
            <div className="px-10 flex justify-between">
              <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </button>
              <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-1 inset-x-0">
              <div className="mx-auto h-1 w-28 rounded bg-white" />
            </div>
          </div>
        </PhoneShell>
      </Container>
    </div>
  )
}

export default App
