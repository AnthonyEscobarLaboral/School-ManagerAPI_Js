# School Manager API
### By: Anthony Josue Escobar Ponce 
### carnet: 2020229 
Esta API con solamente Backend está diseñada para la gestion y administración del control de alumnos de un centro educativo.
## Funciones especificas de esta API
#### Funciones del alumno:
1. Puede registrarse como “STUDENT_ROLE” por defecto y logearse.
2. El alumno podrá asignarse a como máximo 3 cursos.
3. No podrá asignarse a un curso que ya se encuentra asignado.
4. Podrá visualizar a los cursos que se encuentra asignado.
5. Podrá editar y eliminar su perfil.
6. 
#### Funciones del maestro:
1. Puede registrarse como “TEACHER_ROLE” y logearse.
2. El profesor podrá crear, editar, eliminar y visualizar los cursos que el posea.
3. En el caso de editar un curso con alumnos asignados deberá modificarse también a los alumnos el
curso.
4. En el caso de eliminar un curso con alumnos asignados se deberá desasignar a los alumnos el curso de
forma automática.

## Endpoints de la API

### Autenticación

- **Registrar Usuario**
  - **URL:** `/adoptionSystem/v1/auth/register`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "email": "string",
      "phone": "string",
      "password": "string",
      "role": "string",
      "profilePicture": "file"
    }
    ```

- **Iniciar Sesión**
  - **URL:** `/adoptionSystem/v1/auth/login`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

### Usuarios

- **Obtener Usuario por ID**
  - **URL:** `/adoptionSystem/v1/user/findUser/:uid`
  - **Método:** `GET`

- **Eliminar Usuario**
  - **URL:** `/adoptionSystem/v1/user/deleteUser/:uid`
  - **Método:** `DELETE`

- **Listar Usuarios**
  - **URL:** `/adoptionSystem/v1/user/`
  - **Método:** `GET`

- **Actualizar Contraseña del Usuario**
  - **URL:** `/adoptionSystem/v1/user/updatePassword/:uid`
  - **Método:** `PATCH`
  - **Cuerpo:**
    ```json
    {
      "newPassword": "string"
    }
    ```

- **Actualizar Información del Usuario**
  - **URL:** `/adoptionSystem/v1/user/updateUser/:uid`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string"
    }
    ```

### Mascotas

- **Registrar Mascota**
  - **URL:** `/adoptionSystem/v1/pet/addPet`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "description": "string",
      "age": "number",
      "type": "string",
      "email": "string"
    }
    ```

- **Obtener Mascota por ID**
  - **URL:** `/adoptionSystem/v1/pet/findPet/:pid`
  - **Método:** `GET`

- **Eliminar Mascota**
  - **URL:** `/adoptionSystem/v1/pet/deletePet/:pid`
  - **Método:** `DELETE`

- **Listar Mascotas**
  - **URL:** `/adoptionSystem/v1/pet/`
  - **Método:** `GET`

### Citas

- **Crear Cita**
  - **URL:** `/adoptionSystem/v1/appointment/createAppointment`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "date": "2023-10-15T10:00:00Z",
      "pet": "string",
      "user": "string"
    }
    ```
