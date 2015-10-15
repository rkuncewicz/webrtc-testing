# WebRTC Testing

This project is for just screwing around with webrtc. Uses http-server to run a simple static server to develop on. 

`http-server` is a simple, zero-configuration command-line http server.  It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

# Installing globally:

Installation via `npm`.  If you don't have `npm` yet:

     curl https://npmjs.org/install.sh | sh

Once you have `npm`:

     npm install http-server -g

This will install `http-server` globally so that it may be run from the command line.

## Usage:

     http-server [path] [options]

`[path]` defaults to `./public` if the folder exists, and `./` otherwise.

This will run the server on localhost:8080 which will allow you to access the files in `public`
