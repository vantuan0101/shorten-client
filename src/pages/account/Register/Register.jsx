import React, {
  useRef,
  useState,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from "react";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
  UseRiveParameters,
  RiveState,
  StateMachineInput,
} from "rive-react";
import "./register.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import authApi from "../../../api/authApi";
import axios from "axios";
import queryString from "query-string";
const STATE_MACHINE_NAME = "Login Machine";
const SIGN_UP_TEXT = "Sign Up";

export default function Register() {
  const { rive: riveInstance, RiveComponent } = useRive({
    src: "login-teddy.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });
  const [nameUser, setNameUser] = useState("");
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
  const [loginButtonText, setLoginButtonText] = useState(SIGN_UP_TEXT);
  const inputRef = useRef(null);

  const isCheckingInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "isChecking"
  );
  const numLookInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "numLook"
  );
  const trigSuccessInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "trigSuccess"
  );
  const trigFailInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "trigFail"
  );
  const isHandsUpInput = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "isHandsUp"
  );

  // Divide the input width by the max value the state machine looks for in numLook.
  // This gets us a multiplier we can apply for each character typed in the input
  // to help Teddy track progress along the input line
  useEffect(() => {
    if (inputRef?.current && !inputLookMultiplier) {
      setInputLookMultiplier(inputRef.current.offsetWidth / 100);
    }
  }, [inputRef]);

  // As the user types in the username box, update the numLook value to let Teddy know
  // where to look to according to the state machine
  const onUsernameChange = (e) => {
    const newVal = e.target.value;
    setUserValue(newVal);
    if (!isCheckingInput.value) {
      isCheckingInput.value = true;
    }
    const numChars = newVal.length;
    numLookInput.value = numChars * inputLookMultiplier;
  };
  const onNameUserChange = (e) => {
    const newVal = e.target.value;
    setNameUser(newVal);
    if (!isCheckingInput.value) {
      isCheckingInput.value = true;
    }
    const numChars = newVal.length;
    numLookInput.value = numChars * inputLookMultiplier;
  };

  // Start Teddy looking in the correct spot along the username input
  const onUsernameFocus = () => {
    isCheckingInput.value = true;
    if (numLookInput.value !== userValue.length * inputLookMultiplier) {
      numLookInput.value = userValue.length * inputLookMultiplier;
    }
  };

  // When submitting, simulate password validation checking and trigger the appropriate input from the
  // state machine
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoginButtonText("Waiting...");
      const resultRegister = await authApi.register({
        name: nameUser,
        username: userValue,
        password: passValue,
      });
      if (resultRegister) {
        trigSuccessInput.fire();
        setLoginButtonText("Redirecting...");
        setTimeout(() => {
          setLoginButtonText(SIGN_UP_TEXT);
          window.location.href = "/login";
        }, 1500);
      }
    } catch (error) {
      setLoginButtonText("Failed");
      trigFailInput.fire();
      inputRef.current.focus();
      inputRef.current.select();
      setTimeout(() => {
        setLoginButtonText(SIGN_UP_TEXT);
      }, 1500);
    }
  };

  return (
    <div className="login">
      <div className="login-form-component-root">
        <div className="login-form-wrapper">
          <div className="rive-wrapper">
            <RiveComponent className="rive-container" />
          </div>
          <div className="form-container">
            <form onSubmit={onSubmit} autoComplete="off">
              <label>
                <input
                  type="text"
                  className="form-username"
                  name="name"
                  placeholder="Name"
                  onFocus={onUsernameFocus}
                  value={nameUser}
                  onChange={onNameUserChange}
                  onBlur={() => (isCheckingInput.value = false)}
                  ref={inputRef}
                  autoComplete="off"
                />
              </label>
              <label>
                <input
                  type="text"
                  className="form-username"
                  name="username"
                  placeholder="Username"
                  onFocus={onUsernameFocus}
                  value={userValue}
                  onChange={onUsernameChange}
                  onBlur={() => (isCheckingInput.value = false)}
                  autoComplete="off"
                />
              </label>
              <label>
                <input
                  type="password"
                  className="form-pass"
                  name="password"
                  placeholder="Password"
                  value={passValue}
                  onFocus={() => (isHandsUpInput.value = true)}
                  onBlur={() => (isHandsUpInput.value = false)}
                  onChange={(e) => setPassValue(e.target.value)}
                  autoComplete="off"
                />
              </label>
              <button className="login-btn login-local">
                {loginButtonText}
              </button>
            </form>
            <div className="login-social">
              <button className="login-btn login-social-c logo-facebook">
                <a
                  href={`${process.env.REACT_APP_API_URL}/auth/facebook`}
                  // href="https://shorten-web.up.railway.app/api/v1/auth/facebook"
                >
                  <FaFacebookF />
                  Login Facebook
                </a>
              </button>
              <button className="login-btn login-social-c logo-google">
                <a
                  href={`${process.env.REACT_APP_API_URL}/auth/google`}
                  // href="https://shorten-web.up.railway.app/api/v1/auth/google"
                >
                  <FcGoogle />
                  Login Google
                </a>
              </button>
            </div>
            <a href="/login">Are already account ? Login now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
