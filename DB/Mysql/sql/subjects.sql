CREATE TABLE subjects (
    SubjectID int NOT NULL,
    Title varchar(255) NOT NULL,
    Teacher  varchar(255) NOT NULL,
    PRIMARY KEY (SubjectID),
    UNIQUE(Title)
);

ALTER TABLE subjects AUTO_INCREMENT=0;

-- INSERT INTO subjects (Lesson, Reporting, Teacher, Hours) VALUES
--     ("Комп'ютерна дискретна математика", 'залік', 'Ivanov I. I.', 100),
--     ('Математичний аналіз', 'іспит', 'Petrov I. I.',  80),
--     ('Основи програмування', 'іспит', 'Zerba I. I.',  120),
--     ('Теорія ймовірностей', 'КП', 'Hrytsai I. I.',  50),
--     ('Проектування веб-застосувань', 'КР', 'Maksymov I. I.', 40);

INSERT INTO subjects VALUES
    (1,"Комп'ютерна дискретна математика",  'Ivanov I. I.'),
    (2,'Математичний аналіз', 'Petrov I. I.'),
    (3,'Основи програмування', 'Zerba I. I.'  ),
    (4,'Теорія ймовірностей', 'Hrytsai I. I.'),
    (5,'Проектування веб-застосувань', 'Maksymov I. I.');