import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Button,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../theme";
import style from "./Project.module.css";

export default function Project() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isDropZoneActive, setIsDropZoneActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    technologyUsed: "",
    ongoing: false,
    folder: null,
  });
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDropZoneActive(true);
    const files = e.dataTransfer.files;
    setUploadedFileName(files.name);
  };

  const handleDragLeave = (e) => {
    // e.preventDefault();
    setIsDropZoneActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setUploadedFileName(files.name);
    setSelectedFiles(files);
    setIsDropZoneActive(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFileName(file.name);
    setSelectedFiles([file]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedFiles);
  };
  const handleCancel = () => {
    setUploadedFileName(""); // Clear the uploaded file name
  };

  return (
<>
  <Button
    variant="contained"
    sx={{
      backgroundColor: colors.blueAccent[700],
      color: colors.grey[100],
      fontSize: "14px",
      fontWeight: "bold",
      padding: "10px 20px",
      "&.MuiButtonBase-root:hover": {
        bgcolor: "transparent",
      },
    }}
    className="btn-modal"
    onClick={toggleModal}
  >
    Upload Projects
  </Button>
  {modal && (
    <div>
      <div
        className={style.overlay}
        onClick={toggleModal} // Close the modal when clicking outside
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
    <div className={style.form_container}>
      <form onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <label htmlFor="projectName">Name of Project:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Project name"
            value={formData.projectName}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              fontSize: "16px",
            }}
          />
        </div>

        <div className={style.form_group}>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Project description"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
            style={{
              color:"black",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              fontSize: "16px",
              minHeight: "100px",
            }}
          ></textarea>
        </div>

        <div className={style.form_group}>
          <label htmlFor="technologyUsed">Technology Used:</label>
          <input
            type="text"
            id="technologyUsed"
            name="technologyUsed"
            placeholder="HTML,CSS,JS,REACT"
            value={formData.technologyUsed}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              fontSize: "16px",
            }}
          />
        </div>
        <label>
          <input
            type="checkbox"
            name="ongoing"
            checked={formData.ongoing}
            onChange={handleCheckboxChange}
          />
          Ongoing
        </label>
        <div>
          <div
            className={`drop_zone ${isDropZoneActive ? "active" : ""}`}
            style={{
              border: "2px solid black",
              padding: "20px",
              textAlign: "center",
              borderRadius: "8px",
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <label
              htmlFor="folder"
              className="upload_label"
              style={{ display: "block" }}
            >
              <div className="upload_icon" style={{ fontSize: "48px" }}>
                <FontAwesomeIcon icon={faFileUpload} />
              </div>
              <div>Drag & Drop files here or click to browse</div>
            </label>
            <Button
              component="label"
              variant="contained"
              accept=".zip,.rar,.7zip"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginTop: "10px" }}
            >
              Upload files
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                style={{ display: "none" }}
              />
            </Button>
          </div>
          {uploadedFileName && (
            <div style={{ marginTop: "10px", color: "black" }}>
              Uploaded File: {uploadedFileName}
            </div>
          )}
        </div>

        <div className={style.buttons}>
          <button type="submit" style={{
            padding: "10px 20px",
            backgroundColor: colors.blueAccent[600],
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
          }}>Upload Project</button>
          <button
            onClick={handleCancel}
            type="button"
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              color: "#333",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
      <button className={style.close_modal} onClick={toggleModal}>
        CLOSE
      </button>
    </div>
     </div>
  )}
</>

  );
}
