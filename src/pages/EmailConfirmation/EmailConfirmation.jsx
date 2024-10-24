import React, {useRef, useState} from "react";

import ClipLoader from "react-spinners/ClipLoader";

function EmailConfirmation({ email }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const intervalIdRef = useRef(null);
  const handleSendEmail = async () => {
    setIsLoading(true);
    // Clear any existing interval
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    // Make the API request
    try {
      const response = await fetch(
        "https://mapapi.gebeta.app/api/v1/users/sendemail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailto: email }),
        }
      ).catch((err) => {
        console.log(err);
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage("Can not send email now");
      } else {
        setErrorMessage("");
        // Start the countdown
        setCounter(60); // set counter to 60 seconds
        intervalIdRef.current = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter === 0) {
              clearInterval(intervalIdRef.current);
              return 0;
            } else {
              return prevCounter - 1;
            }
          });
        }, 1000);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Error sending email");
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (
    <div className="md:card h-full md:h-auto w-[100%] md:w-[25%] md:rounded bg-Dark text-white p-10 absolute md:top-[10%] left-1/2 transform -translate-x-1/2 ">
      <div className="flex flex-col">
        <p className="  text-[#A0AABA] " style={{ fontFamily: "Zen Dots" }}>
          Email Confirmation
        </p>
        {/* <p className='  text-white font-bold text-xl ' style={{fontFamily: "Zen Dots" }}>Log in to your Account </p> */}
        <div className="w-[95%] mt-[10%]">
          {errorMessage != "" ? (
            <p className="mb-[5%] text-red-400">{errorMessage}</p>
          ) : (
            ""
          )}
          <p>
            {counter > 0
              ? "We sent you a confirmation email. Confirm your account by clicking on the link in the email and you'll be able to start mapping."
              : ""}
          </p>
          <button
            className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded "
            type="button"
            onClick={counter > 0 ? null : handleSendEmail}
            disabled={counter > 0}
          >
            {/* {counter > 0 ? `Please Wait for ${counter} sec` : "Send Email"}  */}
            {isLoading ? (
              <ClipLoader color="#ffffff" size={35} />
            ) : counter > 0 ? (
              `Please Wait for ${counter} sec`
            ) : (
              "Send Email"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmation;
