import React, { Component } from 'react'
import { List, Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MusicGenreDetail extends Component {

  render() {
    let { selectedGenre } = this.props;
    return (
      <div style={{ alignItems: 'center' }}>

        <Card
          image={selectedGenre.picture_medium}
          header={item.name}
          meta={item.type}
          onClick={() => { console.log("ss") }}
        />
            )
          )
      </div>
    )
  }
}
function mapStateToProps({ genres }) {
  return {
    selectedGenre: genres.selectedGenre
  }
}

export default connect(mapStateToProps, null)(MusicGenreDetail)