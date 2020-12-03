import React, { Component } from 'react'
import Invitations from './Invitations'
import ManageMyNetwork from './ManageMyNetwork'

export default class MyConnections extends Component {
    render() {
        return (
            <div>
                <div className=" d-flex mt-5 justify-content-center">
                    <ManageMyNetwork />
                    <Invitations />
                </div>
            </div>
        )
    }
}
