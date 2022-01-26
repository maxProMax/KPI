CREATE TABLE cities (
    CityID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    ContryID int,
    PRIMARY KEY (CityID),
    UNIQUE(CityID),
    FOREIGN KEY (ContryID) REFERENCES countries(ContryID)
);

INSERT INTO cities (Name, ContryID) VALUES
    ('Київ', 5),
    ('Львів', 5),
    ('Берлін', 3),
    ('Париж', 4),
    ('Париж', 4),
    ('Варшава', 1),
    ('Талин', 2);

