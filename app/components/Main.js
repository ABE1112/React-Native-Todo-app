import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Note from './Note'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {noteArray: [], noteText: ''
    }
  }

  render () {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={() => this.deleteMethod(key)} />
    })

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text styles={styles.headerText}>- Make Your Notes -</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Enter'
            placeholderTextColor='white'
            underlineColorAndroid='transparent' />

        </View>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

      </View>

    )
  }

  addNote () {
    if (this.state.noteText) {
      var d = new Date()
      this.state.noteArray.push({
        'date': d.getFullYear() +
        '/' + (d.getMonth() + 1) +
        '/' + d.getDate(),
        'note': this.state.noteText
      })
      this.setState({ noteArray: this.state.noteArray })
      this.setState({noteText: ''})
    }
  }

  deleteMethod (key) {
    this.state.noteArray.splice(key, 1)
    this.setState({ noteArray: this.state.noteArray })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#f0fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
    flex: 0.2
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#f0fc',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
})
