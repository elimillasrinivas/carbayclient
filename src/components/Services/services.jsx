import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { generalServiceData } from "./generalData";
// import AC from "./ac";
// import Tyre from "./tyre";
// import Denting from "./denting";
// import Doorstep from "./doorstep";
// import Checkup from "./checkup";
// import General from "./general";
// import PPF from "./ppf";
// import Battery from "./battery";

// import general from '../../assets/icons/general.png'
import ServicesComponent from "./ServicesComponent";
import { dentingServiceData } from "./denting";
import { acServiceData } from "./ac";
import { batteryServiceData } from "./battery";
import { checkupServiceData } from "./checkup";
import { ppfAndCeramicCoatingServiceData } from "./ppf";
import Headersub from "../../pages/Header/header2";
import Footer from "../../pages/Footer/footer";
import axios from "axios";
import { Button, Typography } from "@mui/material";

const tabComponents = [
  generalServiceData,
  dentingServiceData,
  checkupServiceData,
  batteryServiceData,
  ppfAndCeramicCoatingServiceData,
];
const tabLabels = [
  "General Service",
  "Denting & Painting",
  "Car Checkup Service",
  "Battery Service",
  "PPF & Ceramic Coating",
];

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const [userSelectedData, setUserSelectedData] = React.useState({});
  const [selectedModalData, setSelectedModalData] = React.useState({
    ismodelSelected: false,
  });
  React.useEffect(() => {
    const getservicesPrices = async () => {
      if (userSelectedData.fuel) {
        const response = await axios.get(
          `https://carbay.onrender.com/api/services/get/${userSelectedData.model}`
        );
        const servicePrices = response.data.data;
        setSelectedModalData({
          ismodelSelected: true,
          ...servicePrices[userSelectedData.fuel.toLowerCase()],
          model: servicePrices.carModel,
          company: servicePrices.carCompany,
          fuel: userSelectedData.fuel,
        });
      }
    };
    getservicesPrices();
  }, [userSelectedData]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Headersub />
      {selectedModalData.ismodelSelected ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography>
            You have Selected &nbsp;&nbsp;
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {selectedModalData.company}
            </span>
            &nbsp;&nbsp;
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {selectedModalData.model}
            </span>
            &nbsp;&nbsp;
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {selectedModalData.fuel}
            </span>
            &nbsp;&nbsp;
          </Typography>
          <Button
            variant="contained"
            sx={{backgroundColor:"#1e0c60"}}
            size="small"
            onClick={() => setSelectedModalData({ ismodelSelected: false })}
          >
            Change Selection
          </Button>
        </div>
      ) : (
        ""
      )}

      <Box
        sx={{
          width: "95%",
          margin: "2rem",
          bgcolor: "background.paper",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor=""
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                backgroundColor: value === index ? "#1e0c60" : "inherit",
                color: value === index ? "#ffffff" : "inherit",
                "&.Mui-selected": {
                  color: "#ffffff",
                },
                transition: "background-color 0.5s all ease-in",
              }}
            />
          ))}
        </Tabs>
      </Box>
      <ServicesComponent
        serviceData={tabComponents[value]}
        key={value}
        setUserSelectedData={setUserSelectedData}
        selectedModalData={selectedModalData}
        sx={{
          width: "100%",
        }}
      />
      <Footer />
    </>
  );
}
