import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn uppercase btn-block btn-primary"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          sending...
          <span className="loading loading-bars"></span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
