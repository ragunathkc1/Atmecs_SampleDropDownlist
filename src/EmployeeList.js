import React, { useState } from 'react';

function EmployeeList() {

    const [items] = React.useState([
        {
          label: "Prem",
          value: "Prem"
        },
        { label: "Siva", value: "Siva" },
        { label: "Velu", value: "Velu" }
      ]);
      return (
        <select>
          {items.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
        );
      }
      export default EmployeeList
    
    // const [items] = React.useState([
    //     { id: 1, name: "Rajkumar", age: 27, value: 'A', label: 'A' },
    //     { id: 2, name: "Siva", age: 28, value: 'B', label: 'B' },
    //     { id: 3, name: "Ajith", age: 29, value: 'C', label: 'C' }

    // ]);

    // const [selectedValue, setSelectedValue] = useState[null];

    // const handleSelect = obj => {
    //     setSelectedValue(obj)
    // }
    // return (
    //     <select>
    //         {items.map(item => (
    //             <option key={item.id} value={item.value}>
    //                 {item.label}
    //             </option>
    //         ))}
    //     </select>

        
        // <select >
        //      {/* value={selectedValue} options={empList} onChange={handleSelect}> */}
        //     {empList.map((emp) => (
        //         <option
        //             value={emp.value}>
        //             {emp.label}
        //         </option>
        //     ))}
        // </select>
    
