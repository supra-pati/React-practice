import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  console.log(formData);

  return (
    <div>
      <h2>Form Details:</h2>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Age: {formData.age}</li>
        <li>Phone: {formData.phone}</li>
        <li>Address: {formData.address}</li>
        {formData.age && parseInt(formData.age, 10) < 18 && (
          <li>Password: {formData.password}</li>
        )}
      </ul>
    </div>
  );
};
export default DetailsPage;
