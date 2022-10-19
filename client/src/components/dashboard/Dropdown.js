import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterInvoices, getInvoices } from "../../actions/invoices";
import { Dropdown } from "semantic-ui-react";

const options = [
  { name: "Paid", value: "paid" },
  { name: "Pending", value: "pending" },
  { name: "Draft", value: "draft" },
];

const DropdownButton = () => {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);

  const handleOnChange = (position) => {
    options.forEach((option, index) => {
      console.log(position, index);
      if (position === index) {
        if (option.checked) {
          option.checked = false;
          dispatch(getInvoices());
        } else {
          option.checked = true;
          dispatch(filterInvoices(option.value));
        }
      } else {
        option.checked = false;
      }
    });
  };
  return (
    <>
      <Dropdown
        upward
        floating 
        text='Filter by status'
        onClick={() => setShowFilter(!showFilter)}
      />       
      {showFilter && (
        <ul className="dropdown-list">
          {options.map(({ name, value, checked }, index) => {
            console.log(checked);
            return (
              <li key={index} className='dropdown-item'>
                  <input
                    type="checkbox"
                    checked={checked}
                    value={value}
                    onChange={() => {
                      handleOnChange(index);
                    }}
                    name={value}
                    id={value}
                    onClick={() => setShowFilter(!showFilter)}
                    className=""
                  />
                  <span className="">
                    {name}
                  </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default DropdownButton;
