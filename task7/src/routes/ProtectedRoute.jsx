import { Navigate } from 'react-router-dom'

// fake auth
const isLoggedIn = false

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return children
}

export default ProtectedRoute
