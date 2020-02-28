// write your CatList component here

//Receives a list of cat pics from App and renders them from in a series of <img> tags

//PRESENTATIONAL COMPONENT

import React from 'react'

class CatList extends React.Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} atl={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList;