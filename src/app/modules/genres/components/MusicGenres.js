import React, { Component } from 'react'
import { Card, Modal, Button, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {
  requestMusicGenres,
  getMusicGenreDetail
} from '../state/actions'

import LogoutButton from './LogoutButton';
class MusicGenres extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
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
    if (this.props.selectedGenre && this.props.selectedGenre.length > 0) {
      return (
        <Modal
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
        >
          <Modal.Header>Selected Genre Artists</Modal.Header>
          <Modal.Content>
            <Card.Group itemsPerRow={3} centered>
              {this.props.selectedGenre.map(item => {
                return (
                  <Card
                    image={item.picture_medium}
                    header={item.name}
                    meta={item.type}
                    key={item.id}
                  />
                )
              })
              }
            </Card.Group>
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
  }

  render() {
    return (
      <div >
        <div style={{ textAlign: 'right', width: '100%' }}>
          <LogoutButton />
          <Divider />
        </div>
        <div style={{ textAlign: 'center', width: '100%', marginBottom:20 }}>
        <Header as='h2'>Music Genres</Header>
        </div>
        <div>
          <Card.Group centered>
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
  selectedGenre: PropTypes.array.isRequired
}


export default connect(mapStateToProps, { requestMusicGenres, getMusicGenreDetail })(MusicGenres)