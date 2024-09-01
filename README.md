# PruebaTecnica

# Proyecto de Angular: Aplicación de Películas

Esta es una aplicación Angular para visualizar una lista de películas obtenidas desde una API. La aplicación permite mostrar y gestionar información sobre películas y sus directores.

## scripts: Bases de datos:
CREATE DATABASE MoviesDB;
GO

USE MoviesDB;
GO

CREATE TABLE Director (
    Id INT PRIMARY KEY IDENTITY(1,1), 
    Name VARCHAR(200) NOT NULL,
    Nationality VARCHAR(100),
    Age INT,
    Active BIT
);
GO

CREATE TABLE Movies (
    Id INT PRIMARY KEY IDENTITY(1,1), 
    Name VARCHAR(100) NOT NULL,
    ReleaseYear DATE,
    Gender VARCHAR(50),
    Duration TIME,
    FKDirector INT,
    FOREIGN KEY (FKDirector) REFERENCES Director(Id)
);
GO
SELECT 
    m.Id AS MovieId,
    m.Name AS MovieName,
    m.ReleaseYear,
    m.Gender,
    m.Duration,
    d.Id AS DirectorId,
    d.Name AS DirectorName,
    d.Nationality,
    d.Age,
    d.Active
FROM 
    Movies m
INNER JOIN 
    Director d
ON 
    m.FKDirector = d.Id;

## Características

- Visualización de una lista de películas.
- Interfaz de usuario con Angular Material.
- Consumo de datos desde una API externa.
- Manejo de errores y visualización de mensajes.

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio:**
   git clone https://github.com/JesusMorquecho/prueba-tecnica-frontend.git
2. Navega al directorio del proyecto
3. Instala las dependencias: con npm install
4. Configura el entorno:
Asegúrate de que la API esté corriendo en http://localhost:5013/api/o ajusta la URL en el servicio MoviesService si es necesario.
5. Ejecuta la aplicación con ng serve

asegurarse que este corriendo el backend: https://github.com/JesusMorquecho/APIPruebaTecnica.git
