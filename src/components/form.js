import React, { useState } from "react";
// TODO: complete me

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(iSubscribe);
    alert(`Hi, my name is ${firstName}  ${lastName}`);
  };

  return (
    <>
      <form>
        <div className="grid grid-rows-2 gap-2">
          <div className="mt-2 mt-2 flex flex-col items-start">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-2 mt-2 flex flex-col items-start">
            <label htmlFor="lastName">Comments</label>
            <textarea
              name="comment"
              id="comments"
              type="text"
              className="resize mt-2"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <label htmlFor="subscribe">Subscribe To Email</label>
            <input
              name="subscribe"
              id="subscribe"
              type="checkbox"
              value={true}
              onChange={(e) => setIsSubscribe((current) => !current)}
            />
          </div>
          {isSubscribe && (
            <div className={(isSubscribe ? "block" : "hiddenss") + "mt-2 flex flex-col items-start"}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <button type="submit" onClick={handleSubmit} className="border-solid rounded-md border-white border-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
