import { Link } from "react-router-dom"
import type { RootState } from "../../app/store/store"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../../features/Counter/counterSlice"

export const Homepage = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <>
    <h1>HOMEPAGE</h1>
    <Link to="/login">Login</Link>

    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </>
  )
}