import React from 'react'

function About() {
  return ( 
    //when we return something we need to have it wrapped in a single element
    //if we don't need an element in DOM (like a div) -> use React.Fragment
    //it doesn't show in the DOM, but we need it for JSX when we return something
    <React.Fragment>
        <h1>About</h1>
        <p>This is the TodoList app. Nimic altceva interesant.</p>
    </React.Fragment>
  )
}

export default About;

/* we don't want to this the About component on the main page */
/* we want it to be on a completely different URL -> use router */