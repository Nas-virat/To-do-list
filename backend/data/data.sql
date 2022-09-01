
CREATE TABLE `task` (
  `ID` int(11) NOT NULL,
  `Topic` text NOT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `task` (`ID`, `Topic`, `Description`) VALUES
(1, 'Software Engineering Project', 'Select Topic'),
(2, 'Professional Issue', 'essey 3,000 words');




ALTER TABLE `task`
  ADD PRIMARY KEY (`ID`);



ALTER TABLE `task`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

