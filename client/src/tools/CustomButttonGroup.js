import { Button, ButtonGroup, Form } from 'react-bootstrap'
import React, {Component} from 'react'

export default class CustomButtonGroup extends Component {
    render() {
        const {increment, player} = this.props
        return (
            <ButtonGroup className="mr-2" aria-label="First group">
                            <Button className='inc' onClick={() => increment('love', player)}>0</Button>
                            <Button className='inc' onClick={() => increment('fifteen', player)}>1</Button>
                            <Button className='inc' onClick={() => increment('thirty', player)}>2</Button>
                            <Button className='inc' onClick={() => increment('fourty', player)}>3</Button>
            </ButtonGroup>
        )
    }
}