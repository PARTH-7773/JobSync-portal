import {
  ArrowLeft,
  Globe,
  Image,
  MailOpen,
  MapPin,
  Phone,
  UserCircle2,
} from "lucide-react";
import Hearder from "../components/Hearder";
import {
  RiBuilding2Line,
  RiBuildingFill,
  RiErrorWarningFill,
  RiTrademarkLine,
} from "@remixicon/react";
import { CheckmarkIcon } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import useCompany from "../hooks/company";
import Footer from "../components/Footer";

function CompanyProfile() {
  const industry = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Marketing",
    "Manufacturing",
    "Retail",
    "Other",
  ];

  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();
  const { createCompanieProfile, success, errors, getComapanyProfile, data } =
    useCompany();
  const [companyName, setCompanyName] = useState("");
  const [Industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setphone] = useState("");

  if (!user || user.role !== "employer") {
    return navigate("/signIn", { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Profiledata = {
      company_name: companyName,
      industry: Industry.toLowerCase(),
      location: location,
      website: website,
      description: about,
      phone,
    };
    console.log(Profiledata);
    const res = await createCompanieProfile(Profiledata);
    if (res.status) {
      setAbout("");
      setCompanyName("");
      setWebsite("");
      setLocation("");
      setIndustry("");
      setphone("");
      await showProfileData();
    }
  };

  const showProfileData = () => {
    setAbout(data?.description);
    setCompanyName(data?.company_name);
    setWebsite(data?.website);
    setLocation(data?.location);
    setphone("");
    setIndustry(data?.industry);
  };

  useEffect(() => {
    const getProfile = async () => {
      await getComapanyProfile();
      await showProfileData();
    };

    getProfile();
  }, [!data]);

  return (
    <>
      <Hearder />

      <div className="dashboard-container">
        <div className="modern-card">
          <div className="card-header-modern">
            <h2 className="font-bold">
              <i className="fas fa-building" style={{ color: "#667eea" }}></i>
              <RiBuildingFill size={25} color="#667eea" />
              Manage Company Profile
            </h2>
            <Link to={"/employer-dashboard"} className="btn-secondary" >
             <div className="flex items-center justify-center gap-1"> <ArrowLeft size={20} strokeWidth={2.5}/>
               Dashboard</div>
              {/* <i className="fas fa-arrow-left"></i> */}
            </Link>
          </div>

          <div className="card-body-modern">
            {/* <?php if ($error): ?> */}
            {errors ? (
              <div className="alert alert-error font-semibold capitalize ">
                <i className="fas fa-exclamation-circle"></i>
                <RiErrorWarningFill />
                {errors}
                {/* <Check */}
                {/* <?php echo $error; ?> */}
              </div>
            ) : (
              ""
            )}
            {/* <?php endif; ?> */}

            {/* <?php if ($success): ?> */}
            {success ? (
              <div className="alert alert-success font-semibold capitalize ">
                <i className="fas fa-check-circle"></i>
                <CheckmarkIcon />
                {success}
                {/* <?php echo $success; ?> */}
              </div>
            ) : (
              ""
            )}
            {/* <?php endif; ?> */}

            <form onSubmit={(e) => handleSubmit(e)}>
              {/* // method="POST" enctype="multipart/form-data" */}

              <div className="logo-preview-container">
                {/* <?php if ($company['logo']): ?> */}
                <img
                  src="uploads/<?php echo htmlspecialchars($company['logo']); ?>"
                  alt="Company Logo"
                  className="current-logo"
                />
                {/* <?php else: ?> */}
                <div
                  className="current-logo"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto",
                    fontSize: "3rem",
                    color: "#ddd",
                  }}
                >
                  {/* <i className="fas fa-image"></i> */}
                  <Image color="#bbb" size={"25%"} />
                </div>
                {/* <?php endif; ?> */}

                <div>
                  <div className="file-input-wrapper">
                    <button className="btn-secondary" type="button">
                      {/* <i className="fas fa-camera"></i> */}
                      Change Logo
                    </button>
                    <input
                      type="file"
                      name="logo"
                      accept="image/*"
                      // onchange="this.form.submit()"
                    />{" "}
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#999",
                      marginTop: "5px",
                    }}
                  >
                    Recommended: 300x300px JPG or PNG
                  </p>
                </div>
              </div>

              <div className="form-row">
                <div>
                  <h3 className="profile-section-title">Company Information</h3>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Company Name
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="text"
                        placeholder="Company Name..."
                        name="company_name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                      />
                      {/* <i className="fas fa-trademark"></i> */}
                      <RiTrademarkLine className="absolute top-4 left-3 text-[#aaa]" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Industry
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        name="industry"
                        value={Industry}
                        onChange={(e) => setIndustry(e.target.value)}
                      >
                        <option value="">Select Industry</option>

                        {industry.map((i, key) => (
                          <option value={i} key={key}>
                            {i}
                          </option>
                        ))}
                        {/* <?php 
                                        $industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Other'];
                                        foreach($industries as $ind): 
                                        ?>
                                            <option value="<?php echo $ind; ?>" 
                                            // <?php echo $company['industry'] === $ind ? 'selected' : ''; ?>
                                            >
                                            <?php echo $ind; ?>
                                            </option>
                                        <?php endforeach; ?> */}
                      </select>
                      {/* <i className="fas fa-industry"></i> */}
                      <RiBuilding2Line className="absolute top-3 left-3 text-[#aaa]" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Location
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Headquarters City"
                      />
                      {/* <i className="fas fa-map-pin"></i> */}
                      <MapPin
                        className="absolute top-4 left-3 text-[#aaa]"
                        size={22}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Website
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="url"
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://emaple.com"
                      />
                      {/* <i className="fas fa-globe"></i> */}
                      <Globe
                        className="absolute top-4 left-3 text-[#aaa]"
                        size={22}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="profile-section-title">Contact Person</h3>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Full Name
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="text"
                        name="full_name"
                        value={user.fullname}
                        required
                        placeholder="Full name"
                      />
                      {/* <i className="fas fa-user"></i> */}
                      <UserCircle2
                        className="absolute top-4 left-3 text-[#aaa]"
                        size={24}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Phone Number
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        placeholder="Phone number"
                      />
                      {/* <i className="fas fa-phone"></i> */}
                      <Phone
                        className="absolute top-4 left-3 text-[#aaa]"
                        size={22}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Email Address
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        style={{ background: "#f8f9fa", color: "#666" }}
                      />
                      {/* <i className="fas fa-envelope"></i> */}
                      <MailOpen
                        className="absolute top-4 left-3 text-[#aaa]"
                        size={22}
                      />
                    </div>
                    <small className="helper-text">
                      Email cannot be changed.
                    </small>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: "1rem" }}>
                <h3 className="profile-section-title">About the Company</h3>
                <textarea
                  name="description"
                  rows="5"
                  placeholder="Tell job seekers what makes your company great..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                >
                  {/* <?php echo htmlspecialchars($company['description'] ?? ''); ?> */}
                </textarea>
              </div>

              <div style={{ marginTop: "2rem", textAlign: "right" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "12px 30px" }}
                >
                  {/* <i className="fas fa-save" style={{marginRight: '8px'}}></i> */}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default CompanyProfile;
