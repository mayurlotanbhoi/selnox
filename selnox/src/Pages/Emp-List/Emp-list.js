import React, { useState, useContext, useEffect } from 'react';
import { Heading } from '../../Components';
import { EmployeeContest } from '../../App';

const EmpList = () => {

        const { Empl, setEmpl } = useContext(EmployeeContest)
        console.log(Empl)


        const [EmpData, setEmp] = useState(Empl)

        let initialRows = Array(Empl.length).fill(false);

        const [isOpen, setIsOpen] = useState(initialRows);
        const toggleOpen = (index) => {
                const updatedOpenState = isOpen.map(element => {
                        return false
                });
                updatedOpenState[index] = !updatedOpenState[index];
                setIsOpen(updatedOpenState);
        };



        useEffect(() => {
                setEmp(Empl)
        }, [Empl.length]);



        const deletHadLer = (id) => {
                const newList = Empl.filter((emp) => {
                        return emp.id !== id
                })
                setEmpl(newList)
        }





        return (
                <div className='Emp-list-ouet'>

                        <div className='Emp-list-inner'>
                                <Heading heading={"Employee List"} />

                                <table className='table'>
                                        <thead className='thead'>
                                                <tr >
                                                        <th>Name</th>
                                                        <th>DOB</th>
                                                        <th>Start Dat</th>
                                                        <th>End Date</th>
                                                        <th>Description</th>
                                                        <th></th>
                                                </tr>

                                        </thead>
                                        <tbody>
                                                {EmpData.map((emp, index) => (


                                                        <tr key={index} >
                                                                <td>{emp.name}</td>
                                                                <td>{emp.DOB}</td>
                                                                <td>{emp.StartDate}</td>
                                                                <td>{emp.endDate}</td>
                                                                <td>
                                                                        {emp.description}
                                                                </td>
                                                                <td>

                                                                        {isOpen[index] ? (
                                                                                <div className='show-option'>
                                                                                        <div><svg style={{ marginRight: "4.24px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                                                                                                <g clip-path="url(#clip0_21_1369)">
                                                                                                        <path d="M4 0C3.13654 0.000471413 2.29322 0.239183 1.5798 0.685069C0.866386 1.13095 0.315905 1.76337 0 2.5C0.315517 3.23686 0.865909 3.86949 1.57942 4.3154C2.29293 4.7613 3.13645 4.99981 4 4.99981C4.86355 4.99981 5.70707 4.7613 6.42058 4.3154C7.13409 3.86949 7.68448 3.23686 8 2.5C7.6841 1.76337 7.13361 1.13095 6.4202 0.685069C5.70678 0.239183 4.86346 0.000471413 4 0ZM4 4.16667C3.6404 4.16667 3.28887 4.06892 2.98987 3.88578C2.69087 3.70265 2.45783 3.44235 2.32022 3.13781C2.18261 2.83326 2.1466 2.49815 2.21675 2.17485C2.28691 1.85155 2.46007 1.55458 2.71435 1.32149C2.96863 1.0884 3.2926 0.929667 3.64529 0.865358C3.99798 0.801049 4.36356 0.834055 4.69579 0.960201C5.02802 1.08635 5.31198 1.29997 5.51176 1.57405C5.71155 1.84813 5.81818 2.17036 5.81818 2.5C5.81818 2.94203 5.62662 3.36595 5.28565 3.67851C4.94467 3.99107 4.48221 4.16667 4 4.16667ZM4 1.5C3.78424 1.5 3.57332 1.55865 3.39392 1.66853C3.21452 1.77841 3.0747 1.93459 2.99213 2.11732C2.90956 2.30004 2.88796 2.50111 2.93005 2.69509C2.97215 2.88907 3.07604 3.06725 3.22861 3.20711C3.38118 3.34696 3.57556 3.4422 3.78717 3.48079C3.99879 3.51937 4.21814 3.49957 4.41747 3.42388C4.61681 3.34819 4.78719 3.22002 4.90706 3.05557C5.02693 2.89112 5.09091 2.69778 5.09091 2.5C5.09091 2.23478 4.97597 1.98043 4.77139 1.79289C4.5668 1.60536 4.28933 1.5 4 1.5Z" fill="#7D7D7D" />
                                                                                                </g>
                                                                                                <defs>
                                                                                                        <clipPath id="clip0_21_1369">
                                                                                                                <rect width="8" height="5" fill="white" />
                                                                                                        </clipPath>
                                                                                                </defs>
                                                                                        </svg><span>View</span></div>
                                                                                        <div> <svg style={{ marginRight: "4.24px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                                                                <path d="M6.30208 3.2087L4.58333 1.48995L0 6.07328V7.79203H1.71875L6.30208 3.2087ZM7.65875 1.85203C7.74411 1.76616 7.79203 1.64999 7.79203 1.52891C7.79203 1.40782 7.74411 1.29165 7.65875 1.20578L6.58625 0.13328C6.50038 0.047915 6.38421 0 6.26313 0C6.14204 0 6.02587 0.047915 5.94 0.13328L5.04167 1.03161L6.76042 2.75036L7.65875 1.85203Z" fill="#7D7D7D" />
                                                                                        </svg> <span>Edit</span></div>

                                                                                        <div onClick={() => deletHadLer(emp.id)}>
                                                                                                <svg style={{ marginRight: "4.24px" }} xmlns="http://www.w3.org/2000/svg" width="5" height="7" viewBox="0 0 5 7" fill="none">
                                                                                                        <g clip-path="url(#clip0_21_1371)">
                                                                                                                <path d="M0.357143 6.22222C0.357708 6.42831 0.433145 6.62579 0.566977 6.77151C0.700809 6.91724 0.882162 6.99938 1.07143 7H3.92857C4.11784 6.99938 4.29919 6.91724 4.43302 6.77151C4.56686 6.62579 4.64229 6.42831 4.64286 6.22222V1.55556H0.357143V6.22222ZM5 0.388889H3.75L3.39286 0H1.60714L1.25 0.388889H0V1.16667H5V0.388889Z" fill="#7D7D7D" />
                                                                                                        </g>
                                                                                                        <defs>
                                                                                                                <clipPath id="clip0_21_1371">
                                                                                                                        <rect width="5" height="7" fill="white" />
                                                                                                                </clipPath>
                                                                                                        </defs>
                                                                                                </svg><span>Detale</span>
                                                                                        </div>
                                                                                </div>
                                                                        ) : <svg className='menu' onClick={() => toggleOpen(index)} xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none" >
                                                                                <g clip-path="url(#clip0_21_1355)">
                                                                                        <path d="M2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69639 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559963 0.337062 0.888861C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C0.0015838 2.52995 0.212806 3.03774 0.587536 3.41247C0.962266 3.7872 1.47005 3.99842 2 4ZM2 6C1.60444 6 1.21776 6.1173 0.888861 6.33706C0.559963 6.55682 0.303617 6.86918 0.152242 7.23463C0.000866562 7.60009 -0.0387401 8.00222 0.0384303 8.39018C0.115601 8.77814 0.306083 9.13451 0.585788 9.41421C0.865493 9.69392 1.22186 9.8844 1.60982 9.96157C1.99778 10.0387 2.39992 9.99914 2.76537 9.84776C3.13082 9.69639 3.44318 9.44004 3.66294 9.11114C3.8827 8.78224 4 8.39556 4 8C3.99842 7.47005 3.7872 6.96227 3.41247 6.58754C3.03774 6.21281 2.52995 6.00158 2 6ZM2 12C1.60444 12 1.21776 12.1173 0.888861 12.3371C0.559963 12.5568 0.303617 12.8692 0.152242 13.2346C0.000866562 13.6001 -0.0387401 14.0022 0.0384303 14.3902C0.115601 14.7781 0.306083 15.1345 0.585788 15.4142C0.865493 15.6939 1.22186 15.8844 1.60982 15.9616C1.99778 16.0387 2.39992 15.9991 2.76537 15.8478C3.13082 15.6964 3.44318 15.44 3.66294 15.1111C3.8827 14.7822 4 14.3956 4 14C3.99842 13.4701 3.7872 12.9623 3.41247 12.5875C3.03774 12.2128 2.52995 12.0016 2 12Z" fill="#C1C0C0" />
                                                                                </g>
                                                                                <defs>
                                                                                        <clipPath id="clip0_21_1355">
                                                                                                <rect width="4" height="16" fill="white" />
                                                                                        </clipPath>
                                                                                </defs>
                                                                        </svg>}
                                                                </td>
                                                        </tr>
                                                ))}
                                        </tbody>
                                </table>

                        </div>

                </div >
        );
}

export default EmpList;

