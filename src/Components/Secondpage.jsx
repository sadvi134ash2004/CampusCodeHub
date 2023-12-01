import { useEffect, useState } from "react";
import React from "react";
import "../Styles/SecondPage.css";
import axios from "axios";
// import Secondpage from ".//Secondpage.jsx";

function Secondpage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    document.getElementById("inputs").value = "";
    formData.append("title", title);
    formData.append("file", file);
    console.log("uploded", title, file);
    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "okk") {
      alert("Uploaded successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };
  return (
    <div className="sp">
      <form action="post" className="usersec" onSubmit={submitImage}>
        <label htmlFor="#">ApplicationName : </label>
        <input
          type="text"
          name="text"
          id="inputs"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {/* <label htmlFor="#">GroupName : </label>
        <input type="text" name="text" />
        <br /> */}
        <label htmlFor="#">ZipFiles : </label>
        <input
          type="file"
          accept="application/pdf"
          id="inputs"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        {/* <label htmlFor="#">Preview : </label>
        <input type="file" accept="application/pdf" />
        <br /> */}
        <button className="subsub">Submit</button>
      </form>
      <div className="uploaded">
        <h4>Uploaded Pdf:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
