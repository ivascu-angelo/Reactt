import UserForm from "../UI/UserForm";
import Card from "../UI/Card";
const ProfilePage = (props) => {
  return (
    <Card>
      <section>
        <p>Please put your data into the following form and click Submit</p>
        <UserForm
          getNameAndAge={props.getAgeAndNameHandler}
          errorThrow2={props.errorProp}
          parseHandler2={props.parseHandler}
        />
        <div></div>
      </section>
    </Card>
  );
};
export default ProfilePage;
