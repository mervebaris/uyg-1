import { useState } from "react";

import Input from "./components/Input/Input" 
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css"

function App() {
  const [userForm, setUserForm ] = useState({
    userName: "",
    password: ""
  })
  const onValidation = () => {
    if(userForm.userName === "" || userForm.password === "") {
      alert("Geçersiz kullanıcı adı veya şifre")
    } else {
      alert("Giriş başarılı")
    }
  }
  
  return (
    <div className="custom-page">
      <Form>
        <h2>Giriş Sayfası</h2>
        <Input
          value={userForm.userName}
          placeholder={"Kullanıcı Adı"}
          onChange={(e) => {
            setUserForm({
              userName: e.target.value ,
              password: userForm.password
            })
          }}
        />

        <Input
          value={userForm.password}
          type="password"
          placeholder={"Parola"}
          onChange={(e) => { setUserForm({password:e.target.value, 
            userName: userForm.userName
          })
          }}
        />

        <Button
          text={"Giriş Yap"}
          onClick={onValidation}

         
        />
      </Form>
    </div>
  );
}

export default App;
