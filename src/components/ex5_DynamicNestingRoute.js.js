import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import Item from './Item'

export default function Category() {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/A`}>A</Link>
                </li>
                <li>
                    <Link to={`${url}/B`}>B</Link>
                </li>
                <li>
                    <Link to={`${url}/C`}>C</Link>
                </li>
            </ul>

            <Route path={`${path}/:name`}>
                <Item/>
            </Route>
        </div>
    )
}

