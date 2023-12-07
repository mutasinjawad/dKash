import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import host from "../api";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactTable = ({ token }) => {
  const [showForm, setShowForm] = useState(false);
  const [showFavoriteForm, setShowFavoriteForm] = useState(false);
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [favname, setFavName] = useState("");
  const [favphone, setFavPhone] = useState("");

  useEffect(() => {
    fetch(host + "/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setPeople(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [token]);


  const isPhoneNumberExists = (phoneNumber) => {
    return people.some((person) => person.contact_phone === phoneNumber);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const validPrefixes = [
      "+88018",
      "+88017",
      "+88016",
      "+88019",
      "+88015",
      "+88014",
      "+88013",
    ];

    const isValidPrefix = validPrefixes.some((prefix) =>
      phoneNumber.startsWith(prefix)
    );

    return isValidPrefix && phoneNumber.length === 14;
  };


  const handleSubmit = () => {
    if (!validatePhoneNumber(phone)) {
      toast.error('Invalid phone number. Please enter a valid number.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      
      setName("");
      setPhone("");
      setShowForm(false);
      return;
    }

    if (isPhoneNumberExists(phone)) {

      toast.error('contact with this phone number already exists.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
      setName("");
      setPhone("");
      setShowForm(false);
      return;
    }

    const form = {
      contactName: name,
      contactPhone: phone,
    };

    fetch(host + "/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.text())
      .then((data) => {
        setPeople([...people, { contact_name: name, contact_phone: phone }]);
        toast.success('Contact added successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
        setName("");
        setPhone("");
        setShowForm(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error adding contact. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        
        setName("");
        setPhone("");
        setShowForm(false);
      
      });
  };

  const handleFavSubmit = () => {
    if (!validatePhoneNumber(favphone)) {
      toast.error('Invalid phone number. Please enter a valid number.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
      setFavName("");
      setFavPhone("");
      setShowFavoriteForm(false);
      return;
    }

    if (isPhoneNumberExists(favphone)) {

      toast.error('Favorite contact with this phone number already exists.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
      setFavName("");
      setFavPhone("");
      setShowFavoriteForm(false);
      return;
    }

    const form = {
      contactName: favname,
      contactPhone: favphone,
    };


    fetch(host + "/contacts/fav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         token: token,
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.text())
      .then((data) => {
        
        setPeople([...people, { contact_name: favname, contact_phone: favphone, is_fav: 1}]);
        toast.success('Favorite contact added successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
      setFavName("");
      setFavPhone("");
      setShowFavoriteForm(false);

      })
      .catch((err) => {
        console.log(err);
        toast.error('Error adding favorite contact. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setFavName("");
      setFavPhone("");
      setShowFavoriteForm(false);
      });
  };

  const defaultAvatarUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU";

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "favname") {
      setFavName(value);
    } else if (name === "favphone") {
      setFavPhone(value);
    }

  };



  const handleSendMoney = (phone) => {
    navigate("/send", { state: { phone: phone } });
  };

  return (
    <div>
      <button
        type="button"
        className="text-xs leading-5 text-white bg-green-500 hover:bg-green-600 py-1 px-2 rounded mb-4"
        onClick={() => {
    setShowForm((prevShowForm) => !prevShowForm);
    setShowFavoriteForm(false);
  }}
  
      >
        Add contact
      </button>
      <button
        type="button"
        className="text-xs leading-5 text-white bg-yellow-500 hover:bg-yellow-600 py-1 px-2 rounded mb-4 ml-2"
      onClick={() => {
        setShowFavoriteForm((prevShowForm) => !prevShowForm);
        setShowForm(false); 
      }}
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
          <label className="block text-sm font-semibold leading-5 text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label className="block text-sm font-semibold leading-5 text-gray-700 mt-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="button"
            onClick={handleSubmit} 
            className="mt-4 text-xs leading-5 text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded"
          >
            Add
          </button>
        </div>
      )}

      {/* Add favorite contact form */}
      {showFavoriteForm && (
        <div className="mb-4">
          <label className="block text-sm font-semibold leading-5 text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="favname"
            value={favname}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label className="block text-sm font-semibold leading-5 text-gray-700 mt-2">
            Phone
          </label>
          <input
            type="text"
            name="favphone"
            value={favphone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="button"
            onClick={handleFavSubmit}
            className="mt-4 text-xs leading-5 text-white bg-yellow-500 hover:bg-yellow-600 py-1 px-2 rounded"
          >
            Add as Favorite
          </button>
        </div>
      )}

      {/* add to the contact table end; */}
      <ul role="list" className="divide-y divide-gray-100 mx-10">
        {people.map((person) => (
          <li
            key={person.contact_phone}
            className="flex justify-between items-center gap-x-2 py-5"
          >
            <div className="flex items-center gap-x-2">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl || defaultAvatarUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.contact_name}{" "}
                  {person.is_fav === 1 && (
                    <span className="text-yellow-500" title="Favorite">
                      ⭐
                    </span>
                  )}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.contact_phone}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                type="button"
                className="text-xs leading-5 text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded"
                onClick={() => handleSendMoney(person.contact_phone)}
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
