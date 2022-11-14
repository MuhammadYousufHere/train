import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const Play = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={async (values) => {
          let formData = new FormData();

          formData.append("name", values.name);
          console.log(values);
          //   alert("Form submitted!");
          //   console.log(formData.get("name"));
          //   console.log(formData.get("email"));
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          email: yup.string().email().required(),
        })}
        render={({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>

            {/* <div className="form-group">
                <label for="photo">Photo</label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  className="form-control"
                  onChange={(event) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
              </div> */}
            {/* 
              <div className="form-group">
                <label>Multiple files</label>
                <Dropzone
                  style={dropzoneStyle}
                  accept="image/*"
                  onDrop={(acceptedFiles) => {
                    // do nothing if no files
                    if (acceptedFiles.length === 0) {
                      return;
                    }

                    // on drop we add to the existing files
                    setFieldValue(
                      "attachments",
                      values.attachments.concat(acceptedFiles)
                    );
                  }}
                >
                  {({
                    isDragActive,
                    isDragReject,
                    acceptedFiles,
                    rejectedFiles,
                  }) => {
                    if (isDragActive) {
                      return "This file is authorized";
                    }

                    if (isDragReject) {
                      return "This file is not authorized";
                    }

                    if (values.attachments.length === 0) {
                      return <p>Try dragging a file here!</p>;
                    }

                    return values.attachments.map((file, i) => (
                      <Thumb key={i} file={file} />
                    ));
                  }}
                </Dropzone>
              </div> */}

            <button type="submit" className="btn-primary">
              submit
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default Play;
