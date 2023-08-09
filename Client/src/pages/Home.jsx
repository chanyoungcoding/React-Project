import Material from '../Material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <p>HOME</p>
    <hr />
    <Material/>
    <Link to="/about">about</Link>
    </>
  )
}