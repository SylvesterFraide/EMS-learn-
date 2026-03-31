import React from 'react'
import Sort from './sort'
import Slice from './slice'
import { ArrayLength } from './arrayLenght'
import { Splice } from './splice'

const ArrayMethods = () => {
  return (
    <main>
      <Sort />
      <ArrayLength />
      <Slice />
      <Splice />
    </main>
  )
}

export default ArrayMethods