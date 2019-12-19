import React, { memo } from 'react'
import { Link } from 'react-router-dom'

export default memo(function Sider() {
    return (
        <div className="route">
            <Link to="/home">首页</Link>
            <Link to="/child">孩子</Link>
            <Link to="/other">其他</Link>
            <Link to="/set">设置</Link>
        </div>
    )
})
