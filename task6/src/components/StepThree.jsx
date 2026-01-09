const StepThree = ({ values }) => {
  return (
    <div className='bg-gray-100 p-4 rounded'>
      <p>
        <b>Name:</b> {values.name}
      </p>
      <p>
        <b>Email:</b> {values.email}
      </p>
      <p>
        <b>Degree:</b> {values.degree}
      </p>
      <p>
        <b>College:</b> {values.college}
      </p>
    </div>
  )
}

export default StepThree
