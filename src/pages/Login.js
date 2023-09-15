
import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập ở đây, ví dụ: kiểm tra tên đăng nhập và mật khẩu
    if (username === "your_username" && password === "your_password") {
      alert("Đăng nhập thành công");
      // Thực hiện các hành động sau đăng nhập thành công
    } else {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
    }
  };

  const loginText = "Login";
  const welcomeText = "Welcome back to the MobiFone e-Work task management ecosystem!";
  const usernamePlaceholder = "Nhập tên đăng nhập";
  const passwordPlaceholder = "Nhập mật khẩu";

  return (
    <div className={styles.login}>
      <div className={styles.loginParent}>
        <div className={styles.login1}>{loginText}</div>
        <div className={styles.label}>
          {welcomeText}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.frameGroup}>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label1}>
              <span>*</span>
              <span className={styles.username}> Username</span>
            </div>
            <div className={styles.input1}>
              <input
                type="text"
                className={styles.inputField}
                placeholder={usernamePlaceholder}
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <img
                className={styles.outlineSearch2}
                alt=""
                src="/-outline--search.svg"
              />
              <div className={styles.labelPointer2}>
                <div className={styles.label2}>Nhập tên đăng nhập</div>
                <div className={styles.pointer2} />
              </div>
              <img
                className={styles.outlineSearch2}
                alt=""
                src="/-outline--search.svg"
              />
              <img
                className={styles.outlineClose2}
                alt=""
                src="/-outline--search.svg"
              />
            </div>
          </div>
          <div className={styles.input2}>
            <div className={styles.label1}>
              <span>*</span>
              <span className={styles.username}> Password</span>
            </div>
            <div className={styles.input1}>
              <input
                type="password"
                className={styles.inputField}
                placeholder={passwordPlaceholder}
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <img
                className={styles.outlineSearch2}
                alt=""
                src="/-outline--search.svg"
              />
              <div className={styles.labelPointer2}>
                <div className={styles.label2}>Nhập mật khẩu</div>
                <div className={styles.pointer2} />
              </div>
              <img
                className={styles.outlineSearch2}
                alt=""
                src="/-outline--search.svg"
              />
              <img
                className={styles.outlineClose2}
                alt=""
                src="/-outline--search.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button type="submit" className={styles.loginButton}>
            Đăng nhập
          </button>
        </div>
      </form>
      <img className={styles.loginInner} alt="" src="/vector-7.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
      <img className={styles.image1Icon} alt="" src="/image-1@1x.png" />
      <div className={styles.frameDiv}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.frame}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
