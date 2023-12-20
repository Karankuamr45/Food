import React from 'react';
import ReactDOM from 'react-dom/client';

const parent=React.createElement('div',
{id:"parent"},
[React.createElement('div',
{id:'child'},
[React.createElement('h1',
{id:'heading'},
"Heading tag in Nested divs"),React.createElement('h2',
{id:'heading'},
"Heading tag in Nested divs with heading  ssbxdtcrsfdghs2")]),React.createElement('div',
{id:'child2'},
[React.createElement('h1',
{id:'heading'},
"Heading tag 2 in Nested divs"),React.createElement('h2',
{id:'heading'},
"Heading tag in 2 Nested divs with heading 2")])]

);

console.log(parent)


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)