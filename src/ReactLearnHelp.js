//What is React?:
//1. A modern JavaScript Library for building User Interfaces
//2. Heart of react applications is a "Component" which is a piece of the user interface. So independent, re-usable components are made and they are used to
//create complex User Interfaces.
//3. So every React application is a tree of "Components" with a root component and child components
//4. Component is a JavaScript class with a "state" and a "render()" method. state is the data to be displayed when the component is rendered.
//5. Output of render() method is a "React Element" which is called the "Virtual DOM" (light-weight representation of the real dom)
// which will be mapped to the "Real DOM". When state of a component is changed we get a new React Element
// //and react figures what is changed and keeps it in sync with the REAL DOM.
//6. That is why it is called "React" which "Reacts to the state changes of a component".
//7. Angular is a "complete JS Framework" and React is a "Javascript Library". React just makes sure the "View" is in Sync with the state.
//8. So with React we are free to use libraries for routing and other functionalities using Node Package Manager (npm)

//sudo?
//sudo means "super user do" in Mac terminal which is like running a command as ADMIN or Super User

//JSX and Babel?
//react application will have functions which can return plain html markup which is called JSX = Javascript XML and
//"Babel" is a modern JavaScript compiler which compiles this JSX to plain JavaScript. For instance const element = <h1>Hello World</h1>; is a JSX expression
//and Babel can convert this to plain Javascript or a React statement.

//eject: 
//react-scripts eject can be used to eject from create-react-app which will create a new folder "config" in the application and also add a lot more dependencies in the package.json file
// "eject" can be used to have custom configuration for webpack configuration for Prod/Dev environments in config folder.


//props:
//every react component can have a set of attributes which can be accessed using this.props. For example when we add the counter component
// in another component like below we could have additional attributes or props added to it.
//<Counter key={counter.id} value={counter.value} selected = {true} />
//In the actual Counter component counter.jsx we could access these attributes or props using the below code
//Console.log('props', this.props);


