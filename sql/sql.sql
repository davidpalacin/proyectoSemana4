CREATE TABLE Reservas(
    id_reserva INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    importe INT NOT NULL,
    fecha_entrada date,
    fecha_salida date,
    id_cliente INT,
    id_hotel INT,
    FOREIGN KEY (id_hotel) REFERENCES Hoteles(id_hotel),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

CREATE TABLE Clientes(
    id_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dni VARCHAR(24) NOT NULL,
    telefono varchar(24),
    email varchar(64)
);

CREATE TABLE Hoteles(
    id_hotel INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre varchar(32)
);