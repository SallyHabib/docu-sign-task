import React, { Component } from 'react'
import { Card, Image, Modal, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {
  requestMusicGenres,
  getMusicGenreDetail
} from '../state/actions'

class MusicGenres extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      selectedTask: { title: '', description: '', id: null },
      open: false
    }
  }
  componentDidMount() {
    this.props.requestMusicGenres()
  }

  setSelectedItem = (task) => {
    this.setState({
      selectedTask: task
    })
  }

  renderModal() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={this.props.selectedGenre.picture_xl} wrapped />
          <Modal.Description>
            <Header>{this.props.selectedGenre.name}</Header>
            <p>This is music Genre</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>

          <Button
            content="ok"
            labelPosition='right'
            icon='checkmark'
            onClick={() => this.setState({ open: false })}
            positive
          />
        </Modal.Actions>
      </Modal>
    )
  }

  render() {
    return (
      <div style={{ alignItems: 'center' }}>
        <Card.Group>
          {this.props.genres.map(item => {
            return (
              <Card
                image={item.picture_medium}
                header={item.name}
                meta={item.type}
                key={item.id}
                onClick={() => this.setState({ open: true }, () => { this.props.getMusicGenreDetail(item.id) })}

              />
            )
          })
          }
        </Card.Group>
        {this.renderModal()}
      </div>
    )
  }
}
function mapStateToProps({ genres }) {
  return {
    genres: genres.genres,
    selectedGenre: genres.selectedGenre
  }
}
MusicGenres.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenre: PropTypes.object.isRequired
}


export default connect(mapStateToProps, { requestMusicGenres, getMusicGenreDetail })(MusicGenres)