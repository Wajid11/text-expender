import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

  
    </div>
  );
}

function TextExpander({
  collapsedNumWords=20,
  expandButtonText="Show More",
  collapseButtonText="Show Less",
  buttonColor="green", 
  expanded,
  className,
  children 
})


{
  // state//
// const t = children;
const  [txtcontent,setTxtcontent]=useState({children});
const  [isshow,setIsshow]=useState(true);




// state//
  const button = {
    color:buttonColor
  }
  
  
  return (
    <div className={className}>
      {isshow ? children : children.split(' ').slice(0,collapsedNumWords).join(' ')+ "..."}
      <p onClick={()=>setIsshow(e=>!e)} style={button}>{isshow ? collapseButtonText : expandButtonText}</p>
    </div>
  );
}
