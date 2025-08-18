import PropTypes from 'prop-types'
import { Button } from './styles.js'

function DefaultButton({ children, ...props }) {

    return (
        <Button {...props}>{children}</Button>
    )
}

DefaultButton.prototype = {
    children: PropTypes.node.isRequired
}

export default DefaultButton