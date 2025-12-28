const StepOne = ({ formik }) => {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className="w-full border p-2"
      />
      {formik.touched.name && formik.errors.name && (
        <p className="text-red-500">{formik.errors.name}</p>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="w-full border p-2 mt-2"
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500">{formik.errors.email}</p>
      )}
    </>
  );
};

export default StepOne;
