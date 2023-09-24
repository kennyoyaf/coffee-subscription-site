import React from "react"
import { Orderstyled } from "./styles/Order.styled"
import line from "./assets/line.svg"
import Listen from "./Listen"
import CircleAndLine from "./CircleAndLine"

const Order = ({ button, bgcolor, h5, textcolor }) => {
  return (
    <Orderstyled bgcolor={bgcolor}>
      {h5 ? <h5>{h5}</h5> : null}
      <CircleAndLine />
      <Listen textcolor={textcolor} />
      {button ? <button>{button}</button> : null}
    </Orderstyled>
  )
}

export default Order
