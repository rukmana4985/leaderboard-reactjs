import  React, {Component} from 'react'

export  default class AddPlayers extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : ""
        }

        this.onPlayerChange = this.onPlayerChange.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    onPlayerChange(event){
        this.setState({
          name : event.target.value  
        })
    }
    addPlayer(event){
        this.props.onAdd(this.state.name)
        this.setState({
            name : ""
        })
    }
    render(){
        const container = {
            padding : 10
        }

        const input = {
            flex: 1,
            paddingRight: 20,
            width : "45%",
            height : 27,

        }

        const button = {
            float : "right",
            marginRight: 80,
            width :120,
            padding:10
        }
        return(
            <div style={container}>
                <input style={input} onChange={this.onPlayerChange} value={this.state.name} type="text" placeholder="Add New Player Coy"/>
                <button style={button} onClick={this.addPlayer}>Add Player</button>
            </div>
        )
    }
}