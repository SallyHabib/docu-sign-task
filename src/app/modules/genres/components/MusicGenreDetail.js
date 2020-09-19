import React, { Component } from 'react'
import { List, Card, Image, Modal, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MusicGenreDetail extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      selectedTask: { title: '', description: '', id: null },
      open: true
    }
  }
  render() {
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
function mapStateToProps({ genres }) {
  return {
    selectedGenre: genres.selectedGenre
  }
}

export default connect(mapStateToProps, null)(MusicGenreDetail)