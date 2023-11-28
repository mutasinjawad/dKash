
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import SendMoney from './SendMoney';

const People = [
  {
    name: 'Leslie Alexander',
    phone: '01818288616',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    phone: '01827361321',
    imageUrl: '', // No image
  },
  
  {
    name: 'Dries Vincent',
    phone: '01747146123',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
  },
  {
    name: 'Lindsay Walton',
    phone: '01923412543',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    phone: '01632495323',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    phone: '01927462719',
   
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
  },

];

const defaultAvatarUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU';

const ContactTable = () => {
  const [showForm, setShowForm] = useState(false);
  const [newPerson, setNewPerson] = useState({
    name: '',
    phone: '',
  });

const navigate = useNavigate(); // Initialize history for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const handleAddContact = () => {
    // Add the new person to the People array
    People.push({
      name: newPerson.name,
      phone: newPerson.phone,
      imageUrl: defaultAvatarUrl,
    });

    // Reset the form and hide it
    setNewPerson({
      name: '',
      phone: '',
    });
    setShowForm(false);
  };

  const handleSendMoney = () => {
    // Navigate to the SendMoney component
    navigate("/send");
  };

  return (
    <div>
      <button
        type="button"
        className="text-xs leading-5 text-white bg-green-500 hover:bg-green-600 py-1 px-2 rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        Add contact
      </button>

      {/* add to the contact table start; */}
      {showForm && (
        <div className="mb-4">
          <label className="block text-sm font-semibold leading-5 text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={newPerson.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label className="block text-sm font-semibold leading-5 text-gray-700 mt-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={newPerson.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="button"
            onClick={handleAddContact}
            className="mt-4 text-xs leading-5 text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded"
          >
            Add
          </button>
        </div>
      )}
      {/* add to the contact table end; */}

      <ul role="list" className="divide-y divide-gray-100 mx-10">
        {People.map((person) => (
          <li key={person.phone} className="flex justify-between items-center gap-x-2 py-5">
            <div className="flex items-center gap-x-2">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl || defaultAvatarUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.phone}</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="text-xs leading-5 text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded"
                onClick={handleSendMoney} // Call handleSendMoney when the button is clicked
              >
                Send Money
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactTable;