CREATE TABLE countries (
    ContryID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    PRIMARY KEY (ContryID),
    UNIQUE(ContryID),
    UNIQUE(Name)
);

INSERT INTO countries (Name) VALUES
    ('Польща'),
    ('Литва'),
    ('Німеччина'),
    ('Франція'),
    ('Україна');
