import React, { useState } from "react";
import axios from "axios";
import "./services.css";
import modelsData from "./modelsData.json";

import {
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Container,
  FormGroup,
} from "@mui/material";

const ServicesForm = () => {
  const [formData, setFormData] = useState({
    carCompany: "",
    carModel: "",
    petrol: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        prepanel: "",
      },
      battery: {
        batteryReplacement: "",
        jumpStart: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
      ppf: {
        paint: "",
        ceramic: "",
      },
    },
    diesel: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        prepanel: "",
      },
      battery: {
        batteryReplacement: "",
        jumpStart: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },

      ppf: {
        paint: "",
        ceramic: "",
      },
    },
    ev: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        prepanel: "",
      },
      battery: {
        batteryReplacement: "",
        jumpStart: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
      ppf: {
        paint: "",
        ceramic: "",
      },
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedInputChange = (e) => {
    const { name, value } = e.target;
    const [fuelType, category, fieldType] = name.split(".");

    setFormData((prevData) => ({
      ...prevData,
      [fuelType]: {
        ...prevData[fuelType],
        [category]: {
          ...prevData[fuelType][category],
          [fieldType]: value,
        },
      },
    }));
  };

  const reset = () => {
    setFormData({
      carCompany: "",
      carModel: "",
      petrol: {
        general: {
          comprehensive: "",
          standard: "",
        },
        painting: {
          alloy: "",
          fullBody: "",
          prepanel: "",
        },
        battery: {
          batteryReplacement: "",
          jumpStart: "",
        },
        checkup: {
          generalHealth: "",
          otherServices: "",
        },
        ac: {
          acService: "",
          electricalRepair: "",
        },

        ppf: {
          paint: "",
          ceramic: "",
        },
      },
      diesel: {
        general: {
          comprehensive: "",
          standard: "",
        },
        painting: {
          alloy: "",
          fullBody: "",
          prepanel: "",
        },
        battery: {
          batteryReplacement: "",
          jumpStart: "",
        },
        checkup: {
          generalHealth: "",
          otherServices: "",
        },
        ac: {
          acService: "",
          electricalRepair: "",
        },

        ppf: {
          paint: "",
          ceramic: "",
        },
      },
      ev: {
        general: {
          comprehensive: "",
          standard: "",
        },
        painting: {
          alloy: "",
          fullBody: "",
          prepanel: "",
        },
        battery: {
          batteryReplacement: "",
          jumpStart: "",
        },
        checkup: {
          generalHealth: "",
          otherServices: "",
        },
        ac: {
          acService: "",
          electricalRepair: "",
        },

        ppf: {
          paint: "",
          ceramic: "",
        },
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Make a POST request to your backend API
      const response = await axios.post(
        "https://carbay.onrender.com/api/services/create",
        formData
      );
      alert("Success");
    } catch (error) {
      alert("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const carCompanies = [
    "AUDI",
    "BENZ",
    "BMW",
    "CHEVROLET",
    "DAEWOO",
    "DASTUN",
    "FERARI",
    "FIAT",
    "FORCE-MOTORS",
    "FORD",
    "HONDA",
    "HYUNDAI",
    "ISUZU",
    "JAGUAR",
    "JEEP",
    "KIA",
    "LANA-ROVER",
    "MAHINDRA",
    "MG",
    "NISSAN",
    "RENAULT",
    "SKODDA",
    "SSANGYONG",
    "SUZUKI",
    "TATA",
    "TOYOTA",
    "VOLKSWAGEN",
    "VOLVO",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ padding: "20px" }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="carCompany">Car Company</InputLabel>
            <Select
              name="carCompany"
              value={formData.carCompany}
              onChange={handleInputChange}
              label="Car Company"
            >
              <MenuItem value="" disabled>
                Select Car Company
              </MenuItem>
              {carCompanies.map((company, index) => (
                <MenuItem key={index} value={company}>
                  {company}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {formData.carCompany && (
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="carModel">Car Model</InputLabel>
              <Select
                name="carModel"
                value={formData.carModel}
                onChange={handleInputChange}
                label="Car Model"
              >
                <MenuItem value="" disabled>
                  Select Car Model
                </MenuItem>
                {modelsData[formData.carCompany].map((model) => (
                  <MenuItem key={model} value={model}>
                    {model}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
          padding: "20px",
        }}
      >
        <Container className="form-container">
          <Typography variant="h2">Petrol</Typography>

          {/* General */}
          <FormGroup className="category-container">
            <Typography variant="h4">General</Typography>
            <TextField
              fullWidth
              type="number"
              label="Comprehensive"
              name="petrol.general.comprehensive"
              value={formData.petrol.general.comprehensive}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Standard"
              name="petrol.general.standard"
              value={formData.petrol.general.standard}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Painting */}
          <FormGroup className="category-container">
            <Typography variant="h4">Painting</Typography>
            <TextField
              fullWidth
              type="number"
              label="Alloy"
              name="petrol.painting.alloy"
              value={formData.petrol.painting.alloy}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="FullBody"
              name="petrol.painting.fullBody"
              value={formData.petrol.painting.fullBody}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Prepanel"
              name="petrol.painting.prepanel"
              value={formData.petrol.painting.prepanel}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Battery */}
          <FormGroup className="category-container">
            <Typography variant="h4">Battery</Typography>
            <TextField
              fullWidth
              type="number"
              label="Battery Replacement"
              name="petrol.battery.batteryReplacement"
              value={formData.petrol.battery.batteryReplacement}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="JumpStart"
              name="petrol.battery.jumpStart"
              value={formData.petrol.battery.jumpStart}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Checkup */}
          <FormGroup className="category-container">
            <Typography variant="h4">Checkup</Typography>
            <TextField
              fullWidth
              type="number"
              label="General Health"
              name="petrol.checkup.generalHealth"
              value={formData.petrol.checkup.generalHealth}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Other Services"
              name="petrol.checkup.otherServices"
              value={formData.petrol.checkup.otherServices}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* AC */}
          <FormGroup className="category-container">
            <Typography variant="h4">AC</Typography>
            <TextField
              fullWidth
              type="number"
              label="AC Services"
              name="petrol.ac.acService"
              value={formData.petrol.ac.acService}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Electrical Repair"
              name="petrol.ac.electricalRepair"
              value={formData.petrol.ac.electricalRepair}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* PPF And Ceramic */}
          <FormGroup className="category-container">
            <Typography variant="h4">PPF And Ceramic</Typography>
            <TextField
              fullWidth
              type="number"
              label="Paint Protection"
              name="petrol.ppf.paint"
              value={formData.petrol.ppf.paint}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Ceramic Coating"
              name="petrol.ppf.ceramic"
              value={formData.petrol.ppf.ceramic}
              onChange={handleNestedInputChange}
            />
          </FormGroup>
        </Container>

        <Container className="form-container">
          <Typography variant="h2">Diesel</Typography>

          {/* General */}
          <FormGroup className="category-container">
            <Typography variant="h4">General</Typography>
            <TextField
              fullWidth
              type="number"
              label="Comprehensive"
              name="diesel.general.comprehensive"
              value={formData.diesel.general.comprehensive}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Standard"
              name="diesel.general.standard"
              value={formData.diesel.general.standard}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Painting */}
          <FormGroup className="category-container">
            <Typography variant="h4">Painting</Typography>
            <TextField
              fullWidth
              type="number"
              label="Alloy"
              name="diesel.painting.alloy"
              value={formData.diesel.painting.alloy}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="FullBody"
              name="diesel.painting.fullBody"
              value={formData.diesel.painting.fullBody}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Prepanel"
              name="diesel.painting.prepanel"
              value={formData.diesel.painting.prepanel}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Battery */}
          <FormGroup className="category-container">
            <Typography variant="h4">Battery</Typography>
            <TextField
              fullWidth
              type="number"
              label="Battery Replacement"
              name="diesel.battery.batteryReplacement"
              value={formData.diesel.battery.batteryReplacement}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="JumpStart"
              name="diesel.battery.jumpStart"
              value={formData.diesel.battery.jumpStart}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Checkup */}
          <FormGroup className="category-container">
            <Typography variant="h4">Checkup</Typography>
            <TextField
              fullWidth
              type="number"
              label="General Health"
              name="diesel.checkup.generalHealth"
              value={formData.diesel.checkup.generalHealth}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Other Services"
              name="diesel.checkup.otherServices"
              value={formData.diesel.checkup.otherServices}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* AC */}
          <FormGroup className="category-container">
            <Typography variant="h4">AC</Typography>
            <TextField
              fullWidth
              type="number"
              label="AC Services"
              name="diesel.ac.acService"
              value={formData.diesel.ac.acService}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Electrical Repair"
              name="diesel.ac.electricalRepair"
              value={formData.diesel.ac.electricalRepair}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* PPF And Ceramic */}
          <FormGroup className="category-container">
            <Typography variant="h4">PPF And Ceramic</Typography>
            <TextField
              fullWidth
              type="number"
              label="Paint Protection"
              name="diesel.ppf.paint"
              value={formData.diesel.ppf.paint}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Ceramic Coating"
              name="diesel.ppf.ceramic"
              value={formData.diesel.ppf.ceramic}
              onChange={handleNestedInputChange}
            />
          </FormGroup>
        </Container>

        <Container className="form-container">
          <Typography variant="h2">EV</Typography>

          {/* General */}
          <FormGroup className="category-container">
            <Typography variant="h4">General</Typography>
            <TextField
              fullWidth
              type="number"
              label="Comprehensive"
              name="ev.general.comprehensive"
              value={formData.ev.general.comprehensive}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Standard"
              name="ev.general.standard"
              value={formData.ev.general.standard}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Painting */}
          <FormGroup className="category-container">
            <Typography variant="h4">Painting</Typography>
            <TextField
              fullWidth
              type="number"
              label="Alloy"
              name="ev.painting.alloy"
              value={formData.ev.painting.alloy}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="FullBody"
              name="ev.painting.fullBody"
              value={formData.ev.painting.fullBody}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Prepanel"
              name="ev.painting.prepanel"
              value={formData.ev.painting.prepanel}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Battery */}
          <FormGroup className="category-container">
            <Typography variant="h4">Battery</Typography>
            <TextField
              fullWidth
              type="number"
              label="Battery Replacement"
              name="ev.battery.batteryReplacement"
              value={formData.ev.battery.batteryReplacement}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="JumpStart"
              name="ev.battery.jumpStart"
              value={formData.ev.battery.jumpStart}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* Checkup */}
          <FormGroup className="category-container">
            <Typography variant="h4">Checkup</Typography>
            <TextField
              fullWidth
              type="number"
              label="General Health"
              name="ev.checkup.generalHealth"
              value={formData.ev.checkup.generalHealth}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Other Services"
              name="ev.checkup.otherServices"
              value={formData.ev.checkup.otherServices}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* AC */}
          <FormGroup className="category-container">
            <Typography variant="h4">AC</Typography>
            <TextField
              fullWidth
              type="number"
              label="AC Services"
              name="ev.ac.acService"
              value={formData.ev.ac.acService}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Electrical Repair"
              name="ev.ac.electricalRepair"
              value={formData.ev.ac.electricalRepair}
              onChange={handleNestedInputChange}
            />
          </FormGroup>

          {/* PPF And Ceramic */}
          <FormGroup className="category-container">
            <Typography variant="h4">PPF And Ceramic</Typography>
            <TextField
              fullWidth
              type="number"
              label="Paint Protection"
              name="ev.ppf.paint"
              value={formData.ev.ppf.paint}
              onChange={handleNestedInputChange}
            />
            <TextField
              fullWidth
              type="number"
              label="Ceramic Coating"
              name="ev.ppf.ceramic"
              value={formData.ev.ppf.ceramic}
              onChange={handleNestedInputChange}
            />
          </FormGroup>
        </Container>
      </div>
      <Typography variant="body2" color="error" sx={{ margin: "1rem" }}>
        Please enter only prices and check again while submitting
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Submit
          </Button>
        </Grid>

        <Grid item>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            onClick={() => reset()}
            sx={{ mt: 2, mb: 2 }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ServicesForm;
