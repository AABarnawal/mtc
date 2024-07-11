import React, { useState, useEffect } from 'react';
import SelectOptions from '../Components/SelectOptions';
import InputField from '../Components/InputFeild';
import CalculateZScore from '../Calculation/CalculateZScore';
import "../pagestyle.css"
import Complications from './Complications';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const emergencySigns = [
"PRESENCE OF ANY OF EMERGENCY SINGS",
"VERY WEAK, APATHETIC",
"ODEMA OF BOTH FEET",
"SEVERE PALMAR PALLOR",
"SICK YOUNG INFANT LESS THAN 2 MONTHS",
"LETHARGY/ DROWSINESS/ UNCONSCIOUSNESS",
"CONTINUALLY IRRITABLE AND RESTLESS",
"ANY RESPIRATORY DISTRESS",
"SIGN SUGGESTING SEVERE DEHYDRATION WITH DIARRHOEA",
"PRESISTENT VOMAITING",
"HYPOTHERMIA (<35 DEGREE CENTIGRADE)",
"SEVERE ANEMIA",
"FEVER (>38.5 DEGREE CENTIGRADE)",
"EXTENSIVE SKIN LESIONS, EYE LESIONS, POST-MEASLES STATES",
"TUBERCULOSIS",
"MALARIA",

];



const AddChild= () => {
  const location = useLocation();

  const itemData = location.state; // Access the passed item data
  const [responses, setResponses] = useState([]); // Use an array for data
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Handle potential errors

  // const { Record, SAM, Child, Parent, Date, weight, height, ...otherData } = itemData; // Destructure data
  const samnumber = ()=>{
    const str = sessionStorage.getItem('sam');
    const numberRegex = /\d+$/; // Matches one or more digits at the end
    const match = numberRegex.exec(str);
    const numberString = match[0];
const number = parseInt(numberString, 10); // Convert string to number

// Increase the number
const incrementedNumber = number + 1;

// Check if leading zeros need to be preserved
const leadingZeros = numberString.match(/^0+/) || ""; // Matches leading zeros

// Create the new string with incremented number
const newString = str.slice(0, match.index) + leadingZeros + incrementedNumber.toString();

return newString;
  }

  const [formData, setFormData] = useState({
    SAM_NO: samnumber(),
    ADMISSION_TYPE_ID: '',
    REFFERED_BY: '',
    PERSON_NAME: '',
    PERSON_MOBILE: '',
    CHILD_NAME: '',
    MOTHER_NAME: '',
    PARENT_NAME: '',
    MOBILE_NO: '',
    BPL_NO: '',
    DOB: '',
    SEX: '',
    ADDRESS: '',
    imgCapture2: '',
    CASTE : '',
    DISTRICT : '',
    BLOCK : '',
    ICDS_PROJECT : '',
    ANGANWADI_CENTER : '',
    VILLAGE : '',
    ADMISSION_DATE : '',
    ADMISSION_WEIGHT : '',
    ADMISSION_HEIGHT : '',
    Z_SCORE : '',
    ADMISSION_ODEMA : '',
    ADMISSION_MUAC : '',
    BREAST_FEEDING : '',
    COMPLEMNTRY_FEEDING : '',
    APPETITE_TEST : '',
    MEDICAL_COMPLICATION: ''
  });


 useEffect(() => {
   if(itemData){
    console.log("item data called")
    setFormData({ ...formData,
       SAM_NO: itemData.SAM,
       CHILD_NAME: itemData.Child  });
   }
   const fetchData = async () => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    
    try {
      const response = await axios.get("http://192.168.0.164/api/MTCCenter/AllReferer");
      setResponses(response.data);
      console.log(responses);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
  },[]);
 
  const [selectedSigns, setSelectedSigns] = useState([]); // Array to store selected signs

  const handleCheckboxChange = (newSelectedSigns) => {
    setSelectedSigns(newSelectedSigns);
  };

  const ComplicatonOptions = [
    { value : '', label : 'Select'},
    { value : true, label : 'YES'},
    { value : '', label : 'NO'},
  ]

  const castOptions = [
    { value : '0', label : 'Select'},
    { value : '1', label : 'ST'},
    { value : '2', label : 'SC'},
    { value : '3', label : 'OBC'},
    { value : '4', label : 'Others'},
  ]
  const SexOptions = [
    { value : '0', label : 'Select'},
    { value : '1', label : 'MALE'},
    { value : '2', label : 'FEMALE'},
  ]
  const AToptions = [
    { value : '0', label : 'Select'},
    { value : '1', label : 'NEW ADMISSION'},
    { value : '2', label : 'RE ADMISSION'},
    { value : '3', label : 'RELAPSE'},
  ]

  const RelationOptions = [
    { value : '0', label : 'Select'},
    { value : '1', label : 'Father'},
    { value : '2', label : 'Any Other'},
  ]
  
  const [errors, setErrors] = useState({});
  const [zscore, setZscore] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateAlphaNumeric = (value) => {
    const alphaNumericRegex = /^[a-zA-Z\s]{3,}$/;
    return alphaNumericRegex.test(value);
  };

  const validateMobileNumber = (value) => {
    const mobileNumberRegex = /^\d{10,10}$/;
    return mobileNumberRegex.test(value);
  };

  const validateBplNumber = (value) => {
    const bplNumberRegex = /^\d{5,5}$/;
    return bplNumberRegex.test(value);
  };
  // weight 
  const validateAdmissionWeight = (value) => {
    const weightRegex = /^\d{1,2}(\.\d{1,3})?$/;
    return weightRegex.test(value) && parseFloat(value) >= 1.7 && parseFloat(value) <= 15.6;
  };
  // height 
  const validateAdmissionHeight = (value) => {
    const  HeightRegex = /^\d{0,3}$/;
    return HeightRegex.test(value) && value >= 45 && value <= 120;
  };
  const validateMuac = (value) => {
    const muacRegex = /^\d{1,2}(\.\d{1,1})?$/;
    return muacRegex.test(value) && parseFloat(value) >= 5.5 && parseFloat(value) <= 12.5;
  };


//sam child refered by SAMAR

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateAlphaNumeric(formData.CHILD_NAME)) {
      newErrors.CHILD_NAME = 'Name must contain only letters and spaces';
    }

    if (!validateAlphaNumeric(formData.MOTHER_NAME)) {
      newErrors.MOTHER_NAME = 'Name must contain only letters and spaces';
    }

    if (!validateAlphaNumeric(formData.PARENT_NAME)) {
      newErrors.PARENT_NAME = 'Name must contain only letters and spaces';
    }

    if (!validateMobileNumber(formData.MOBILE_NO)) {
      newErrors.MOBILE_NO = 'Mobile number must contain only 10 digits';
    }

    if (!validateBplNumber(formData.BPL_NO)) {
      newErrors.BPL_NO = 'BPL number must contain only 5 digits';
    }

    if (!validateAdmissionWeight(formData.ADMISSION_WEIGHT)) {
      newErrors.ADMISSION_WEIGHT = 'Admission weight must be between 1.700 and 15.600 kg with up to two decimal places.';
    }

    if (!validateAdmissionHeight(formData.ADMISSION_HEIGHT)) {
      newErrors.ADMISSION_HEIGHT = 'Admission height must be between 45 and 120 cm with up to two decimal places.';
    }


    if (Object.keys(newErrors).length === 0) {

      // Submit form

      console.log(formData);
      console.log("complications : ",selectedSigns);
    } else {
      setErrors(newErrors);
    }
  };


  return (
    <div className='boxCon ' style={{border: "2px solid black", margin:"80px 25px 0px 25px"}}>
        <div className='titleBox  d-flex'>
            {/* name + Add button */}
            <h1>Child Registration</h1>
        </div>
      <form className='p-2'  onSubmit={handleSubmit}>
        <div className="col-xl-12 p-4">
          <div className="row mt-2">
            {/* form with sub column column */}
            <div className="col-xl-10 mb-2" style={{padding:"0px"}}>
              <div className="short-div row p-2">
                {/* sam number  */}
              <div className="col-xl-3 mb-2">
                <label>SAM Number</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_SamNumber"
                  name="SAM_NO"
                  type="text"
                  value={formData.SAM_NO}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* admissionn type  */}
              <SelectOptions
                title="Admission Type"
                id="dd_AdmissionType"
                imp={true}
                name="ADMISSION_TYPE_ID"
                value={formData.ADMISSION_TYPE_ID}
                fun={handleInputChange}
                options={AToptions}
              />
              {/* refered by */}
              <div className="col-xl-3">
                <label>Referred By</label>
                <select
                  className="form-control form-control-sm"
                  id="dd_RefferedBy"
                  name="REFFERED_BY"
                  value={formData.REFFERED_BY}
                  defaultValue="0"
                  required
                  onChange={(e) => {
                    handleInputChange(e);
                    const { value } = e.target;
                    if (value === '6') {
                      document.getElementById('div_ashaname').style.display = 'block';
                      document.getElementById('div_ashamobile').style.display = 'block';
                    } else {
                      document.getElementById('div_ashaname').style.display = 'none';
                      document.getElementById('div_ashamobile').style.display = 'none';
                    }
                  }}
                >
                  <option selected  value="">Select</option>
                  {isLoading && <p>Loading data...</p>}
                  {error && <p>Error fetching data: {error}</p>}
                  {responses.length > 0 &&responses.map(response => (
                    <option key={response.rid} value={response.rid}>
                      {response.referer}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-xl-3" id="div_ashaname" style={{ display: 'none' }}>
                <label>Name of Sahiya/ Asha</label>
                <input
                  autoComplete="off"
                  className="form-control form-control-sm"
                  id="txt_ashaname"
                  maxLength="100"
                  name="PERSON_NAME"
                  type="text"
                  value={formData.PERSON_NAME}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-xl-3" id="div_ashamobile" style={{ display: 'none' }}>
                <label>Sahiya/ Asha Mobile</label>
                <input
                  autoComplete="off"
                  className="form-control form-control-sm"
                  id="txt_ashamobile"
                  maxLength="10"
                  name="PERSON_MOBILE"
                  type="text"
                  value={formData.PERSON_MOBILE}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <InputField
                  label="Child Name"
                  type="text"
                  name="CHILD_NAME"
                  maxLength="75"
                  value={formData.CHILD_NAME}
                  onChange={handleInputChange}
                  onBlur={() => {
                    if (!validateAlphaNumeric(formData.CHILD_NAME)|| formData.CHILD_NAME.length == 0) {
                      setErrors({ ...errors, CHILD_NAME: 'Enter a name' });
                    } else {
                      setErrors({ ...errors, CHILD_NAME: '' });
                    }
                  }}
                  onKeyPress={(e) => {
                    if (!/[a-zA-Z\s]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  error={errors.CHILD_NAME}
              />
              </div>
              <div className="short-div row p-2">
              <InputField
                  label="Mother's Name"
                  type="text"
                  name="MOTHER_NAME"
                  maxLength="75"
                  value={formData.MOTHER_NAME}
                  onChange={handleInputChange}
                  onBlur={() => {
                    if (!validateAlphaNumeric(formData.MOTHER_NAME)|| formData.MOTHER_NAME.length == 0) {
                      setErrors({ ...errors, MOTHER_NAME: 'Enter a name' });
                    } else {
                      setErrors({ ...errors, MOTHER_NAME: '' });
                    }
                  }}
                  onKeyPress={(e) => {
                    if (!/[a-zA-Z\s]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  error={errors.MOTHER_NAME}
              />
              <InputField
                  label="Name of the Father/Caretaker"
                  type="text"
                  name="PARENT_NAME"
                  maxLength="75"
                  value={formData.PARENT_NAME}
                  onChange={handleInputChange}
                  onBlur={() => {
                    if (!validateAlphaNumeric(formData.PARENT_NAME)|| formData.PARENT_NAME.length == 0) {
                      setErrors({ ...errors, PARENT_NAME: 'Enter a name' });
                    } else {
                      setErrors({ ...errors, PARENT_NAME: '' });
                    }
                  }}
                  onKeyPress={(e) => {
                    if (!/[a-zA-Z\s]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  error={errors.PARENT_NAME}
              />
              <InputField
                  label="Mobile Number"
                  type="text"
                  name="MOBILE_NO"
                  maxLength="10"
                  value={formData.MOBILE_NO}
                  onChange={handleInputChange}
                  onBlur={() => {
                    if (!validateMobileNumber(formData.MOBILE_NO) || formData.MOBILE_NO.length !== 10) {
                      setErrors({ ...errors, MOBILE_NO: 'Mobile number must be exactly 10 digits' });
                    } else {
                      setErrors({ ...errors, MOBILE_NO: '' });
                    }
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  error={errors.MOBILE_NO}
              />
              </div>
              <div className="short-div row p-2">
              <InputField
                    label="BPL Number"
                    type="text"
                    name="BPL_NO"
                    maxLength="5"
                    value={formData.BPL_NO}
                    onChange={handleInputChange}
                    onBlur={() => {
                      if (!validateBplNumber(formData.BPL_NO) || formData.BPL_NO.length !== 5) {
                        setErrors({ ...errors, BPL_NO: 'BPL number must be exactly 5 digits' });
                      } else {
                        setErrors({ ...errors, BPL_NO: '' });
                      }
                    }}
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    error={errors.BPL_NO}
                />
                <InputField
                    label="Date of Birth "
                    type="date"
                    name="DOB"
                    max={new Date().toISOString().split('T')[0]}
                    value={formData.DOB}
                    onChange={handleInputChange}
                />
                <SelectOptions
                  title="Sex"
                  id="txt_Sex"
                  imp={true}
                  name="SEX"
                  value={formData.SEX}
                  fun={handleInputChange}
                  options={SexOptions}
                  />
              </div>
              <div className="short-div row p-2">
              {/* Address text box */}
              <div className="col-xl-6">
                <label>
                  Address <sup className="text-danger fa-1x font-weight-bold">*</sup>
                </label>
                <textarea
                  className="form-control form-control-sm"
                  cols="20"
                  id="txt_Address"
                  maxLength="100"
                  name="ADDRESS"
                  value={formData.ADDRESS}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              </div>
            </div>

            {/* images / */}
            <div className="col-xl-2 mb-2" >
            {/* IMAGES */}
              <label>Upload Photo (max 2MB, png/jpeg only)</label>
              <input
                type="file"
                id="txt_PhotoNew"
                name="File"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (upload) => {
                      setFormData({ ...formData, imgCapture2: upload.target.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              {formData.imgCapture2 && (
                <img
                  id="imgCapture2"
                  src={formData.imgCapture2}
                  alt="Uploaded"
                  style={{ width: '240px', height: '140px' }}
                  className="img-responsive center-block mt-2"
                />
              )}
            </div>   
          </div>










          <div className="row mt-3">
            <SelectOptions
              title="Caste" 
              imp={true}
              name="CASTE"
              id="ddl_Relation"
              value={formData.CASTE}
              fun={handleInputChange}
              options={castOptions}
            />
            <SelectOptions
              title="District" 
              imp={true}
              name="DISTRICT"
              id="ddl_District"
              value={formData.DISTRICT}
              fun={handleInputChange}
              options={castOptions}
            />
            <SelectOptions
              title="Block" 
              imp={true}
              name="BLOCK"
              id="ddl_Block"
              value={formData.BLOCK}
              fun={handleInputChange}
              options={castOptions}
            />
            <SelectOptions
              title="ICDS Project" 
              imp={true}
              name="ICDS_PROJECT"
              id="ddl_icds"
              value={formData.ICDS_PROJECT}
              fun={handleInputChange}
              options={castOptions}
            />
          </div>
          <div className="row mt-3">
            {/* aganwadi  */}
            <SelectOptions
              title="Anganwadi Center" 
              imp={false}
              name="AWD_ID"
              id="ddl_Awd"
              value={formData.ANGANWADI_CENTER}
              fun={handleInputChange}
              options={castOptions}
            />
            {/* village  */}
            <InputField
                  label="Village"
                  type="text"
                  name="VILLAGE"
                  maxLength="75"
                  value={formData.VILLAGE}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[a-zA-Z\s]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
              />
              <InputField
                  label="Admission Date"
                  type="date"
                  name="ADMISSION_DATE"
                  value={formData.ADMISSION_DATE}
                  onChange={handleInputChange}
                  min={formData.DOB} // Set minimum date based on DOB
                  max={new Date().toISOString().split('T')[0]}
              />

              <InputField 
                  label="Admission Weight (kg)"
                  type="text"
                  name="ADMISSION_WEIGHT"
                  maxLength="7"
                  value={formData.ADMISSION_WEIGHT}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    // Allow only digits, decimal point, and backspace
                    if (!/[0-9.]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const { name, value } = e.target;
                    if (name === 'ADMISSION_WEIGHT') {
                      let formattedValue = parseFloat(value).toFixed(3);
                      if (!validateAdmissionWeight(formattedValue)) {
                        setErrors({ ...errors, ADMISSION_WEIGHT: 'Admission weight must be between 1.700 and 15.600 kg with up to three decimal places.' });
                      } else {
                        setFormData({ ...formData, ADMISSION_WEIGHT: formattedValue });
                        setErrors({ ...errors, ADMISSION_WEIGHT: '' });
                      }
                    }
                  }}
                  error={errors.ADMISSION_WEIGHT}
                />
                <InputField
                  label="Admission Length/ Height (cm) "
                  type="text"
                  name="ADMISSION_HEIGHT"
                  maxLength="3"
                  value={formData.ADMISSION_HEIGHT}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const { value } = e.target;
                    if (!validateAdmissionHeight(value)) {
                      setErrors({ ...errors, ADMISSION_HEIGHT: 'Admission height must be between 45 and 120 cm .' });
                    } else {
                      setErrors({ ...errors, ADMISSION_HEIGHT: '' });
                    }
                  }}
                  error={errors.ADMISSION_HEIGHT}
                />
                <div className="col-xl-3 mb-2">
                  <label>Z-Score (SD) </label>
                  <input
                    className="form-control form-control-sm"
                    disabled
                    id="Adm_Zscore"
                    name="ZSCORE"
                    type="text"
                    value={zscore}
                    onChange={()=>{
                      handleInputChange();
                      formData.Z_SCORE = zscore;
                    }}
                  />
                  <CalculateZScore gender={formData.SEX}   height={formData.ADMISSION_HEIGHT} weight={formData.ADMISSION_WEIGHT} setZscore={setZscore} />
                  
                  <span className="highlight"></span>
                </div>
              <SelectOptions
                title="Admission Odema "
                id="ddl_Edema"
                imp={true}
                name="ADMISSION_EDEMA"
                value={formData.ADMISSION_ODEMA}
                fun={handleInputChange}
                options={RelationOptions}
              />
              <InputField
                  label="Admission MUAC (cm)  "
                  type="text"
                  name="ADMISSION_MUAC"
                  maxLength="3"
                  value={formData.ADMISSION_MUAC}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9]|\b/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const { value } = e.target;
                    if (!validateMuac(value)) {
                      setErrors({ ...errors, ADMISSION_MUAC: 'Admission height must be between 5.5 and 12.5 cm .' });
                    } else {
                      setErrors({ ...errors, ADMISSION_MUAC: '' });
                    }
                  }}
                  error={errors.ADMISSION_MUAC}
              />
              <SelectOptions
                title="Breast Feeding  "
                id="ddl_Breastfeeding"
                imp={true}
                name="BREAST_FEEDING"
                value={formData.BREAST_FEEDING}
                fun={handleInputChange}
                options={RelationOptions}
              />
              <SelectOptions
                title="Complementary Feeding"
                id="ddl_Compfeeding"
                imp={true}
                name="COMPLEMNTRY_FEEDING"
                value={formData.COMPLEMNTRY_FEEDING}
                fun={handleInputChange}
                options={RelationOptions}
              />
              <SelectOptions
                title="Appetite Test "
                id="ddl_Appatite"
                imp={true}
                name="APPETITE_TEST"
                value={formData.APPETITE_TEST}
                fun={handleInputChange}
                options={RelationOptions}
              /> 
              <SelectOptions
                title="Medical Complication"
                id="ddl_Appatite"
                imp={true}
                name="MEDICAL_COMPLICATION"
                value={formData.MEDICAL_COMPLICATION}
                fun={handleInputChange}
                options={ComplicatonOptions}
              />
          </div>
          {formData.MEDICAL_COMPLICATION ?<div className="form-check-inline mr-1">
            <Complications 
              list={emergencySigns}
              selectedValues={selectedSigns}
              onChange={handleCheckboxChange}
            />
      </div>: <></>}
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};


export default AddChild;

