CREATE TABLE semester (
    SubjectID int NOT NULL,
    Reporting ENUM('залік', 'іспит', 'КП', 'КР') NOT NULL,
    Hours  int NOT NULL,
    PRIMARY KEY (SubjectID),
    FOREIGN KEY (SubjectID) REFERENCES subjects(SubjectID)
);

INSERT INTO semester (SubjectID, Reporting, Hours) VALUES
    (1, 'залік', 100),
    (2, 'іспит', 80),
    (3, 'іспит', 120),
    (4, 'КП',  50),
    (5, 'КР', 40);

-- (1,"Комп'ютерна дискретна математика",  'Ivanov I. I.'),
-- (2,'Математичний аналіз', 'Petrov I. I.'),
-- (3,'Основи програмування', 'Zerba I. I.'  ),
-- (4,'Теорія ймовірностей', 'Hrytsai I. I.'),
-- (5,'Проектування веб-застосувань', 'Maksymov I. I.');
