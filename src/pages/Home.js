import React, {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import { CodeBlock, CopyBlock } from 'react-code-blocks';
import Code from '../code';
function Home() {


    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success("Created a new room");
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error("Room ID & username is required!");
            return;
        }

        // redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === "Enter") {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper">

            <div className="formWrapper">
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>

                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => {setRoomId(e.target.value)}}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />

                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => {setUsername(e.target.value)}}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />

                    <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>

                    <span className="createInfo">If you don't have an invite code then&nbsp;
                        <a
                            onClick={createNewRoom}
                            href="/"
                            className="createNewBtn">create new room
                        </a>
                    </span>
                </div>
            </div>
            {/* <div className='codeBlocks' >
                <div>
                <CodeBlock
                    text={`
                    class HelloMessage extends React.Component {
                        handlePress = () => {
                          alert('Hello')
                        }
                        render() {
                          return (
                            <div>
                              <p>Hello {this.props.name}</p>
                              <button onClick={this.handlePress}>Say Hello</button>
                            </div>
                          );
                        }
                      }
                      
                      ReactDOM.render(
                        <HelloMessage name="Taylor" />,
                        mountNode
                      );
                    `}
                    language="jsx"
                    showLineNumbers={true}
                    theme="dracula"
                    wrapLines={true}
                    codeBlock
                    />
                </div>
                <div>
                <CodeBlock
                    text={  `import * as React from "react";

                    export class HelloWorld extends React.Component<any, any> {
                        render() {
                            return <div>Hello world!It's from Helloword Component.</div>;
                        }
                    }`}
                    language="tsx"
                    showLineNumbers={true}
                    theme="vs2015"
                    />
                </div>
            </div> */}


            <Code/>


        </div>
    )
}

export default Home;