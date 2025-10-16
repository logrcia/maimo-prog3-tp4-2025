import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Email inválido";
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === "admin") {
    error = "Nombre no permitido";
  }
  return error;
}

function validateEmptyText(value) {
    let error;
    if (value === '') {
        error = 'Required!';
    }
    return error
}

export const CheckoutForm = ( {handleAddOrder} ) => (
  <div className="flex justify-center items-center min-h-screen bg-[#b4b4b4] py-12">
    <div className="bg-[#e4e4e4] shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8 tracking-wide">
        Place order
      </h1>

      <Formik
        initialValues={{ username: "", email: "", company: "" }}
        onSubmit={(values) => {
          console.log(values);
          handleAddOrder(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Field
                name="email"
                validate={validateEmail}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#d9d9d9] border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.email}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <Field
                name="username"
                validate={validateUsername}
                placeholder="Your username"
                className="w-full px-4 py-2 bg-[#d9d9d9] border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.username}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <Field
                name="company"
                validate={validateEmptyText}
                placeholder="Your company"
                className="w-full px-4 py-2 bg-[#d9d9d9] border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              {errors.company && touched.company && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.company}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
