-- Create the books table
CREATE TABLE books (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL,
   published_year INT NOT NULL,
   genre VARCHAR(100) NOT NULL
);

-- Insert 5 entries into the books table
INSERT INTO books (title, author, published_year, genre) VALUES
('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'),
('1984', 'George Orwell', 1949, 'Dystopian'),
('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic'),
('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction'),
('Moby-Dick', 'Herman Melville', 1851, 'Adventure');
