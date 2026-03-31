import React from 'react'
import Sort from './sort'
import Slice from './slice'
import { ArrayLength } from './arrayLenght'
import { Splice } from './splice'
import { Filter } from './filter'

const ArrayMethods = () => {
  return (
    <main>
      <Sort />
      <ArrayLength />
      <Slice />
      <Splice />
      <Filter />
    </main>
  )
}

export default ArrayMethods