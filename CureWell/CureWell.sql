--DROP Scripts
create database CureWell

IF OBJECT_ID('Surgery') IS NOT NULL
	DROP TABLE Surgery
GO

IF OBJECT_ID('DoctorSpecialization') IS NOT NULL
	DROP TABLE DoctorSpecialization
GO

IF OBJECT_ID('Doctor') IS NOT NULL
	DROP TABLE Doctor
GO

IF OBJECT_ID('Specialization') IS NOT NULL
	DROP TABLE Specialization
GO


-- Scripts for creation of tables and insertion of sample data
CREATE TABLE Specialization
(
	SpecializationCode CHAR(3) CONSTRAINT pk_SpecializationCode PRIMARY KEY,
	SpecializationName VARCHAR(20) NOT NULL 
)
GO

INSERT INTO Specialization VALUES('GYN','Gynecologist')
INSERT INTO Specialization VALUES('CAR','Cardiologist')
INSERT INTO Specialization VALUES('ANE','Anesthesiologist')
GO

CREATE TABLE Doctor
(
	DoctorID  INT IDENTITY(1001,1) CONSTRAINT pk_DoctorID PRIMARY KEY,
	DoctorName VARCHAR(25) NOT NULL
)
GO

INSERT INTO Doctor VALUES('Albert')
INSERT INTO Doctor VALUES('Olivia')
INSERT INTO Doctor VALUES('Susan')
INSERT INTO Doctor VALUES('Harry')
INSERT INTO Doctor VALUES('Alice')
GO


CREATE TABLE DoctorSpecialization
(
	DoctorID  INT CONSTRAINT fk_DoctorID REFERENCES Doctor(DoctorId),
	SpecializationCode  CHAR(3) CONSTRAINT fk_SpecializationCode REFERENCES Specialization(SpecializationCode),
	SpecializationDate DATE NOT NULL,
	CONSTRAINT pk_DoctorIDSpecializatioinCode PRIMARY KEY (DoctorID,SpecializationCode)
)
GO

INSERT INTO DoctorSpecialization VALUES(1001,'ANE','2010-01-01')
INSERT INTO DoctorSpecialization VALUES(1002,'CAR','2010-01-01')
INSERT INTO DoctorSpecialization VALUES(1003,'CAR','2010-01-01')
GO

CREATE TABLE Surgery
(
	SurgeryID INT IDENTITY(5000,1) CONSTRAINT pk_SurgeryID PRIMARY KEY,
	DoctorID INT CONSTRAINT fk_DoctorID_Surgery REFERENCES Doctor(DoctorID),
	SurgeryDate DATE NOT NULL,
	StartTime DECIMAL(4,2) NOT NULL,
	EndTime DECIMAL(4,2) NOT NULL,
	SurgeryCategory CHAR(3) CONSTRAINT fk_SpecializatioinCode_Surgery REFERENCES Specialization(SpecializationCode)
)
GO
		

INSERT INTO Surgery VALUES(1001,'2011-01-01',9.00,14.00,'ANE')
INSERT INTO Surgery VALUES(1002,'2015-01-01',10.00,16.00,'CAR')
GO
