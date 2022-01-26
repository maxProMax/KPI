CREATE TABLE students (
    PersonID int NOT NULL,
    FullName varchar(255) NOT NULL,
    TestBookId int NOT NULL,
    EnterYear int NOT NULL,
    faculty  varchar(255) NOT NULL,
    speciality  varchar(255) NOT NULL,
    PRIMARY KEY (PersonID),
    UNIQUE(PersonID),
    UNIQUE(FullName),
    UNIQUE(TestBookId)
);

ALTER TABLE students AUTO_INCREMENT=0;

INSERT INTO students (PersonID, FullName, TestBookId, EnterYear, faculty, speciality) VALUES
    (1, 'Ivanov I. I.', 100, 2021, 'faculty_A', 'speciality_A'),
    (2, 'Petrov I. I.', 101, 2021, 'faculty_A', 'speciality_A'),
    (3, 'Kozlov I. I.', 102, 2021, 'faculty_A', 'speciality_A'),
    (4, 'Bykov I. I.', 103, 2021, 'faculty_A', 'speciality_A'),
    (5, 'Konev I. I.', 104, 2021, 'faculty_A', 'speciality_A'),
    (6, 'Kotin I. I.', 105, 2021, 'faculty_A', 'speciality_A'),
    (7, 'Sobakin I. I.', 106, 2021, 'faculty_A', 'speciality_A');