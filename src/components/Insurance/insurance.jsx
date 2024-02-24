import "./insurance.css";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import NoCrashIcon from "@mui/icons-material/NoCrash";
// claim images
import claim1 from "../../assets/Images/claim-1.png";
import claim2 from "../../assets/Images/claim-2.png";
import claim3 from "../../assets/Images/claim-3.png";
import claim4 from "../../assets/Images/claim-4.png";
import claim5 from "../../assets/Images/claim-5.png";
import claim6 from "../../assets/Images/claim-6.png";
import claim7 from "../../assets/Images/claim-7.png";
import insuranceclaim from "../../assets/Images/claim-insurance-main-img.png";
import Headersub from "../../pages/Header/header2";
import Footer from "../../pages/Footer/footer";
import { Typography } from "@mui/material";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";

const Insurance = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    console.log(user);
    if (user) {
      setName(user.userName);
      setMobileNumber(user.mobileNumber);
      setEmail(user.email);
    }
  }, [user]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    if (!name || !email || !mobileNumber || !insuranceCompany || !city) {
      setError("All fields are required");
      return;
    }

    setError("");

    const formData = {
      userName: name,
      email: email,
      mobileNumber: mobileNumber,
      insuranceCompany: insuranceCompany,
      city: city,
    };
    await axios
      .post("https://carbay.onrender.com/api/insurance", formData)
      .then((response) => {
        enqueueSnackbar("Insurance claim form submitted!", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
        console.error("Error submitting form:", error);
      });

    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setInsuranceCompany(event.target.value);
  };
  return (
    <>
      <Headersub />
      <div className="insurance-con">
        <div className="claim-head">
          <div className="claim-side-head">
            <h1>Car Insurance Claim</h1>
          </div>

          <p>
            A car insurance claim is a process wherein an insured asks the car
            insurance company to compensate him/her for the damages that are
            sustained by his/her car after an accident. Or at times, it is when
            the insured asks the insurance company to represent him/her or
            intervene on his/her behalf when the insured is responsible for any
            unintentional damages caused to a third-party. Since one pays car
            insurance premium, it is one’s right to make a claim when he/she is
            involved in an accident.
          </p>
        </div>
        {/* image section */}
        <div className="claim-points">
          <div className="claim-points-content">
            <h1>Why CARBAY for Insurance Claims?</h1>
            <div className="claim-points-p">
              <p>
                <NoCrashIcon /> Company Owned Company Operated Workshops across
                India
              </p>
              <p>
                <NoCrashIcon /> 24/7 Service Assistance
              </p>
              <p>
                <NoCrashIcon /> Partnered with All Major Car Insurance Service
                Providers for Cash Less Claims
              </p>
              <p>
                <NoCrashIcon /> Complete Waiver of processing amount for
                customers-Compulsory deductible charges{" "}
              </p>
              <p>
                <NoCrashIcon /> Free Door-Step inspection on every insurance
                claim
              </p>
              <p>
                <NoCrashIcon /> 2 Years of warranty on paint
              </p>
              <p>
                <NoCrashIcon /> Free Car Service to all Insurance Claim
                Customers *(upto Rs 999)
              </p>
              <p>
                <NoCrashIcon /> Free 6 Months Warranty on Every Service
              </p>
              <p>
                <NoCrashIcon /> Free Pick Up and Drop
              </p>
              <p>
                <NoCrashIcon /> Discount on Non Insurance Covered Parts
              </p>
              <p>
                <NoCrashIcon /> Track Record of Delivering insurance Cars in
                less than 10 days *(Subject to Approval)
              </p>
            </div>
          </div>
          <div className="claim-points-img">
            <h1>Why CARBAY for Insurance Claims?</h1>
            <img src={insuranceclaim} alt="claim-image" />
          </div>
        </div>
        {/* types of claims */}
        <div className="typesofclaim">
          <div className="claim-side-head">
            <h1>Types of Insurance Claims Processes</h1>
            <p>
              Cash Less Claims
              <br />
              Reimbursement Claims
            </p>
          </div>
        </div>
        {/* howclaims */}
        <div className="how-claims">
          <div className="claim-side-head">
            <h1>How Insurance Claims Works</h1>
            <div className="claim-process">
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim1} alt="claim-1" />
                </div>
                <p>Damaged your car in an accident?</p>
              </div>
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim2} alt="claim-1" />
                </div>
                <p className="note-claim">
                  Call us at 9030724365 or Email us at viplava@carz.in
                </p>
              </div>
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim3} alt="claim-1" />
                </div>
                <p>
                  Our Claims team will analyze the case over the Phone call and
                  schedules Pick up of your car post Evaluating
                </p>
              </div>
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim4} alt="claim-1" />
                </div>
                <p>
                  Relax , Our Team will get it repaired with the least possible
                  time without compromising on Quality
                </p>
              </div>
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim5} alt="claim-1" />
                </div>
                <p>
                  Repairs and Claims specialist coordinates with your insurance
                  company for claims filing and settlement
                </p>
              </div>
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim6} alt="claim-1" />
                </div>

                <p>
                  Post Service your cars undergoes a complete and comprehensive
                  Quality check Process
                </p>
              </div>
              <div className="claim-sub">
                <div className="claim-sub-img">
                  <img src={claim7} alt="claim-1" />
                </div>
                <p>Car is Delivered at your Door Step</p>
              </div>
            </div>
          </div>
        </div>
        {/* claim cashless */}

        <div className="claim-side-head">
          <h1>Claim Settlement Process for Cash Less</h1>
        </div>
        <div className="cash-less-claim">
          <ul>
            <li>
              Post surveyor receives all the relevant documents and finds them
              in order, the order to work on the damaged car is given to the
              CARBAY.
            </li>
            <li>
              The surveyor will conduct a re-survey after the completion of
              repair process at the Automovill workshops.
            </li>
            <li>
              The Delivery Order is issued by the insurance provider after
              receiving the repairs invoice from the Automovill
            </li>
            <li>
              The CARBAY workshop is allowed to release the repaired vehicle
              after collecting the duly-signed "Satisfaction Voucher"from the
              policyholde
            </li>
          </ul>
        </div>

        {/* claim Reimbursement */}
        <div className="claim-side-head">
          <h1>Claim Settlement for Reimbursement Claims</h1>
        </div>
        <div className="reimbursement-claim">
          <ul>
            <li>
              Once the Insured car is met with an accident or Damaged , request
              you to please report to the concerned insurance company and get
              the damage inspected by the appointed surveyor in usually within
              48 hours of the accident as this is Mandatory
            </li>
            <li>
              Once at CARBAY the Insured car is repaired , Insured can claim for
              Reimbursement by Submitting the original invoice for repairs, as
              provided by the garage, and Payment Receipt to the insurance
              provider.
            </li>
            <li>
              Post Verifying all the submitted documents by the insurance
              company and after approval , The money is reimbursed to insured
              account
            </li>
          </ul>
        </div>

        {/* Requirerd documents */}
        {/* <div className="claim-side-head">
                         <h1>Documents Required For Car Insurance Claims</h1>
              </div> */}
        {/* claim or without claim */}
        <div className="insurance-claim-without">
          <h1>Do I claim Now ? or Get my work done without Claims</h1>
          <div className="claim-sections">
            <div className="claim">
              <div className="claim-side-head-claim">
                <h1>Claim Insurance Now</h1>
              </div>
              <p>
                CARBAY Claims Expertise team will help you weather to go for
                claim now later post evaluating your car either Physical
                Inspection or Remotely through sharing of your car Photographs.
              </p>
              <p className="note-claim">
                Call us at 9030724365 or Email us at viplava@carz.in
              </p>
            </div>
            <div className="without-claim">
              <div className="claim-side-head-claim">
                <h1>Get my work done without Claim</h1>
              </div>
              <p>
                Avoid claiming for minor scratches and dents to safeguard the
                NCB discount on your renewal as it can significantly reduce the
                premium.
                <br />
                We at Automovill can get the work done at 60% less than the
                Authorized Workshop with out Compromising on Quality ( Right
                from Usage of OEM/OES spare parts to Providing 2 years Warranty
                of Paint and Free 6 Months warranty on Service)
              </p>
            </div>
          </div>
        </div>
        {/* claim-button */}
        <div className="claim-button" onClick={handleClickOpen}>
          <button>CLAIM INSURANCE</button>
        </div>
        {/* insurance form */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Car Insurance Claim</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                     </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="mobilenumber"
              label="Mobile Number"
              type="email"
              fullWidth
              variant="standard"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <TextField
              select
              value={insuranceCompany}
              onChange={handleChange}
              variant="standard"
              label="Insurance Company"
              fullWidth
              required
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Reliance">Reliance</MenuItem>
              <MenuItem value="Bajaj">Bajaj</MenuItem>
              <MenuItem value="Go Digit">Go Digit</MenuItem>
              <MenuItem value="National">National</MenuItem>
              <MenuItem value="Future Generali">Future Generali</MenuItem>
              <MenuItem value="Raheja QBE">Raheja QBE</MenuItem>
              <MenuItem value="KOtak">KOtak</MenuItem>
              <MenuItem value="SBI General">SBI General</MenuItem>
              <MenuItem value="Liberty">Liberty</MenuItem>
              <MenuItem value="TATA AIG">TATA AIG</MenuItem>
              <MenuItem value="Edelweiss">Edelweiss</MenuItem>
              <MenuItem value="Royal Sundaram">Royal Sundaram</MenuItem>
              <MenuItem value="Chola Mandalam">Chola Mandalam</MenuItem>
              <MenuItem value="Magma">Magma</MenuItem>
              <MenuItem value="Acko">Acko</MenuItem>
              <MenuItem value="Navi">Navi</MenuItem>
              <MenuItem value="Oriental">Oriental</MenuItem>
              <MenuItem value="United">United</MenuItem>
              <MenuItem value="New India">New India</MenuItem>
              <MenuItem value="Universal Sompo">Universal Sompo</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
            <TextField
              autoFocus
              margin="dense"
              id="city"
              label="City"
              type="email"
              fullWidth
              variant="standard"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </DialogContent>
          {error && (
            <Typography style={{ color: "red", textAlign: "center" }}>
              {error}
            </Typography>
          )}
          <DialogActions className="formbuttons">
            <Button onClick={handleClose}>close</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* <Footer/> */}
    </>
  );
};
export default Insurance;
