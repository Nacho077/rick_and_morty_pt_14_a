import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import styles from './Favorites.module.css'

class Favorites extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            order: "",
            filter: "",
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state);
    }

    handleChange = e => {
        let newState = {
            ...this.state,
            [e.target.name]: e.target.value
        }

        this.state = newState
        this.props.filterAndOrder(newState)
    }

    render(){
        return (
            <div>
                <div>
                    <select name="filter" onChange={this.handleChange}>
                        <option value="">All genders</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div>
                    <select name="order" onChange={this.handleChange}>
                        <option value="A">Ascendent</option>
                        <option value="D">Descendent</option>
                    </select>
                </div>
                <div className={styles.container_cards}>
                    {this.props.favs?.map(character => <Card key={character.id} character={character} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favs: state.favs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterAndOrder: (state) => dispatch(actions.filterAndOrder(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)