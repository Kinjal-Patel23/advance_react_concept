const StepTwo = ({ formik }) => {
  return (
    <>
      <input
        type='text'
        name='degree'
        placeholder='Degree'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.degree}
        className='w-full border p-2'
      />
      {formik.touched.degree && formik.errors.degree && (
        <p className='text-red-500'>{formik.errors.degree}</p>
      )}

      <input
        type='text'
        name='college'
        placeholder='College'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.college}
        className='w-full border p-2 mt-2'
      />
      {formik.touched.college && formik.errors.college && (
        <p className='text-red-500'>{formik.errors.college}</p>
      )}
    </>
  )
}

export default StepTwo
