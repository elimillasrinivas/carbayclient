import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  ListItem,
  ListItemText,
  Grid,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./services.css";
import Iframe from "react-iframe";
import CheckIcon from "@mui/icons-material/Check";

import right from "../../assets/icons/right.png";
import DialogBox from "./DialogBox";
import axios from "axios";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

function ServicesComponent({
  serviceData,
  setUserSelectedData,
  selectedModalData,
}) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.location.href = "tel:+99999999";
  };

  const handleBuyNow = async (
    serviceName,
    servicePlan,
    carCompany,
    carModel,
    fuelType,
    totalPrice
  ) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const data = {
        userId: user._id,
        serviceName,
        servicePlan,
        carCompany,
        carModel,
        fuelType,
        totalPrice,
        user: {
          email: user.email,
          mobile: user.mobileNumber,
          userName: user.userName,
        },
      };
      const response = await axios.post(
        "https://carbay.onrender.com/api/user/history/add",
        data
      );
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  };

  const getCarModelPrice = (service, type) => {
    console.log(selectedModalData);
    if (selectedModalData.ismodelSelected) {
      if (selectedModalData[service] && selectedModalData[service][type]) {
        const price = selectedModalData[service][type];
        if (price === "Contact Us") {
          return (
            <Button
              variant="outlined"
              style={{
                marginTop: "1rem",
              }}
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          );
        } else {
          return (
            <>
              <Typography variant="h3"> {price}/-</Typography>
              <Button
                variant="outlined"
                style={{
                  marginTop: "1rem",
                }}
                onClick={() => {
                  handleBuyNow(
                    service,
                    type,
                    selectedModalData.company,
                    selectedModalData.model,
                    selectedModalData.fuel,
                    price
                  );
                }}
              >
                Buy Now
              </Button>
            </>
          );
        }
      }
    } else {
      return <DialogBox setUserSelectedData={setUserSelectedData} />;
    }
  };

  return (
    <div className="service-container">
  
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ borderBottom: "5px solid #1e0c60", width: "150px" }}></Box>
        <Typography variant="h5" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
          <span className="first">{serviceData.title.first}</span>
          <span className="second"> {serviceData.title.last}</span>
        </Typography>
        <Typography
          sx={{
            marginTop: "1",
            marginLeft: { lg: "5", sm: "2" },
            color: "#1e0c60",
            whiteSpace: "pre-line",
          }}
        >
          {serviceData.description.first}
        </Typography>
        <Typography sx={{ color: "#1e0c60" }}>
          {serviceData.description.last}
        </Typography>
      </Box>

      <div className="card">
        {serviceData.services.map((service, index) => (
           <div key={index}>
             <Typography variant="h5">{service.title}</Typography>
          <div className="list-container">
              <Grid container>
                {service.list.map((data, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <ListItem>
                      <span style={{ marginRight: "10px" }}>
                        <img src={right} width={20} />
                      </span>
                      <ListItemText primary={data} />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
              <div className="cardimage">
                <img
                  alt="Standard Service"
                  src={service.url}
                  style={{ width: "100%", marginTop: "1rem" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  {getCarModelPrice(serviceData.id, service.id)}
                </div>
              </div>
            </div>

           </div>
        ))}
      </div>

      <div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className="brand-line mb-1 mt-5 ms-lg-5 ms-sm-2"></div>
          <Typography variant="h5" className="ms-lg-5 ms-sm-2">
            <span className="first">How Does it Work</span>
            <span className="second"> - Video</span>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mb: 2 }}>
          <Iframe
            url={serviceData.videoUrl}
            width="70%"
            height="400px"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video"
            

          />
        </Box>
      </div>

      {serviceData.servicesDescription.map((data) => (
        <div key={data.title.first}>
          <Box sx={{ borderBottom: "5px solid #1e0c60", width: "150px" }}></Box>
          <Typography variant="h5" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
            <span className="first">{data.title.first}</span>
            <span className="second"> {data.title.second}</span>
          </Typography>
          <Typography variant="h6" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
            {data.description}
          </Typography>
          <List className="list">
            {data.subPoints.length > 0 &&
              data.subPoints.map((pointsData) => (
                <ListItem className="list-item" key={pointsData.title}>
                  <Typography variant="h6" className="list-header">
                    {pointsData.title}
                  </Typography>
                  <List className="list">
                    {pointsData.points.map((point, index) => (
                      <ListItem key={index}>
                        <CheckIcon className="check-icon" />
                        <ListItemText primary={point} className="check-icon" />
                      </ListItem>
                    ))}
                  </List>
                </ListItem>
              ))}
            {data.points.map((point, index) => (
              <ListItem key={index}>
                <CheckIcon className="check-icon" />
                <ListItemText primary={point} className="check-icon" />
              </ListItem>
            ))}
          </List>
        </div>
      ))}

      <div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className="brand-line mb-1 mt-5 ms-lg-5 ms-sm-2"></div>
          <Typography variant="h5" className="ms-lg-5 ms-sm-2">
            <span className="first">Frequently Asked Questions</span>
            <span className="second"> (FAQs)</span>
          </Typography>
        </Box>
        <div
          id="accordionExample"
          className="accordion ms-lg-5 ms-sm-2"
          style={{ margin: "1rem" }}
        >
          {serviceData.faqs.map((faq, index) => (
            <Accordion key={index} className="auto-acc">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography variant="strong">{faq.question}</Typography>
              </AccordionSummary>
              <div>
                <Typography sx={{textAlign:"justify", padding:"10px"}}>{faq.answer}</Typography>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
