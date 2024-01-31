import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import "./ServiceOrderSiteVisitStyle.css";

const ServiceOrderSiteVisit = () => {
  const [visitor, setVisitor] = useState({
    personel: {
      id: "",
      companyName: "",
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    date: "",
    time: "",
    additionalInfo: "",
    fullNamePIC: "",
    phoneNumberPIC: "",
    emailPIC: "",
    jobdeskPIC: "",
  });

  const [numberOfPerson, setNumberOfPerson] = useState(1);
  const [person, setPerson] = useState([visitor.personel]);

  const addPersonHandler = () => {
    setNumberOfPerson(numberOfPerson + 1);
    setPerson([
      ...person,
      {
        id: numberOfPerson + 1,
        companyName: "",
        fullName: "",
        email: "",
        phoneNumber: "",
      },
    ]);
  };

  const deletePersonHandler = (personId) => {
    setNumberOfPerson(numberOfPerson - 1);
    setPerson(person.filter((item) => item.id !== personId));
  };

  const textFieldPersonelCompanyNameOnChangeHandler = (e, personId) => {
    setPerson((prevPersons) => {
      return prevPersons.map((person) =>
        person.id === personId
          ? { ...person, companyName: e.target.value }
          : person
      );
    });
  };

  const textFieldPersonelFullNameOnChangeHandler = (e, personId) => {
    setPerson((prevPersons) => {
      return prevPersons.map((person) =>
        person.id === personId
          ? { ...person, fullName: e.target.value }
          : person
      );
    });
  };

  const textFieldPersonelEmailOnChangeHandler = (e, personId) => {
    setPerson((prevPersons) => {
      return prevPersons.map((person) =>
        person.id === personId ? { ...person, email: e.target.value } : person
      );
    });
  };

  const textFieldPersonelPhoneNumberOnChangeHandler = (e, personId) => {
    setPerson((prevPersons) => {
      return prevPersons.map((person) =>
        person.id === personId
          ? { ...person, phoneNumber: e.target.value }
          : person
      );
    });
  };

  const textFieldDateOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      date: e.target.value,
    });
  };

  const textFieldTimeOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      time: e.target.value,
    });
  };

  const textFieldAdditionalInfoOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      additionalInfo: e.target.value,
    });
  };

  const textFieldFullNamePICOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      fullNamePIC: e.target.value,
    });
  };

  const textFieldPhoneNumberPICOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      phoneNumberPIC: e.target.value,
    });
  };

  const textFieldEmailPICOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      emailPIC: e.target.value,
    });
  };

  const textFieldJobdeskPICOnChangeHandler = (e) => {
    setVisitor({
      ...visitor,
      jobdeskPIC: e.target.value,
    });
  };

  // ini  belom dibuat POST nya
  // const buttonSubmitOnClickHandler = (e) => {
  //   addVisitor(visitor)
  // }

  return (
    <>
      <Box className="box-utama">
        <Box className="box-personel">
          <div style={{ margin: "0.5em 0 0 3em" }}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body2">
              All visitors must bring a govenrtment issued-photo to enter the
              room
            </Typography>
          </div>
          <Box className="tabelNumber-tabelPersonel">
            <Box>
              <Typography variant="body2" style={{ marginTop: "1em" }}>
                Number of Person
              </Typography>
              <Box>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ width: "3em" }}
                  value={numberOfPerson}
                />
                <img
                  src="/image/site-visit/add-person.png"
                  alt="add-person"
                  style={{ width: "2em", height: "2em", marginLeft: "0.5em" }}
                  onClick={addPersonHandler}
                />
              </Box>
            </Box>
            <Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <TextField
                          label="Company Name"
                          variant="outlined"
                          size="small"
                          value={item.companyName}
                          onChange={(e) =>
                            textFieldPersonelCompanyNameOnChangeHandler(
                              e,
                              item.id
                            )
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Full Name"
                          variant="outlined"
                          size="small"
                          value={item.fullName}
                          onChange={(e) =>
                            textFieldPersonelFullNameOnChangeHandler(e, item.id)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Email"
                          variant="outlined"
                          size="small"
                          value={item.email}
                          onChange={(e) =>
                            textFieldPersonelEmailOnChangeHandler(e, item.id)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Phone Number"
                          variant="outlined"
                          size="small"
                          value={item.phoneNumber}
                          onChange={(e) =>
                            textFieldPersonelPhoneNumberOnChangeHandler(
                              e,
                              item.id
                            )
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <img
                          src="/image/site-visit/delete-person.png"
                          alt="delete person"
                          style={{ width: "2em", height: "2em" }}
                          onClick={() => deletePersonHandler(item.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Box>
        {/* ================================== */}
        {/* schedule */}
        <Box className="box-schedule">
          <div style={{ margin: "0.5em 0 0 3em" }}>
            <Typography variant="h6">Schedulling</Typography>
            <Box
              sx={{
                marginBottom: "1em",
              }}
            >
              <TextField
                label="Date"
                variant="outlined"
                size="small"
                value={visitor.date}
                onChange={textFieldDateOnChangeHandler}
                sx={{ marginRight: "2em" }}
              />
              <TextField
                label="Time"
                variant="outlined"
                size="small"
                value={visitor.time}
                onChange={textFieldTimeOnChangeHandler}
              />
            </Box>
          </div>
        </Box>
        {/* ================================= */}
        {/* Additional Information */}
        <Box className="box-additional-information">
          <div style={{ margin: "0.5em 0 0.5em 3em" }}>
            <Typography variant="h6">Additional Information</Typography>
            <TextField
              label="Detail Information"
              variant="outlined"
              size="small"
              value={visitor.additionalInfo}
              onChange={textFieldAdditionalInfoOnChangeHandler}
            />
          </div>
        </Box>
        {/* ================================= */}
        {/* Contact Information */}
        <Box className="box-contact-information">
          <div style={{ margin: "0.5em 0 0 3em" }}>
            <Typography variant="h6">Contact Information</Typography>
            <Box
              sx={{
                marginBottom: "1em",
              }}
            >
              <TextField
                label="Full Name"
                variant="outlined"
                size="small"
                value={visitor.fullNamePIC}
                onChange={textFieldFullNamePICOnChangeHandler}
                sx={{ marginRight: "1em" }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                size="small"
                value={visitor.phoneNumberPIC}
                onChange={textFieldPhoneNumberPICOnChangeHandler}
                sx={{ marginRight: "1em" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                value={visitor.emailPIC}
                onChange={textFieldEmailPICOnChangeHandler}
                sx={{ marginRight: "1em" }}
              />
              <TextField
                label="Job Desk"
                variant="outlined"
                size="small"
                value={visitor.jobdeskPIC}
                onChange={textFieldJobdeskPICOnChangeHandler}
              />
            </Box>
          </div>
        </Box>
        <Button variant="outlined" color="success" onClick={""}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default ServiceOrderSiteVisit;
