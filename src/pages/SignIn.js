import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useFavourites } from "../contexts/FavouritesContext";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { setIsSignedIn, setAuthUser } = useAuth();

  const [formData, setFormData] = useState({
    isSubmitting: false,
    username: "",
    password: "",
  });

  const { isSubmitting, username, password } = formData;
  const { loadFromLocalStorage } = useFavourites();
  const navigate = useNavigate();

  const handleError = (error) => {
    alert(error);
    setFormData({
      ...formData,
      isSubmitting: false,
    });
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    if (isValid) {
      setFormData({ ...formData, isSubmitting: true });
      setAuthUser(formData.username);
      setIsSignedIn(true);
      loadFromLocalStorage();
    } else {
      handleError("Please fill out all fields");
      setFormData({ ...formData });
    }
    navigate("/all/trending");
  };

  const isValid = username && password;
  return (
    <>
      <div className="container">
        <form onSubmit={handleSignIn}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                id="username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                value={formData.username}
                type="text"
                placeholder="Username"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button is-success"
              >
                {isSubmitting ? "Submitting..." : "Signing In"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
