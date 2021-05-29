import React, { useContext } from 'react'
import { MovieContext } from "../contexts/MovieContext";


export default function OrderPage() {
  const { getAllScreeningsForMovie } = useContext(MovieContext);

  return (
    <div>
      <h1>Order Page</h1>
    </div>
  )
}
