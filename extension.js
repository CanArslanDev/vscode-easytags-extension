// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "html-bootstrap-easytags" is now active!');
	// Hello World QuickPick panelini açan komutu oluşturalım
	let disposable = vscode.commands.registerCommand('html-bootstrap-easytags.bootstrapCodes', async () => {
		const selectedValue = await vscode.window.showQuickPick(['BS5 Home Page', 'BS5 Containers', 'BS5 Grid Basic', 'BS5 Typography', 'BS5 Colors', 'BS5 Tables', 'BS5 Images', 'BS5 Jumbotron', 'BS5 Alerts', 'BS5 Buttons', 'BS5 Button Groups', 'BS5 Badges', 'BS5 Progress Bars', 'BS5 Spinners', 'BS5 Pagination', 'BS5 List Groups', 'BS5 Cards', 'BS5 Dropdowns', 'BS5 Collapse', 'BS5 Navs', 'BS5 Navbar', 'BS5 Carousel', 'BS5 Modal', 'BS5 Tooltip', 'BS5 Popover', 'BS5 Toast', 'BS5 Scrollspy', 'BS5 Offcanvas', 'BS5 Utilities', 'BS5 Flex', 'BS5 Forms', 'BS5 Select Menus', 'BS5 Checks and Radios', 'BS5 Range', 'BS5 Input Groups', 'BS5 Floating Labels', 'BS5 Form Validation', 'BS5 Grid','BS5 Footers'], {
			canPickMany: false,
			placeHolder: 'Select a value'
		});

		if (selectedValue === 'BS5 Home Page') {
			const selectedValue1 = await vscode.window.showQuickPick(['Null Template', 'Example Home Page', 'Basic Template'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Null Template') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!DOCTYPE html>
				<html lang="en">
				
				<head>
					<title>Bootstrap Example</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
					<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
				</head>
				
				<body>
				
				</body>
				
				</html>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Example Home Page') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-fluid p-5 bg-primary text-white text-center">
				<h1>My First Bootstrap Page</h1>
				<p>Resize this responsive page to see the effect!</p> 
			  </div>
				
			  <div class="container mt-5">
				<div class="row">
				  <div class="col-sm-4">
					<h3>Column 1</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
				  </div>
				  <div class="col-sm-4">
					<h3>Column 2</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
				  </div>
				  <div class="col-sm-4">
					<h3>Column 3</h3>        
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
				  </div>
				</div>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Basic Template') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!DOCTYPE html>
				<html lang="en">
				<head>
				  <title>Bootstrap 5 Website Example</title>
				  <meta charset="utf-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1">
				  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
				  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
				  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
				  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
				  <style>
				  .fakeimg {
					height: 200px;
					background: #aaa;
				  }
				  </style>
				</head>
				<body>
				
				<div class="p-5 bg-primary text-white text-center">
				  <h1>My First Bootstrap 5 Page</h1>
				  <p>Resize this responsive page to see the effect!</p> 
				</div>
				
				<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				  <div class="container-fluid">
					<ul class="navbar-nav">
					  <li class="nav-item">
						<a class="nav-link active" href="#">Active</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					  </li>
					</ul>
				  </div>
				</nav>
				
				<div class="container mt-5">
				  <div class="row">
					<div class="col-sm-4">
					  <h2>About Me</h2>
					  <h5>Photo of me:</h5>
					  <div class="fakeimg">Fake Image</div>
					  <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
					  <h3 class="mt-4">Some Links</h3>
					  <p>Lorem ipsum dolor sit ame.</p>
					  <ul class="nav nav-pills flex-column">
						<li class="nav-item">
						  <a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
						  <a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
						  <a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
						  <a class="nav-link disabled" href="#">Disabled</a>
						</li>
					  </ul>
					  <hr class="d-sm-none">
					</div>
					<div class="col-sm-8">
					  <h2>TITLE HEADING</h2>
					  <h5>Title description, Dec 7, 2020</h5>
					  <div class="fakeimg">Fake Image</div>
					  <p>Some text..</p>
					  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
				
					  <h2 class="mt-5">TITLE HEADING</h2>
					  <h5>Title description, Sep 2, 2020</h5>
					  <div class="fakeimg">Fake Image</div>
					  <p>Some text..</p>
					  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
					</div>
				  </div>
				</div>
				
				<div class="mt-5 p-4 bg-dark text-white text-center">
				  <p>Footer</p>
				</div>
				
				</body>
				</html>
				`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Containers') {

			const selectedValue1 = await vscode.window.showQuickPick(['Fixed Container', 'Fluid Container', 'Container Padding', 'Container Border and Color', 'Responsive Containers'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Fixed Container') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container">
				<h1>My First Bootstrap Page</h1>
				<p>This part is inside a .container class.</p>
				<p>The .container class provides a responsive fixed width container.</p>
				<p>Resize the browser window to see that the container width will change at different breakpoints.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Fluid Container') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-fluid">
				<h1>My First Bootstrap Page</h1>
				<p>This part is inside a .container-fluid class.</p>
				<p>The .container-fluid class provides a full width container, spanning the entire width of the viewport.</p>     
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Container Padding') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container pt-5">
				<h1>My First Bootstrap Page</h1>
				<p>This container has an extra top padding.</p>
				<p>Try to remove the .pt-5 class to see the difference.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Container Border and Color') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container p-5 my-5 border">
				<h1>My First Bootstrap Page</h1>
				<p>This container has a border and some extra padding and margins.</p>
			  </div>
			  
			  <div class="container p-5 my-5 bg-dark text-white">
				<h1>My First Bootstrap Page</h1>
				<p>This container has a dark background color and a white text, and some extra padding and margins.</p>
			  </div>
			  
			  <div class="container p-5 my-5 bg-primary text-white">
				<h1>My First Bootstrap Page</h1>
				<p>This container has a blue background color and a white text, and some extra padding and margins.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Containers') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-sm border">.container-sm</div>
				<div class="container-md mt-3 border">.container-md</div>
				<div class="container-lg mt-3 border">.container-lg</div>
				<div class="container-xl mt-3 border">.container-xl</div>
				<div class="container-xxl mt-3 border">.container-xxl</div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Grid Basic') {
			const selectedValue1 = await vscode.window.showQuickPick(['Three Equal Columns', 'Responsive Columns', 'Two Unequal Responsive Columns',], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Three Equal Columns') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-fluid mt-3">
				<h1>Three equal width columns</h1>
				<p>Note: Try to add a new div with class="col" inside the row class - this will create four equal-width columns.</p>
				<div class="row">
				  <div class="col p-3 bg-primary text-white">.col</div>
				  <div class="col p-3 bg-dark text-white">.col</div>
				  <div class="col p-3 bg-primary text-white">.col</div>
				</div>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Columns') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-fluid mt-3">
				<h1>Responsive Columns</h1>
				<p>Resize the browser window to see the effect.</p>
				<p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
				<div class="row">
				  <div class="col-sm-3 p-3 bg-primary text-white">.col</div>
				  <div class="col-sm-3 p-3 bg-dark text-white">.col</div>
				  <div class="col-sm-3 p-3 bg-primary text-white">.col</div>
				  <div class="col-sm-3 p-3 bg-dark text-white">.col</div>
				</div>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Two Unequal Responsive Columns') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-fluid mt-3">
				<h1>Two Unequal Responsive Columns</h1>
				<p>Resize the browser window to see the effect.</p>
				<p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
				<div class="row">
				  <div class="col-sm-4 p-3 bg-primary text-white">.col</div>
				  <div class="col-sm-8 p-3 bg-dark text-white">.col</div>
				</div>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Typography') {
			const selectedValue1 = await vscode.window.showQuickPick(['H1-H6 Tags', 'Display Headings', 'Small Tags', 'Mark Tags', 'Abbr Tags', 'Blockquote Tags', 'Dl Tags', 'Code Tags', 'Kbd Tags', 'Pre Tags', 'Other Tags'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'H1-H6 Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<h1>h1 Bootstrap heading</h1>
				<h2>h2 Bootstrap heading</h2>
				<h3>h3 Bootstrap heading</h3>
				<h4>h4 Bootstrap heading</h4>
				<h5>h5 Bootstrap heading</h5>
				<h6>h6 Bootstrap heading</h6>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Display Headings') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Display Headings</h1>
				<p>Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight):</p>
				<h1 class="display-1">Display 1</h1>
				<h1 class="display-2">Display 2</h1>
				<h1 class="display-3">Display 3</h1>
				<h1 class="display-4">Display 4</h1>
				<h1 class="display-5">Display 5</h1>
				<h1 class="display-6">Display 6</h1>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Small Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Smaller, Secondary Text</h1>
				<p>The small element (and the .small class) is used to create a smaller, secondary text in any heading:</p>       
				<h1>h1 heading <small>secondary text</small></h1>
				<h2>h2 heading <small>secondary text</small></h2>
				<h3>h3 heading <small>secondary text</small></h3>
				<h4>h4 heading <small>secondary text</small></h4>
				<h5>h5 heading <small>secondary text</small></h5>
				<h6>h6 heading <small>secondary text</small></h6>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Mark Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Highlight Text</h1>    
				<p>Use the mark element (or the .mark class) to <mark>highlight</mark> text.</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Abbr Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Abbreviations</h1>
				<p>The abbr element is used to mark up an abbreviation or acronym:</p>
				<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Blockquote Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Blockquotes</h1>
				<p>The blockquote element is used to present content from another source:</p>
				<blockquote class="blockquote">
				  <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
				  <footer class="blockquote-footer">From WWF's website</footer>
				</blockquote>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dl Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Description Lists</h1>    
				<p>The dl element indicates a description list:</p>
				<dl>
				  <dt>Coffee</dt>
				  <dd>- black hot drink</dd>
				  <dt>Milk</dt>
				  <dd>- white cold drink</dd>
				</dl>     
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Code Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Code Snippets</h1>
				<p>Inline snippets of code should be embedded in the code element:</p>
				<p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Kbd Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Keyboard Inputs</h1>
				<p>To indicate input that is typically entered via the keyboard, use the kbd element:</p>
				<p>Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Pre Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Multiple Code Lines</h1>
				<p>For multiple lines of code, use the pre element:</p>
				<pre>
				Text in a pre element
				is displayed in a fixed-width
				font, and it preserves
				both      spaces and
				line breaks.
				</pre>
				</div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Other Tags') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<p class="lead">This paragraph stands out.</p>
				<p class="text-start">Left-aligned text.</p>
				<p class="text-end">Right-aligned text.</p>      
				<p class="text-center">Center-aligned text.</p>
				<p class="text-nowrap">No wrap text. No wrap text. No wrap text. No wrap text.</p>
				  <p class="text-break">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
  <p>Without .text-break:</p>
  <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
  <a href="#" class="text-decoration-none">A link without underline.</a>
  <p class="text-lowercase">Lowercased text.</p>
  <p class="text-uppercase">Uppercased text.</p>      
  <p class="text-capitalize">Capitalized text.</p>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948. (normal abbr)</p>      
  <p>The <abbr title="World Health Organization" class="initialism">WHO</abbr> was founded in 1948. (slightly smaller abbr)</p>
  <ul class="list-unstyled">
    <li>Coffee</li>
    <li>Tea
      <ul>
        <li>Black tea</li>
        <li>Green tea</li>
      </ul>
    </li>
    <li>Milk</li>
  </ul>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Colors') {
			const selectedValue1 = await vscode.window.showQuickPick(['Text Colors', 'Opacity Text Colors', 'Background Colors', 'Background Color with Contrasting Text Color'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Text Colors') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Contextual Colors</h2>
				<p>Use the contextual classes to provide "meaning through colors":</p>
				<p class="text-muted">This text is muted.</p>
				<p class="text-primary">This text is important.</p>
				<p class="text-success">This text indicates success.</p>
				<p class="text-info">This text represents some information.</p>
				<p class="text-warning">This text represents a warning.</p>
				<p class="text-danger">This text represents danger.</p>
				<p class="text-secondary">Secondary text.</p>
				<p class="text-dark">This text is dark grey.</p>
				<p class="text-body">Default body color (often black).</p>
				<p class="text-light">This text is light grey (on white background).</p>
				<p class="text-white">This text is white (on white background).</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Opacity Text Colors') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Opacity Text Colors</h2>
				<p>Add 50% opacity for black or white text with the .text-black-50 or .text-white-50 classes:</p>
				<p class="text-black-50">Black text with 50% opacity on white background</p>
				<p class="text-white-50 bg-dark">White text with 50% opacity on black background</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Background Colors') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Contextual Backgrounds</h2>
				<p>Use the contextual background classes to provide "meaning through colors".</p>
				<div class="bg-primary p-3"></div>
				<div class="bg-success p-3"></div>
				<div class="bg-info p-3"></div>
				<div class="bg-warning p-3"></div>
				<div class="bg-danger p-3"></div>
				<div class="bg-secondary p-3"></div>
				<div class="bg-dark p-3"></div>
				<div class="bg-light p-3"></div>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Background Color with Contrasting Text Color') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Background Color with Contrasting Text Color</h2>
				<p class="text-bg-primary">This text is important.</p>
				<p class="text-bg-success">This text indicates success.</p>
				<p class="text-bg-info">This text represents some information.</p>
				<p class="text-bg-warning">This text represents a warning.</p>
				<p class="text-bg-danger">This text represents danger.</p>
				<p class="text-bg-secondary">Secondary background color.</p>
				<p class="text-bg-dark">Dark grey background color.</p>
				<p class="text-bg-light">Light grey background color.</p>
			  </div>`;
				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Tables') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Table', 'Striped Rows', 'Bordered Table', 'Hover Rows', 'Black/Dark Table', 'Dark Striped Table', 'Hoverable Dark Table', 'Borderless Table', 'Contextual Classes', 'Table Head Colors', 'Small Table', 'Responsive Table'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Basic Table</h2>
				<p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>            
				<table class="table">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Striped Rows') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Striped Rows</h2>
				<p>The .table-striped class adds zebra-stripes to a table:</p>            
				<table class="table table-striped">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Bordered Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Bordered Table</h2>
				<p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
				<table class="table table-bordered">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Hover Rows') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Hover Rows</h2>
				<p>The .table-hover class enables a hover state (grey background on mouse over) on table rows:</p>            
				<table class="table table-hover">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Black/Dark Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Black/Dark Table</h2>
				<p>The .table-dark class adds a black background to the table:</p>            
				<table class="table table-dark">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dark Striped Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dark Striped Table</h2>
				<p>Combine .table-dark and .table-striped to create a dark, striped table:</p>            
				<table class="table table-dark table-striped">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Hoverable Dark Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Hoverable Dark Table</h2>
				<p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>            
				<table class="table table-dark table-hover">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Borderless Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Borderless Table</h2>
				<p>The .table-borderless class removes borders from the table:</p>            
				<table class="table table-borderless">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Contextual Classes') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Contextual Classes</h2>
				<p>Contextual classes can be used to color the table, table rows or table cells. The classes that can be used are: .table-primary, .table-success, .table-info, .table-warning, .table-danger, .table-active, .table-secondary, .table-light and .table-dark:</p>
				<table class="table">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>Default</td>
					  <td>Defaultson</td>
					  <td>def@somemail.com</td>
					</tr>      
					<tr class="table-primary">
					  <td>Primary</td>
					  <td>Joe</td>
					  <td>joe@example.com</td>
					</tr>
					<tr class="table-success">
					  <td>Success</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr class="table-danger">
					  <td>Danger</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr class="table-info">
					  <td>Info</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
					<tr class="table-warning">
					  <td>Warning</td>
					  <td>Refs</td>
					  <td>bo@example.com</td>
					</tr>
					<tr class="table-active">
					  <td>Active</td>
					  <td>Activeson</td>
					  <td>act@example.com</td>
					</tr>
					<tr class="table-secondary">
					  <td>Secondary</td>
					  <td>Secondson</td>
					  <td>sec@example.com</td>
					</tr>
					<tr class="table-light">
					  <td>Light</td>
					  <td>Angie</td>
					  <td>angie@example.com</td>
					</tr>
					<tr class="table-dark">
					  <td>Dark</td>
					  <td>Bo</td>
					  <td>bo@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Table Head Colors') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Table Head Colors</h2>
				<p>You can use any of the contextual classes to only add a color to the table header:</p>
				<table class="table">
				  <thead class="table-dark">
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
				<table class="table">
				  <thead class="table-success">
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Small Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Small Table</h2>
				<p>The .table-sm class makes the table smaller by cutting cell padding in half:</p>
				<table class="table table-bordered table-sm">
				  <thead>
					<tr>
					  <th>Firstname</th>
					  <th>Lastname</th>
					  <th>Email</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>John</td>
					  <td>Doe</td>
					  <td>john@example.com</td>
					</tr>
					<tr>
					  <td>Mary</td>
					  <td>Moe</td>
					  <td>mary@example.com</td>
					</tr>
					<tr>
					  <td>July</td>
					  <td>Dooley</td>
					  <td>july@example.com</td>
					</tr>
				  </tbody>
				</table>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Table') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Responsive Table</h2>
				<p>The .table-responsive class adds a scrollbar to the table when needed:</p>
				
				<div class="table-responsive">
				  <table class="table table-bordered">
					<thead>
					  <tr>
						<th>#</th>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Age</th>
						<th>City</th>
						<th>Country</th>
						<th>Sex</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
						<th>Example</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>1</td>
						<td>Anna</td>
						<td>Pitt</td>
						<td>35</td>
						<td>New York</td>
						<td>USA</td>
						<td>Female</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
					  </tr>
					</tbody>
				  </table>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Images') {

			const selectedValue1 = await vscode.window.showQuickPick(['Rounded Corners', 'Circle Image', 'Thumbnail Image', 'Aligning Images', 'Centered Image', 'Responsive Images'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Rounded Corners') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Rounded Corners</h2>
				<p>The .rounded class adds rounded corners to an image:</p>            
				<img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre" width="304" height="236"> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Circle Image') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Circle</h2>
				<p>The .rounded-circle class shapes the image to a circle:</p>            
				<img src="cinqueterre.jpg" class="rounded-circle" alt="Cinque Terre" width="304" height="236"> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Thumbnail Image') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Thumbnail</h2>
				<p>The .img-thumbnail class creates a thumbnail of the image:</p>            
				<img src="cinqueterre.jpg" class="img-thumbnail" alt="Cinque Terre" width="304" height="236"> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Aligning Images') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Aligning images</h2>
				<p>Use the float classes to float the image to the left or to the right:</p> 
				<img src="paris.jpg" class="float-start" alt="Paris" width="304" height="236"> 
				<img src="paris.jpg" class="float-end" alt="Paris" width="304" height="236"> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Centered Image') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Centered Image</h2>
				<p>Center an image by adding the utility classes .mx-auto (margin:auto) and .d-block (display:block) to the image:</p> 
				<img src="paris.jpg" class="mx-auto d-block" style="width:50%"> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Images') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Image</h2>
				<p>The .img-fluid class makes the image scale nicely to the parent element (resize the browser window to see the effect):</p>
				<img class="img-fluid" src="ny.jpg" alt="New York" width="1100" height="500"> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Jumbotron') {

			const selectedValue1 = await vscode.window.showQuickPick(['Jumbotron Example'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Jumbotron Example') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="mt-4 p-5 bg-primary text-white rounded">
				<h1>Jumbotron Example</h1> 
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p> 
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Alerts') {

			const selectedValue1 = await vscode.window.showQuickPick(['Default Alerts', 'Alert Links', 'Closing Alerts', 'Animated Alerts'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Default Alerts') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Alerts</h2>
				<p>Alerts are created with the .alert class, followed by a contextual color classes:</p>
				<div class="alert alert-success">
				  <strong>Success!</strong> This alert box could indicate a successful or positive action.
				</div>
				<div class="alert alert-info">
				  <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
				</div>
				<div class="alert alert-warning">
				  <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
				</div>
				<div class="alert alert-danger">
				  <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
				</div>
				<div class="alert alert-primary">
				  <strong>Primary!</strong> Indicates an important action.
				</div>
				<div class="alert alert-secondary">
				  <strong>Secondary!</strong> Indicates a slightly less important action.
				</div>
				<div class="alert alert-dark">
				  <strong>Dark!</strong> Dark grey alert.
				</div>
				<div class="alert alert-light">
				  <strong>Light!</strong> Light grey alert.
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Alert Links') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Alert Links</h2>
				<p>Add the alert-link class to any links inside the alert box to create "matching colored links".</p>
				<div class="alert alert-success">
				  <strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-info">
				  <strong>Info!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-warning">
				  <strong>Warning!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-danger">
				  <strong>Danger!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-primary">
				  <strong>Primary!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-secondary">
				  <strong>Secondary!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-dark">
				  <strong>Dark!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
				<div class="alert alert-light">
				  <strong>Light!</strong> You should <a href="#" class="alert-link">read this message</a>.
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Closing Alerts') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Alerts</h2>
				<p>The button with class="btn-close" and data-bs-dismiss="alert" is used to close the alert box.</p>
				<p>The alert-dismissible class aligns the button to the right.</p>
				<div class="alert alert-success alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Success!</strong> This alert box could indicate a successful or positive action.
				</div>
				<div class="alert alert-info alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
				</div>
				<div class="alert alert-warning alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
				</div>
				<div class="alert alert-danger alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
				</div>
				<div class="alert alert-primary alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Primary!</strong> Indicates an important action.
				</div>
				<div class="alert alert-secondary alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Secondary!</strong> Indicates a slightly less important action.
				</div>
				<div class="alert alert-dark alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Dark!</strong> Dark grey alert.
				</div>
				<div class="alert alert-light alert-dismissible">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Light!</strong> Light grey alert.
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Animated Alerts') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Animated Alerts</h2>
				<p>The .fade and .show classes adds a fading effect when closing the alert message.</p>
				<div class="alert alert-success alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Success!</strong> This alert box could indicate a successful or positive action.
				</div>
				<div class="alert alert-info alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
				</div>
				<div class="alert alert-warning alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
				</div>
				<div class="alert alert-danger alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
				</div>
				<div class="alert alert-primary alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Primary!</strong> Indicates an important action.
				</div>
				<div class="alert alert-secondary alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Secondary!</strong> Indicates a slightly less important action.
				</div>
				<div class="alert alert-dark alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Dark!</strong> Dark grey alert.
				</div>
				<div class="alert alert-light alert-dismissible fade show">
				  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
				  <strong>Light!</strong> Light grey alert.
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Buttons') {

			const selectedValue1 = await vscode.window.showQuickPick(['Default Buttons', 'Button Outline', 'Button Sizes', 'Block Level Buttons', 'Active/Disabled Buttons', 'Spinner Buttons',], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Default Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Button Styles</h2>
				<button type="button" class="btn">Basic</button>
				<button type="button" class="btn btn-primary">Primary</button>
				<button type="button" class="btn btn-secondary">Secondary</button>
				<button type="button" class="btn btn-success">Success</button>
				<button type="button" class="btn btn-info">Info</button>
				<button type="button" class="btn btn-warning">Warning</button>
				<button type="button" class="btn btn-danger">Danger</button>
				<button type="button" class="btn btn-dark">Dark</button>
				<button type="button" class="btn btn-light">Light</button>
				<button type="button" class="btn btn-link">Link</button>      
				<a href="#" class="btn btn-success">Link Button</a>
				<button type="button" class="btn btn-success">Button</button>
				<input type="button" class="btn btn-success" value="Input Button">
				<input type="submit" class="btn btn-success" value="Submit Button">
				<input type="reset" class="btn btn-success" value="Reset Button">
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Button Outline') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Button Outline</h2>
				<button type="button" class="btn btn-outline-primary">Primary</button>
				<button type="button" class="btn btn-outline-secondary">Secondary</button>
				<button type="button" class="btn btn-outline-success">Success</button>
				<button type="button" class="btn btn-outline-info">Info</button>
				<button type="button" class="btn btn-outline-warning">Warning</button>
				<button type="button" class="btn btn-outline-danger">Danger</button>
				<button type="button" class="btn btn-outline-dark">Dark</button>
				<button type="button" class="btn btn-outline-light text-dark">Light</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Button Sizes') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Button Sizes</h2>
				<button type="button" class="btn btn-primary btn-lg">Large</button>
				<button type="button" class="btn btn-primary btn-md">Default</button>    
				<button type="button" class="btn btn-primary btn-sm">Small</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Block Level Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Block Level Buttons</h2>
				<p>To create a block level button that spans the entire width of the parent element, use the .d-grid "helper" class on the parent element:</p>
				<div class="d-grid">
				  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
				</div>
				<p>If you have many block-level buttons, you can control the space between them with the .gap-* class:</p>
				<div class="d-grid gap-3">
				  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
				  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
				  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Active/Disabled Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Button States</h2>
				<button type="button" class="btn btn-primary">Primary Button</button>
				<button type="button" class="btn btn-primary active">Active Primary</button>
				<button type="button" class="btn btn-primary" disabled>Disabled Primary</button>
				<a href="#" class="btn btn-primary disabled">Disabled Link</a>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Spinner Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Spinner Buttons</h2>
				<p>Add spinners to buttons:</p>
													  
				<button class="btn btn-primary">
				  <span class="spinner-border spinner-border-sm"></span>
				</button>
			  
				<button class="btn btn-primary">
				  <span class="spinner-border spinner-border-sm"></span>
				  Loading..
				</button>
				
				<button class="btn btn-primary" disabled>
				  <span class="spinner-border spinner-border-sm"></span>
				  Loading..
				</button>
				
				<button class="btn btn-primary" disabled>
				  <span class="spinner-grow spinner-grow-sm"></span>
				  Loading..
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Button Groups') {

			const selectedValue1 = await vscode.window.showQuickPick(['Default Button Groups', 'Vertical Button Groups', 'Button Groups Side by Side', 'Nesting Button Groups & Dropdown Menus'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Default Button Groups') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Button Group</h2>
				<p>The .btn-group class creates a button group:</p>
				<div class="btn-group">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <button type="button" class="btn btn-primary">Sony</button>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Button Groups Sizes</h2>
				<p>Add class .btn-group-* to size all buttons in a button group.</p>
				<h3>Large Buttons:</h3>
				<div class="btn-group btn-group-lg">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <button type="button" class="btn btn-primary">Sony</button>
				</div>
				<hr>
				<h3>Default Buttons:</h3>
				<div class="btn-group">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <button type="button" class="btn btn-primary">Sony</button>
				</div>
				<hr>
				<h3>Small Buttons:</h3>
				<div class="btn-group btn-group-sm">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <button type="button" class="btn btn-primary">Sony</button>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Vertical Button Groups') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Vertical Button Group</h2>
				<p>Use the .btn-group-vertical class to create a vertical button group:</p>
				<div class="btn-group-vertical">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <button type="button" class="btn btn-primary">Sony</button>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Button Groups Side by Side') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Button Group</h2>
				<p>Button groups are "inline" by default, which makes them appear side by side when you have multiple groups:</p>
				<div class="btn-group">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <button type="button" class="btn btn-primary">Sony</button>
				</div>
				<div class="btn-group">
				  <button type="button" class="btn btn-primary">BMW</button>
				  <button type="button" class="btn btn-primary">Mercedes</button>
				  <button type="button" class="btn btn-primary">Volvo</button>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Nesting Button Groups & Dropdown Menus') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Nesting Button Groups</h2>
				<p>Nest button groups to create dropdown menus:</p>
				<div class="btn-group">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Sony</button>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item" href="#">Tablet</a></li>
					  <li><a class="dropdown-item" href="#">Smartphone</a></li>
					</ul>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Badges') {

			const selectedValue1 = await vscode.window.showQuickPick(['Default Badges', 'Contextual Badges', 'Pill Badges', 'Badge inside an Element'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Default Badges') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Badges</h2>
				<h1>Example heading <span class="badge bg-secondary">New</span></h1>
				<h2>Example heading <span class="badge bg-secondary">New</span></h2>
				<h3>Example heading <span class="badge bg-secondary">New</span></h3>
				<h4>Example heading <span class="badge bg-secondary">New</span></h4>
				<h5>Example heading <span class="badge bg-secondary">New</span></h5>
				<h6>Example heading <span class="badge bg-secondary">New</span></h6>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Contextual Badges') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Contextual Badges</h2>
				<span class="badge bg-primary">Primary</span>
				<span class="badge bg-secondary">Secondary</span>
				<span class="badge bg-success">Success</span>
				<span class="badge bg-danger">Danger</span>
				<span class="badge bg-warning">Warning</span>
				<span class="badge bg-info">Info</span>
				<span class="badge bg-light">Light</span>
				<span class="badge bg-dark">Dark</span>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Pill Badges') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pill Badges</h2>
				<span class="badge rounded-pill bg-primary">Primary</span>
				<span class="badge rounded-pill bg-secondary">Secondary</span>
				<span class="badge rounded-pill bg-success">Success</span>
				<span class="badge rounded-pill bg-danger">Danger</span>
				<span class="badge rounded-pill bg-warning">Warning</span>
				<span class="badge rounded-pill bg-info">Info</span>
				<span class="badge rounded-pill bg-light">Light</span>
				<span class="badge rounded-pill bg-dark">Dark</span>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Badge inside an Element') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Badge inside a Button</h2>
				<button type="button" class="btn btn-primary">
				  Messages <span class="badge bg-danger">4</span>
				</button>
				<button type="button" class="btn btn-danger">
				  Notifications <span class="badge bg-dark">7</span>
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Progress Bars') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Progress Bar', 'Progress Bar Height', 'Progress Bar Labels', 'Colored Progress Bars', 'Striped Progress Bars', 'Animated Progress Bar', 'Multiple Progress Bars'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Progress Bar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Basic Progress Bar</h2>
				<p>To create a default progress bar, add a .progress class to a container element and add the progress-bar class to its child element. Use the CSS width property to set the width of the progress bar:</p>
				<div class="progress">
				  <div class="progress-bar" style="width:70%"></div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Progress Bar Height') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Progress Bar Height</h2>
				<p>The height of the progress bar is 1rem (16px) by default. Use the CSS height property to change the height:</p> 
				<div class="progress" style="height:10px">
				  <div class="progress-bar" style="width:40%;height:10px"></div>
				</div>
				<br>
				<div class="progress" style="height:20px">
				  <div class="progress-bar" style="width:50%;height:20px"></div>
				</div>
				<br>
				<div class="progress" style="height:30px">
				  <div class="progress-bar" style="width:60%;height:30px"></div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Progress Bar Labels') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Progress Bar With Label</h2>
				<div class="progress">
				  <div class="progress-bar" style="width:70%">70%</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Colored Progress Bars') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Colored Progress Bars</h2>
				<p>Use any of the contextual color classes to change the color of the progress bar:</p> 
				<!-- Blue -->
				<div class="progress">
				  <div class="progress-bar" style="width:10%"></div>
				</div><br>
			  
				<!-- Green -->
				<div class="progress">
				  <div class="progress-bar bg-success" style="width:20%"></div>
				</div><br>
			  
				<!-- Turquoise -->
				<div class="progress">
				  <div class="progress-bar bg-info" style="width:30%"></div>
				</div><br>
			  
				<!-- Orange -->
				<div class="progress">
				   <div class="progress-bar bg-warning" style="width:40%"></div>
				</div><br>
			  
				<!-- Red -->
				<div class="progress">
				  <div class="progress-bar bg-danger" style="width:50%"></div>
				</div><br>
			  
				<!-- White -->
				<div class="progress border">
				  <div class="progress-bar bg-white" style="width:60%"></div>
				</div><br>
			  
				<!-- Grey -->
				<div class="progress">
				  <div class="progress-bar bg-secondary" style="width:70%"></div>
				</div><br>
			  
				<!-- Light Grey -->
				<div class="progress border">
				  <div class="progress-bar bg-light" style="width:80%"></div>
				</div><br>
			  
				<!-- Dark Grey -->
				<div class="progress">
				  <div class="progress-bar bg-dark" style="width:90%"></div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Striped Progress Bars') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Striped Progress Bars</h2>
				<p>The .progress-bar-striped class adds stripes to the progress bars:</p> 
				<div class="progress">
				  <div class="progress-bar progress-bar-striped" style="width:30%"></div>
				</div>
				<br>
				<div class="progress">
				  <div class="progress-bar bg-success progress-bar-striped" style="width:40%"></div>
				</div>
				<br>
				<div class="progress">
				  <div class="progress-bar bg-info progress-bar-striped" style="width:50%"></div>
				</div>
				<br>
				<div class="progress">
				  <div class="progress-bar bg-warning progress-bar-striped" style="width:60%"></div>
				</div>
				<br>
				<div class="progress">
				  <div class="progress-bar bg-danger progress-bar-striped" style="width:70%"></div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Animated Progress Bar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Animated Progress Bar</h2>
				<p>Add the .progress-bar-animated class to animate the progress bar:</p> 
				<div class="progress">
				  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:40%"></div>
				</div>
			  </div>
			  `;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Multiple Progress Bars') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Multiple Progress Bars</h2>
				<p>Create a stacked progress bar by placing multiple bars into the same div with class="progress":</p> 
				<div class="progress">
				  <div class="progress-bar bg-success" style="width:40%">
					Free Space
				  </div>
				  <div class="progress-bar bg-warning" style="width:10%">
					Warning
				  </div>
				  <div class="progress-bar bg-danger" style="width:20%">
					Danger
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Spinners') {

			const selectedValue1 = await vscode.window.showQuickPick(['Default Spinners', 'Colored Spinners', 'Growing Spinners', 'Spinner Size', 'Spinner Buttons'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Default Spinners') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Spinners</h2>
				<p>To create a spinner/loader, use the <code>.spinner-border</code> class:</p>
													  
				<div class="spinner-border"></div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Colored Spinners') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Colored Spinners</h2>
				<p>Use any <strong>text color utilites</strong> to add a color to the spinner:</p>
													  
				<div class="spinner-border text-muted"></div>
				<div class="spinner-border text-primary"></div>
				<div class="spinner-border text-success"></div>
				<div class="spinner-border text-info"></div>
				<div class="spinner-border text-warning"></div>
				<div class="spinner-border text-danger"></div>
				<div class="spinner-border text-secondary"></div>
				<div class="spinner-border text-dark"></div>
				<div class="spinner-border text-light"></div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} if (selectedValue1 === 'Growing Spinners') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Growing Spinners</h2>
				<p>Use the <code>.spinner-grow</code> class if you want the spinner/loader to grow instead of "spin":</p>
													  
				<div class="spinner-grow text-muted"></div>
				<div class="spinner-grow text-primary"></div>
				<div class="spinner-grow text-success"></div>
				<div class="spinner-grow text-info"></div>
				<div class="spinner-grow text-warning"></div>
				<div class="spinner-grow text-danger"></div>
				<div class="spinner-grow text-secondary"></div>
				<div class="spinner-grow text-dark"></div>
				<div class="spinner-grow text-light"></div>
			  </div>
			  `;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} if (selectedValue1 === 'Spinner Size') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Spinner Size</h2>
				<p>Use <code>.spinner-border-sm</code> or <code>.spinner-grow-sm</code> to create a smaller spinner:</p>
													  
				<div class="spinner-border spinner-border-sm"></div>
				<div class="spinner-grow spinner-grow-sm"></div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} if (selectedValue1 === 'Spinner Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Spinner Buttons</h2>
				<p>Add spinners to buttons:</p>
													  
				<button class="btn btn-primary">
				  <span class="spinner-border spinner-border-sm"></span>
				</button>
			  
				<button class="btn btn-primary">
				  <span class="spinner-border spinner-border-sm"></span>
				  Loading..
				</button>
				
				<button class="btn btn-primary" disabled>
				  <span class="spinner-border spinner-border-sm"></span>
				  Loading..
				</button>
				
				<button class="btn btn-primary" disabled>
				  <span class="spinner-grow spinner-grow-sm"></span>
				  Loading..
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Pagination') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Pagination', 'Active State', 'Disabled State', 'Pagination Sizing', 'Pagination Alignment', 'Breadcrumbs'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Pagination') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pagination</h2>
				<p>To create a basic pagination, add the .pagination class to an ul element. Then add the .page-item to each li element and a .page-link class to each link inside li:</p>                  
				<ul class="pagination">
				  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Active State') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pagination - Active State</h2>
				<p>Add class .active to let the user know which page he/she is on:</p>
				<ul class="pagination">
				  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="#">1</a></li>
				  <li class="page-item active"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Disabled State') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pagination - Disabled State</h2>
				<p>Add class .disabled if a page for some reason is disabled:</p>
				<ul class="pagination">
				  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Pagination Sizing') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pagination - Sizing</h2>
				<p>Add class .pagination-lg for larger blocks or .pagination-sm for smaller blocks.</p>
			  
				<p>Large:</p>
				<ul class="pagination pagination-lg">
				  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			  
				<p>Default:</p>
				<ul class="pagination">
				  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			  
				<p>Small:</p>
				<ul class="pagination pagination-sm">
				  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Pagination Alignment') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pagination</h2>
				<p>Use utilitiy classes to change the alignment of the pagination:</p>                  
				<ul class="pagination">
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
				</ul>
				<ul class="pagination justify-content-center">
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
				</ul>
				<ul class="pagination justify-content-end">
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
				  <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Breadcrumbs') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Breadcrumbs</h2>
				<p>The .breadcrumb class indicates the current page's location within a navigational hierarchy:</p>                  
				<ul class="breadcrumb">
				  <li class="breadcrumb-item"><a href="#">Photos</a></li>
				  <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
				  <li class="breadcrumb-item"><a href="#">Italy</a></li>
				  <li class="breadcrumb-item active">Rome</li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 List Groups') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic List Groups', 'List Group With Linked Items', 'Disabled Item', 'Flush / Remove Borders', 'Numbered List Groups', 'Horizontal List Groups', 'Contextual Classes', 'Link items with Contextual Classes', 'List Group with Badges'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic List Groups') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Basic List Group</h2>
				<ul class="list-group">
				  <li class="list-group-item">First item</li>
				  <li class="list-group-item">Second item</li>
				  <li class="list-group-item">Third item</li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Active State') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Active Item in a List Group</h2>
				<ul class="list-group">
				  <li class="list-group-item active">Active item</li>
				  <li class="list-group-item">Second item</li>
				  <li class="list-group-item">Third item</li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'List Group With Linked Items') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>List Group With Linked Items</h2>
				<div class="list-group">
				  <a href="#" class="list-group-item list-group-item-action">First item</a>
				  <a href="#" class="list-group-item list-group-item-action">Second item</a>
				  <a href="#" class="list-group-item list-group-item-action">Third item</a>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Disabled Item') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>List Group With a Disabled Item</h2>
				<p>The disabled class adds a lighter text color to the disabled item. And if used on links, it will remove the default hover effect.</p>
				<div class="list-group">
				  <a href="#" class="list-group-item disabled">Disabled item</a>
				  <a href="#" class="list-group-item disabled">Disabled item</a>
				  <a href="#" class="list-group-item">Third item</a>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Flush / Remove Borders') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Flush / Remove Borders</h2>
				<p>Use the .list-group-flush class to remove some borders and rounded corners:</p>
			  </div>
				
			  <div class="container mt-3">
				<ul class="list-group list-group-flush">
				  <li class="list-group-item">First item</li>
				  <li class="list-group-item">Second item</li>
				  <li class="list-group-item">Third item</li>
				  <li class="list-group-item">Fourth item</li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Numbered List Groups') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Numbered List Group</h2>
				<p>Use the .list-group-numbered class to create list items with numbers in front of them:</p>
			  </div>
				
			  <div class="container mt-3">
				<ol class="list-group list-group-numbered">
				  <li class="list-group-item">First item</li>
				  <li class="list-group-item">Second item</li>
				  <li class="list-group-item">Third item</li>
				</ol>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Horizontal List Groups') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Horizontal List Groups</h2>
				<p>The .list-group-horizontal class displays the list items horizontally instead of vertically:</p>
				<ul class="list-group list-group-horizontal">
				  <li class="list-group-item">First item</li>
				  <li class="list-group-item">Second item</li>
				  <li class="list-group-item">Third item</li>
				  <li class="list-group-item">Fourth item</li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Contextual Classes') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>List Group With Contextual Classes</h2>
				<ul class="list-group">
				  <li class="list-group-item list-group-item-success">Success item</li>
				  <li class="list-group-item list-group-item-secondary">Secondary item</li>
				  <li class="list-group-item list-group-item-info">Info item</li>
				  <li class="list-group-item list-group-item-warning">Warning item</li>
				  <li class="list-group-item list-group-item-danger">Danger item</li>
				  <li class="list-group-item list-group-item-primary">Primary item</li>
				  <li class="list-group-item list-group-item-dark">Dark item</li>
				  <li class="list-group-item list-group-item-light">Light item</li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Link items with Contextual Classes') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Linked Items With Contextual Classes</h2>
				<p>Move the mouse over the linked items to see the hover effect:</p>
				<div class="list-group">
				  <a href="#" class="list-group-item list-group-item-action">Action item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-success">Success item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Secondary item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-info">Info item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Warning item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Danger item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Primary item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Dark item</a>
				  <a href="#" class="list-group-item list-group-item-action list-group-item-light">Light item</a>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'List Group with Badges') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>List Group With Badges</h2>
				<p>Combine .badge classes with utility/helper classes to add badges inside the list group:</p>
				<ul class="list-group">
				  <li class="list-group-item d-flex justify-content-between align-items-center">
					Inbox
					<span class="badge bg-primary rounded-pill">12</span>
				  </li>
				  <li class="list-group-item d-flex justify-content-between align-items-center">
					Ads
					<span class="badge bg-primary rounded-pill">50</span>
				  </li>
				  <li class="list-group-item d-flex justify-content-between align-items-center">
					Junk
					<span class="badge bg-primary rounded-pill">99</span>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Cards') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Card', 'Header and Footer', 'Contextual Cards', 'Titles, text, and links', 'Card Images', 'Card Image Overlays'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Card') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Basic Card</h2>
				<div class="card">
				  <div class="card-body">Basic card</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Header and Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Card Header and Footer</h2>
				<div class="card">
				  <div class="card-header">Header</div>
				  <div class="card-body">Content</div> 
				  <div class="card-footer">Footer</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Contextual Cards') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Cards with Contextual Classes</h2>
				<div class="card">
				  <div class="card-body">Basic card</div>
				</div>
				<br>
				<div class="card bg-primary text-white">
				  <div class="card-body">Primary card</div>
				</div>
				<br>
				<div class="card bg-success text-white">
				  <div class="card-body">Success card</div>
				</div>
				<br>
				<div class="card bg-info text-white">
				  <div class="card-body">Info card</div>
				</div>
				<br>
				<div class="card bg-warning text-white">
				  <div class="card-body">Warning card</div>
				</div>
				<br>
				<div class="card bg-danger text-white">
				  <div class="card-body">Danger card</div>
				</div>
				<br>
				<div class="card bg-secondary text-white">
				  <div class="card-body">Secondary card</div>
				</div>
				<br>
				<div class="card bg-dark text-white">
				  <div class="card-body">Dark card</div>
				</div>
				<br>
				<div class="card bg-light text-dark">
				  <div class="card-body">Light card</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Titles, text, and links') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Card titles, text, and links</h2>
				<p>Use .card-title to add card titles to any heading element. The .card-text class is used to remove bottom margins for a p element if it is the last child (or the only one) in card-body. The .card-link class adds a blue color to any link, and a hover effect.</p>
				<div class="card">
				  <div class="card-body">
					<h4 class="card-title">Card title</h4>
					<p class="card-text">Some example text. Some example text.</p>
					<a href="#" class="card-link">Card link</a>
					<a href="#" class="card-link">Another link</a>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Card Images') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Card Image</h2>
				<p>Image at the top (card-img-top):</p>
				<div class="card" style="width:400px">
				  <img class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style="width:100%">
				  <div class="card-body">
					<h4 class="card-title">John Doe</h4>
					<p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
					<a href="#" class="btn btn-primary">See Profile</a>
				  </div>
				</div>
				<br>
				
				<p>Image at the bottom (card-img-bottom):</p>
				<div class="card" style="width:400px">
				  <div class="card-body">
					<h4 class="card-title">Jane Doe</h4>
					<p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
					<a href="#" class="btn btn-primary">See Profile</a>
				  </div>
				  <img class="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" style="width:100%">
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Card Image Overlays') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Card Image Overlay</h2>
				<p>Turn an image into a card background and use .card-img-overlay to overlay the card's text:</p>
				<div class="card img-fluid" style="width:500px">
				  <img class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style="width:100%">
				  <div class="card-img-overlay">
					<h4 class="card-title">John Doe</h4>
					<p class="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
					<a href="#" class="btn btn-primary">See Profile</a>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Dropdowns') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Dropdown', 'Dropdown Divider', 'Dropdown Header', 'Disable and Active items', 'Dropdown Position', 'Dropdown Menu Right', 'Dropup', 'Dropdown Text', 'Grouped Buttons with a Dropdown', 'Vertical Button Group w/ Dropdown'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>The .dropdown class is used to indicate a dropdown menu.</p>
				<p>Use the .dropdown-menu class to actually build the dropdown menu.</p>
				<p>To open the dropdown menu, use a button or a link with a class of .dropdown-toggle and data-toggle="dropdown".</p>                                          
				<div class="dropdown">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropdown button
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dropdown Divider') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>The .dropdown-divider class is used to separate links inside the dropdown menu with a thin horizontal line:</p>
			  
				<div class="dropdown">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropdown button
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
					<li><hr class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#">Another link</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dropdown Header') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>The .dropdown-header class is used to add headers inside the dropdown menu:</p>
			  
				<div class="dropdown">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropdown button
				  </button>
				  <ul class="dropdown-menu">
					<li><h5 class="dropdown-header">Dropdown header 1</h5></li>
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
					<li><h5 class="dropdown-header">Dropdown header 2</h5></li>
					<li><a class="dropdown-item" href="#">Another link</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Disable and Active items') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>The .active class adds a blue background color to the active link.</p>
				<p>The .disabled class disables a dropdown item (grey text color and a no-parking-sign on hover).</p>
				
				<div class="dropdown">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropdown button
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Normal</a></li>
					<li><a class="dropdown-item active" href="#">Active</a></li>
					<li><a class="dropdown-item disabled" href="#">Disabled</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dropdown Position') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>Add the .dropstart class next to the dropdown menu to left-align the dropdown. Note that the caret/arrow is added automatically. Also note that we float the dropdown to the right:</p>
			  
				<div class="dropdown dropstart text-end">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropstart
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Normal</a></li>
					<li><a class="dropdown-item active" href="#">Active</a></li>
					<li><a class="dropdown-item disabled" href="#">Disabled</a></li>
				  </ul>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>Add the .dropend class next to the dropdown menu to right-align the dropdown. Note that the caret/arrows is added automatically:</p>
			  
				<div class="dropdown dropend">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropend
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Normal</a></li>
					<li><a class="dropdown-item active" href="#">Active</a></li>
					<li><a class="dropdown-item disabled" href="#">Disabled</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dropdown Menu Right') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>Add the .dropdown-menu-end class to .dropdown-menu to right-align the dropdown menu.</p>
												  
				<div class="dropdown dropdown-menu-end">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Wide dropdown button to demonstrate this example
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dropup') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>The .dropup class makes the dropdown menu expand upwards instead of downwards:</p>
				<p>It must be room for the dropup menu to grow. That is why we add some extra lorem ipsum text.</p>
				<p>Lorem ipsum one more time!</p>
				
				<div class="dropup">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropup button
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dropdown Text') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Dropdowns</h2>
				<p>The .dropdown-item-text class is used to add plain text to a dropdown, or used on links for default link styling.</p>                                        
			  
				<div class="dropdown">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropdown button
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
					<li><a class="dropdown-item-text" href="#">Text Link</a></li>
					<li><span class="dropdown-item-text">Just Text</span></li>
				  </ul>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Grouped Buttons with a Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Nesting Button Groups</h2>
				<p>Nest button groups to create dropdown menus:</p>
				<div class="btn-group">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Sony</button>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item" href="#">Tablet</a></li>
					  <li><a class="dropdown-item" href="#">Smartphone</a></li>
					</ul>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Vertical Button Group w/ Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Vertical Button Group with Dropdown</h2>
				<div class="btn-group-vertical">
				  <button type="button" class="btn btn-primary">Apple</button>
				  <button type="button" class="btn btn-primary">Samsung</button>
				  <div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Sony</button>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item" href="#">Tablet</a></li>
					  <li><a class="dropdown-item" href="#">Smartphone</a></li>
					</ul>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Collapse') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Collapsible', 'Show Collapsible Content By Default', 'Accordion'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Collapsible') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Simple Collapsible</h2>
				<p>Click on the button to toggle between showing and hiding content.</p>
				<button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">Simple collapsible</button>
				<div id="demo" class="collapse">
				  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
				  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Show Collapsible Content By Default') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Show Collapsible Content By Default</h2>
				<p>Add the show class next to the collapse class to show the content by default.</p>
				<p>Click on the button to toggle between showing and hiding content.</p>
				<button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">Simple collapsible</button>
				<div id="demo" class="collapse show">
				  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
				  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Accordion') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Accordion Example</h2>
				<p><strong>Note:</strong> The <strong>data-bs-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p>
				<div id="accordion">
				  <div class="card">
					<div class="card-header">
					  <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
						Collapsible Group Item #1
					  </a>
					</div>
					<div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
					  <div class="card-body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					  </div>
					</div>
				  </div>
				  <div class="card">
					<div class="card-header">
					  <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
					  Collapsible Group Item #2
					</a>
					</div>
					<div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
					  <div class="card-body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					  </div>
					</div>
				  </div>
				  <div class="card">
					<div class="card-header">
					  <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
						Collapsible Group Item #3
					  </a>
					</div>
					<div id="collapseThree" class="collapse" data-bs-parent="#accordion">
					  <div class="card-body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					  </div>
					</div>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Navs') {

			const selectedValue1 = await vscode.window.showQuickPick(['Nav Menus', 'Aligned Nav', 'Vertical Nav', 'Tabs', 'Pills', 'Justified Tabs/pills', 'Pills with Dropdown', 'Tabs with Dropdown', 'Toggleable / Dynamic Tabs', 'Toggleable / Dynamic Pills'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Nav Menus') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Nav</h2>
				<p>Basic horizontal menu:</p>
				<ul class="nav">
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Aligned Nav') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Nav</h2>
				<p>Left-aligned nav (default):</p>
				<ul class="nav">
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
				
				<p class="text-center">Centered nav:</p>
				<ul class="nav justify-content-center">
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
				  
				<p class="text-end">Right-aligned nav:</p>
				<ul class="nav justify-content-end">
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Vertical Nav') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Vertical Nav</h2>
				<p>Use the .flex-column class to create a vertical nav:</p>
				<ul class="nav flex-column">
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Tabs') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Navigation Tabs</h2>
				<p>Turn the nav menu into navigation tabs with the .nav nav-tabs class. Add the active class to the active/current link. If you want the tabs to be togglable, see the last example on the tutorial page.</p>
				<ul class="nav nav-tabs">
				  <li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Pills') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Navigation Pills</h2>
				<p>Turn the nav menu into navigation pills with the .nav nav-pills class:</p>
				<ul class="nav nav-pills">
				  <li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Justified Tabs/pills') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Justified Tabs/Pills</h2>
				<p>To justify tabs/pills (equal width), use the .nav-justified class:</p>
				<ul class="nav nav-pills nav-justified">
				  <li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul><br>
			  
				<p>Justified tabs:</p>
				<ul class="nav nav-tabs nav-justified">
				  <li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Pills with Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Pills with Dropdown</h2>
				<ul class="nav nav-pills">
				  <li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				  </li>
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Dropdown</a>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item" href="#">Link 1</a></li>
					  <li><a class="dropdown-item" href="#">Link 2</a></li>
					  <li><a class="dropdown-item" href="#">Link 3</a></li>
					</ul>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Tabs with Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Tabs with Dropdown</h2>
				<ul class="nav nav-tabs">
				  <li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				  </li>
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Dropdown</a>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item" href="#">Link 1</a></li>
					  <li><a class="dropdown-item" href="#">Link 2</a></li>
					  <li><a class="dropdown-item" href="#">Link 3</a></li>
					</ul>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				  </li>
				</ul>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Toggleable / Dynamic Tabs') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Toggleable Tabs</h2>
				<br>
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" role="tablist">
				  <li class="nav-item">
					<a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" data-bs-toggle="tab" href="#menu1">Menu 1</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" data-bs-toggle="tab" href="#menu2">Menu 2</a>
				  </li>
				</ul>
			  
				<!-- Tab panes -->
				<div class="tab-content">
				  <div id="home" class="container tab-pane active"><br>
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				  </div>
				  <div id="menu1" class="container tab-pane fade"><br>
					<h3>Menu 1</h3>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				  </div>
				  <div id="menu2" class="container tab-pane fade"><br>
					<h3>Menu 2</h3>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Toggleable / Dynamic Pills') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Toggleable Pills</h2>
				<br>
				<!-- Nav pills -->
				<ul class="nav nav-pills" role="tablist">
				  <li class="nav-item">
					<a class="nav-link active" data-bs-toggle="pill" href="#home">Home</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" data-bs-toggle="pill" href="#menu1">Menu 1</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" data-bs-toggle="pill" href="#menu2">Menu 2</a>
				  </li>
				</ul>
			  
				<!-- Tab panes -->
				<div class="tab-content">
				  <div id="home" class="container tab-pane active"><br>
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				  </div>
				  <div id="menu1" class="container tab-pane fade"><br>
					<h3>Menu 1</h3>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				  </div>
				  <div id="menu2" class="container tab-pane fade"><br>
					<h3>Menu 2</h3>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Navbar') {

			const selectedValue1 = await vscode.window.showQuickPick(['BS5 Bootstrap Doc Navbar','BS5 Bootstrap Doc Navbar with Dropdown','BS5 Bootstrap Doc Navbar with Dropdown & Search Bar','Basic Navbar', 'Vertical Navbar', 'Centered Navbar', 'Colored Navbar', 'Brand / Logo', 'Navbar Text', 'Navbar With Dropdown', 'Navbar Forms and Buttons', 'Fixed Navigation Bar'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'BS5 Bootstrap Doc Navbar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
				  <ul class="navbar-nav">
					<li class="nav-item active">
					  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Features</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Pricing</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
			else if (selectedValue1 === 'BS5 Bootstrap Doc Navbar with Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
				  <ul class="navbar-nav">
					<li class="nav-item active">
					  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Features</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Pricing</a>
					</li>
					<li class="nav-item dropdown">
					  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Dropdown link
					  </a>
					  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					  </div>
					</li>
				  </ul>
				</div>
			  </nav>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
			else if (selectedValue1 === 'BS5 Bootstrap Doc Navbar with Dropdown & Search Bar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
			  
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				  <ul class="navbar-nav mr-auto">
					<li class="nav-item active">
					  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item dropdown">
					  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Dropdown
					  </a>
					  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Something else here</a>
					  </div>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				  <form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				  </form>
				</div>
			  </nav>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
			else if (selectedValue1 === 'Basic Navbar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-light">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link" href="#">Link 1</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link 2</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link 3</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Basic Navbar Example</h3>
				<p>A navigation bar is a navigation header that is placed at the top of the page.</p>
				<p>The navbar-expand-xxl|xl|lg|md|sm class determines when the navbar should stack vertically (on xxlarge, extra large, large, medium or small screens).</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Vertical Navbar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar bg-light">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link" href="#">Link 1</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link 2</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link 3</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Vertical Navbar Example</h3>
				<p>A navigation bar is a navigation header that is placed at the top of the page.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Centered Navbar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-light justify-content-center">
				<ul class="navbar-nav">
				  <li class="nav-item">
					<a class="nav-link" href="#">Link 1</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link 2</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Link 3</a>
				  </li>
				</ul>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Centered Navbar</h3>
				<p>Use the .justify-content-center class to center the navigation bar.</p>
				<p>In this example, the navbar will be centered on medium, large and extra large screens. On small screens it will be displayed vertically and left-aligned (because of the .navbar-expand-sm class).</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Colored Navbar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Colored Navbar</h3>
				<p>Use any of the .bg-color classes to add a background color to the navbar.</p>
				<p>Tip: Add a white text color to all links in the navbar with the .navbar-dark class, or use the .navbar-light class to add a black text color.</p>
			  </div>
			  
			  <nav class="navbar navbar-expand-sm bg-light navbar-light">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-success navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-info navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-warning navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
				  </ul>
				</div>
			  </nav>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Brand / Logo') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				<div class="container-fluid">
				  <a class="navbar-brand" href="#">Logo</a>
				</div>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Brand / Logo</h3>
				<p>The .navbar-brand class is used to highlight the brand/logo/project name of your page.</p>
			  </div>
			  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="img_avatar1.png" alt="Logo" style="width:40px;" class="rounded-pill">
    </a>
  </div>
</nav>

<div class="container-fluid mt-3">
  <h3>Brand / Logo</h3>
  <p>When using the .navbar-brand class with images, Bootstrap 5 will automatically style the image to fit the navbar.</p>
</div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Navbar Text') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				<div class="container-fluid">
				   <span class="navbar-text">Navbar text</span>
				</div>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Navbar Text</h3>
				<p>Use the .navbar-text class to vertical align any elements inside the navbar that are not links (ensures proper padding).</p>
			  </div>
			  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>    
      </ul>
    </div>
  </div>
</nav>

<div class="container-fluid mt-3">
  <h3>Collapsible Navbar</h3>
  <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
  <p>Only when the button is clicked, the navigation bar will be displayed.</p>
  <p>Tip: You can also remove the .navbar-expand-md class to ALWAYS hide navbar links and display the toggler button.</p>
</div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Navbar With Dropdown') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				<div class="container-fluid">
				  <a class="navbar-brand" href="#">Logo</a>
				  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
					<span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="collapsibleNavbar">
					<ul class="navbar-nav">
					  <li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					  </li>  
					  <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
						<ul class="dropdown-menu">
						  <li><a class="dropdown-item" href="#">Link</a></li>
						  <li><a class="dropdown-item" href="#">Another link</a></li>
						  <li><a class="dropdown-item" href="#">A third link</a></li>
						</ul>
					  </li>
					</ul>
				  </div>
				</div>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Navbar With Dropdown</h3>
				<p>This example adds a dropdown menu in the navbar.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Navbar Forms and Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
				<div class="container-fluid">
				  <a class="navbar-brand" href="javascript:void(0)">Logo</a>
				  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
					<span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="mynavbar">
					<ul class="navbar-nav me-auto">
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Link</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Link</a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="javascript:void(0)">Link</a>
					  </li>
					</ul>
					<form class="d-flex">
					  <input class="form-control me-2" type="text" placeholder="Search">
					  <button class="btn btn-primary" type="button">Search</button>
					</form>
				  </div>
				</div>
			  </nav>
			  
			  <div class="container-fluid mt-3">
				<h3>Navbar Forms</h3>
				<p>You can also include forms inside the navigation bar.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Fixed Navigation Bar') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
				<div class="container-fluid">
				  <a class="navbar-brand" href="#">Fixed top</a>
				</div>
			  </nav>
			  
			  <div class="container-fluid" style="margin-top:80px">
				<h3>Top Fixed Navbar</h3>
				<p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
				<h1>Scroll this page to see the effect</h1>
			  </div>
			  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
				<div class="container-fluid">
				  <a class="navbar-brand" href="#">Fixed bottom</a>
				</div>
			  </nav>
			  
			  <div class="container-fluid"><br>
				<h3>Bottom Fixed Navbar</h3>
				<p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
				<h1>Scroll this page to see the effect</h1>
			  </div>
			  <div class="container-fluid mt-3">
				<br>
				<h3>Sticky Navbar</h3>
				<p>A sticky navigation bar stays fixed at the top of the page when you scroll past it.</p>
				<p>Scroll this page to see the effect. <strong>Note:</strong> sticky-top does not work in IE11 and earlier.</p>
			  </div>
			  
			  <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
				<div class="container-fluid">
				  <a class="navbar-brand" href="#">Sticky top</a>
				</div>
			  </nav>
			  
			  <div class="container-fluid"><br>
				<p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
				<p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
				<p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
				<p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Carousel') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Carousel', 'Add Captions to Slides'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Carousel') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!-- Carousel -->
				<div id="demo" class="carousel slide" data-bs-ride="carousel">
				
				  <!-- Indicators/dots -->
				  <div class="carousel-indicators">
					<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
				  </div>
				  
				  <!-- The slideshow/carousel -->
				  <div class="carousel-inner">
					<div class="carousel-item active">
					  <img src="la.jpg" alt="Los Angeles" class="d-block" style="width:100%">
					</div>
					<div class="carousel-item">
					  <img src="chicago.jpg" alt="Chicago" class="d-block" style="width:100%">
					</div>
					<div class="carousel-item">
					  <img src="ny.jpg" alt="New York" class="d-block" style="width:100%">
					</div>
				  </div>
				  
				  <!-- Left and right controls/icons -->
				  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				  </button>
				  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
					<span class="carousel-control-next-icon"></span>
				  </button>
				</div>
				
				<div class="container-fluid mt-3">
				  <h3>Carousel Example</h3>
				  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
				</div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Add Captions to Slides') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!-- Carousel -->
				<div id="demo" class="carousel slide" data-bs-ride="carousel">
				
				  <!-- Indicators/dots -->
				  <div class="carousel-indicators">
					<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
				  </div>
				  
				  <!-- The slideshow/carousel -->
				  <div class="carousel-inner">
					<div class="carousel-item active">
					  <img src="la.jpg" alt="Los Angeles" class="d-block" style="width:100%">
					  <div class="carousel-caption">
						<h3>Los Angeles</h3>
						<p>We had such a great time in LA!</p>
					  </div>
					</div>
					<div class="carousel-item">
					  <img src="chicago.jpg" alt="Chicago" class="d-block" style="width:100%">
					  <div class="carousel-caption">
						<h3>Chicago</h3>
						<p>Thank you, Chicago!</p>
					  </div> 
					</div>
					<div class="carousel-item">
					  <img src="ny.jpg" alt="New York" class="d-block" style="width:100%">
					  <div class="carousel-caption">
						<h3>New York</h3>
						<p>We love the Big Apple!</p>
					  </div>  
					</div>
				  </div>
				  
				  <!-- Left and right controls/icons -->
				  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				  </button>
				  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
					<span class="carousel-control-next-icon"></span>
				  </button>
				</div>
				
				<div class="container-fluid mt-3">
				  <h3>Carousel Example</h3>
				  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
				</div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Modal') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Modal', 'Animation Modal', 'Modal Size', 'Fullscreen Modals', 'Responsive Fullscreen Modals', 'Centered Modal', 'Scrolling Modal'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Modal') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Modal Example</h3>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Animation Modal') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Fading Modal Example</h3>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal fade" id="myModal">
				<div class="modal-dialog">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Modal Size') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Small Modal Example</h3>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-sm">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h3>Large Modal Example</h3>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-lg">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h3>Extra Large Modal Example</h3>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-xl">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Fullscreen Modals') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Fullscreen Modal Example</h3>
				<p>Click on the button to open the fullscreen modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-fullscreen">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Fullscreen Modals') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Responsive Fullscreen Modal Example</h3>
				<p>The modal-fullscreen-sm-down class will display a modal that is in fullscreen below 576px.</p>
				<p>Click the button and resize the browser window to see the effect.</p>
			  
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-fullscreen-sm-down">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h3>Responsive Fullscreen Modal Example</h3>
				<p>The modal-fullscreen-md-down class will display a modal that is in fullscreen below 768px.</p>
				<p>Click the button and resize the browser window to see the effect.</p>
			  
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-fullscreen-md-down">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h3>Responsive Fullscreen Modal Example</h3>
				<p>The modal-fullscreen-lg-down class will display a modal that is in fullscreen below 992px.</p>
				<p>Click the button and resize the browser window to see the effect.</p>
			  
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-fullscreen-lg-down">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h3>Responsive Fullscreen Modal Example</h3>
				<p>The modal-fullscreen-xl-down class will display a modal that is in fullscreen below 1200px.</p>
				<p>Click the button and resize the browser window to see the effect.</p>
			  
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-fullscreen-xl-down">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h3>Responsive Fullscreen Modal Example</h3>
				<p>The modal-fullscreen-xxl-down class will display a modal that is in fullscreen below 1400px.</p>
				<p>Click the button and resize the browser window to see the effect.</p>
			  
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-fullscreen-xxl-down">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Centered Modal') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Vertically Centered Modal Example</h3>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog modal-dialog-centered">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  Modal body..
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Scrolling Modal') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Modal Scroll Example</h2>
				<p>Click on the button to open the modal.</p>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
				  Open modal
				</button>
			  </div>
			  
			  <!-- The Modal -->
			  <div class="modal" id="myModal">
				<div class="modal-dialog">
				  <div class="modal-content">
			  
					<!-- Modal Header -->
					<div class="modal-header">
					  <h4 class="modal-title">Modal Heading</h4>
					  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
			  
					<!-- Modal body -->
					<div class="modal-body">
					  <h3>Some text to enable scrolling..</h3>
					  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			  
					  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
					</div>
			  
					<!-- Modal footer -->
					<div class="modal-footer">
					  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
					</div>
			  
				  </div>
				</div>
			  </div>
			  <div class="container mt-3">
  <h2>Modal Scroll Example</h2>
  <p>Click on the button to open the modal.</p>
  
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <h3>Some text to enable scrolling..</h3>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Tooltip') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Tooltip', 'Positioning Tooltips'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Tooltip') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Tooltip Example</h3>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="Hooray!">
				  Hover over me!
				</button>
			  </div>
			  
			  <script>
			  // Initialize tooltips
			  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
				return new bootstrap.Tooltip(tooltipTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Positioning Tooltips') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Tooltip Positioning</h3>
				<p>The data-bs-placement attribute specifies the tooltip position.</p>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Hooray!">Top</a>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hooray!">Bottom</a>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Hooray!">Left</a>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Hooray!">Right</a>
			  </div>
			  
			  <script>
			  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
				return new bootstrap.Tooltip(tooltipTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Popover') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Popover', 'Positioning Popovers', 'Closing Popovers', 'Hoverable Popover'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Popover') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Popover Example</h3>
				
				<button type="button" class="btn btn-primary" data-bs-toggle="popover" title="Popover Header" data-bs-content="Some content inside the popover">
				  Toggle popover
				</button>
			  </div>
			  
			  <script>
			  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
			  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
				return new bootstrap.Popover(popoverTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Positioning Popovers') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-5">
				<h3>Popover Positioning</h3>
				<p>Click on the links to see the popover in action:</p>
				<a href="#" title="Header" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Content">Top</a>
				<a href="#" title="Header" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Content">Bottom</a>
				<a href="#" title="Header" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Content">Left</a>
				<a href="#" title="Header" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Content">Right</a>
			  </div>
			  
			  <script>
			  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
			  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
				return new bootstrap.Popover(popoverTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Closing Popovers') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Dismissible Popover</h3>
				
				<a href="#" title="Dismissible popover" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Click anywhere in the document to close this popover">Click me</a>
			  </div>
			  
			  <script>
			  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
			  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
				return new bootstrap.Popover(popoverTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Hoverable Popover') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Hoverable Popover</h3>
				
				<a href="#" title="Header" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Popover text">Hover over me</a>
			  </div>
			  
			  <script>
			  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
			  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
				return new bootstrap.Popover(popoverTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Toast') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Toast', 'Open a Toast'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Toast') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Toast Example</h3>
				<p>In this example, we use a button to show the toast message.</p>
			  
				<button type="button" class="btn btn-primary" id="toastbtn">Show Toast</button>
				
				<div class="toast">
				  <div class="toast-header">
					<strong class="me-auto">Toast Header</strong>
					<button type="button" class="btn-close" data-bs-dismiss="toast"></button>
				  </div>
				  <div class="toast-body">
					<p>Some text inside the toast body</p>
				  </div>
				</div>
			  </div>
			  
			  <script>
			  document.getElementById("toastbtn").onclick = function() {
				var toastElList = [].slice.call(document.querySelectorAll('.toast'))
				var toastList = toastElList.map(function(toastEl) {
				  return new bootstrap.Toast(toastEl)
				})
				toastList.forEach(toast => toast.show()) 
			  }
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Open a Toast') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Tooltip Positioning</h3>
				<p>The data-bs-placement attribute specifies the tooltip position.</p>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Hooray!">Top</a>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hooray!">Bottom</a>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Hooray!">Left</a>
				<a href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Hooray!">Right</a>
			  </div>
			  
			  <script>
			  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
				return new bootstrap.Tooltip(tooltipTriggerEl)
			  })
			  </script>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Scrollspy') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Scrollspy'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Scrollspy') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
				<div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link" href="#section1">Section 1</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#section2">Section 2</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#section3">Section 3</a>
					</li>
				  </ul>
				</div>
			  </nav>
			  
			  <div id="section1" class="container-fluid bg-success text-white" style="padding:100px 20px;">
				<h1>Section 1</h1>
				<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
				<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
			  </div>
			  
			  <div id="section2" class="container-fluid bg-warning" style="padding:100px 20px;">
				<h1>Section 2</h1>
				<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
				<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
			  </div>
			  
			  <div id="section3" class="container-fluid bg-secondary text-white" style="padding:100px 20px;">
				<h1>Section 3</h1>
				<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
				<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Offcanvas') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Offcanvas', 'Offcanvas Position', 'Responsive OffCanvas Menu', 'Dark OffCanvas Menu'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Offcanvas') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="offcanvas offcanvas-start" id="demo">
				<div class="offcanvas-header">
				  <h1 class="offcanvas-title">Heading</h1>
				  <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
				</div>
				<div class="offcanvas-body">
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <button class="btn btn-secondary" type="button">A Button</button>
				</div>
			  </div>
			  
			  <div class="container-fluid mt-3">
				<h3>Offcanvas Sidebar</h3>
				<p>Offcanvas is similar to modals, except that it is often used as a sidebar.</p>
				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
				  Open Offcanvas Sidebar
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Offcanvas Position') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="offcanvas offcanvas-end" id="demo">
				<div class="offcanvas-header">
				  <h1 class="offcanvas-title">Heading</h1>
				  <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
				</div>
				<div class="offcanvas-body">
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <button class="btn btn-secondary" type="button">A Button</button>
				</div>
			  </div>
			  
			  <div class="container-fluid mt-3">
				<h3>Right Offcanvas</h3>
				<p>The .offcanvas-end class positions the offcanvas to the right of the page.</p>
				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
				  Toggle Right Offcanvas
				</button>
			  </div>
			  <div class="offcanvas offcanvas-top" id="demo">
				<div class="offcanvas-header">
				  <h1 class="offcanvas-title">Heading</h1>
				  <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
				</div>
				<div class="offcanvas-body">
				  <p>Some text lorem ipsum.</p>
				  <button class="btn btn-secondary" type="button">A Button</button>
				</div>
			  </div>
			  
			  <div class="container-fluid mt-3">
				<h3>Top Offcanvas</h3>
				<p>The .offcanvas-top class positions the offcanvas at the top of the page.</p>
				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
				  Toggle Top Offcanvas
				</button>
			  </div>
			  <div class="offcanvas offcanvas-bottom" id="demo">
				<div class="offcanvas-header">
				  <h1 class="offcanvas-title">Heading</h1>
				  <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
				</div>
				<div class="offcanvas-body">
				  <p>Some text lorem ipsum.</p>
				  <button class="btn btn-secondary" type="button">A Button</button>
				</div>
			  </div>
			  
			  <div class="container-fluid mt-3">
				<h3>Bottom Offcanvas</h3>
				<p>The .offcanvas-bottom class positions the offcanvas at the bottom of the page.</p>
				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
				  Toggle Bottom Offcanvas
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive OffCanvas Menu') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="offcanvas offcanvas-start offcanvas-lg" id="demo">
				<div class="offcanvas-header">
				  <h1 class="offcanvas-title">Heading</h1>
				  <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
				</div>
				<div class="offcanvas-body">
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <button class="btn btn-secondary" type="button">A Button</button>
				</div>
			  </div>
			  
			  <div class="container-fluid mt-3">
				<h3>Responsive Offcanvas Menu</h3>
				<p>You can also hide or show the offcanvas menu on different screen widths, with the .offcanvas-sm|md|lg|xl|xxl classes.</p>
				<p>In this example, we hide the offcanvas menu on screens larger than 991px wide. Note that we also hide the button that opens the offcanvas (d-lg-none).</p>
				<p class="text-bg-danger">Resize the browser window to see the result.</p>
				<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
				  Open Offcanvas Sidebar
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Dark OffCanvas Menu') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="offcanvas offcanvas-start text-bg-dark" id="demo">
				<div class="offcanvas-header">
				  <h1 class="offcanvas-title">Heading</h1>
				  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
				</div>
				<div class="offcanvas-body">
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <p>Some text lorem ipsum.</p>
				  <button class="btn btn-secondary" type="button">A Button</button>
				</div>
			  </div>
			  
			  <div class="container-fluid mt-3">
				<h3>Dark Offcanvas Sidebar</h3>
				<p>Use the .text-bg-dark class to create a dark offcanvas menu.</p>
				<p><strong>Tip:</strong> We have also added the .btn-close-white class to .btn-close, to create a white close button that looks nice with the dark background:</p>
				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
				  Open Offcanvas Sidebar
				</button>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Utilities') {

			const selectedValue1 = await vscode.window.showQuickPick(['Borders', 'Border Width', 'Border Color', 'Border Radius', 'Float and Clearfix', 'Responsive Floats', 'Center Align', 'Width', 'Height', 'Spacing', 'Shadows', 'Vertical Align', 'Aspect Ratio', 'Visibility', 'Close icon', 'Screenreaders', 'Colors'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Borders') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!DOCTYPE html>
				<html lang="en">
				<head>
				  <title>Bootstrap Example</title>
				  <meta charset="utf-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1">
				  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
				  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
				  <style>
				  span {
					display: inline-block;
					width: 70px;
					height: 70px;
					margin: 6px;
					background-color: #f9f9f9;
				  }
				  </style>
				</head>
				<body>
				
				<div class="container mt-3">
				  <h2>Borders</h2>
				  <p>Use the border classes to add or remove borders from an element:</p> 
				
				  <span class="border"></span>
				  <span class="border border-0"></span>
				  <span class="border border-top-0"></span>
				  <span class="border border-end-0"></span>
				  <span class="border border-bottom-0"></span>
				  <span class="border border-start-0"></span>
				  <br>
				  
				  <span class="border-top"></span>
				  <span class="border-end"></span>
				  <span class="border-bottom"></span>
				  <span class="border-start"></span>
				</div>
				
				</body>
				</html>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Border Width') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!DOCTYPE html>
				<html lang="en">
				<head>
				  <title>Bootstrap Example</title>
				  <meta charset="utf-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1">
				  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
				  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
				  <style>
				  span {
					display: inline-block;
					width: 70px;
					height: 70px;
					margin: 6px;
					background-color: #f9f9f9;
				  }
				  </style>
				</head>
				<body>
				
				<div class="container mt-3">
				  <h2>Border Width</h2>
				  <p>Use .border-1 to .border-5 to change the width of the border:</p> 
				
				  <span class="border border-1"></span>
				  <span class="border border-2"></span>
				  <span class="border border-3"></span>
				  <span class="border border-4"></span>
				  <span class="border border-5"></span>
				</div>
				
				</body>
				</html>
				`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Border Color') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!DOCTYPE html>
				<html lang="en">
				<head>
				  <title>Bootstrap Example</title>
				  <meta charset="utf-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1">
				  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
				  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
				  <style>
				  .border {
					display: inline-block;
					width: 70px;
					height: 70px;
					margin: 6px;
				  }
				  </style>
				</head>
				<body>
				
				<div class="container mt-3">
				  <h2>Borders</h2>
				  <p>Use a contextual border color to add a color to the border:</p> 
				  <span class="border border-primary"></span>
				  <span class="border border-secondary"></span>
				  <span class="border border-success"></span>
				  <span class="border border-danger"></span>
				  <span class="border border-warning"></span>
				  <span class="border border-info"></span>
				  <span class="border border-light"></span>
				  <span class="border border-dark"></span>
				  <span class="border border-white"></span>
				</div>
				
				</body>
				</html>
				`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Border Radius') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!DOCTYPE html>
				<html lang="en">
				<head>
				  <title>Bootstrap Example</title>
				  <meta charset="utf-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1">
				  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
				  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
				  <style>
				  span {
					display: inline-block;
					width: 70px;
					height: 70px;
					margin: 6px;
					background-color: #555;
				  }
				  </style>
				</head>
				<body>
				
				<div class="container mt-3">
				  <h2>Borders</h2>
				  <p>Round the corner of an element with the rounded classes:</p> 
				  <span class="rounded"></span>
				  <span class="rounded-top"></span>
				  <span class="rounded-end"></span>
				  <span class="rounded-bottom"></span>
				  <span class="rounded-start"></span>
				  <span class="rounded-circle"></span>
				  <span class="rounded-pill" style="width:130px"></span>
				  <br>
				  <span class="rounded-0"></span>
				  <span class="rounded-1"></span>
				  <span class="rounded-2"></span>
				  <span class="rounded-3"></span>
				  <span class="rounded-4"></span>
				  <span class="rounded-5"></span>
				</div>
				
				</body>
				</html>
				`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Float and Clearfix') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Float</h2>
				<p>Float an element to the right with the .float-end class or to the left with .float-start, and clear floats with the .clearfix class.</p> 
				<div class="clearfix">
				  <span class="float-start">Float left</span>
				  <span class="float-end">Float right</span>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Floats') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Responsive Floats</h2>
				<p>Float an element to the left or to the right depending on screen width, with the responsive float classes .float-*-left|right (where * is sm, md, lg, xl or xxl).</p>
				<p>Resize the browser window to see the effect.</p> 
				<div class="clearfix">
				  <div class="float-sm-end">Float right on small screens or wider</div><br>
				  <div class="float-md-end">Float right on medium screens or wider</div><br>
				  <div class="float-lg-end">Float right on large screens or wider</div><br>
				  <div class="float-xl-end">Float right on extra large screens or wider</div><br>
				  <div class="float-xxl-end">Float right on XXL screens or wider</div><br>
				  <div class="float-none">Float none</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Center Align') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Horizontal Centering</h1>
				<p>Center an element with the .mx-auto class:</p>
				<div class="mx-auto bg-warning" style="width:150px">Centered</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Width') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Width Utilities</h1>
				<p>Set the width of an element with the w-* classes:</p>
				<div class="w-25 bg-warning">Width 25%</div>
				<div class="w-50 bg-warning">Width 50%</div>
				<div class="w-75 bg-warning">Width 75%</div>
				<div class="w-100 bg-warning">Width 100%</div>
				<div class="w-auto bg-warning">Auto Width</div>
				<div class="mw-100 bg-warning">Max Width 100%</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Height') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Height Utilities</h1>
				<p>Set the height of an element with the w-* classes:</p>
				<div style="height:200px;background-color:#ddd">
				  <div class="h-25 d-inline-block p-2 bg-warning">Height 25%</div>
				  <div class="h-50 d-inline-block p-2 bg-warning">Height 50%</div>
				  <div class="h-75 d-inline-block p-2 bg-warning">Height 75%</div>
				  <div class="h-100 d-inline-block p-2 bg-warning">Height 100%</div>
				  <div class="h-auto d-inline-block p-2 bg-warning">Auto Height</div>
				  <div class="mh-100 d-inline-block p-2 bg-warning" style="height:500px">Max Height 100%</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Spacing') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Padding Left and Right Utilities</h1>
				<p>Padding x utilities:</p>
				<div class="px-0 bg-warning">Padding X 0</div>
				<div class="px-1 bg-success">Padding X 1</div>
				<div class="px-2 bg-danger">Padding X 2</div>
				<div class="px-3 bg-primary">Padding X 3</div>
				<div class="px-4 bg-light">Padding X 4</div>
				<div class="px-5 bg-info">Padding X 5</div>
				<br>
			  
				<p>Responsive padding x utilities. Resize the browser window to see the effect:</p>
				<div class="px-sm-5 bg-warning">Padding X 5 on SM screens</div>
				<div class="px-md-5 bg-success">Padding X 5 on MD screens</div>
				<div class="px-lg-5 bg-danger">Padding X 5 on LG screens</div>
				<div class="px-xl-5 bg-primary">Padding X 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Padding Top and Bottom Utilities</h1>
				<p>Padding y utilities:</p>
				<div class="py-0 bg-warning">Padding Y 0</div>
				<div class="py-1 bg-success">Padding Y 1</div>
				<div class="py-2 bg-danger">Padding Y 2</div>
				<div class="py-3 bg-primary">Padding Y 3</div>
				<div class="py-4 bg-light">Padding Y 4</div>
				<div class="py-5 bg-info">Padding Y 5</div>
				<br>
			  
				<p>Responsive padding y utilities. Resize the browser window to see the effect:</p>
				<div class="py-sm-5 bg-warning">Padding Y 5 on SM screens</div>
				<div class="py-md-5 bg-success">Padding Y 5 on MD screens</div>
				<div class="py-lg-5 bg-danger">Padding Y 5 on LG screens</div>
				<div class="py-xl-5 bg-primary">Padding Y 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Padding Right Utilities</h1>
				<div class="pe-0 bg-warning text-end">Padding Right 0</div>
				<div class="pe-1 bg-success text-end">Padding Right 1</div>
				<div class="pe-2 bg-danger text-end">Padding Right 2</div>
				<div class="pe-3 bg-primary text-end">Padding Right 3</div>
				<div class="pe-4 bg-light text-end">Padding Right 4</div>
				<div class="pe-5 bg-info text-end">Padding Right 5</div>
				<br>
			  
				<p>Responsive padding right utilities. Resize the browser window to see the effect:</p>
				<div class="pe-sm-5 bg-warning text-end">Padding Right 5 on SM screens</div>
				<div class="pe-md-5 bg-success text-end">Padding Right 5 on MD screens</div>
				<div class="pe-lg-5 bg-danger text-end">Padding Right 5 on LG screens</div>
				<div class="pe-xl-5 bg-primary text-end">Padding Right 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Padding Left Utilities</h1>
				<div class="ps-0 bg-warning">Padding Left 0</div>
				<div class="ps-1 bg-success">Padding Left 1</div>
				<div class="psl-2 bg-danger">Padding Left 2</div>
				<div class="ps-3 bg-primary">Padding Left 3</div>
				<div class="ps-4 bg-light">Padding Left 4</div>
				<div class="ps-5 bg-info">Padding Left 5</div>
				<br>
			  
				<p>Responsive padding left utilities. Resize the browser window to see the effect:</p>
				<div class="ps-sm-5 bg-warning">Padding Left 5 on SM screens</div>
				<div class="ps-md-5 bg-success">Padding Left 5 on MD screens</div>
				<div class="ps-lg-5 bg-danger">Padding Left 5 on LG screens</div>
				<div class="ps-xl-5 bg-primary">Padding Left 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Padding Bottom Utilities</h1>
				<div class="pb-0 bg-warning">Padding Bottom 0</div>
				<div class="pb-1 bg-success">Padding Bottom 1</div>
				<div class="pb-2 bg-danger">Padding Bottom 2</div>
				<div class="pb-3 bg-primary">Padding Bottom 3</div>
				<div class="pb-4 bg-light">Padding Bottom 4</div>
				<div class="pb-5 bg-info">Padding Bottom 5</div>
				<br>
			  
				<p>Responsive padding bottom utilities. Resize the browser window to see the effect:</p>
				<div class="pb-sm-5 bg-warning">Padding Bottom 5 on SM screens</div>
				<div class="pb-md-5 bg-success">Padding Bottom 5 on MD screens</div>
				<div class="pb-lg-5 bg-danger">Padding Bottom 5 on LG screens</div>
				<div class="pb-xl-5 bg-primary">Padding Bottom 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Padding Top Utilities</h1>
				<div class="pt-0 bg-warning">Padding Top 0</div>
				<div class="pt-1 bg-success">Padding Top 1</div>
				<div class="pt-2 bg-danger">Padding Top 2</div>
				<div class="pt-3 bg-primary">Padding Top 3</div>
				<div class="pt-4 bg-light">Padding Top 4</div>
				<div class="pt-5 bg-info">Padding Top 5</div>
				<br>
			  
				<p>Responsive padding top utilities. Resize the browser window to see the effect:</p>
				<div class="pt-sm-5 bg-warning">Padding Top 5 on SM screens</div>
				<div class="pt-md-5 bg-success">Padding Top 5 on MD screens</div>
				<div class="pt-lg-5 bg-danger">Padding Top 5 on LG screens</div>
				<div class="pt-xl-5 bg-primary">Padding Top 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Padding Utilities</h1>
				<div class="p-0 bg-warning">Padding 0</div>
				<div class="p-1 bg-success">Padding 1</div>
				<div class="p-2 bg-danger">Padding 2</div>
				<div class="p-3 bg-primary">Padding 3</div>
				<div class="p-4 bg-light">Padding 4</div>
				<div class="p-5 bg-info">Padding 5</div>
				<br>
			  
				<p>Responsive padding utilities. Resize the browser window to see the effect:</p>
				<div class="p-sm-5 bg-warning">Padding 5 on SM screens</div>
				<div class="p-md-5 bg-success">Padding 5 on MD screens</div>
				<div class="p-lg-5 bg-danger">Padding 5 on LG screens</div>
				<div class="p-xl-5 bg-primary">Padding 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Margin Top and Bottom Utilities</h1>
				<p>Margin Y utilities:</p>
				<div class="my-0 bg-warning">Margin Y 0</div>
				<div class="my-1 bg-warning">Margin Y 1</div>
				<div class="my-2 bg-warning">Margin Y 2</div>
				<div class="my-3 bg-warning">Margin Y 3</div>
				<div class="my-4 bg-warning">Margin Y 4</div>
				<div class="my-5 bg-warning">Margin Y 5</div>
				<div class="my-auto bg-warning">Margin Y Auto</div>
				<br>
				
				<p>Responsive margin y utilities. Resize the browser window to see the effect:</p>
				<div class="my-sm-5 bg-warning">Margin Y 5 on SM screens</div>
				<div class="my-md-5 bg-warning">Margin Y 5 on MD screens</div>
				<div class="my-lg-5 bg-warning">Margin Y 5 on LG screens</div>
				<div class="my-xl-5 bg-warning">Margin Y 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Margin Left and Right Utilities</h1>
				<p>Margin X utilities:</p>
				<div class="mx-0 bg-warning">Margin X 0</div>
				<div class="mx-1 bg-warning">Margin X 1</div>
				<div class="mx-2 bg-warning">Margin X 2</div>
				<div class="mx-3 bg-warning">Margin X 3</div>
				<div class="mx-4 bg-warning">Margin X 4</div>
				<div class="mx-5 bg-warning">Margin X 5</div>
				<div class="mx-auto bg-warning" style="width:150px">Margin X Auto</div>
				<br>
				
				<p>Responsive margin x utilities. Resize the browser window to see the effect:</p>
				<div class="mx-sm-5 bg-warning">Margin X 5 on SM screens</div>
				<div class="mx-md-5 bg-warning">Margin X 5 on MD screens</div>
				<div class="mx-lg-5 bg-warning">Margin X 5 on LG screens</div>
				<div class="mx-xl-5 bg-warning">Margin X 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Margin Right Utilities</h1>
				<div class="me-0 bg-warning">Margin Right 0</div>
				<div class="me-1 bg-warning">Margin Right 1</div>
				<div class="me-2 bg-warning">Margin Right 2</div>
				<div class="me-3 bg-warning">Margin Right 3</div>
				<div class="me-4 bg-warning">Margin Right 4</div>
				<div class="me-5 bg-warning">Margin Right 5</div>
				<div class="me-auto bg-warning" style="width:150px">Margin Right Auto</div>
				<br>
				
				<p>Responsive margin left utilities. Resize the browser window to see the effect:</p>
				<div class="me-sm-5 bg-warning">Margin Right on SM screens</div>
				<div class="me-md-5 bg-warning">Margin Right on MD screens</div>
				<div class="me-lg-5 bg-warning">Margin Right on LG screens</div>
				<div class="me-xl-5 bg-warning">Margin Right on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Margin Left Utilities</h1>
				<div class="ms-0 bg-warning">Margin Left 0</div>
				<div class="ms-1 bg-warning">Margin Left 1</div>
				<div class="ms-2 bg-warning">Margin Left 2</div>
				<div class="ms-3 bg-warning">Margin Left 3</div>
				<div class="ms-4 bg-warning">Margin Left 4</div>
				<div class="ms-5 bg-warning">Margin Left 5</div>
				<div class="ms-auto bg-warning" style="width:150px">Margin Left Auto</div>
			  
				<p>Responsive margin left utilities. Resize the browser window to see the effect:</p>
				<div class="ms-sm-5 bg-warning">Margin Left 5 on SM screens</div>
				<div class="ms-md-5 bg-warning">Margin Left 5 on MD screens</div>
				<div class="ms-lg-5 bg-warning">Margin Left 5 on LG screens</div>
				<div class="ms-xl-5 bg-warning">Margin Left 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Margin Bottom Utilities</h1>
				<div class="mb-0 bg-warning">Margin Bottom 0</div>
				<div class="mb-1 bg-warning">Margin Bottom 1</div>
				<div class="mb-2 bg-warning">Margin Bottom 2</div>
				<div class="mb-3 bg-warning">Margin Bottom 3</div>
				<div class="mb-4 bg-warning">Margin Bottom 4</div>
				<div class="mb-5 bg-warning">Margin Bottom 5</div>
				<div class="mb-auto bg-warning" style="width:150px">Margin Bottom Auto</div>
				<br>
			  
				<p>Responsive margin bottom utilities. Resize the browser window to see the effect:</p>
				<div class="mb-sm-5 bg-warning">Margin Bottom 5 on SM screens</div>
				<div class="mb-md-5 bg-warning">Margin Bottom 5 on MD screens</div>
				<div class="mb-lg-5 bg-warning">Margin Bottom 5 on LG screens</div>
				<div class="mb-xl-5 bg-warning">Margin Bottom 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Margin Top Utilities</h1>
				<div class="mt-0 bg-warning">Margin Top 0</div>
				<div class="mt-1 bg-warning">Margin Top 1</div>
				<div class="mt-2 bg-warning">Margin Top 2</div>
				<div class="mt-3 bg-warning">Margin Top 3</div>
				<div class="mt-4 bg-warning">Margin Top 4</div>
				<div class="mt-5 bg-warning">Margin Top 5</div>
				<div class="mt-auto bg-warning" style="width:150px">Margin Top Auto</div>
				<br>
			  
				<p>Responsive margin top utilities. Resize the browser window to see the effect:</p>
				<div class="mt-sm-5 bg-warning">Margin Top 5 on SM screens</div>
				<div class="mt-md-5 bg-warning">Margin Top 5 on MD screens</div>
				<div class="mt-lg-5 bg-warning">Margin Top 5 on LG screens</div>
				<div class="mt-xl-5 bg-warning">Margin Top 5 on XL screens</div>
			  </div>
			  <div class="container mt-3">
				<h1>Spacing Utilities</h1>
				<p>Set the spacing of an element with the {property}{sides}-{breakpoint}-{size} classes. Omit breakpoint if you want the padding or margin to work on all screen sizes.</p>
				<div class="pt-4 bg-warning">I only have a top padding (1.5rem)</div>
				<div class="p-5 bg-success">I have a padding on all sides (3rem)</div>
				<div class="m-5 pb-5 bg-info">I have a margin on all sides (3rem) and a bottom padding (3rem)</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Shadows') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Shadows</h1>
				<p>Use the shadow- classes to to add shadows to an element:</p>
				<div class="shadow-none p-4 mb-4 bg-light">No shadow</div>
				<div class="shadow-sm p-4 mb-4 bg-white">Small shadow</div>
				<div class="shadow p-4 mb-4 bg-white">Default shadow</div>
				<div class="shadow-lg p-4 mb-4 bg-white">Large shadow</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Vertical Align') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Vertical Align</h1>
				<p>Change the alignment of elements with the align classes (only works on inline, inline-block, inline-table and table cell elements):</p>
				<span class="align-baseline">baseline</span>
				<span class="align-top">top</span>
				<span class="align-middle">middle</span>
				<span class="align-bottom">bottom</span>
				<span class="align-text-top">text-top</span>
				<span class="align-text-bottom">text-bottom</span>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Aspect Ratio') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Aspect Ratio</h2>
				<p>Create a responsive video and scale it nicely to the parent element.</p>
				
				<h2>Aspect ratio 1:1</h2>
				<div class="ratio ratio-1x1">
				  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
				</div>
				<br>
				
				<h2>Aspect ratio 4:3</h2>
				<div class="ratio ratio-4x3">
				  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
				</div> 
				<br>
				
				<h2>Aspect ratio 16:9</h2>
				<div class="ratio ratio-16x9">
				  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
				</div>
				<br>
				  
				<h2>Aspect ratio 21:9</h2>
				<div class="ratio ratio-21x9">
				  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Visibility') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Visibility</h1>
				<p>Use the .visible or .invisible classes to control the visibility of elements. Note: These classes do not change the CSS display value. They only add visibility:visible or visibility:hidden to an element:</p>
				<div class="visible bg-success">I am visible</div>
				<div class="invisible bg-warning">I am invisible</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Close icon') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h1>Close Icon</h1>
				<p>Use the .close class to style a close icon. This is often used for alerts and modals. Note that we use the times; symbol to create the actual icon (a better looking "x"). Also note that it is right-aligned by default:</p>
				<div class="clearfix">
				  <button type="button" class="close">&times;</button>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Screenreaders') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Screen readers</h2>
				<p>Use the .sr-only class to hide an element on all devices, except screen readers:</p>
				<span class="visually-hidden">I will be hidden on all screens except for screen readers.</span>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Colors') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Background Color with Contrasting Text Color</h2>
				<p class="text-bg-primary">This text is important.</p>
				<p class="text-bg-success">This text indicates success.</p>
				<p class="text-bg-info">This text represents some information.</p>
				<p class="text-bg-warning">This text represents a warning.</p>
				<p class="text-bg-danger">This text represents danger.</p>
				<p class="text-bg-secondary">Secondary background color.</p>
				<p class="text-bg-dark">Dark grey background color.</p>
				<p class="text-bg-light">Light grey background color.</p>
			  </div>
			  <div class="container mt-3">
				<h2>Contextual Backgrounds</h2>
				<p>Use the contextual background classes to provide "meaning through colors".</p>
				<div class="bg-primary p-3"></div>
				<div class="bg-success p-3"></div>
				<div class="bg-info p-3"></div>
				<div class="bg-warning p-3"></div>
				<div class="bg-danger p-3"></div>
				<div class="bg-secondary p-3"></div>
				<div class="bg-dark p-3"></div>
				<div class="bg-light p-3"></div>
			  </div>
			  <div class="container mt-3">
				<h2>Opacity Text Colors</h2>
				<p>Add 50% opacity for black or white text with the .text-black-50 or .text-white-50 classes:</p>
				<p class="text-black-50">Black text with 50% opacity on white background</p>
				<p class="text-white-50 bg-dark">White text with 50% opacity on black background</p>
			  </div>
			  <div class="container mt-3">
				<h2>Contextual Link Colors</h2>
				<a href="#" class="text-muted">Muted link.</a>
				<a href="#" class="text-primary">Primary link.</a>
				<a href="#" class="text-success">Success link.</a>
				<a href="#" class="text-info">Info link.</a>
				<a href="#" class="text-warning">Warning link.</a>
				<a href="#" class="text-danger">Danger link.</a>
				<a href="#" class="text-secondary">Secondary link.</a>
				<a href="#" class="text-dark">Dark grey link.</a>
				<a href="#" class="text-body">Body/black link.</a>
				<a href="#" class="text-light">Light grey link.</a>
			  </div>
			  <div class="container mt-3">
				<h2>Contextual Colors</h2>
				<p>Use the contextual classes to provide "meaning through colors":</p>
				<p class="text-muted">This text is muted.</p>
				<p class="text-primary">This text is important.</p>
				<p class="text-success">This text indicates success.</p>
				<p class="text-info">This text represents some information.</p>
				<p class="text-warning">This text represents a warning.</p>
				<p class="text-danger">This text represents danger.</p>
				<p class="text-secondary">Secondary text.</p>
				<p class="text-dark">This text is dark grey.</p>
				<p class="text-body">Default body color (often black).</p>
				<p class="text-light">This text is light grey (on white background).</p>
				<p class="text-white">This text is white (on white background).</p>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Flex') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Flexbox', 'Horizontal Direction', 'Vertical Direction', 'Justify Content', 'Fill / Equal Widths', 'Grow', 'Order', 'Auto Margins', 'Wrap', 'Align Content', 'Align Items', 'Align Self', 'Responsive Flex Classes'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Flexbox') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Inline Flex</h2>
				<p>To create an inline flexbox container, use the d-inline-flex class:</p>
				<div class="d-inline-flex p-3 bg-secondary text-white">  
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Flex</h2>
				<p>To create a flexbox container and transform direct children into flex items, use the d-flex class:</p>
				<div class="d-flex p-3 bg-secondary text-white">  
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Horizontal Direction') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Horizontal Direction</h2>
				<p>Use .flex-row to make the flex items appear side by side (default):</p>
				<div class="d-flex flex-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<p>Use .flex-row-reverse to right-align the direction:</p>
				<div class="d-flex flex-row-reverse bg-secondary">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Vertical Direction') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Vertical Direction</h2>
				<p>Use .flex-column to display the flex items vertically (on top of each other):</p>
				<div class="d-flex flex-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<p>Use .flex-column-reverse to reverse the vertical direction:</p>
				<div class="d-flex flex-column-reverse">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Justify Content') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Justify content</h2>
				<p>Use the .justify-content-* classes to change the alignment of flex items. Choose from start (default), end, center, between or around:</p>
				<div class="d-flex justify-content-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<div class="d-flex justify-content-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<div class="d-flex justify-content-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<div class="d-flex justify-content-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<div class="d-flex justify-content-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Fill / Equal Widths') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Fill / Equal Widths</h2>
				<p>Use .flex-fill on flex items to force them into equal widths:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 flex-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-fill bg-primary">Flex item 3</div>
				</div>
				<p>Example without .flex-fill:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Grow') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Grow</h2>
				<p>Use .flex-grow-1 on a flex item to take up the rest of the space:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 flex-grow-1 bg-primary">Flex item 3</div>
				</div>
				<p>Example without .flex-grow-1:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Order') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Order</h2>
				<p>Change the visual order of a specific flex item(s) with the .order classes. Valid classes are from 0 to 5:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-1 bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Auto Margins') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Auto Margins</h2>
				<p>Easily add auto margins to flex items with .mr-auto (push items to the right), or by using .ml-auto (push items to the left):</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 ms-auto bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2  bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 me-auto bg-primary">Flex item 3</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Wrap') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Wrap</h2>
				<p>Control how flex items wrap in a flex container with .flex-nowrap (default), .flex-wrap or .flex-wrap-reverse.</p>
				<p><code>.flex-wrap:</code></p>
				<div class="d-flex flex-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				<p><code>.flex-wrap-reverse:</code></p>
				<div class="d-flex flex-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				<p><code>.flex-nowrap:</code></p>
				<div class="d-flex flex-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				  <div class="p-2 border">Flex item 26</div>
				  <div class="p-2 border">Flex item 27</div>
				  <div class="p-2 border">Flex item 28</div>
				  <div class="p-2 border">Flex item 29</div>
				  <div class="p-2 border">Flex item 30</div>
				  <div class="p-2 border">Flex item 31</div>
				  <div class="p-2 border">Flex item 32</div>
				  <div class="p-2 border">Flex item 33</div>
				  <div class="p-2 border">Flex item 34</div>
				  <div class="p-2 border">Flex item 35</div>
				</div>
				<br>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Align Content') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Align Content</h2>
				<p>Control the vertical alignment of gathered flex items with the .align-content-* classes.</p>
				<p><strong>Note:</strong> This example does not look good on a small devices. Also note that these classes have no effect on single rows of flex items.</p>
				<p>.align-content-start (default):</p>
				<div class="d-flex flex-wrap align-content-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				<p>.align-content-end:</p>
				<div class="d-flex flex-wrap align-content-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				<p>.align-content-center:</p>
				<div class="d-flex flex-wrap align-content-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				<p>.align-content-around:</p>
				<div class="d-flex flex-wrap align-content-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				<p>.align-content-stretch:</p>
				<div class="d-flex flex-wrap align-content-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Align Items') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Align Items</h2>
				<p>Control the vertical alignment of single rows of flex items with the .align-items-* classes.</p>
				<p>.align-items-start:</p>
				<div class="d-flex align-items-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-items-end:</p>
				<div class="d-flex align-items-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-items-center:</p>
				<div class="d-flex align-items-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-items-baseline:</p>
				<div class="d-flex align-items-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-items-stretch (default):</p>
				<div class="d-flex align-items-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Align Self') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Align Self</h2>
				<p>Control the vertical alignment of a specific flex item with the .align-self-* classes.</p>
				<p>.align-self-start:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-self-end:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-self-center:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-self-baseline:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<p>.align-self-stretch (default):</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Responsive Flex Classes') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Flex</h2>
				<p>To create a flexbox container, add the d-flex class. Use any of the d-*-flex classes to control WHEN the element should be a flex element on a specific screen width.</p>
				<p>Resize the browser window to see the effect.</p>
				<div class="d-flex bg-success">d-flex</div>
				<span class="d-sm-flex bg-success">d-sm-flex</span>
				<span class="d-md-flex bg-success">d-md-flex</span>
				<span class="d-lg-flex bg-success">d-lg-flex</span>
				<span class="d-xl-flex bg-success">d-xl-flex</span>
				<span class="d-xxl-flex bg-success">d-xxl-flex</span>
			  </div>
			  <div class="container mt-3">
				<h2>Inline Flex</h2>
				<p>To create an inline flexbox container, add the d-inline-flex class. Use any of the d-*-inline-flex classes to control WHEN the element should be a flex element on a specific screen width.</p>
				<p>Resize the browser window to see the effect.</p>
				<div class="d-inline-flex bg-success">d-flex</div>
				<div class="d-sm-inline-flex bg-success">d-sm-flex</div>
				<div class="d-md-inline-flex bg-success">d-md-flex</div>
				<div class="d-lg-inline-flex bg-success">d-lg-flex</div>
				<div class="d-xl-inline-flex bg-success">d-xl-flex</div>
				<div class="d-xxl-inline-flex bg-success">d-xxl-flex</div>
			  </div>
			  <div class="container mt-3">
				<h2>Horizontal Direction</h2>
				<p>Use .flex-row to make the flex items appear side by side (default).</p>
				<p>Use .flex-sm|md|lg|xl-row to achieve this on a specific screen size. Resize the browser window to see the effect</p>
				<p><code>flex-row:</code></p>
				<div class="d-flex flex-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-sm-row:</code></p>
				<div class="d-sm-flex flex-sm-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-md-row:</code></p>
				<div class="d-md-flex flex-md-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-lg-row:</code></p>
				<div class="d-lg-flex flex-lg-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-xl-row:</code></p>
				<div class="d-xl-flex flex-xl-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>flex-xxl-row:</code></p>
				<div class="d-xxl-flex flex-xxl-row bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Horizontal Direction</h2>
				<p>Use .flex-row to make the flex items appear side by side (default).</p>
				<p>Use .flex-row-reverse to right-align the direction, and use .flex-sm|md|lg|xl-row-reverse to right-align the direction on a specific screen size. Resize the browser window to see the effect.</p>
				<p><code>flex-row-reverse:</code></p>
				<div class="d-flex flex-row-reverse bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-sm-row-reverse:</code></p>
				<div class="d-flex flex-sm-row-reverse bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-md-row-reverse:</code></p>
				<div class="d-flex flex-md-row-reverse bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-lg-row-reverse:</code></p>
				<div class="d-flex flex-lg-row-reverse bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>flex-xl-row-reverse:</code></p>
				<div class="d-flex flex-xl-row-reverse bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>flex-xxl-row-reverse:</code></p>
				<div class="d-flex flex-xxl-row-reverse bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Vertical Direction</h2>
				<p>Use .flex-column to display the flex items vertically (on top of each other).</p>
				<p>Use .flex-sm|md|lg|xl-column to achieve this on different screen sizes.</p>
				<p><code>.flex-column</code>:</p>
				<div class="d-flex flex-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-sm-column</code>:</p>
				<div class="d-flex flex-sm-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-md-column</code>:</p>
				<div class="d-flex flex-md-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.flex-lg-column</code>:</p>
				<div class="d-flex flex-lg-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.flex-xl-column</code>:</p>
				<div class="d-flex flex-xl-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.flex-xxl-column</code>:</p>
				<div class="d-flex flex-xxl-column mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Vertical Direction</h2>
				<p>Use .flex-column to display the flex items vertically (on top of each other).</p>
				<p>Use .flex-column-reverse to reverse the vertical direction, and use .flex-sm|md|lg|xl-column-reverse to achieve this on different screen sizes.</p>
				<p><code>.flex-column-reverse</code>:</p>
				<div class="d-flex flex-column-reverse mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-sm-column-reverse</code>:</p>
				<div class="d-flex flex-sm-column-reverse mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-md-column-reverse</code>:</p>
				<div class="d-flex flex-md-column-reverse mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.flex-lg-column-reverse</code>:</p>
				<div class="d-flex flex-lg-column-reverse mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.flex-xl-column-reverse</code>:</p>
				<div class="d-flex flex-xl-column-reverse mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-xxl-column-reverse</code>:</p>
				<div class="d-flex flex-xxl-column-reverse mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Justify content start</h2>
				<p>Use the .justify-content-*-start to display flex items from the start (left-aligned) on different screen sizes. <strong>Note:</strong> left-aligned and from the start is default.</p>
				
				<p><code>.justify-content-start</code>:</p>
				<div class="d-flex justify-content-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-sm-start</code>:</p>
				<div class="d-flex justify-content-sm-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-md-start</code>:</p>
				<div class="d-flex justify-content-md-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-lg-start</code>:</p>
				<div class="d-flex justify-content-lg-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-xl-start</code>:</p>
				<div class="d-flex justify-content-xl-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-xxl-start</code>:</p>
				<div class="d-flex justify-content-xxl-start bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Justify content end</h2>
				<p>Use the .justify-content-*-end to display flex items at the end (right-aligned) on different screen sizes.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.justify-content-end</code>:</p>
				<div class="d-flex justify-content-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-sm-end</code>:</p>
				<div class="d-flex justify-content-sm-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-md-end</code>:</p>
				<div class="d-flex justify-content-md-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-lg-end</code>:</p>
				<div class="d-flex justify-content-lg-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-xl-end</code>:</p>
				<div class="d-flex justify-content-xl-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-xxl-end</code>:</p>
				<div class="d-flex justify-content-xxl-end bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Justify content center</h2>
				<p>Use the .justify-content-*-center to display flex items in the middle of a flex container on different screen sizes.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.justify-content-center</code>:</p>
				<div class="d-flex justify-content-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-sm-center</code>:</p>
				<div class="d-flex justify-content-sm-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-md-center</code>:</p>
				<div class="d-flex justify-content-md-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-lg-center</code>:</p>
				<div class="d-flex justify-content-lg-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-xl-center</code>:</p>
				<div class="d-flex justify-content-xl-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-xxl-center</code>:</p>
				<div class="d-flex justify-content-xxl-center bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Justify content "between"</h2>
				<p>Use the .justify-content-*-between to display flex items in "between" inside a flex container on different screen sizes.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.justify-content-between</code>:</p>
				<div class="d-flex justify-content-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-sm-between</code>:</p>
				<div class="d-flex justify-content-sm-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-md-between</code>:</p>
				<div class="d-flex justify-content-md-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-lg-between</code>:</p>
				<div class="d-flex justify-content-lg-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-xl-between</code>:</p>
				<div class="d-flex justify-content-xl-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-xxl-between</code>:</p>
				<div class="d-flex justify-content-xxl-between bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Justify content "around"</h2>
				<p>Use the .justify-content-*-around to display flex items "around" inside a flex container on different screen sizes.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.justify-content-around</code>:</p>
				<div class="d-flex justify-content-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-sm-around</code>:</p>
				<div class="d-flex justify-content-sm-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-md-around</code>:</p>
				<div class="d-flex justify-content-md-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-lg-around</code>:</p>
				<div class="d-flex justify-content-lg-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.justify-content-xl-around</code>:</p>
				<div class="d-flex justify-content-xl-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.justify-content-xxl-around</code>:</p>
				<div class="d-flex justify-content-xxl-around bg-secondary mb-3">
				  <div class="p-2 bg-info">Flex item 1</div>
				  <div class="p-2 bg-warning">Flex item 2</div>
				  <div class="p-2 bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Fill / Equal Widths</h2>
				<p>Use .flex-fill on flex items to force them into equal widths, and use .flex-*-fill to achieve this on different screen sizes.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.flex-fill</code>:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 flex-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-fill bg-primary">Flex item 3</div>
				</div>
				
				<p><code>.flex-sm-fill</code>:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 flex-sm-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-sm-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-sm-fill bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-md-fill</code>:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 flex-md-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-md-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-md-fill bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-lg-fill</code>:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 flex-lg-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-lg-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-lg-fill bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-xl-fill</code>:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 flex-xl-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-xl-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-xl-fill bg-primary">Flex item 3</div>
				</div>
			  
				<p><code>.flex-xxl-fill</code>:</p>
				<div class="d-flex mb-3 bg-secondary">
				  <div class="p-2 flex-xxl-fill bg-info">Flex item 1</div>
				  <div class="p-2 flex-xxl-fill bg-warning">Flex item 2</div>
				  <div class="p-2 flex-xxl-fill bg-primary">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Order</h2>
				<p>Change the visual order of a specific flex item(s) with the .order classes. Valid classes are from 0 to 12.</p>
				<p>Use .order-sm|md|lg|xl-0-12 to achieve this effect on different screen sizes. The classes can also be combined to make an even more flexible layout.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.order</code>:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-1 bg-primary">Flex item 3</div>
				</div> 
			  
				<p><code>.order-sm</code>:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-sm-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-sm-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-sm-1 bg-primary">Flex item 3</div>
				</div> 
				
				<p><code>.order-md</code>:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-md-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-md-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-md-1 bg-primary">Flex item 3</div>
				</div> 
				
				<p><code>.order-lg</code>:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-lg-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-lg-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-lg-1 bg-primary">Flex item 3</div>
				</div> 
				
				<p><code>.order-xl</code>:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-xl-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-xl-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-xl-1 bg-primary">Flex item 3</div>
				</div> 
				
				<p><code>.order-xxl</code>:</p>
				<div class="d-flex mb-3">
				  <div class="p-2 order-xxl-3 bg-info">Flex item 1</div>
				  <div class="p-2 order-xxl-2 bg-warning">Flex item 2</div>
				  <div class="p-2 order-xxl-1 bg-primary">Flex item 3</div>
				</div> 
			  </div>
			  <div class="container mt-3">
				<h2>Wrap</h2>
				<p>Control how flex items wrap in a flex container with .flex-nowrap (<strong>default</strong>), .flex-wrap or .flex-wrap-reverse.</p>
				<p>Use the .flex-nowrap class if you don't want the flex items to wrap.</p>
				
				<p><code>.flex-nowrap:</code></p>
				<div class="d-flex flex-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-sm-nowrap:</code></p>
				<div class="d-flex flex-sm-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-md-nowrap:</code></p>
				<div class="d-flex flex-md-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-lg-nowrap:</code></p>
				<div class="d-flex flex-lg-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-xl-nowrap:</code></p>
				<div class="d-flex flex-xl-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-xxl-nowrap:</code></p>
				<div class="d-flex flex-xxl-nowrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Wrap</h2>
				<p>Control how flex items wrap in a flex container with .flex-nowrap (<strong>default</strong>), .flex-wrap or .flex-wrap-reverse.</p>
				<p>Use the .flex-wrap class if you want the flex items to wrap. Resize the browser window to see the effect.</p>
				
				<p><code>.flex-wrap:</code></p>
				<div class="d-flex flex-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-sm-wrap:</code></p>
				<div class="d-flex flex-sm-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-md-wrap:</code></p>
				<div class="d-flex flex-md-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-lg-wrap:</code></p>
				<div class="d-flex flex-lg-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-xl-wrap:</code></p>
				<div class="d-flex flex-xl-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-xxl-wrap:</code></p>
				<div class="d-flex flex-xxl-wrap bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Wrap</h2>
				<p>Control how flex items wrap in a flex container with .flex-nowrap (<strong>default</strong>), .flex-wrap or .flex-wrap-reverse.</p>
				<p>Use the .flex-wrap-reverse class if you want the flex items to wrap, reversed. Resize the browser window to see the effect.</p>
				
				<p><code>.flex-wrap-reverse:</code></p>
				<div class="d-flex flex-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-sm-wrap-reverse:</code></p>
				<div class="d-flex flex-sm-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-md-wrap-reverse:</code></p>
				<div class="d-flex flex-md-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-lg-wrap-reverse:</code></p>
				<div class="d-flex flex-lg-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-xl-wrap-reverse:</code></p>
				<div class="d-flex flex-xl-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.flex-xxl-wrap-reverse:</code></p>
				<div class="d-flex flex-xxl-wrap-reverse bg-light">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13</div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Content Start (default)</h2>
				<p>Use the .align-content-*-start classes to align gathered items from the start on different screens.</p>
			  
				<p><code>.align-content-start</code>:</p>
				<div class="d-flex flex-wrap align-content-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-sm-start</code>:</p>
				<div class="d-flex flex-wrap align-content-sm-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-md-start</code>:</p>
				<div class="d-flex flex-wrap align-content-md-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-lg-start</code>:</p>
				<div class="d-flex flex-wrap align-content-lg-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xl-start</code>:</p>
				<div class="d-flex flex-wrap align-content-xl-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xxl-start</code>:</p>
				<div class="d-flex flex-wrap align-content-xxl-start bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Content End</h2>
				<p>Use the .align-content-*-end classes to align gathered items at the end on different screens.</p>
				<p>Resize the browser window to see the effect.</p>
				
				<p><code>.align-content-end</code>:</p>
				<div class="d-flex flex-wrap align-content-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-sm-end</code>:</p>
				<div class="d-flex flex-wrap align-content-sm-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-md-end</code>:</p>
				<div class="d-flex flex-wrap align-content-md-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-lg-end</code>:</p>
				<div class="d-flex flex-wrap align-content-lg-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xl-end</code>:</p>
				<div class="d-flex flex-wrap align-content-xl-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xxl-end</code>:</p>
				<div class="d-flex flex-wrap align-content-xxl-end bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Content Center</h2>
				<p>Use the .align-content-*-center classes to align gathered items in the center on different screens.</p>
			  
				<p><code>.align-content-center</code>:</p>
				<div class="d-flex flex-wrap align-content-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-sm-center</code>:</p>
				<div class="d-flex flex-wrap align-content-sm-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-md-center</code>:</p>
				<div class="d-flex flex-wrap align-content-md-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-lg-center</code>:</p>
				<div class="d-flex flex-wrap align-content-lg-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xl-center</code>:</p>
				<div class="d-flex flex-wrap align-content-xl-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xxl-center</code>:</p>
				<div class="d-flex flex-wrap align-content-xxl-center bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Content Around</h2>
				<p>Use the .align-content-*-around classes to align gathered items "around" on different screens.</p>
			  
				<p><code>.align-content-around</code>:</p>
				<div class="d-flex flex-wrap align-content-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-sm-around</code>:</p>
				<div class="d-flex flex-wrap align-content-sm-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-md-around</code>:</p>
				<div class="d-flex flex-wrap align-content-md-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-lg-around</code>:</p>
				<div class="d-flex flex-wrap align-content-lg-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xl-around</code>:</p>
				<div class="d-flex flex-wrap align-content-xl-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xxl-around</code>:</p>
				<div class="d-flex flex-wrap align-content-xxl-around bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Content Stretch</h2>
				<p>Use the .align-content-*-stretch classes to stretch single rows of flex items on different screens.</p>
			  
				<p><code>.align-content-stretch</code>:</p>
				<div class="d-flex flex-wrap align-content-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-sm-stretch</code>:</p>
				<div class="d-flex flex-wrap align-content-sm-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-md-stretch</code>:</p>
				<div class="d-flex flex-wrap align-content-md-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
			  
				<p><code>.align-content-lg-stretch</code>:</p>
				<div class="d-flex flex-wrap align-content-lg-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xl-stretch</code>:</p>
				<div class="d-flex flex-wrap align-content-xl-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
				<br>
				
				<p><code>.align-content-xxl-stretch</code>:</p>
				<div class="d-flex flex-wrap align-content-xxl-stretch bg-light" style="height:300px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				  <div class="p-2 border">Flex item 4</div>
				  <div class="p-2 border">Flex item 5</div>
				  <div class="p-2 border">Flex item 6</div>
				  <div class="p-2 border">Flex item 7</div>
				  <div class="p-2 border">Flex item 8</div>
				  <div class="p-2 border">Flex item 9</div>
				  <div class="p-2 border">Flex item 10</div>
				  <div class="p-2 border">Flex item 11</div>
				  <div class="p-2 border">Flex item 12</div>
				  <div class="p-2 border">Flex item 13 </div>
				  <div class="p-2 border">Flex item 14</div>
				  <div class="p-2 border">Flex item 15</div>
				  <div class="p-2 border">Flex item 16</div>
				  <div class="p-2 border">Flex item 17</div>
				  <div class="p-2 border">Flex item 18</div>
				  <div class="p-2 border">Flex item 19</div>
				  <div class="p-2 border">Flex item 20</div>
				  <div class="p-2 border">Flex item 21</div>
				  <div class="p-2 border">Flex item 22</div>
				  <div class="p-2 border">Flex item 23</div>
				  <div class="p-2 border">Flex item 24</div>
				  <div class="p-2 border">Flex item 25</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Items Start</h2>
				<p>Use the .align-items-*-start classes to align single rows of items from the start on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-items-stretch is default.</p>
			  
				<p><code>.align-items-start</code>:</p>
				<div class="d-flex align-items-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-sm-start</code>:</p>
				<div class="d-flex align-items-sm-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-md-start</code>:</p>
				<div class="d-flex align-items-md-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-lg-start</code>:</p>
				<div class="d-flex align-items-lg-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xl-start</code>:</p>
				<div class="d-flex align-items-xl-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xxl-start</code>:</p>
				<div class="d-flex align-items-xxl-start bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Items End</h2>
				<p>Use the .align-items-*-end classes to align single rows of items at the end on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-items-stretch is default.</p>
			  
				<p><code>.align-items-end</code>:</p>
				<div class="d-flex align-items-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-sm-end</code>:</p>
				<div class="d-flex align-items-sm-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-md-end</code>:</p>
				<div class="d-flex align-items-md-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-lg-end</code>:</p>
				<div class="d-flex align-items-lg-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xl-end</code>:</p>
				<div class="d-flex align-items-xl-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xxl-end</code>:</p>
				<div class="d-flex align-items-xxl-end bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Items Center</h2>
				<p>Use the .align-items-*-center classes to align single rows of items in the center of a flex container on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-items-stretch is default.</p>
			  
				<p><code>.align-items-center</code>:</p>
				<div class="d-flex align-items-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-sm-center</code>:</p>
				<div class="d-flex align-items-sm-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-md-center</code>:</p>
				<div class="d-flex align-items-md-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-lg-center</code>:</p>
				<div class="d-flex align-items-lg-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xl-center</code>:</p>
				<div class="d-flex align-items-xl-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xxl-center</code>:</p>
				<div class="d-flex align-items-xxl-center bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Items Baseline</h2>
				<p>Use the .align-items-*-baseline classes to align single rows of items on the baseline on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-items-stretch is default.</p>
			  
				<p><code>.align-items-baseline</code>:</p>
				<div class="d-flex align-items-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-sm-baseline</code>:</p>
				<div class="d-flex align-items-sm-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-md-baseline</code>:</p>
				<div class="d-flex align-items-md-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-lg-baseline</code>:</p>
				<div class="d-flex align-items-lg-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xl-baseline</code>:</p>
				<div class="d-flex align-items-xl-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xxl-baseline</code>:</p>
				<div class="d-flex align-items-xxl-baseline bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Items Stretch (default)</h2>
				<p>Use the .align-items-*-stretch classes to stretch single rows of items on different screens.</p>
			  
				<p><code>.align-items-stretch</code>:</p>
				<div class="d-flex align-items-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-sm-stretch</code>:</p>
				<div class="d-flex align-items-sm-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-md-stretch</code>:</p>
				<div class="d-flex align-items-md-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-items-lg-stretch</code>:</p>
				<div class="d-flex align-items-lg-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xl-stretch</code>:</p>
				<div class="d-flex align-items-xl-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				
				<p><code>.align-items-xxl-stretch</code>:</p>
				<div class="d-flex align-items-xxl-stretch bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
			  </div>
			  <div class="container mt-3">
				<h2>Align Self Start</h2>
				<p>Use the .align-self-*-start classes to align a flex item from the start in a flex container on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-self-stretch is default.</p>
			  
				<p><code>.align-self-start</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-sm-start</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-sm-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-md-start</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-md-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-lg-start</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-lg-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-xl-start</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xl-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<br>
			  
				<p><code>.align-self-xxl-start</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xxl-start">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>
			  <div class="container mt-3">
				<h2>Align Self End</h2>
				<p>Use the .align-self-*-end classes to align a flex item at the end in a flex container on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-self-stretch is default.</p>
			  
				<p><code>.align-self-end</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-sm-end</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-sm-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-md-end</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-md-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-lg-end</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-lg-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-xl-end</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xl-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<br>
			  
				<p><code>.align-self-xxl-end</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xxl-end">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>
			  <div class="container mt-3">
				<h2>Align Self Center</h2>
				<p>Use the .align-self-*-center classes to align a flex item in the center of a flex container on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-self-stretch is default.</p>
			  
				<p><code>.align-self-center</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-sm-center</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-sm-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-md-center</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-md-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-lg-center</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-lg-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-xl-center</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xl-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<br>
			  
				<p><code>.align-self-xxl-center</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xxl-center">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>
			  <div class="container mt-3">
				<h2>Align Self Stretch (default)</h2>
				<p>Use the .align-self-*-stretch classes to stretch a flex item in a flex container on different screens.</p>
			  
				<p><code>.align-self-stretch</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-sm-stretch</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-sm-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-md-stretch</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-md-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-lg-stretch</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-lg-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-xl-stretch</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xl-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<br>
			  
				<p><code>.align-self-xxl-stretch</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xxl-stretch">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>
			  <div class="container mt-3">
				<h2>Align Self Baseline</h2>
				<p>Use the .align-self-*-baseline classes to align a flex item on the baseline in a flex container on different screens.</p>
				<p>Resize the browser window to see the effect. <strong>Note:</strong> align-self-stretch is default.</p>
			  
				<p><code>.align-self-baseline</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-sm-baseline</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-sm-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-md-baseline</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-md-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-lg-baseline</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-lg-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  
				<p><code>.align-self-xl-baseline</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xl-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
				<br>
			  
				<p><code>.align-self-xxl-baseline</code>:</p>
				<div class="d-flex bg-light" style="height:150px">
				  <div class="p-2 border">Flex item 1</div>
				  <div class="p-2 border align-self-xxl-baseline">Flex item 2</div>
				  <div class="p-2 border">Flex item 3</div>
				</div>
				<br>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Forms') {

			const selectedValue1 = await vscode.window.showQuickPick(['Stacked Form', 'Textarea', 'Form Row/Grid (Inline Forms)', 'Form Control Size', 'Disabled and Readonly', 'Plain text Inputs', 'Color Picker'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Stacked Form') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Stacked form</h2>
				<form action="/action_page.php">
				  <div class="mb-3 mt-3">
					<label for="email">Email:</label>
					<input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
				  </div>
				  <div class="mb-3">
					<label for="pwd">Password:</label>
					<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
				  </div>
				  <div class="form-check mb-3">
					<label class="form-check-label">
					  <input class="form-check-input" type="checkbox" name="remember"> Remember me
					</label>
				  </div>
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Textarea') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Textarea</h2>
				<p>Use the .form-control class to style textareas as well:</p>
				<form action="/action_page.php">
				  <div class="mb-3 mt-3">
					<label for="comment">Comments:</label>
					<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
				  </div>
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Form Row/Grid (Inline Forms)') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Inline Forms</h2>
				<p>If you want your form elements to appear side by side, use .row and .col:</p>
				<form>
				  <div class="row">
					<div class="col">
					  <input type="text" class="form-control" placeholder="Enter email" name="email">
					</div>
					<div class="col">
					  <input type="password" class="form-control" placeholder="Enter password" name="pswd">
					</div>
				  </div>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Form Control Size') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Form Control Size</h2>
				<p>You can change the size of .form-control inputs with .form-control-lg or .form-control-sm:</p>
				<form>
				  <input type="text" class="form-control form-control-lg" placeholder="Large input">
				  <input type="text" class="form-control mt-3" placeholder="Normal input">
				  <input type="text" class="form-control form-control-sm mt-3" placeholder="Small input">
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Disabled and Readonly') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Disabled and Readonly</h2>
				<p>Use the disabled and/or readonly attributes to disable the input field:</p>
				<form>
				  <input type="text" class="form-control" placeholder="Normal input">
				  <input type="text" class="form-control mt-3" placeholder="Disabled input" disabled>
				  <input type="text" class="form-control mt-3" placeholder="Readonly input" readonly>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Plain text Inputs') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Plaintext</h2>
				<p>Use the .form-control-plaintext class to style an input field without borders, but with correct marigins and padding:</p>
				<form>
				  <input type="text" class="form-control-plaintext" placeholder="Plaintext input">
				  <input type="text" class="form-control mt-3" placeholder="Normal input">
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Color Picker') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Color Picker</h2>
				<p>To style an input with type="color" properly, use the .form-control-color class:</p>
				<form>
				  <label for="myColor" class="form-label">Color picker</label>
				  <input type="color" class="form-control form-control-color" id="myColor" value="#CCCCCC" title="Choose a color">
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Select Menus') {

			const selectedValue1 = await vscode.window.showQuickPick(['Select Menu', 'Select Menu Size', 'Disabled Select Menu', 'Data Lists'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Select Menu') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Select Menu</h2>
				<p>To style a select menu in Bootstrap 5, add the .form-select class to the select element:</p>
				<form action="/action_page.php">
				  <label for="sel1" class="form-label">Select list (select one):</label>
				  <select class="form-select" id="sel1" name="sellist1">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
				  </select>
				  <br>
				  
				  <label for="sel2" class="form-label">Mutiple select list (hold shift to select more than one):</label>
				  <select multiple class="form-select" id="sel2" name="sellist2">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				  </select>
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Select Menu Size') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Select Menu Size</h2>
				<p>Use the .form-select-lg or .form-select-sm class to change the size of the select menu:</p>
				<form>
				 <select class="form-select form-select-lg">
				   <option>1</option>
				   <option>2</option>
				   <option>3</option>
				   <option>4</option>
				 </select>
				 
				 <select class="form-select mt-3">
				   <option>1</option>
				   <option>2</option>
				   <option>3</option>
				   <option>4</option>
				 </select>
				 
				 <select class="form-select form-select-sm mt-3">
				   <option>1</option>
				   <option>2</option>
				   <option>3</option>
				   <option>4</option>
				 </select>
				</form>    
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Disabled Select Menu') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Disabled Select Menu</h2>
				<p>Use the disabled attribute to disable the select menu:</p>
				<form>
				 <select class="form-select" disabled>
				   <option>1</option>
				   <option>2</option>
				   <option>3</option>
				   <option>4</option>
				 </select>
				</form>    
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Data Lists') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Data List</h2>
				<form action="/action_page.php">
				  <label for="browser" class="form-label">Choose your browser from the list:</label>
				  <input class="form-control" list="browsers" name="browser" id="browser">
				  <datalist id="browsers">
					<option value="Edge">
					<option value="Firefox">
					<option value="Chrome">
					<option value="Opera">
					<option value="Safari">
				  </datalist>    
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Checks and Radios') {

			const selectedValue1 = await vscode.window.showQuickPick(['Checkboxes', 'Radio buttons', 'Toggle Switches'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Checkboxes') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Checkboxes</h2>
				<p>To style a checkbox, use a container element with a .form-check class, and add .form-check-label to labels, and .form-check-input to the input with type="checkbox".</p>
				<p>The form below contains three checkboxes. The first option is checked by default, and the last option is disabled:</p>
				<form action="/action_page.php">
				  <div class="form-check">
					<input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" checked>
					<label class="form-check-label" for="check1">Option 1</label>
				  </div>
				  <div class="form-check">
					<input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
					<label class="form-check-label" for="check2">Option 2</label>
				  </div>
				  <div class="form-check">
					<input type="checkbox" class="form-check-input" disabled>
					<label class="form-check-label">Option 3</label>
				  </div>
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Radio buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Radio buttons</h2>
				<p>The form below contains three radio buttons. The first option is checked by default, and the last option is disabled:</p>
				<form action="/action_page.php">
				  <div class="form-check">
					<input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked>
					<label class="form-check-label" for="radio1">Option 1</label>
				  </div>
				  <div class="form-check">
					<input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
					<label class="form-check-label" for="radio2">Option 2</label>
				  </div>
				  <div class="form-check">
					<input type="radio" class="form-check-input" disabled>
					<label class="form-check-label">Option 3</label>
				  </div>
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Toggle Switches') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Toggle Switch</h2>
				<p>Try to submit the form with and without toggling the switch.</p>
				<form action="/action_page.php">
				  <div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked>
					<label class="form-check-label" for="mySwitch">Dark Mode</label>
				  </div>
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Range') {

			const selectedValue1 = await vscode.window.showQuickPick(['Custom Range', 'Steps', 'Min and Max'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Custom Range') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Custom Range</h2>
				<p>To create a custom range menu, add the .form-range class to the input element with type="range":</p>
				<form action="/action_page.php">
				  <label for="customRange" class="form-label">Custom range</label>
				  <input type="range" class="form-range" id="customRange" name="points">
				  
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Steps') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Steps in a Range</h2>
				<p>By default, the interval between the range numbers is 1. You can change it by using the step attribute:</p>
				<form action="/action_page.php">
				  <label for="customRange" class="form-label">Custom range</label>
				  <input type="range" class="form-range" id="customRange" step="10" name="points">
				  
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Min and Max') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Min and Max Range</h2>
				<p>Use the min and/or max attribute to specify the minimum/maximum value of a range:</p>
				<form action="/action_page.php">
				  <label for="customRange" class="form-label">Custom range</label>
				  <input type="range" class="form-range" id="customRange" name="points" min="0" max="4">
				  
				  <button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Input Groups') {

			const selectedValue1 = await vscode.window.showQuickPick(['Input Groups', 'Input Group Size', 'Multiple Inputs and Helpers', 'Input Group with Checkboxes and Radios', 'Input Group Buttons', 'Input Group with Dropdown Button'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Input Groups') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Input Group</h2>
				<p>The .input-group class is a container to enhance an input by adding an icon, text or a button in front or behind the input field as a "help text".</p>
				<p>Use the .input-group-text class to style the specified help text.</p>
				
				<form action="/action_page.php">
				  <div class="input-group mb-3">
					<span class="input-group-text">@</span>
					<input type="text" class="form-control" placeholder="Username" name="usrname">
				  </div>
			  
				  <div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Your Email" name="email">
					<span class="input-group-text">@example.com</span>
				  </div>
				  
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Input Group Size') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Input Group Size</h2>
				<p>Use the .input-group-sm class for small input groups and .input-group-lg for large inputs groups:</p>
				
				<div class="input-group input-group-sm mb-3">
				  <span class="input-group-text">Small</span>
				  <input type="text" class="form-control">
				</div>
				<div class="input-group mb-3">
				  <span class="input-group-text">Default</span>
				  <input type="text" class="form-control">
				</div>
				<div class="input-group input-group-lg mb-3">
				  <span class="input-group-text">Large</span>
				  <input type="text" class="form-control">
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Multiple Inputs and Helpers') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Multiple Inputs and Helpers</h2>
				<p>Add multiple inputs or addons:</p>
				
				<!-- Multiple inputs -->
				<div class="input-group mb-3">
				  <span class="input-group-text">Person</span>
				  <input type="text" class="form-control" placeholder="First Name">
				  <input type="text" class="form-control" placeholder="Last Name">
				</div>
			  
				<!-- Multiple addons / help text -->
				<div class="input-group mb-3">
				  <span class="input-group-text">One</span>
				  <span class="input-group-text">Two</span>
				  <span class="input-group-text">Three</span>
				  <input type="text" class="form-control">
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Input Group with Checkboxes and Radios') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Input Group with Checkboxes and Radios</h3>
				<p>You can also use checkboxes or radio buttons instead of text:</p>
				
				<!-- Multiple inputs -->
				<div class="input-group mb-3">
				  <div class="input-group-text">
					<input type="checkbox">
				  </div>
				  <input type="text" class="form-control" placeholder="Some text">
				</div>
			  
				<div class="input-group mb-3">
				  <div class="input-group-text">
					<input type="radio">
				  </div>
				  <input type="text" class="form-control" placeholder="Some text">
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Input Group Buttons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Input Group Buttons</h3>
				
				<div class="input-group mb-3 mt-3">
				  <button class="btn btn-outline-primary" type="button">Basic Button</button>
				  <input type="text" class="form-control" placeholder="Some text">
				</div>
			  
				<div class="input-group mb-3">
				  <input type="text" class="form-control" placeholder="Search">
				  <button class="btn btn-success" type="submit">Go</button> 
				</div>
			  
				<div class="input-group mb-3">
				  <input type="text" class="form-control" placeholder="Something clever..">
				  <button class="btn btn-primary" type="button">OK</button> 
				  <button class="btn btn-danger" type="button">Cancel</button> 
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Input Group with Dropdown Button') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Input Groups with Dropdown Button</h3>
				<p>Add a dropdown button in the input group. Note that you don't need the .dropdown wrapper, as you normally would.</p>
				  
				<div class="input-group mt-3 mb-3">
				  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
					Dropdown button
				  </button>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Link 1</a></li>
					<li><a class="dropdown-item" href="#">Link 2</a></li>
					<li><a class="dropdown-item" href="#">Link 3</a></li>
				  </ul>
				  <input type="text" class="form-control" placeholder="Username">
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Floating Labels') {

			const selectedValue1 = await vscode.window.showQuickPick(['Floating Labels / Animated Labels', 'Textarea', 'Select Menus'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Floating Labels / Animated Labels') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Floating Labels - Inputs</h2>
				<p>Click inside the input field to see the floating label effect:</p>
				<form action="/action_page.php">
				  <div class="form-floating mb-3 mt-3">
					<input type="text" class="form-control" id="email" placeholder="Enter email" name="email">
					<label for="email">Email</label>
				  </div>
				  <div class="form-floating mt-3 mb-3">
					<input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
					<label for="pwd">Password</label>
				  </div>
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Textarea') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Floating Labels - Textarea</h2>
				<p>Click inside the textarea to see the floating label effect:</p>
				<form action="/action_page.php">
				  <div class="form-floating mb-3 mt-3">
					<textarea class="form-control" id="comment" name="text" placeholder="Comment goes here"></textarea>
					<label for="comment">Comments</label>
				  </div>
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Select Menus') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h2>Floating Labels - Select</h2>
				<p>You can also use "floating-labels" on select menus. However, they will not float/get animated. The label will always appear in the top left corner, inside the select menu:</p>
				<form action="/action_page.php">
				  <div class="form-floating mb-3 mt-3">
					<select class="form-select" id="sel1" name="sellist">
					  <option>1</option>
					  <option>2</option>
					  <option>3</option>
					  <option>4</option>
					</select>
					<label for="sel1" class="form-label">Select list (select one):</label>
				  </div>
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Form Validation') {

			const selectedValue1 = await vscode.window.showQuickPick(['Form Validation'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Form Validation') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container mt-3">
				<h3>Form Validation</h3>
				<p>Try to submit the form.</p>
				  
				<form action="/action_page.php" class="was-validated">
				  <div class="mb-3 mt-3">
					<label for="uname" class="form-label">Username:</label>
					<input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
					<div class="valid-feedback">Valid.</div>
					<div class="invalid-feedback">Please fill out this field.</div>
				  </div>
				  <div class="mb-3">
					<label for="pwd" class="form-label">Password:</label>
					<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
					<div class="valid-feedback">Valid.</div>
					<div class="invalid-feedback">Please fill out this field.</div>
				  </div>
				  <div class="form-check mb-3">
					<input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required>
					<label class="form-check-label" for="myCheck">I agree on blabla.</label>
					<div class="valid-feedback">Valid.</div>
					<div class="invalid-feedback">Check this checkbox to continue.</div>
				  </div>
				<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		} else if (selectedValue === 'BS5 Grid') {

			const selectedValue1 = await vscode.window.showQuickPick(['Grid System', 'Stacked/Horizontal', 'Grid XSmall', 'Grid Small', 'Grid Medium', 'Grid Large', 'Grid XLarge', 'Grid XXL', 'Grid Examples'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Grid System') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<div class="container-fluid mt-3">
				<h1>Basic Grid Structure</h1>
				<p>Resize the browser window to see the effect.</p>
				<p>The first, second and third row will automatically stack on top of each other when the screen is less than 576px wide.</p>
				
				<!-- Control the column width, and how they should appear on different devices -->
				<div class="row">
				  <div class="col-sm-6 bg-primary text-white">50%</div>
				  <div class="col-sm-6 bg-dark text-white">50%</div>
				</div>
				<br>
				  
				<div class="row">
				  <div class="col-sm-4 bg-primary text-white">33.33%</div>
				  <div class="col-sm-4 bg-dark text-white">33.33%</div>
				  <div class="col-sm-4 bg-primary text-white">33.33%</div>
				</div>
				<br>
			  
				<!-- Or let Bootstrap automatically handle the layout -->
				<div class="row">
				  <div class="col-sm bg-primary text-white">25%</div>
				  <div class="col-sm bg-dark text-white">25%</div>
				  <div class="col-sm bg-primary text-white">25%</div>
				  <div class="col-sm bg-dark text-white">25%</div>
				</div>
				<br>
				  
				<div class="row">
				  <div class="col bg-primary text-white">25%</div>
				  <div class="col bg-dark text-white">25%</div>
				  <div class="col bg-primary text-white">25%</div>
				  <div class="col bg-dark text-white">25%</div>
				</div>
			  </div>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Stacked/Horizontal') {
				const selectedValue2 = await vscode.window.showQuickPick(['Stacked-to-horizontal', 'Responsive Container', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Stacked-to-horizontal') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Grid Example</h1>
					<p>This example demonstrates a 50%/50% split on small, medium, large, xlarge and xxlarge devices. On extra small devices, it will stack (100% width).</p>      
					<p>Resize the browser window to see the effect.</p> 
					<div class="row">
					  <div class="col-sm-6 bg-primary text-white p-3">
						Lorem ipsum...
					  </div>
					  <div class="col-sm-6 bg-dark text-white p-3">
						Sed ut perspiciatis...
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Responsive Container') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container mt-3">
					<h1>Grid Example</h1>
					<p>This example demonstrates a 50%/50% split on small, medium, large, xlarge and xxlarge devices. On extra small devices, it will stack (100% width).</p>      
					<p>Resize the browser window to see the effect.</p> 
					<div class="row">
					  <div class="col-sm-6 bg-primary text-white p-3">
						Lorem ipsum...
					  </div>
					  <div class="col-sm-6 bg-dark text-white p-3">
						Sed ut perspiciatis...
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns: just use the <code>.col-size</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<p>Two columns: 50% width on all screens, except for extra small (100% width on screens less than <strong>576px</strong> wide)</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm bg-primary text-white p-3">1 of 2</div>
						<div class="col-sm bg-dark text-white p-3">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<p>Four columns: 25% width on all screens, except for extra small (100% width on screens less than <strong>576px</strong> wide)</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm bg-primary text-white p-3">1 of 4</div>
						<div class="col-sm bg-dark text-white p-3">2 of 4</div>
						<div class="col-sm bg-primary text-white p-3">3 of 4</div>
						<div class="col-sm bg-dark text-white p-3">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid XSmall') {
				const selectedValue2 = await vscode.window.showQuickPick(['Extra Small Grid Example', 'Split Example', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Extra Small Grid Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Extra Small Grid (Auto Layout)</h1>
					<p>The following example will result in a 25%/75% split on all devices.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-3 bg-primary text-white p-3">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-9 bg-dark text-white p-3">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Split Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Extra Small Grid</h1>
					<p>The following example will result in a 33.3%/66.6% split on all devices.</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-4 bg-primary text-white p-3">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-8 bg-dark text-white p-3">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
					<br>
					
					<p>This example will result in a 50%/50% split on all devices.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-6 bg-primary text-white p-3">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-6 bg-dark text-white p-3">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns for all devices: just use the <code>.col</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col bg-primary text-white p-3">1 of 2</div>
						<div class="col bg-dark text-white p-3">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<div class="container-fluid">
					  <div class="row">
						<div class="col bg-primary text-white p-3">1 of 4</div>
						<div class="col bg-dark text-white p-3">2 of 4</div>
						<div class="col bg-primary text-white p-3">3 of 4</div>
						<div class="col bg-dark text-white p-3">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid Small') {
				const selectedValue2 = await vscode.window.showQuickPick(['Small Grid Example', 'Split Example', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Small Grid Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Small Grid</h1>
					<p>The following example will result in a 25%/75% split on small, medium, large, xlarge and xxlarge devices (<strong>576px and above</strong>). On extra small devices, it will stack (100% width).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-3 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-sm-9 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Split Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Small Grid</h1>
					<p>The following example will result in a 33.3%/66.6% split on small, medium, large and xlarge devices (<strong>576px and above</strong>). On extra small devices, it will stack (100% width).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-4 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-sm-8 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
					<br>
					
					<p>This example will result in a 50%/50% split on small, medium, large and xlarge devices (<strong>576px and above</strong>). On extra small devices, it will stack (100% width).</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-6 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-sm-6 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Responsive Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns: just use the <code>.col-sm</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<p>On extra small screens (<strong>less than 576px</strong>), the columns will stack horizontally.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm bg-primary text-white">1 of 2</div>
						<div class="col-sm bg-dark text-white">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm bg-primary text-white">1 of 4</div>
						<div class="col-sm bg-dark text-white">2 of 4</div>
						<div class="col-sm bg-primary text-white">3 of 4</div>
						<div class="col-sm bg-dark text-white">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid Medium') {
				const selectedValue2 = await vscode.window.showQuickPick(['Medium Grid Example', 'Using Only Medium', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Medium Grid Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Medium Grid</h1>
					<p>The following example will result in a 25%/75% split on small devices and a 50%/50% split on medium (and large, xlarge, xxlarge) devices. On extra small devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-3 col-md-6 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-sm-9 col-md-6 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Using Only Medium') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Medium Grid</h1>
					<p>The following example will result in a 50%/50% split on medium, large, xlarge and xxlarge devices (<strong>768px and above</strong>). On small (and extra small) devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-md-6 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-md-6 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Responsive Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns: just use the <code>.col-md</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<p>If the screen size is <strong>less than 768px</strong>, the columns will stack horizontally.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-md bg-primary text-white">1 of 2</div>
						<div class="col-md bg-dark text-white">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<div class="container-fluid">
					  <div class="row">
						<div class="col-md bg-primary text-white">1 of 4</div>
						<div class="col-md bg-dark text-white">2 of 4</div>
						<div class="col-md bg-primary text-white">3 of 4</div>
						<div class="col-md bg-dark text-white">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid Large') {
				const selectedValue2 = await vscode.window.showQuickPick(['Large Grid Example', 'Using Only Large', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Large Grid Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Large Grid</h1>
					<p>The following example will result in a 25%/75% split on small devices, a 50%/50% split on medium devices, and a 33%/66% split on large, xlarge and xxlarge devices. On extra small devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-3 col-md-6 col-lg-4 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-sm-9 col-md-6 col-lg-8 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Using Only Large') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Large Grid</h1>
					<p>The following example will result in a 50%/50% split on large, xlarge and xxlarge devices (<strong>992px and above</strong>). On medium, small and extra small devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-lg-6 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-lg-6 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Responsive Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns: just use the <code>.col-lg</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<p>If the screen size is <strong>less than 992px</strong>, the columns will stack horizontally.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-lg bg-primary text-white">1 of 2</div>
						<div class="col-lg bg-dark text-white">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<div class="container-fluid">
					  <div class="row">
						<div class="col-lg bg-primary text-white">1 of 4</div>
						<div class="col-lg bg-dark text-white">2 of 4</div>
						<div class="col-lg bg-primary text-white">3 of 4</div>
						<div class="col-lg bg-dark text-white">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid XLarge') {
				const selectedValue2 = await vscode.window.showQuickPick(['Extra Large Grid Example', 'Using Only XLarge', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Extra Large Grid Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>XLarge Grid</h1>
					<p>The following example will result in a 25%/75% split on small devices, a 50%/50% split on medium devices, a 33%/66% split on large devices and a 20%/80% on xlarge and xxlarge devices. On extra small devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-3 col-md-6 col-lg-4 col-xl-2 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-sm-9 col-md-6 col-lg-8 col-xl-10 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Using Only XLarge') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>XLarge Grid</h1>
					<p>The following example will result in a 50%/50% split on xlarge devices (<strong>1200px and above</strong>). On large, medium, small and extra small devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-xl-6 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-xl-6 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Responsive Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns: just use the <code>.col-xl</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<p>If the screen size is <strong>less than 1200px</strong>, the columns will stack horizontally.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-xl bg-primary text-white">1 of 2</div>
						<div class="col-xl bg-dark text-white">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<div class="container-fluid">
					  <div class="row">
						<div class="col-xl bg-primary text-white">1 of 4</div>
						<div class="col-xl bg-dark text-white">2 of 4</div>
						<div class="col-xl bg-primary text-white">3 of 4</div>
						<div class="col-xl bg-dark text-white">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid XXL') {
				const selectedValue2 = await vscode.window.showQuickPick(['XXL Grid Example', 'Using Only XXL', 'Auto Layout Columns'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'XXL Grid Example') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>XXL Grid</h1>
					<p>The following example will result in a 50%/50% split on medium, large and extra large devices, and a 25%/75% split on XXL devices. On 
					small and extra small devices, it will automatically stack (100%):</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-md-6 col-xxl-3 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-md-6 col-xxl-9 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Using Only XXL') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>XXL Grid</h1>
					<p>The following example will result in a 50%/50% split on XXL devices (<strong>1400px and above</strong>). On extra large, large, medium, small and extra small devices, it will automatically stack (100%).</p>
					<p>Resize the browser window to see the effect.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-xxl-6 bg-primary text-white">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-xxl-6 bg-dark text-white">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Auto Layout Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Responsive Auto Layout Columns</h1>
					<p>In Bootstrap 5, there is an easy way to create equal width columns: just use the <code>.col-xxl</code> class on a specified number of col elements. Bootstrap will recognize how many columns there are, and each column will get the same width.</p>
					<p>If the screen size is <strong>less than 1400px</strong>, the columns will stack horizontally.</p>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-xxl bg-primary text-white">1 of 2</div>
						<div class="col-xxl bg-dark text-white">2 of 2</div>
					  </div>  
					</div>
					<br>
					
					<div class="container-fluid">
					  <div class="row">
						<div class="col-xxl bg-primary text-white">1 of 4</div>
						<div class="col-xxl bg-dark text-white">2 of 4</div>
						<div class="col-xxl bg-primary text-white">3 of 4</div>
						<div class="col-xxl bg-dark text-white">4 of 4</div>
					  </div>  
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			} else if (selectedValue1 === 'Grid Examples') {
				const selectedValue2 = await vscode.window.showQuickPick(['Three Equal Columns', 'Three Equal Columns Using Numbers', 'Three Unequal columns', 'Setting One Column Width', 'More Equal Columns', 'Row Cols', 'More Unequal Columns', 'Equal Height', 'Nested Columns', 'Stacked to Horizontal', 'Mix and Match', 'No Gutters'], {
					canPickMany: false,
					placeHolder: 'Select a value'
				});
				if (selectedValue2 === 'Three Equal Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Three Equal Columns</h2>
					<p>Use the .col class on a specified number of elements and Bootstrap will recognize how many elements there are (and create equal-width columns). In the example below, we use three col elements, which gets a width of 33.33% each.</p>
					<div class="row">
					  <div class="col bg-success">.col</div>
					  <div class="col bg-warning">.col</div>
					  <div class="col bg-success">.col</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Three Equal Columns Using Numbers') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Three Equal Columns</h2>
					<p>You can also use numbers to control the column width. Just make sure that the sum always adds up to 12:</p>
					<div class="row">
					  <div class="col-4 bg-success">.col-4</div>
					  <div class="col-4 bg-warning">.col-4</div>
					  <div class="col-4 bg-success">.col-4</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Three Unequal columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Three Unequal Columns</h2>
					<p>To create unequal columns, you have to use numbers. The following example will create a 25%/50%/25% split:</p>
					<div class="row">
					  <div class="col-3 bg-success">.col-3</div>
					  <div class="col-6 bg-warning">.col-6</div>
					  <div class="col-3 bg-success">.col-3</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Setting One Column Width') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Three Unequal Columns</h2>
					<p>It is enough to only set the width of one column, and have the sibling columns automatically resize around it. The following example will create a 25%/50%/25% split:</p>
					<div class="row">
					  <div class="col bg-success">.col</div>
					  <div class="col-6 bg-warning">.col-6</div>
					  <div class="col bg-success">.col</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'More Equal Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>More Equal Columns</h2>
					<div class="row">
					  <div class="col bg-success">1 of 2</div>
					  <div class="col bg-warning">2 of 2</div>
					</div>
					<br>
					<div class="row">
					  <div class="col bg-success">1 of 4</div>
					  <div class="col bg-warning">2 of 4</div>
					  <div class="col bg-success">3 of 4</div>
					  <div class="col bg-warning">4 of 4</div>
					</div>
					<br>
					<div class="row">
					  <div class="col bg-success">1 of 6</div>
					  <div class="col bg-warning">2 of 6</div>
					  <div class="col bg-success">3 of 6</div>
					  <div class="col bg-warning">4 of 6</div>
					  <div class="col bg-success">5 of 6</div>
					  <div class="col bg-warning">6 of 6</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Row Cols') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Row Cols</h2>
					<p>The .row-cols-* classes are used to set the number of columns that should appear next to each other.</p>
				  
					<div class="row row-cols-1">
					  <div class="col bg-success">1 of 2</div>
					  <div class="col bg-warning">2 of 2</div>
					</div>
					<br>
					<div class="row row-cols-2">
					  <div class="col bg-success">1 of 4</div>
					  <div class="col bg-warning">2 of 4</div>
					  <div class="col bg-success">3 of 4</div>
					  <div class="col bg-warning">4 of 4</div>
					</div>
					<br>
					<div class="row row-cols-3">
					  <div class="col bg-success">1 of 6</div>
					  <div class="col bg-warning">2 of 6</div>
					  <div class="col bg-success">3 of 6</div>
					  <div class="col bg-warning">4 of 6</div>
					  <div class="col bg-success">5 of 6</div>
					  <div class="col bg-warning">6 of 6</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'More Unequal Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>More Unequal Columns</h2>
					<div class="row">
					  <div class="col-8 bg-success">1 of 2</div>
					  <div class="col-4 bg-warning">2 of 2</div>
					</div>
					<br>
					<div class="row">
					  <div class="col-2 bg-success">1 of 4</div>
					  <div class="col-2 bg-warning">2 of 4</div>
					  <div class="col-2 bg-success">3 of 4</div>
					  <div class="col-6 bg-warning">4  of 4</div>
					</div>
					<br>
					<div class="row">
					  <div class="col-4 bg-success">1 of 4</div>
					  <div class="col-6 bg-warning">2 of 4</div>
					  <div class="col bg-success">3 of 4</div>
					  <div class="col bg-warning">4  of 4</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Equal Height') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Equal Height</h2>
					<p>If one of the column is taller than the other, the rest will follow.</p>
				  </div>
				  
				  <div class="container-fluid">
					<div class="row">
					  <div class="col bg-success">Lorem ipsum dolor sit amet, cibo sensibus interesset no sit. Et dolor possim volutpat qui. No malis tollit iriure eam, et vel tale zril blandit, rebum vidisse nostrum qui eu. No nostrud dolorem legendos mea, ea eum mucius oporteat platonem.Eam an case scribentur, ei clita causae cum, alia debet eu vel.</div>
					  <div class="col bg-warning">.col</div>
					  <div class="col bg-success">.col</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Nested Columns') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h2>Nested Columns</h2>
					<p>Add columns inside other columns:</p>
				  </div>
				  
				  <div class="container-fluid">
					<div class="row">
					  <div class="col-8 bg-warning p-4">
						.col-8
						<div class="row">
						  <div class="col-6 bg-light p-2">.col-6</div>
						  <div class="col-6 bg-secondary p-2">.col-6</div>
						</div>
					  </div>
					  <div class="col-4 bg-success p-4">.col-4</div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Stacked to Horizontal') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Stacked to Horizontal</h1>
					<p>Resize the browser window to see the effect.</p> 
					<p>This example demonstrates a 75%/25% split on small, medium, large and xlarge devices. On extra small devices, it will stack (100% width).</p>      
					<div class="container-fluid">     
					  <div class="row">
						<div class="col-sm-9 bg-success">col-sm-9</div>
						<div class="col-sm-3 bg-warning">col-sm-3</div>
					  </div>
					</div>
					<br>
					<p>This example demonstrates a 33% split on small, medium, large and xlarge devices. On extra small devices, it will stack (100% width).</p>      
					<div class="container-fluid">     
					  <div class="row">
						<div class="col-sm bg-success">col-sm</div>
						<div class="col-sm bg-warning">col-sm</div>
						<div class="col-sm bg-success">col-sm</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'Mix and Match') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>Mix and Match</h1>
					<p>Resize the browser window to see the effect.</p> 
					<p>This example demonstrates a 50%/50% split on extra small devices and 75%/25% split on larger devices.</p>      
					<div class="container-fluid">     
					  <div class="row">
						<div class="col-6 col-sm-9 bg-success">col-6 col-sm-9</div>
						<div class="col-6 col-sm-3 bg-warning">col-6 col-sm-3</div>
					  </div>
					</div>
					<br>
					<p>This example demonstrates a 58%/42% split on extra small, small and medium devices and 66.3%/33.3% split on large and xlarge devices.</p>      
					<div class="container-fluid">     
					  <div class="row">
						<div class="col-7 col-lg-8 bg-success">col-7 col-lg-8</div>
						<div class="col-5 col-lg-4 bg-warning">col-5 col-lg-4</div>
					  </div>
					</div>
					<br>
					<p>This example demonstrates a 25%/75% split on small devices, a 50%/50% split on medium devices, and a 33%/66% split on large and xlarge devices. On extra small devices, it will automatically stack (100%).</p>      
					<div class="container-fluid">     
					  <div class="row">
						<div class="col-sm-3 col-md-6 col-lg-4 bg-success">col-sm-3 col-md-6 col-lg-4</div>
						<div class="col-sm-9 col-md-6 col-lg-8 bg-warning">col-sm-9 col-md-6 col-lg-8</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				} else if (selectedValue2 === 'No Gutters') {
					const editor = vscode.window.activeTextEditor;
					if (!editor) {
						vscode.window.showErrorMessage('No active editor!');
						return;
					}

					const selection = editor.selection;
					const text = `<div class="container-fluid mt-3">
					<h1>No Gutters</h1>
					<p>To change the gutters (extra space) between columns, use any of the <code class="w3-codespan">.g-1|2|3|4|5</code> classes 
					(<code class="w3-codespan">.g-4</code> is default). </p>
					<p>To remove the gutters completely, use <code class="w3-codespan">.g-0</code>:</p>
				  
					<div class="container-fluid">
					  <div class="row g-0">
						<div class="col-3 bg-success">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div class="col-9 bg-warning">
						  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</div>
					  </div>
					</div>
				  </div>`;

					editor.edit((editBuilder) => {
						editBuilder.insert(selection.start, text);
					});
				}

			}
		} else if (selectedValue === 'BS5 Footers') {

			const selectedValue1 = await vscode.window.showQuickPick(['Basic Footer', 'Advanced Footer', 'White background and secondary icons', 'Copyright Footer', 'Links Footer', 'Text Footer','Forms Footer'], {
				canPickMany: false,
				placeHolder: 'Select a value'
			});
			if (selectedValue1 === 'Basic Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!-- Footer -->
				<footer class="text-center text-lg-start bg-light text-muted">
				  <!-- Section: Social media -->
				  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<!-- Left -->
					<div class="me-5 d-none d-lg-block">
					  <span>Get connected with us on social networks:</span>
					</div>
					<!-- Left -->
				
					<!-- Right -->
					<div>
					  <a href="" class="me-4 text-reset">
						<i class="fab fa-facebook-f"></i>
					  </a>
					  <a href="" class="me-4 text-reset">
						<i class="fab fa-twitter"></i>
					  </a>
					  <a href="" class="me-4 text-reset">
						<i class="fab fa-google"></i>
					  </a>
					  <a href="" class="me-4 text-reset">
						<i class="fab fa-instagram"></i>
					  </a>
					  <a href="" class="me-4 text-reset">
						<i class="fab fa-linkedin"></i>
					  </a>
					  <a href="" class="me-4 text-reset">
						<i class="fab fa-github"></i>
					  </a>
					</div>
					<!-- Right -->
				  </section>
				  <!-- Section: Social media -->
				
				  <!-- Section: Links  -->
				  <section class="">
					<div class="container text-center text-md-start mt-5">
					  <!-- Grid row -->
					  <div class="row mt-3">
						<!-- Grid column -->
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
						  <!-- Content -->
						  <h6 class="text-uppercase fw-bold mb-4">
							<i class="fas fa-gem me-3"></i>Company name
						  </h6>
						  <p>
							Here you can use rows and columns to organize your footer content. Lorem ipsum
							dolor sit amet, consectetur adipisicing elit.
						  </p>
						</div>
						<!-- Grid column -->
				
						<!-- Grid column -->
						<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
						  <!-- Links -->
						  <h6 class="text-uppercase fw-bold mb-4">
							Products
						  </h6>
						  <p>
							<a href="#!" class="text-reset">Angular</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">React</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Vue</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Laravel</a>
						  </p>
						</div>
						<!-- Grid column -->
				
						<!-- Grid column -->
						<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
						  <!-- Links -->
						  <h6 class="text-uppercase fw-bold mb-4">
							Useful links
						  </h6>
						  <p>
							<a href="#!" class="text-reset">Pricing</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Settings</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Orders</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Help</a>
						  </p>
						</div>
						<!-- Grid column -->
				
						<!-- Grid column -->
						<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
						  <!-- Links -->
						  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
						  <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
						  <p>
							<i class="fas fa-envelope me-3"></i>
							info@example.com
						  </p>
						  <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
						  <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
						</div>
						<!-- Grid column -->
					  </div>
					  <!-- Grid row -->
					</div>
				  </section>
				  <!-- Section: Links  -->
				
				  <!-- Copyright -->
				  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
					© 2021 Copyright:
					<a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				  </div>
				  <!-- Copyright -->
				</footer>
				<!-- Footer -->`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Advanced Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!-- Footer -->
				<footer class="bg-dark text-center text-white">
				  <!-- Grid container -->
				  <div class="container p-4">
					<!-- Section: Social media -->
					<section class="mb-4">
					  <!-- Facebook -->
					  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
						><i class="fab fa-facebook-f"></i
					  ></a>
				
					  <!-- Twitter -->
					  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
						><i class="fab fa-twitter"></i
					  ></a>
				
					  <!-- Google -->
					  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
						><i class="fab fa-google"></i
					  ></a>
				
					  <!-- Instagram -->
					  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
						><i class="fab fa-instagram"></i
					  ></a>
				
					  <!-- Linkedin -->
					  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
						><i class="fab fa-linkedin-in"></i
					  ></a>
				
					  <!-- Github -->
					  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
						><i class="fab fa-github"></i
					  ></a>
					</section>
					<!-- Section: Social media -->
				
					<!-- Section: Form -->
					<section class="">
					  <form action="">
						<!--Grid row-->
						<div class="row d-flex justify-content-center">
						  <!--Grid column-->
						  <div class="col-auto">
							<p class="pt-2">
							  <strong>Sign up for our newsletter</strong>
							</p>
						  </div>
						  <!--Grid column-->
				
						  <!--Grid column-->
						  <div class="col-md-5 col-12">
							<!-- Email input -->
							<div class="form-outline form-white mb-4">
							  <input type="email" id="form5Example21" class="form-control" />
							  <label class="form-label" for="form5Example21">Email address</label>
							</div>
						  </div>
						  <!--Grid column-->
				
						  <!--Grid column-->
						  <div class="col-auto">
							<!-- Submit button -->
							<button type="submit" class="btn btn-outline-light mb-4">
							  Subscribe
							</button>
						  </div>
						  <!--Grid column-->
						</div>
						<!--Grid row-->
					  </form>
					</section>
					<!-- Section: Form -->
				
					<!-- Section: Text -->
					<section class="mb-4">
					  <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
						repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
						eum harum corrupti dicta, aliquam sequi voluptate quas.
					  </p>
					</section>
					<!-- Section: Text -->
				
					<!-- Section: Links -->
					<section class="">
					  <!--Grid row-->
					  <div class="row">
						<!--Grid column-->
						<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						  <h5 class="text-uppercase">Links</h5>
				
						  <ul class="list-unstyled mb-0">
							<li>
							  <a href="#!" class="text-white">Link 1</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 2</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 3</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 4</a>
							</li>
						  </ul>
						</div>
						<!--Grid column-->
				
						<!--Grid column-->
						<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						  <h5 class="text-uppercase">Links</h5>
				
						  <ul class="list-unstyled mb-0">
							<li>
							  <a href="#!" class="text-white">Link 1</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 2</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 3</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 4</a>
							</li>
						  </ul>
						</div>
						<!--Grid column-->
				
						<!--Grid column-->
						<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						  <h5 class="text-uppercase">Links</h5>
				
						  <ul class="list-unstyled mb-0">
							<li>
							  <a href="#!" class="text-white">Link 1</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 2</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 3</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 4</a>
							</li>
						  </ul>
						</div>
						<!--Grid column-->
				
						<!--Grid column-->
						<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						  <h5 class="text-uppercase">Links</h5>
				
						  <ul class="list-unstyled mb-0">
							<li>
							  <a href="#!" class="text-white">Link 1</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 2</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 3</a>
							</li>
							<li>
							  <a href="#!" class="text-white">Link 4</a>
							</li>
						  </ul>
						</div>
						<!--Grid column-->
					  </div>
					  <!--Grid row-->
					</section>
					<!-- Section: Links -->
				  </div>
				  <!-- Grid container -->
				
				  <!-- Copyright -->
				  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
					© 2020 Copyright:
					<a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				  </div>
				  <!-- Copyright -->
				</footer>
				<!-- Footer -->`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'White background and secondary icons') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<!-- Footer -->
				<footer class="text-center text-lg-start bg-white text-muted">
				  <!-- Section: Social media -->
				  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<!-- Left -->
					<div class="me-5 d-none d-lg-block">
					  <span>Get connected with us on social networks:</span>
					</div>
					<!-- Left -->
				
					<!-- Right -->
					<div>
					  <a href="" class="me-4 link-secondary">
						<i class="fab fa-facebook-f"></i>
					  </a>
					  <a href="" class="me-4 link-secondary">
						<i class="fab fa-twitter"></i>
					  </a>
					  <a href="" class="me-4 link-secondary">
						<i class="fab fa-google"></i>
					  </a>
					  <a href="" class="me-4 link-secondary">
						<i class="fab fa-instagram"></i>
					  </a>
					  <a href="" class="me-4 link-secondary">
						<i class="fab fa-linkedin"></i>
					  </a>
					  <a href="" class="me-4 link-secondary">
						<i class="fab fa-github"></i>
					  </a>
					</div>
					<!-- Right -->
				  </section>
				  <!-- Section: Social media -->
				
				  <!-- Section: Links  -->
				  <section class="">
					<div class="container text-center text-md-start mt-5">
					  <!-- Grid row -->
					  <div class="row mt-3">
						<!-- Grid column -->
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
						  <!-- Content -->
						  <h6 class="text-uppercase fw-bold mb-4">
							<i class="fas fa-gem me-3 text-secondary"></i>Company name
						  </h6>
						  <p>
							Here you can use rows and columns to organize your footer content. Lorem ipsum
							dolor sit amet, consectetur adipisicing elit.
						  </p>
						</div>
						<!-- Grid column -->
				
						<!-- Grid column -->
						<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
						  <!-- Links -->
						  <h6 class="text-uppercase fw-bold mb-4">
							Products
						  </h6>
						  <p>
							<a href="#!" class="text-reset">Angular</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">React</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Vue</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Laravel</a>
						  </p>
						</div>
						<!-- Grid column -->
				
						<!-- Grid column -->
						<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
						  <!-- Links -->
						  <h6 class="text-uppercase fw-bold mb-4">
							Useful links
						  </h6>
						  <p>
							<a href="#!" class="text-reset">Pricing</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Settings</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Orders</a>
						  </p>
						  <p>
							<a href="#!" class="text-reset">Help</a>
						  </p>
						</div>
						<!-- Grid column -->
				
						<!-- Grid column -->
						<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
						  <!-- Links -->
						  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
						  <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
						  <p>
							<i class="fas fa-envelope me-3 text-secondary"></i>
							info@example.com
						  </p>
						  <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
						  <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
						</div>
						<!-- Grid column -->
					  </div>
					  <!-- Grid row -->
					</div>
				  </section>
				  <!-- Section: Links  -->
				
				  <!-- Copyright -->
				  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
					© 2021 Copyright:
					<a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				  </div>
				  <!-- Copyright -->
				</footer>
				<!-- Footer -->`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Copyright Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<footer class="bg-light text-center text-lg-start">
				<!-- Copyright -->
				<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
				  © 2020 Copyright:
				  <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				</div>
				<!-- Copyright -->
			  </footer>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Links Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<footer class="bg-light text-center text-lg-start">
				<!-- Grid container -->
				<div class="container p-4">
				  <!--Grid row-->
				  <div class="row">
					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
					  <h5 class="text-uppercase">Links</h5>
			  
					  <ul class="list-unstyled mb-0">
						<li>
						  <a href="#!" class="text-dark">Link 1</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 2</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 3</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 4</a>
						</li>
					  </ul>
					</div>
					<!--Grid column-->
			  
					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
					  <h5 class="text-uppercase mb-0">Links</h5>
			  
					  <ul class="list-unstyled">
						<li>
						  <a href="#!" class="text-dark">Link 1</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 2</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 3</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 4</a>
						</li>
					  </ul>
					</div>
					<!--Grid column-->
			  
					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
					  <h5 class="text-uppercase">Links</h5>
			  
					  <ul class="list-unstyled mb-0">
						<li>
						  <a href="#!" class="text-dark">Link 1</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 2</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 3</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 4</a>
						</li>
					  </ul>
					</div>
					<!--Grid column-->
			  
					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
					  <h5 class="text-uppercase mb-0">Links</h5>
			  
					  <ul class="list-unstyled">
						<li>
						  <a href="#!" class="text-dark">Link 1</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 2</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 3</a>
						</li>
						<li>
						  <a href="#!" class="text-dark">Link 4</a>
						</li>
					  </ul>
					</div>
					<!--Grid column-->
				  </div>
				  <!--Grid row-->
				</div>
				<!-- Grid container -->
			  
				<!-- Copyright -->
				<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
				  © 2020 Copyright:
				  <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				</div>
				<!-- Copyright -->
			  </footer>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			} else if (selectedValue1 === 'Text Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<footer class="bg-light text-center text-lg-start">
				<!-- Grid container -->
				<div class="container p-4">
				  <!--Grid row-->
				  <div class="row">
					<!--Grid column-->
					<div class="col-lg-6 col-md-12 mb-4 mb-md-0">
					  <h5 class="text-uppercase">Footer text</h5>
			  
					  <p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
						molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
						aliquam voluptatem veniam, est atque cumque eum delectus sint!
					  </p>
					</div>
					<!--Grid column-->
			  
					<!--Grid column-->
					<div class="col-lg-6 col-md-12 mb-4 mb-md-0">
					  <h5 class="text-uppercase">Footer text</h5>
			  
					  <p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
						molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
						aliquam voluptatem veniam, est atque cumque eum delectus sint!
					  </p>
					</div>
					<!--Grid column-->
				  </div>
				  <!--Grid row-->
				</div>
				<!-- Grid container -->
			  
				<!-- Copyright -->
				<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
				  © 2020 Copyright:
				  <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				</div>
				<!-- Copyright -->
			  </footer>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}else if (selectedValue1 === 'Forms Footer') {
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showErrorMessage('No active editor!');
					return;
				}

				const selection = editor.selection;
				const text = `<footer class="bg-light text-center text-lg-start">
				<!-- Grid container -->
				<div class="container p-4 pb-0">
				  <form action="">
					<!--Grid row-->
					<div class="row">
					  <!--Grid column-->
					  <div class="col-auto mb-4 mb-md-0">
						<p class="pt-2">
						  <strong>Sign up for our newsletter</strong>
						</p>
					  </div>
					  <!--Grid column-->
			  
					  <!--Grid column-->
					  <div class="col-md-5 col-12 mb-4 mb-md-0">
						<!-- Email input -->
						<div class="form-outline mb-4">
						  <input type="email" id="form5Example25" class="form-control" />
						  <label class="form-label" for="form5Example25">Email address</label>
						</div>
					  </div>
					  <!--Grid column-->
			  
					  <!--Grid column-->
					  <div class="col-auto mb-4 mb-md-0">
						<!-- Submit button -->
						<button type="submit" class="btn btn-primary mb-4">
						  Subscribe
						</button>
					  </div>
					  <!--Grid column-->
					</div>
					<!--Grid row-->
				  </form>
				</div>
				<!-- Grid container -->
			  
				<!-- Copyright -->
				<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
				  © 2020 Copyright:
				  <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
				</div>
				<!-- Copyright -->
			  </footer>`;

				editor.edit((editBuilder) => {
					editBuilder.insert(selection.start, text);
				});

			}
		}
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
