import classes from "./UserForm.module.css";
import { useRef } from "react";
// import { useState } from "react";
const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const inputedData = useState();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const enteredNameAndAge = {
      name: enteredName,
      age: enteredAge,
    };
    props.getNameAndAge(enteredNameAndAge);

    if (!enteredNameAndAge.name || !enteredNameAndAge.age) {
      props.errorThrow2();
    }

    // localStorage.setItem("userInfo", JSON.stringify(enteredNameAndAge));

    // const results = localStorage.getItem("userInfo");
    // console.log(results);
    // JSON.parse(results);
    // props.getLocalStorage2(results);
  };

  return (
    <div className={classes.body}>
      <form className={classes.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            placeholder="name"
            type="text"
            ref={nameInputRef}
          />
          <div>
            <label htmlFor="age">Age</label>
            <input
              required
              id="age"
              placeholder="age"
              type="number"
              min={0}
              max={124}
              ref={ageInputRef}
            />
          </div>
          <button onClick={submitFormHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

//work on an error handling in case the input types are wrong
