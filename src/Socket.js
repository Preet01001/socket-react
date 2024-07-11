import {io} from "socket.io-client"
let socket = io("http://localhost:1010/");
export default socket;