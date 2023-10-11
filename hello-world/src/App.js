import './App.css';

let list = [
	{
		title: 'React',
		url: 'https://reactjs.org/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	},
];


function App() {
  function onButtonClick() {
	  // list.append(...)
  }

  return (
	  <div>
		<h1>Hello world</h1>
		<hr />

		<ul>
		{list.map(function (item) {
				return <li>{item.title}</li>;
			})
		}
		</ul>

		<button onClick={onButtonClick()} />
	  </div>
  );
}

export default App;
