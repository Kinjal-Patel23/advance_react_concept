import { useFormik } from "formik";
import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { getValidationSchema } from "./validation";

const App = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      degree: "",
      college: "",
    },
    validationSchema: getValidationSchema(step),
    onSubmit: (values) => {
      console.log("Final Data:", values);
      alert("Form Submitted");
    },
  });

  const handleNext = async () => {
    const errors = await formik.validateForm();

    if (step === 1) {
      formik.setTouched({
        name: true,
        email: true,
      });

      if (!errors.name && !errors.email) {
        setStep(2);
      }
    }

    if (step === 2) {
      formik.setTouched({
        degree: true,
        college: true,
      });

      if (!errors.degree && !errors.college) {
        setStep(3);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {step === 1 && <StepOne formik={formik} />}
          {step === 2 && <StepTwo formik={formik} />}
          {step === 3 && <StepThree values={formik.values} />}

          <div className="flex gap-2 mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="w-1/2 bg-gray-400 text-white p-2"
              >
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="w-1/2 bg-blue-600 text-white p-2"
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2"
              >
                Submit
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;
