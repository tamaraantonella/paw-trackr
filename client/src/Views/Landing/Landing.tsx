import "./Landing.css";
import logo from "../../assets/logo_bluegrey.png";
import SingUp from "../../Components/ButtonSingUp/SingUp";

const Landing = () => {
  return (
    <div className="landing flex justify-center text-center items-center mt-36">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo blue grey" className=" w-96" />
        <h2 className="text text-3xl">Welcome!</h2>
        <SingUp />
        <div className="flex gap-2">
          <p className="text font-medium">Already have an account?</p>
          <button className="login font-bold hover:text-blue-800">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
