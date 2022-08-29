<template>
  <div class="board">
    <div class="containers">
      <div class="lightbluebox">
        <div class="login-box">
          <router-link to="/" id="logout">
            <i class="fas fa-sign-out-alt"></i
          ></router-link>
          <h1>登入</h1>
          <div class="input-group">
            <input id="loginEmail" type="text" placeholder="Account" />
            <input id="loginPassword" type="password" placeholder="Password" />
          </div>
          <button id="loginBtn" class="signin-btn">
            <span class="front">登入</span>
          </button>
          <button id="signUpBtn" class="signin-btn">
            <span class="front">註冊</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap");

/* font-family: 'Kosugi Maru', sans-serif; */
.board {
  margin: auto;
  max-width: 700px;
  display: flex;
  justify-content: flex-end;
}

#logout {
  margin-right: 0;
  font-size: 40px;
  cursor: pointer;
  color: #a6ddff;
  position: absolute;
  bottom: 320px;
  left: 300px;
}
.containers {
  width: 350px;
  height: 500px;
  border-radius: 30px;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-shadow: 3px 3px 9px rgb(202, 202, 195);
}
.lightbluebox {
  width: 350px;
  height: 500px;
  background-color: #cae9ff;
  transition: 0.5s;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.signin-btn {
  margin-top: 20px;
  background: #a6ddff;
  border-radius: 20px;
  border-top: #a6ddff solid 3px;
  border-left: none;
  border-right: none;
  border-bottom: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  box-shadow: 0 8px 2px #a6ddff, 2px 9px 2px #a6ddff;
  margin-left: 15px;
}

.signin-btn .front {
  display: block;
  padding: 15px 42px 10px 42px;
  border-radius: 20px;
  font-size: 1.25rem;
  background: #a6ddff;
  transform: translateY(-2px);
  font-family: "Kosugi Maru", sans-serif;
  color: #001f54;
}

.login-box {
  width: 100%;
  margin: auto;
  text-align: center;
  position: absolute;
  transition: 0.5s;
}

.input-group input {
  margin: auto;
  outline: none;
  border: solid 1px rgb(208, 216, 224);
  border-radius: 10px;
  margin-bottom: 10px;
  width: 80%;
  height: 30px;
  padding: 5px;
}

h1 {
  color: #001f54;
  font-family: "Kosugi Maru", sans-serif;
}
</style>
