
function customRender(reactElement, mainContainer){ 
    /* const domElement=document.createElement(reactElement.type); //Version1, Creating a element that is going to insert in our mainContainer 
    domElement.innerHTML=reactElement.children;  
    domElement.setAttribute("href",reactElement.props.href); 
    domElement.setAttribute("target",reactElement.props.traget);   
    mainContainer.appendChild(domElement); */ 

    const domElement=document.createElement(reactElement.type);  //Version2 in this we have use loop in our verison we were repeating the things so to avoid that we use loop
    domElement.innerHTML=reactElement.children; 
    for (const prop in reactElement.props) {
       if(prop === 'children') continue;  //If the props have children inside this we will skip that 
       domElement.setAttribute(prop,reactElement.props[prop]);
    } 
    mainContainer.appendChild(domElement);
} 



const reactElement={  //The React Element That is seen by React after Compilation
    type:'a', 
    props:{ 
        href:'https://google.com', 
        traget:'_blank', 
        children:'Visit Me',
    }, 
    children:'Click Me'
} 


const mainContainer= document.querySelector("#root"); //Accessing the element 
customRender(reactElement, mainContainer); //Method to render the element
