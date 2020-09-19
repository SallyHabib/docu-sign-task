import React, { Component } from 'react'
import { Card, Modal, Button, Divider, Header, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {
  getMusicGenres,
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
    this.props.getMusicGenres()
  }

  setSelectedItem = (task) => {
    this.setState({
      selectedTask: task
    })
  }

  renderModal() {
    const { selectedGenreArtists, loadingDetails } = this.props;
    if (selectedGenreArtists && selectedGenreArtists.length > 0) {
      return (
        <Modal
          onClose={() => this.setState({ open: false }, () => { this.props.history.goBack() })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
        >
          <Modal.Header>Selected Genre Artists</Modal.Header>
          {loadingDetails ?
            <Dimmer active>
              <Loader content='Loading' />
            </Dimmer>
            :
            <Modal.Content>
              <Card.Group itemsPerRow={3} centered>
                {selectedGenreArtists.map(item => {
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
          }
          <Modal.Actions>

            <Button
              content="ok"
              labelPosition='right'
              icon='checkmark'
              onClick={() =>
                this.setState({ open: false },
                  () => { this.props.history.push(`/genre`) })}
              positive
            />
          </Modal.Actions>
        </Modal>
      )
    }
  }

  render() {
    const { loading, genres } = this.props;
    return (
      <div>
        {
          loading ?
            <Dimmer active>
              <Loader content='Loading' />
            </Dimmer>
            :
            <div >
              <div style={{ textAlign: 'right', width: '100%' }}>
                <LogoutButton />
                <Divider />
              </div>
              <div style={{ textAlign: 'center', width: '100%', marginBottom: 20 }}>
                <Header as='h2'>Music Genres</Header>
              </div>
              <div>
                <Card.Group centered>
                  {genres.map(item => {
                    return (
                      <Card
                        image={item.picture_medium}
                        header={item.name}
                        meta={item.type}
                        key={item.id}
                        onClick={() => {
                          this.setState({ open: true },
                            () => {
                              this.props.history.push(`/genre/${item.id}`);
                              this.props.getMusicGenreDetail(item.id)
                            })
                        }}

                      />
                    )
                  })
                  }
                </Card.Group>
                {this.renderModal()}
              </div>
            </div>

        }
      </div>
    )
  }

}

function mapStateToProps({ genres }) {
  return {
    genres: genres.genres,
    loading: genres.loading,
    loadingDetails: genres.loadingDetails,
    selectedGenreArtists: genres.selectedGenreArtists
  }
}
MusicGenres.propTypes = {
  genres: PropTypes.array.isRequired
}


export default connect(mapStateToProps, { getMusicGenres, getMusicGenreDetail })(MusicGenres)
