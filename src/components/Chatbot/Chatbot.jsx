import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

function setupProxy() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
}


const App = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [conversationStarted, setConversationStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setupProxy();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);


  const sendMessage = async (message) => {
    try {
        setIsLoading(true);
        const response = await axios.post('https://backend.mamapesa.com/accounts/chat/', {
            query: message
        }, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token b4aa4aa765bbf78b632804796d5145881893a86e'
            }
        });
        console.log(response.data);
        setMessages((prevMessages) => [...prevMessages, { isUser: false, text: response.data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (text.trim()) {
      setMessages([...messages, { isUser: true, text }]);
      sendMessage(text);
      setText('');
    }
  };


  const handleFilePick = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsFileUploading(true);
      // Placeholder for file upload logic
      console.log('Uploading file:', file);
      setIsFileUploading(false);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('chat-overlay')) {
      toggleChat();
    }
  };

  return (
    <>
      {isChatOpen && (
        <div className="chat-overlay" onClick={handleOverlayClick}>
          <Container className="app animate-fadeIn" style={styles.chatContainer}>
            <header className="bg-maroon text-white p-3 rounded" style={styles.chatHeader}>
              <Row className="align-items-center">
                <Col>
                  <h1 className="m-0" style={{ fontFamily: 'Montserratbold', fontSize: 20 }}>
                    MamaPesa AI
                  </h1>
                </Col>
                <Col xs="auto">
                  <Button variant="link" onClick={toggleChat} style={styles.closeButton}>
                    <i className="bi bi-x-lg text-white"></i>
                  </Button>
                </Col>
              </Row>
            </header>
            <main className="d-flex flex-column mt-3" style={styles.mainContent}>
              <div className="border rounded p-3 mb-3 flex-grow-1" style={styles.chatBody} ref={scrollRef}>
                {!conversationStarted && (
                  <div className="text-center">
                    <i className="bi bi-chat-left-text display-3 text-primary"></i>
                    <h2 className="mt-3">MamaPesa AI Chat Active!</h2>
                    <p className="text-muted">
                      Welcome to MamaPesa AI, your financial assistant. Feel free to ask anything. Type /start to begin interacting with MamaPesa Assistant.
                    </p>
                  </div>
                )}
                {conversationStarted && messages.length > 0 && (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`d-flex ${message.isUser ? 'justify-content-end' : 'justify-content-start'} mb-2`}
                    >
                      <div
                        className={`p-3 rounded ${message.isUser ? 'bg-light' : 'bg-secondary text-white'}`}
                      >
                        {message.file ? (
                          <div>
                            <p>File: {message.file.name}</p>
                            {isFileUploading && <Spinner animation="border" size="sm" />}
                          </div>
                        ) : (
                          <p className="m-0">{message.text}</p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
              {isLoading && (
                <div className="d-flex align-items-center mb-2">
                  <Spinner animation="border" size="sm" />
                  <span className="ms-2">Typing...</span>
                </div>
              )}
            </main>
            <div style={styles.inputContainer}>
              <InputGroup className="mb-3" style={styles.inputGroup}>
                <Form.Control
                  placeholder="Type a message..."
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    if (!conversationStarted && e.target.value.trim()) {
                      setConversationStarted(true);
                    }
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSend();
                    }
                  }}
                  ref={inputRef}
                />
                <Button variant="outline-secondary" onClick={() => fileInputRef.current.click()}>
                  <i className="bi bi-paperclip"></i>
                </Button>
                <input
                  type="file"
                  onChange={handleFilePick}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <Button variant="primary" onClick={handleSend}>
                  <i className="bi bi-send"></i>
                </Button>
              </InputGroup>
            </div>
          </Container>
        </div>
      )}
      {!isChatOpen && (
        <Button className="fixed-bottom-right" onClick={toggleChat} style={styles.toggleButton}>
          <i className="bi bi-chat-dots"></i>
        </Button>
      )}
      <style jsx="true">{`
        .bg-maroon {
          background-color: maroon;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .chat-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fixed-bottom-right {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1001;
        }

        .transition-transform {
          transition: transform 0.3s;
        }

        .transform:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

const styles = {
  chatContainer: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    maxWidth: 'none',
    maxHeight: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    position: 'relative',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chatBody: {
    flex: 1,
    overflowY: 'auto',
  },
  inputContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'white',
    padding: '10px 20px',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    zIndex: 1000,
  },
  toggleButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1001,
    backgroundColor: 'maroon',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    color: 'white',
    fontSize: '1.5rem',
  },
  closeButton: {
    fontSize: '1.25rem',
  },
};



export default App;
