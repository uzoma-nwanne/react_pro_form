import React, { useEffect, useState } from "react";
// TODO: complete me

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Hi, my name is ${firstName}  ${lastName} `);
    let data;
    if (isSubscribed) {
      data = {
        firstName,
        lastName,
        isSubscribed,
        email,
        comment,
      };
    } else {
      data = { firstName, lastName, isSubscribed, comment };
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      setFirstName("");
      setLastName("");
      setEmail("");
      setComment("");
      setIsSubscribed(current =>!current);
      setIsDisabled(current => !current)
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    setIsDisabled(true);
    if (firstName.length && lastName.length) {
      setIsDisabled((isDisabled) => !isDisabled);
    }
  }, [firstName, lastName]);

  return (
    <>
    {success  && <div className="p-4 border-white border-4 bg-green">Thanks for your submission {firstName}</div>}
      <form>
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <label htmlFor="firstName" className="text-white">
              First Name
            </label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <label htmlFor="lastName" className="text-white">
              Last Name
            </label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-2 mt-2 flex flex-col items-start">
            <label htmlFor="lastName" className="text-white">
              Comments
            </label>
            <textarea
              name="comment"
              id="comments"
              type="text"
              value={comment}
              className="resize mt-2"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <label htmlFor="subscribe" className="text-white">
              Subscribe To Email
            </label>
            <input
              name="subscribe"
              id="subscribe"
              type="checkbox"
              value={isSubscribed}
              onChange={(e) => setIsSubscribed((current) => !current)}
              checked={isSubscribed}
            />
          </div>
          {isSubscribed && (
            <div className="mt-2 flex flex-col items-start">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 border-solid rounded-md border-white border-2 text-white"
            disabled={isDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
