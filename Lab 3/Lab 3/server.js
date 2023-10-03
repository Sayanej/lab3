const connect = require('connect');
const { URL } = require('url');
function calculate(req, res) {
    const url = new URL (req.url, http://${http://localhost:3000/lab2?method=add&x=16&y=4});
    const method = url.searchParams.get('method');
    const x = parseFloat(url.searchParams.get('x'));
    const y = parseFloat(url.searchParams.get('y'));
  
    let result;
    let operation;
  
    switch (method) {
      case 'add':
        result = x + y;
        operation = '+';
        break;
      case 'subtract':
        result = x - y;
        operation = '-';
        break;
      case 'multiply':
        result = x * y;
        operation = '*';
        break;
      case 'divide':
        result = x / y;
        operation = '/';
        break;
      default:
        res.setHeader('Content-Type', 'text/html');
        res.end('Invalid method. Please provide a valid method parameter.');
        return;
    }
  
    res.setHeader('Content-Type', 'text/html');
    res.end(${x} ${operation} ${y} = ${result});
  }
  const app = connect();

app.use('/lab2', calculate);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});