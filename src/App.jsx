import React, { useEffect, useState } from 'react'

const App = () => {
  const [red, setred] = useState(true);
  const [yellow, setyellow] = useState(false);
  const [green, setgreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (red) {
        setred(false);
        setyellow(true);
        setgreen(false);
      } else if (yellow) {
        setred(false);
        setyellow(false);
        setgreen(true);
      } else if (green) {
        setred(true);
        setyellow(false);
        setgreen(false);
      }
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [red, yellow, green]);

  return (
    <>
    <div className='flex justify-center items-center w-full h-[100vh] bg-gray-200'>
      <div className='bg-black w-20 h-52 flex flex-col justify-center items-center gap-2'>
        <div className={`${red ? 'bg-red-600' : 'bg-white'} w-14 h-14 rounded-full`}></div>
        <div className={`bg-white ${yellow ? 'bg-yellow-600' : 'bg-white'} w-14 h-14 rounded-full`}></div>
        <div className={`bg-white ${green ? 'bg-green-600' : 'bg-white'} w-14 h-14 rounded-full`}></div>
      </div>
    </div>
    </>
  )
}

export default App;