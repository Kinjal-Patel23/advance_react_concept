import { useFormik } from 'formik'
import { useState } from 'react';
import * as Yup from "yup";

const App = () => {

  const [submitData, setSubmitData] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      setSubmitData(values);
      resetForm();
    },
  })

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Formik Form
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter name..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
          {submitData && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-medium mb-2">Form Data</h3>
              <p>
                <span className="font-semibold">Name:</span> {submitData.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {submitData.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
