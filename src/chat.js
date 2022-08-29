import React, {Component} from "react";

class KommunicateChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      chat: null
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    script.async = true;
    script.onload = () => this.setState({ isLoaded: true });
    script.onerror = () => this.setState({ error: true });
    document.body.appendChild(script);
  }

  render() {
    const { isLoaded, error } = this.state;
    if (error) {
      return <div>Error loading chat</div>;
    } else if (!isLoaded) {
      return <div>Loading chat...</div>;
    } else {
      return <div id="mck-sidebox-launcher" />;
    }
  }
}

export default KommunicateChat;