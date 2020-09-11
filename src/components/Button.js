import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default class Button extends Component {
    static contextType = LanguageContext

    render() {
        return (
            <button className='ui button primary'>
                Submit
            </button>
        )
    }
}