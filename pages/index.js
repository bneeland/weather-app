import { useState } from 'react'
import Head from 'next/head'
import Search from '../components/search'
import Forecast from '../components/forecast'

export default function Home() {
  const [weatherData, setWeaterData] = useState()

  function selectedLocationHandler(weatherData) {
    setWeaterData(weatherData)
  }

  return (
    <div>
      <Head>
        <title>Borealhour - weather</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex space-x-2 px-2 h-12 fixed inset-x-0 top-0 bg-white z-40 border-b">
        <div className="flex-none flex items-center">
          Borealhour
        </div>
        <div className="flex-1 flex items-center">
          <Search onSelectLocation={(weatherData) => selectedLocationHandler(weatherData)} />
        </div>
        <div className="flex-none flex items-center">
          Settings
        </div>
      </div>

      {weatherData && (
        <div className="mt-12">
          <Forecast weatherData={weatherData} />
        </div>
      )}
    </div>
  )
}
