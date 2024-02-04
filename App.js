// react can be using js also
// making an react  component in javascript withount using jsx

{
  /* <div id="parent">
   <div id="child">
    <h1 id:"h1">i am a h1 tag</h1>
   </div>

</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "i am a h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "i am a h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "i am a h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "i am a h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am a h2 tag"),
  ]),
]);

console.log(parent);

const heading = React.createElement("h1", { id: "heading" }, "hello world!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(root);
root.render(heading);
root.render(parent);

// byw bye createElement
