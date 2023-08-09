import Material from '../Material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <p>HOME</p>
    <h1>state Demo</h1>
    <Material/>
    <Link to="/about">about</Link>
    </>
  )
}