/*const heading= React.createElement("h1",{id:"heading"}, "Hello!");*/
const parent=React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, React.createElement("hq",{}, "H1 Tag")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

