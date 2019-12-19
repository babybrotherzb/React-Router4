import React, { memo ,useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { withRouter} from 'react-router-dom'

export default memo(withRouter(function Index(props) {
    console.log(props.route.routes,'props.route.routes')
        useEffect(() => {
            if(props.location.pathname === '/child'){
                props.history.push('/child/first')
            }
            
        }, [props.location.pathname])
    return (
        <div>
            <div className="secondroute">
            <Link to="/child/first">第一个孩子</Link>
            <Link to="/child/second">第二个孩子</Link>
            </div>
            <div className="content">
                {renderRoutes(props.route.routes)}
            </div>
        </div>
    )
}))
