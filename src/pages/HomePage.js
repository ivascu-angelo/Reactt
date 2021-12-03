import classes from "./HomePage.module.css";
import Card from "../UI/Card";

const HomePage = (props) => {
  let results = localStorage.getItem("theResults");
  console.log(results);
  return (
    <Card>
      <section>
        <div className={classes.body}>
          Homepage needs work for now.
          <div className={classes.card}>
            <div>
              <p>My name is :{props.data.name}</p>
              <p>My age is:{props.data.age}</p>
            </div>
            <div>Saved name is: {results}</div>
            <div>Saved age is : {results}</div>
            <p>
              Will try to show here the data the user entered in the Profile
              page
            </p>
            <div></div>
            <button className={classes.btn}>Delete</button>
          </div>
        </div>
      </section>
    </Card>
  );
};
export default HomePage;
