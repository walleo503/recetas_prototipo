<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="input-container">
            <input type="text" placeholder="Username" />
            <span class="icon">&#xf007;</span> <!-- Icono de usuario -->
          </div>
          <div class="input-container">
            <input type="password" placeholder="Password" />
            <span class="icon">&#xf023;</span> <!-- Icono de candado -->
          </div>
          <div class="options">
            <label>
              <input type="checkbox" /> Recordar
            </label>
            <a href="/">Olvide la contraseña</a>
          </div>
          <button class="login-button">Login</button>
        </form>
        <p>No tienes una cuenta? <a href="/register">Registrar</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginSection",
  };
  </script>
  
  <style scoped>
  /* Fondo del login */
  .login-container {
    background: url('../views/img/backGraund.jpg'); /* Asegúrate de que la imagen esté en la carpeta "assets" */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-box {
    background: rgba(255, 255, 255, 0.1); /* Fondo semi-transparente */
    backdrop-filter: blur(10px); /* Efecto de desenfoque */
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 300px;
  }
  
  h2 {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .input-container {
    position: relative;
    margin-bottom: 15px;
  }
  
  .input-container input {
    width: 100%;
    padding: 10px 40px 10px 10px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 16px;
  }
  
  .input-container .icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 18px;
  }
  
  .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    color: white;
  }
  
  .login-button {
    background: white;
    color: black;
    border: none;
    border-radius: 30px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .login-button:hover {
    background: #f0f0f0;
  }
  
  p {
    color: white;
  }
  
  a {
    color: #f0f0f0;
    text-decoration: none;
  }
  </style>
  