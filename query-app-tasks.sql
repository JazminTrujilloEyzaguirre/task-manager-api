CREATE DATABASE app_tasks_tests;

USE app_tasks;

CREATE TABLE States (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  user_id INT,
  state_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (state_id) REFERENCES States(id)
);

# para agregar los states
INSERT INTO States (name, description)
VALUES
  ('Pendiente', 'La tarea está planificada pero aún no se ha comenzado.'),
  ('En progreso', 'La tarea está en curso y aún no se ha completado.'),
  ('Completada', 'La tarea se ha finalizado exitosamente.'),
  ('Cancelada', 'La tarea se ha cancelado antes de su finalización.'),
  ('En espera', 'La tarea está en espera de algún evento o condición antes de poder continuar.'),
  ('Retrasada', 'La tarea no se ha completado dentro del plazo previsto.'),
  ('En revisión', 'La tarea ha sido completada pero está siendo revisada o evaluada.'),
  ('Rechazada', 'La tarea ha sido rechazada debido a algún motivo.'),
  ('Asignada', 'La tarea ha sido asignada a un responsable pero aún no ha comenzado.'),
  ('Archivada', 'La tarea ha sido archivada y ya no está activa.');
