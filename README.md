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
#### Funciones del maestro:
1. Puede registrarse como “TEACHER_ROLE” y logearse.
2. El profesor podrá crear, editar, eliminar y visualizar los cursos que el posea.
3. En el caso de editar un curso con alumnos asignados deberá modificarse también a los alumnos el
curso.
4. En el caso de eliminar un curso con alumnos asignados se deberá desasignar a los alumnos el curso de
forma automática.

## Endpoints de la API

### AUTH

- **Registro de alumnos**
  - **URL:** `/schoolManagement/v1/auth/registerStudent`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "password": "string",
      "role": "string"
    }
    ```

- **Registro de maestros**
  - **URL:** `/schoolManagement/v1/auth/registerTeacher`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "password": "string",
      "role": "string"
    }
    ```

- **Inicio de sesion**
  - **URL:** `/schoolManagement/v1/auth/login`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

### STUDENTS
- **Asignacion de cursos**
  - **URL:** `/schoolManagement/v1/student/assignCourses/:uid`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
       "courses": ["curso1", "curso2", "curso3"]
    }
    ```

- **lista de cursos por alumno**
  - **URL:** `/schoolManagement/v1/student/studentCourses/:uid`
  - **Método:** `GET`

- **Actualizar cambios en perfil de estudiante**
  - **URL:** `/schoolManagement/v1/student/updateStudent/:uid`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "password": "string",
      "role": "string"
    }
    ```

- **desactivar/eliminar cuenta de estudiante**
  - **URL:** `/schoolManagement/v1/student/deleteStudentAccount/:uid`
  - **Método:** `POST`

  ### TEACHERS
- **creacion de cursos**
  - **URL:** `/schoolManagement/v1/teacher/createCourses`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "teacher": "string",
    }
    ```
- **Visualizar cursos por profesor**
  - **URL:** `/schoolManagement/v1/teacher/teacherCourses/:tid`
  - **Método:** `GET`

- **Actualizar cursos**
  - **URL:** `/schoolManagement/v1/teacher/updateCourses/:cid`
  - **Método:** `PATCH`
  - **Cuerpo:**
    ```json
    {
      "name": "string"
    }
    ```

- **desactivar/eliminar cuenta de estudiante**
  - **URL:** `/schoolManagement/v1/teacher/deleteCourses/:cid`
  - **Método:** `delete`
