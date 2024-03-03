
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function MyHooks() {

  // calling useState creates a hook which I understand as
  // a tuple of a variable and an update method
  // a hook causes the react dom to be rendered each time if
  // what hides behind the variable, may it be a string, integer or an object,
  // is changed via the upadte method
  // hooks can
  //  only be called inside React function components.
  //  only be called at the top level of a component.
  //  not be conditional

  const [color, setColor] = useState("red");
  // color should only be modified by calling setColor
  // if setColor is called the virtual react dom is rendered

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const constant_color = "green";

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: color }
      // `...` is object expansion I guess and 
      // the appended `color: newcolor` overrrides color
      // of the expanded object
    });
  }

  // useEffect hooks allow for side effects on state changes
  useEffect(() => { 
    // runs on the first render
    // and any time any dependency changes
    // where dependencies are state variables returned from useState
    updateColor()
  }, [color]);

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
      
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor} // TODO calling method might not work this way
      u>Blue</button>

    </>
  );
}
// if you click a button setColor is called to assign a new value to 

////const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<myHooks />);

export default MyHooks; 
