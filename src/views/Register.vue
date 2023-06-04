<template>
    <div class="flex p-10 bg-gray-200 absolute h-full w-full top-0 left-0 items-center justify-center">
      <div class="bg-white shadow-lg overflow-hidden rounded-lg w-[50%]">
        <div class="flex space-between items-center">
            <div class="image-container xl:w-[50%] xl:block hidden"></div>
          <div class="w-[100%] xl:w-[50%] p-10">
            <div>
                
              <b class="text-3xl text-lime-700/50">Registro</b>
              <p class="text-gray-600 text-[20px]">
                Suministre los datos para registrarse
              </p>
            </div>
            <br />
            <div>
              <div class="flex flex-col">
                <span class="font-bold mb-1"><i class="fa fa-user"></i> Nombre</span>
                <input
                  type="text"
                  
                  placeholder="Nombre"
                  class="p-4 rounded border boder-gray-300 rounded-lg text-black"
                />
              </div>
            </div>
            <br />
            <div>
              <div class="flex flex-col">
                <span class="font-bold mb-1"><i class="fa fa-user"></i> Apellido</span>
                <input
                  type="text"
                  
                  placeholder="Apellido"
                  class="p-4 rounded border boder-gray-300 rounded-lg text-black"
                />
              </div>
            </div>
            <br />
            <div>
              <div class="flex flex-col">
                <span class="font-bold mb-1"><i class="fa fa-user"></i> Email</span>
                <input
                  type="email"
                  
                  placeholder="ejemplo@gmail.com"
                  class="p-4 rounded border boder-gray-300 rounded-lg text-black"
                />
              </div>
            </div>
            <br />
            <div>
              <div class="flex flex-col">
                <span class="font-bold mb-1"><i class="fa fa-key"></i> Contraseña</span>
                <input
                  type="password"
                  
                  placeholder="Contraseña"
                  class="p-4 rounded border boder-gray-300 rounded-lg text-black"
                />
              </div>
            </div>
            <br />
            <br />
            <button id="registroExitosoButton" @click="crearEvento"
              
              class="transition p-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Registrarse <i class="fa fa-send"></i>
            </button>
            <br />
            <br />
            <div class="text-center">
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  </template>
  
  <style scoped>
  /*
      this part we use a font image for logo
  
  */
  
  .image-container {
    background-image: url(/public/images/registro1.png);
    background-position: center;
    background-size: cover;
    height: 45em;
    border-radius: 0
  }
  </style>
  
 
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    methods: {
      crearEvento() {
        const nuevoEvento = {
          titulo: "Registro Exitoso",
          fecha: new Date().toISOString(),
          descripcion: "El registro se completó con éxito."
        };
  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1500
        });
  
        this.eventos.push(nuevoEvento);
      }
    }
  }
  </script>