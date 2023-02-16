const fs = require("fs");
const http = require("http");

let users = [
  {
    name: "Ellie",
    email: "ellie@gmail.com",
    phone: "012462",
    gender: "others",
    above16: "yes",
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    phone: "09843256",
    gender: "male",
    above16: "no",
  },
  {
    name: "Joel",
    email: "joel@gmail.com",
    phone: "0154698",
    gender: "male",
    above16: "yes",
  },
  {
    name: "Ellie",
    email: "ellie@gmail.com",
    phone: "012462",
    gender: "others",
    above16: "yes",
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    phone: "09843256",
    gender: "male",
    above16: "no",
  },
  {
    name: "Joel",
    email: "joel@gmail.com",
    phone: "0154698",
    gender: "male",
    above16: "yes",
  },
  {
    name: "Ellie",
    email: "ellie@gmail.com",
    phone: "012462",
    gender: "others",
    above16: "yes",
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    phone: "09843256",
    gender: "male",
    above16: "no",
  },
  {
    name: "Joel",
    email: "joel@gmail.com",
    phone: "0154698",
    gender: "male",
    above16: "yes",
  },
  {
    name: "Ellie",
    email: "ellie@gmail.com",
    phone: "012462",
    gender: "others",
    above16: "yes",
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    phone: "09843256",
    gender: "male",
    above16: "no",
  },
  {
    name: "Joel",
    email: "joel@gmail.com",
    phone: "0154698",
    gender: "male",
    above16: "yes",
  },
];

const server = http.createServer((req, res) => {
  // Root URL
  const isRootUrl = req.url === "/";
  if (isRootUrl) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
  //   Images
  else if (req.url === "/bg-books.jpg") {
    fs.readFile("bg-books.jpg", (err, data) => {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/people-reading.jpg") {
    fs.readFile("people-reading.jpg", (err, data) => {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    });
  }

  //   Users
  else if (req.url === "/users") {
    //   GET METHOD
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(users));
      res.end();
    }
    //   POST METHOD
    else if (req.method === "POST") {
      let dataFromClient = "";
      req.on("data", (chunk) => {
        dataFromClient += chunk;
      });
      req.on("end", () => {
        users.push(JSON.parse(dataFromClient));
      });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(users));
      res.end();
      console.log(users);
    }
  } //   Member List
  else if (req.url === "/memberList.html") {
    fs.readFile("memberList.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/memberListStyle.css") {
    fs.readFile("memberListStyle.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/memberListScript.js") {
    fs.readFile("memberListScript.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
  //   Else
  else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.write("Good Luck Next Time :)");
    res.end();
  }
});

// Server Listening
server.listen(433, () => {
  console.log("Server is started: at port 433");
});
