/* begins statements to add entries to the biographies table, with fields ID & name */
INSERT INTO biographies (id, name)
VALUES -- adds the following entries to the biographies table with an ID and name
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

-- selects all rows and fields in the biographies table
SELECT * FROM biographies;
