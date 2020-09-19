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
    let { selectedGenre } = this.props;
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={selectedGenre.picture_xl} wrapped />
          <Modal.Description>
            <Header>{selectedGenre.name}</Header>
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
}
function mapStateToProps({ genres }) {
  return {
    selectedGenre: genres.selectedGenre
  }
}

export default connect(mapStateToProps, null)(MusicGenreDetail)