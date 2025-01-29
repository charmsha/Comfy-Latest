import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary btn-block capitalize"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="loading loading-spinner"></span>
            sending...
          </>
        ) : (
          text || "submit"
        )}
      </button>
    </div>
  );
};

export default SubmitBtn;
