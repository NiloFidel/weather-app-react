import { useEffect, useRef, useState } from "react";
import { UseForm } from "../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { NavbarComponent } from "./NavbarComponent";

export const FileUploaderComponent = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const focusRef = useRef()
  //console.log(focusRef)
  const initialForm = {
    title: "",
    description: "",
    author: "",
    category: ""
  }
  const { formState, title, description, author, category, onInputChange } = UseForm(initialForm)
  useEffect(() => {
    focusRef.current.focus()
  }, [])

  const handleForm = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", file);
    data.append("content", JSON.stringify(formState));
    console.log(formState)

    fetch("http://localhost:3000/upload/all", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok === true) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  }

  return (
    <>
      <NavbarComponent />
      <form>
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input
            ref={focusRef}
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder=""
            value={title}
            onChange={onInputChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="description">description</label>
          <textarea
            type="text"
            className="form-control"
            style={{ row: "10" }}
            name="description"
            id="description"
            placeholder=""
            value={description}
            onChange={onInputChange}
          />

        </div>
        <br />
        <div className="form-group">
          <label htmlFor="author">author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            placeholder=""
            value={author}
            onChange={onInputChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="category">category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            id="category"
            placeholder=""
            value={category}
            onChange={onInputChange}
          />
        </div>

        <input type="file" name="image" onChange={handleFileChange} />

        {(file != "") && (<img
          alt="not found"
          width={"300px"}
          src={URL.createObjectURL(file)}
        />)}
        <button type="submit" onClick={(e) => handleForm(e)}>
          Submit
        </button>
      </form>
    </>
  );
}