import * as Yup from "yup";

export const getValidationSchema = (step) => {
  if (step === 1) {
    return Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    });
  }

  if (step === 2) {
    return Yup.object({
      degree: Yup.string().required("Degree is required"),
      college: Yup.string().required("College is required"),
    });
  }

  return Yup.object();
};
