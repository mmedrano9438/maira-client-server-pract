const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Smith' },
	{ id: 3, name: 'Bob Johnson' },
];

app.get('/', (req, res) => {});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
