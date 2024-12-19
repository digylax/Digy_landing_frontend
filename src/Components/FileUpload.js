import React, { useState } from "react";
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import { FaRegFileAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const FileUpload = () => {
    const [selectedfile, SetSelectedFile] = useState("");
    const [Files, SetFiles] = useState([]);

    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    const InputChange = (e) => {
        // --For Single File Input
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            SetSelectedFile({
                id: shortid.generate(),
                filename: e.target.files[0].name,
                filetype: e.target.files[0].type,
                fileimage: reader.result,
                datetime: e.target.files[0].lastModifiedDate.toLocaleString("en-IN"),
                filesize: filesizes(e.target.files[0].size)
            });
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(file);
        }
    };

    const DeleteSelectFile = (id) => {
        if (window.confirm("Are you sure you want to delete this Image?")) {
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
        } else {
            // alert('No');
        }
    };

    const FileUploadSubmit = async (e) => {
        e.preventDefault();

        // form reset on submit
        e.target.reset();
        if (selectedfile !== "") {
            SetFiles((preValue) => {
                return [...preValue, selectedfile];
            });
            SetSelectedFile("");
        } else {
            alert("Please select file");
        }
    };

    const DeleteFile = async (id) => {
        if (window.confirm("Are you sure you want to delete this Image?")) {
            const result = Files.filter((data) => data.id !== id);
            SetFiles(result);
        } else {
            // alert('No');
        }
    };

    return (
        <div className="fileupload-view">
            <div className="kb-data-box">
                <form onSubmit={FileUploadSubmit}>
                    <div className="kb-file-upload">
                        <div className="file-upload-box">
                            <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} />
                            <span className="hstack">
                                <FiUpload size={28} />
                                <span className="ps-3 text-center">
                                    Upload your Resume or drag and drop it here{" "} <br/>
                                    {/* <span className="file-link">Choose your file</span> */}
                                    only (.doc, .docx, .pdf, .rtf )
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="kb-attach-box mb-3">
                        {selectedfile !== "" ? (
                            <div className="file-atc-box">
                                {selectedfile.filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                                    <div className="file-image">
                                        {" "}
                                        <img src={selectedfile.fileimage} alt="" />
                                    </div>
                                ) : (
                                    <div className="file-image">
                                        <FaRegFileAlt />
                                    </div>
                                )}
                                <div className="file-detail">
                                    <h6>{selectedfile.filename}</h6>
                                    <p>
                                        <span>Size : {selectedfile.filesize}</span>
                                        <span className="ms-2">
                                            Modified Time : {selectedfile.datetime}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    {/*<div className="kb-buttons-box">
                        <button type="submit" className="btn btn-primary form-submit">Upload</button>
                    </div>*/}
                </form>
                {Files.length > 0 ? (
                    <div className="kb-attach-box">
                        <hr />
                        {Files.map((data, index) => {
                            const { id, filename, filetype, fileimage, datetime, filesize
                            } = data;
                            return (
                                <div className="file-atc-box" key={index}>
                                    {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                                        <div className="file-image">
                                            {" "}
                                            <img src={fileimage} alt="" />
                                        </div>
                                    ) : (
                                        <div className="file-image"><FaRegFileAlt /></div>
                                    )}
                                    <div className="file-detail">
                                        <h6>{filename}</h6>
                                        <p>
                                            <span>Size : {filesize}</span>
                                            <span className="ms-3">Modified Time : {datetime}</span>
                                        </p>
                                        <div className="file-actions">
                                            <button className="file-action-btn" onClick={() => DeleteFile(id)}>Delete</button>
                                            <a href={fileimage} className="file-action-btn" download={filename}>Download</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default FileUpload;