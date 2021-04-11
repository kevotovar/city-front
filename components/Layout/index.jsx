import PropTypes from 'prop-types'
import AppBar from './AppBar'

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
