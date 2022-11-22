import React from 'react'
import { css } from '@emotion/css'

const color = 'red'

const component2 = () => {
  return (
    <div
    className={css({
      backgroundColor: 'pink',
      '&:hover': {
        color
      }
    })}
  >
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid quasi labore, animi perferendis in deserunt assumenda sit cum quam magni, iusto, illo magnam quia tempore beatae recusandae nesciunt esse!
  </div>
  )
}

export default component2