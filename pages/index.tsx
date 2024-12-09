
import React from 'react'
import Hero from './components/Hero'
import BestOfAir from './BestOfAir/page'
import Featured from './Featured/page'
import Gearup from './Gearup/page'
import Dont from './Dont/page'
import Essentials from './Essentials/page'


const index = () => {
  return (
    <div>

      <Hero/>
      <BestOfAir></BestOfAir>
      <Featured></Featured>
      <Gearup></Gearup>
      <Dont></Dont>
      <Essentials></Essentials>

    </div>
  )
}

export default index

