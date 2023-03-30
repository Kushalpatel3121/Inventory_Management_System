import "../../Styles/login.css";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const LoginForm = () => {
  return (
    <>
      <div className="fe-login-loginform">
        <div className="fe-login-heading">
          <h3>Admin Login</h3>
        </div>
        <div className="fe-login-form">
          <form>
            <table className="fe-login-form-table">
              <tbody>
                <tr className="fe-login-email">
                  <td>
                    <label for="login-email">Email : </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="login-email"
                      name="login-email"
                      placeholder="Admin Email Address"
                    ></input>
                    {/* <TextField variant="outlined" color="success" label="Email"></TextField> */}
                  </td>
                </tr>
                <tr className="fe-login-password">
                  <td>
                    <label for="login-password">Password : </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      id="login-password"
                      name="login-password"
                      placeholder="Admin Password"
                    ></input>
                  </td>
                </tr>
                <tr className="fe-login-button-row">
                  <td colSpan={2}>
                    <button type="submit" className="fe-login-button">
                      Login
                    </button>
                    {/* <Button variant="outlined">Login</Button> */}
                  </td>
                </tr>
                <tr className="fe-login-forgotpass">
                  <td colSpan={2}>
                    <a>Forgot Password?</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
