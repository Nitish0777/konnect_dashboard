import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Button,
  useTheme,
} from "@mui/material";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
          height: "121%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
    <div style={{height: uploadedFileName ?  "610px" : "580px"}} className={style.form_container }>
      <form onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div style={{display:"flex",justifyContent:"flex-end",marginTop:"-20px",marginRight:"-20px"}}>
          <IconButton style={{color:"white"}} onClick={toggleModal}>
            <CloseIcon />
          </IconButton>
          </div>

          <label style={{marginTop:"-20px",color:"white",paddingBottom:"1px"}} htmlFor="projectName">Name of Project:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Project name"
            value={formData.projectName}
            onChange={handleInputChange}
            required
            style={{
              fontFamily:"monospace",
              color:"white",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #dddfe289",
              backgroundColor: "#1f2a3f",
              fontSize: "16px",
            }}
          />
        </div>

        <div className={style.form_group}>
          <label style={{color:"white"}} htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Project description"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
            style={{
              color:"white",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#1f2a3f",
              fontSize: "16px",
              minHeight: "100px",
            }}
          ></textarea>
        </div>

        <div className={style.form_group}>
          <label style={{color:"white"}} htmlFor="technologyUsed">Technology Used:</label>
          <input
            type="text"
            id="technologyUsed"
            name="technologyUsed"
            placeholder="HTML,CSS,JS,REACT"
            value={formData.technologyUsed}
            onChange={handleInputChange}
            required
            style={{
              color:"white",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#1f2a3f",
              fontSize: "16px",
            }}
          />
        </div>
        <label style={{color:"white"}}>
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
              border: "2px solid #dddfe289 ",
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
              style={{ display: "block",color:"white" }}
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
              style={{backgroundColor:"#545ac8",width:"120px",height:"28px"}}
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
            <div style={{ marginTop: "10px", color: "white" }}>
              Uploaded File: {uploadedFileName}
            </div>
          )}
        </div>

        <div style={{marginBottom:"4px"}} className={style.buttons}>
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
              backgroundColor: "#fff",
              color: "black",
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
    </div>
     </div>
  )}
</>

  );
}
