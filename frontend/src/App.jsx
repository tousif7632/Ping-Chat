// frontend/src/App.js
import React, { Component } from "react";
import PingWindow from "./PingWindow";

// Hardcoded messages
// const messages = [
//   { id: 1, text: "Hello!", ts: new Date().toISOString(), fromMe: true },
//   { id: 2, text: "Hi there!", ts: new Date().toISOString(), fromMe: false },
//   { id: 1, text: "How are you?", ts: new Date().toISOString(), fromMe: true },
//   { id: 2, text: "I'm good!", ts: new Date().toISOString(), fromMe: false },
//   { id: 1, text: "What about you?", ts: new Date().toISOString(), fromMe: true },
//   { id: 2, text: "I'm fine!", ts: new Date().toISOString(), fromMe: false },
//   { id: 1, text: "What are you doing?", ts: new Date().toISOString(), fromMe: true },
//   { id: 2, text: "I am completing an assignment.", ts: new Date().toISOString(), fromMe: false }
// ];

class App extends Component {

  state = {
    messages: []
  };

  componentDidMount() {
    this.getPingMessage();
  }

 getPingMessage = async () => {
  try {
    const url = 'http://localhost:3000/ping';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: '123',
        message: 'Hello from frontend'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch ping');
    }

    const data = await response.json();
    console.log('Ping response:', data);

    // Add this ping to messages
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        {
          id: 1,
          text: "Hi",
          ts: data.ts,
          fromMe: true
        },
        {
          id: 2,
          text: "Hello",
          ts: data.ts,
          fromMe: false
        },
        {
          id: 3,
          text: "How are you?",
          ts: data.ts,
          fromMe: true
        },
        {
          id: 4,
          text: "I am fine",
          ts: data.ts,
          fromMe: false
        },
        {
          id: 5,
          text: "What about you?",
          ts: data.ts,
          fromMe: true
        },
        {
          id: 6,
          text: "I am good",
          ts: data.ts,
          fromMe: false
        },
        {
          id: 7,
          text: "How can I help you?",
          ts: data.ts,
          fromMe: true
        },
        {
          id: 8,
          text: "Please wait a moment",
          ts: data.ts,
          fromMe: false
        },
        {
          id: 9,
          text: "What are you doing?",
          ts: data.ts,
          fromMe: true
        },
        {
          id: 10,
          text: "I am completing an assignment",
          ts: data.ts,
          fromMe: false
        },
      ]
    }));

  } catch (error) {
    console.error('Error fetching ping:', error.message);
  }
};


  render() {
    const { messages } = this.state;
    console.log(messages)

    return (
      <div>
        <h1>Tousif</h1>
        <PingWindow pings={messages} />
      </div>
    );
  }
}

export default App;
