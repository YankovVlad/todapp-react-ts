import { Link, Navigate, useNavigate } from "react-router-dom"
import type { RootState } from "../../app/store/store"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../../features/Counter/counterSlice"
import { useContext } from "react"
import { AuthContext } from "../../main"
import { signOut } from "firebase/auth"
import { resetUser } from "../../features/googleAuth/userSlice"

export const Homepage = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const name = useSelector((state:RootState) => state.user.name)
  const auth:any = useContext(AuthContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = async () => {
    await signOut(auth)
    await dispatch(resetUser())
    navigate('/login', {replace: true})
  }
  
  return (
    <>
    <h1>HOMEPAGE</h1>
    {!auth.currentUser && <Navigate to="/login"/>}
    <Link to="/login">Login</Link>
    <button onClick={logout}>logout</button>

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