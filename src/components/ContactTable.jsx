import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import host from "../api";
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const People = [
//   {
//     name: 'Leslie Alexander',
//     phone: '01818288616',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Michael Foster',
//     phone: '01827361321',
//     imageUrl: '', // No image
//   },
  
//   {
//     name: 'Dries Vincent',
//     phone: '01747146123',
//     imageUrl:
//       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
//   },
//   {
//     name: 'Lindsay Walton',
//     phone: '01923412543',
//     imageUrl:
//       'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Courtney Henry',
//     phone: '01632495323',
//     imageUrl:
//       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Tom Cook',
//     phone: '01927462719',
   
//     imageUrl:
//       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
//   },

// ];

// const [name, setName] = useState('');







const ContactTable = ( {token}) => {
  const [showForm, setShowForm] = useState(false);
  const [showFavoriteForm, setShowFavoriteForm] = useState(false);
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    fetch(host + "/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
          "token": token,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setPeople(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  // const [newPerson, setNewPerson] = useState({
  //   name: '',
  //   phone: '',
  // });


  const handleSubmit = () => {
    const form = {
      name, phone
    };
          fetch(host + "/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                "token": token,
            },
            body: JSON.stringify(form),
          })
            .then((data) => data.text()).then((data) => {
              console.log(data)})

            .catch((err) => console.log(err));
      };


const defaultAvatarUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU';

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone'){
      setPhone(value);
    } 

    
  };

  const handleAddContact = (isFavorite = false) => {
    // Check if both name and phone are not empty
    if (newPerson.name.trim() === '' || newPerson.phone.trim() === '') {
      if (isFavorite === false){
      setShowForm((prevShowForm) => !prevShowForm);
      }else{
        setShowFavoriteForm((prevShowForm) => !prevShowForm);
      }
      
      toast.warn('You Must Enter Name and Phone Number', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      // Reset the form
      setNewPerson({
        name: '',
        phone: '',
      });

      return;
    }

    // Add the new person to the People array
    People.push({
      name: newPerson.name,
      phone: newPerson.phone,
      imageUrl: defaultAvatarUrl,
      isFavorite: isFavorite,
    });

    toast.success(' Success! ', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    if (isFavorite === false){
      setShowForm((prevShowForm) => !prevShowForm);
    }else{
      setShowFavoriteForm((prevShowForm) => !prevShowForm);
    }
    
    
    // Reset the form
    // setNewPerson({
    //   name: '',
    //   phone: '',
    // });

  };

  // const handleToggleFavorite = (phone) => {
  //   const updatedPeople = People.map((person) =>
  //     person.phone === phone ? { ...person, isFavorite: !person.isFavorite } : person
  //   );

  //   // Update the state to re-render the component
  //   People.length = 0;
  //   People.push(...updatedPeople);
  // };

  const handleSendMoney = () => {
    navigate('/send');
  };

  return (
    <div>
      <button
        type="button"
        className="text-xs leading-5 text-white bg-green-500 hover:bg-green-600 py-1 px-2 rounded mb-4"
        onClick={() => setShowForm((prevShowForm) => !prevShowForm)}

      >
        Add contact
      </button>
      <button
        type="button"
        className="text-xs leading-5 text-white bg-yellow-500 hover:bg-yellow-600 py-1 px-2 rounded mb-4 ml-2"
        onClick={() => setShowFavoriteForm((prevShowForm) => !prevShowForm)}
      >
        Add favorite contact
      </button>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Add contact form */}
      {showForm && (
        <div className="mb-4">
          <label className="block text-sm font-semibold leading-5 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label className="block text-sm font-semibold leading-5 text-gray-700 mt-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="button"
            onClick={handleSubmit} // Pass false for isFavorite
            className="mt-4 text-xs leading-5 text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded"
          >
            Add
          </button>
        </div>
      )}

      {/* Add favorite contact form */}
      {showFavoriteForm && (
        <div className="mb-4">
          <label className="block text-sm font-semibold leading-5 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={newPerson.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label className="block text-sm font-semibold leading-5 text-gray-700 mt-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={newPerson.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="button"
            onClick={() => handleAddContact(true)} // Pass true for isFavorite
            className="mt-4 text-xs leading-5 text-white bg-yellow-500 hover:bg-yellow-600 py-1 px-2 rounded"
          >
            Add as Favorite
          </button>

        </div>
      )}

      {/* add to the contact table end; */}
      <ul role="list" className="divide-y divide-gray-100 mx-10">
        {people.map((person) => (
          <li key={person.contact_phone} className="flex justify-between items-center gap-x-2 py-5">
            <div className="flex items-center gap-x-2">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl || defaultAvatarUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.contact_name}{' '}
                  {person.isFavorite && (
                    <span className="text-yellow-500" title="Favorite">
                      ⭐
                    </span>
                  )}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.contact_phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                type="button"
                className="text-xs leading-5 text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded"
                onClick={handleSendMoney}
              >
                Send Money
              </button>

              {/* {showFavoriteForm && (
                <button
                  type="button"
                  className={`text-xs leading-5 text-white ${
                    person.isFavorite ? 'bg-yellow-500' : 'bg-gray-500'
                  } hover:bg-yellow-600 py-1 px-2 rounded`}
                  onClick={() => handleToggleFavorite(person.phone)}
                >
                  {person.isFavorite ? 'Remove Favorite' : 'Add as Favorite'}
                </button>
              )} */}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactTable;