self.onmessage = ({ data }) => self.postMessage("echo:" + data);
