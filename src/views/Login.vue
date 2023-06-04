<template>
  <div
    class="flex p-10 bg-gray-200 absolute h-full w-full top-0 left-0 items-center justify-center"
  >
    <div class="bg-white shadow-lg overflow-hidden rounded-lg w-[50%]">
      <div class="flex space-between items-center">
        <div class="image-container xl:w-[50%] xl:block hidden"></div>
        <div class="w-[100%] xl:w-[50%] p-10">
          <div>
            <b class="text-3xl text-lime-700/50">Bienvenido</b>
            <p class="text-gray-600 text-[20px]">
              suministre los datos para iniciar sesion
            </p>
          </div>
          <br />
          <div>
            <div class="flex flex-col">
              <span class="font-bold mb-1"
                ><i class="fa fa-user"></i> Email</span
              >
              <input
                type="email"
                name="email"
                v-modal="username"
                placeholder="ejemplo@gmail.com"
                class="p-4 rounded border boder-gray-300 rounded-lg text-black"
              />
            </div>
          </div>
          <br />
          <div>
            <div class="flex flex-col">
              <span class="font-bold mb-1"
                ><i class="fa fa-key"></i> Contraseña</span
              >
              <input
                type="password"
                name="password"
                placeholder="password"
                v-modal="password"
                class="p-4 rounded border boder-gray-300 rounded-lg text-black"
              />
            </div>
          </div>
          <br />
          <br />
          <button
            v-on:click="validateFields()"
            class="transition p-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            continuar <i class="fa fa-send"></i>
          </button>
          <br />
          <br />
          <div class="text-center">
            <button
              v-on:click="goToRegister"
              class="text-gray-500 hover:text-blue-700"
            >
              <b>Quiero registrarme</b> <i class="fa fa-users"></i>
            </button>
          </div>
          <br />
          <br />
          <div class="text-center">
            <button class="text-blue-500 hover:text-blue-700">
              <b>¿Olvidaste tu contraseña?</b>
            </button>
          </div>
        </div>
      </div>
      <div
        class="text-center p-4 text-[15px] font-bold absolute boottom-0 left-0 w-full"
      >
        All rights reserved copyright by Oscar Lopez Restrepo
        {{ new Date().getFullYear() }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/*
    this part we use a font image for logo

*/

.image-container {
  background-image: url(/public/images/Logo2.jpg);
  background-position: center;
  background-size: cover;
  height: 40em;
}
</style>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    validateEmail(email) {
      let regExp = /^\S+@\S+\.\S+$/;
      return regExp.test(email);
    },
    validateFields() {
      if (!this.username || this.username.trim() === "") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "debes registrarte",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      if (!this.validateEmail(this.username)) {
        Swal.fire({
          title: "Correo inválido",
          text: "Ingrese un correo electrónico válido",
          icon: "error",
        });
        return;
      }

      if (!this.password || this.password.trim() === "") {
        Swal.fire({
          title: "Contraseña vacía",
          text: "Ingrese una contraseña",
          icon: "error",
        });
        return;
      }

      Swal.fire({
        title: "Datos válidos",
        text: "Login correcto",
        icon: "success",
      });

      console.log(this.username, this.password, "<<<<");
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
  mounted() {
    console.log("login <---");
  },
};
</script>
