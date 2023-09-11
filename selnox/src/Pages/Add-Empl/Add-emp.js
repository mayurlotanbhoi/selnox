import React, { useState, useContext } from 'react';
import { EmployeeContest } from '../../App';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Heading } from '../../Components';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from 'react-router-dom';

const AddEmp = () => {



        // Function to handle changes to the editor content




        const { Empl, setEmpl } = useContext(EmployeeContest)

        console.log(Empl)

        const [name, setName] = useState("")
        const [lastname, setLastName] = useState("")
        const [DOB, setDOB] = useState("")
        const [Study, setStudy] = useState("")
        const [StartDate, setStatDate] = useState("")
        const [endDate, setEndDate] = useState("")
        const [Salary, setSalary] = useState("")
        const [description, setDescription] = useState()

        const [editorState, setEditorState] = useState(EditorState.createEmpty());


        const handleEditorStateChange = (newEditorState) => {
                setEditorState(newEditorState);
                const contentState = newEditorState.getCurrentContent();
                const contentStateJSON = convertToRaw(contentState);
                setDescription(contentStateJSON.blocks[0].text)
        };


        const navigate = useNavigate();

        const handelSubmit = () => {

                console.log(description)

                // const id = 

                const empObj = {
                        id: Math.floor(Math.random() * 1000) + 1,
                        name: name,
                        lastname: lastname,
                        DOB: DOB,
                        Study: Study,
                        StartDate: StartDate,
                        endDate: endDate,
                        Salary: Salary,
                        description: description,
                }
                setEmpl(pre => {
                        return [...pre, empObj]
                })

                navigate('/Emp-list')
        }

        return (
                <div className='add-form-container-outer'>

                        <div className='flex-column'>
                                <Heading heading={"Employee Registration Form"} />
                                <div className='add-form-container' >
                                        <div className='' >
                                                <label className='lable'>First Name*</label>
                                                <input className='input-btn ' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>

                                        <div className='' >
                                                <label className='lable'>Last Name*</label>
                                                <input className='input-btn ' placeholder='Enter your name' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                        </div>



                                        <div className='' >
                                                <label className='lable'>DOB</label>
                                                <div className='flex'>
                                                        <input type='text' className='input-btn-full ' placeholder='Enter your  dob' value={DOB} onChange={(e) => setDOB(e.target.value)} />
                                                        <svg style={{ marginLeft: "-36px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M12.157 1.85782H10.2633V0.481043C10.2633 0.21564 10.0435 0 9.77295 0C9.50242 0 9.28261 0.21564 9.28261 0.481043V1.85782H4.71739V0.481043C4.71739 0.21564 4.49758 0 4.22705 0C3.95652 0 3.73671 0.21564 3.73671 0.481043V1.85782H1.843C0.828502 1.85782 0 2.67062 0 3.66588V12.1919C0 13.1872 0.828502 14 1.843 14H12.157C13.1715 14 14 13.1872 14 12.1919V3.66588C14 2.67062 13.1715 1.85782 12.157 1.85782ZM1.843 2.81991H3.73671V3.48341C3.73671 3.74882 3.95652 3.96445 4.22705 3.96445C4.49758 3.96445 4.71739 3.74882 4.71739 3.48341V2.81991H9.2657V3.48341C9.2657 3.74882 9.48551 3.96445 9.75604 3.96445C10.0266 3.96445 10.2464 3.74882 10.2464 3.48341V2.81991H12.1401C12.6135 2.81991 13.0024 3.20142 13.0024 3.66588V5.27488H0.980676V3.66588C0.980676 3.20142 1.36957 2.81991 1.843 2.81991ZM12.157 13.0379H1.843C1.36957 13.0379 0.980676 12.6564 0.980676 12.1919V6.25355H13.0193V12.1919C13.0193 12.6564 12.6304 13.0379 12.157 13.0379Z" fill="#314363" />
                                                        </svg>
                                                </div>
                                        </div>

                                        <div className='' >
                                                <label className='lable'>Study</label>
                                                <div className='flex'>
                                                        <input type='text' className='input-btn-full ' placeholder='B E' value={Study} onChange={(e) => setStudy(e.target.value)} />
                                                        <svg style={{ marginLeft: "-36px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                                                <path d="M1 1L4.87724 4.87724L8.75448 1" fill="#F8FBFF" />
                                                                <path d="M1 1L4.87724 4.87724L8.75448 1" stroke="#556E9A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                </div>
                                        </div>

                                        <div className='' >
                                                <label className='lable'>Start Date</label>
                                                <input type='date' className='input-btn ' placeholder='Enter your name' value={StartDate} onChange={(e) => setStatDate(e.target.value)} />
                                        </div>

                                        <div className='' >
                                                <label className='lable'>End Date</label>
                                                <input type='date' className='input-btn ' placeholder='Enter your name' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                        </div>


                                        <div className='' >
                                                <label className='lable'>Current Salary</label>
                                                <input type='text' className='input-btn-full ' placeholder='30000' value={Salary} onChange={(e) => setSalary(e.target.value)} />
                                        </div>

                                        <div >
                                                <label className='lable'>Description</label>
                                                <div className='text-editor'>

                                                        <Editor
                                                                editorState={editorState}
                                                                toolbarClassName="toolbarClassName"
                                                                wrapperClassName="wrapperClassName"
                                                                editorClassName="editorClassName"
                                                                onEditorStateChange={handleEditorStateChange}
                                                        />
                                                </div>
                                        </div>

                                        <div className='' >
                                                <input type='button' className='cancel-btn ' placeholder='Enter your name' value="cancel" />
                                        </div>

                                        <div onClick={handelSubmit} >

                                                <input type='button' className='save-btn ' placeholder='Enter your name' value="save" />
                                        </div>


                                </div>
                        </div>
                </div>
        );
}

export default AddEmp;
