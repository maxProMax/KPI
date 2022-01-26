CREATE TABLE hotels (
    HotelID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    ContryID int,
    CityID int,
    Price int,
    Date DATE,
    PRIMARY KEY (HotelID),
    UNIQUE(HotelID),
    FOREIGN KEY (CityID) REFERENCES cities(CityID)
);

INSERT INTO hotels (Name, ContryID, CityID, Price, Date) VALUES
    ('Hotel_1', 1, 6, 15000, '2022-01-29'),
    ('Hotel_1', 2, 7, 15500, '2022-02-19'),
    ('Hotel_2', 2, 7, 16000, '2022-03-19'),
    ('Hotel_1', 3, 3, 19000, '2022-02-24'),
    ('Hotel_1', 4, 4, 12000, '2022-04-19'),
    ('Hotel_2', 4, 4, 14000, '2022-10-19'),
    ('Hotel_3', 4, 4, 25000, '2022-11-19'),
    ('Hotel_1', 5, 1, 35000, '2022-08-19'),
    ('Hotel_2', 5, 2, 15050, '2022-03-19');
