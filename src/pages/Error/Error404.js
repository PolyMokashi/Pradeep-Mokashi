import React from 'react'
import Button from '@mui/material/Button'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import './Error404.css' // Import CSS file for styling

export function Error(){
    return (
        <div className="error_app">
            <div className="back">
                <body className="back_content">
                    <div className="error">
                        <div className="wrap">
                            <div className="not-found">
                                <pre>
                                    <code>
                                        <span className="orange">&lt;!</span>
                                        <span className="red">
                                            DOCTYPE html
                                        </span>
                                        <span className="orange">&gt;</span>
                                        <br />
                                        <span className="orange">
                                            &lt;html&gt;
                                        </span>
                                        <br />
                                        <span className="red">
                                            &lt;style&gt;
                                        </span>
                                        <br />* {'{'}
                                        <span className="orange">
                                            everything
                                        </span>
                                        :<span className="green">awesome</span>;
                                        {'}'}
                                        <br />
                                        <span className="red">
                                            &lt;/style&gt;
                                        </span>
                                        <br />
                                        <span className="red">
                                            &lt;body&gt;
                                        </span>
                                        <br />
                                        ERROR 404!
                                        <br />
                                        PAGE NOT FOUND!
                                        <br />
                                        <span className="comment">
                                            &lt;!--The Page you are looking for,
                                            is not available--&gt;
                                        </span>
                                    </code>
                                </pre>
                            </div>
                            <span className="info">
                                <span className="red">&lt;/body&gt;</span>
                                <br />
                                <span className="orange">&lt;/html&gt;</span>
                            </span>
                        </div>
                    </div>
                </body>
            </div>
            <div>
                <Button
                    href="/"
                    startIcon={
                        <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                    }
                >
                    Back to home
                </Button>
            </div>
        </div>
    )
}
