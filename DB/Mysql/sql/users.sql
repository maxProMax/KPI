-- teacher

CREATE USER 'teacher'@'localhost' IDENTIFIED BY 'Teacher_Password';

-- student
CREATE USER 'student'@'localhost' IDENTIFIED BY 'Student_Password';
GRANT SELECT ON *.* TO 'student'@'localhost';