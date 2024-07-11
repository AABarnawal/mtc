import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import InputField from '../Components/InputFeild';
import SelectOptions from '../Components/SelectOptions';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CalculateTargetWeight from '../Calculation/CalculateTargetWeight';

const RelationOptions = [
  { value : '0', label : 'Select'},
  { value : '1', label : 'Father'},
  { value : '2', label : 'Any Other'},
]
function DischargeForm() {
    // const location = useLocation();
    // const itemData = location.state; // Access the passed item data
    // if(itemData){
    //     console.log(itemData);
    // }

    // const navigate = useNavigate();


    const [formData, setFormData] = useState({
      SAM_NO: '',
      CHILD_NAME: '',
      ADMISSION_DATE : '',
      ADMISSION_WEIGHT : '',
      imgCapture2: '',
      ADMISSION_HEIGHT : '',
      ADMISSION_ODEMA : '',
      ADMISSION_MUAC : '',
      TARGET_WEIGHT: '',
      DISCHARGE_DATE : '',
      DISCHARGE_WEIGHT : '',
      DISCHARGE_HEIGHT : '',
      DISCHARGE_MUAC : '',
      OUTCOME_INDICATOR: '',
      REFERED_UNITS:'',
      DISCHARGE_ODEMA: '',
      ADMISSION_HB: '',
      MOTHER_HB: '',
      MOTHER_IFA: '',
      MOTHER_WAGE: '',
      IFA_SYRUP: '',
    });
    const [errors,setErrors] = useState({});
    const [selectedSigns,setSelectedSigns] = useState([]); // Array to store selected signs
    const [tweight, settweight] = useState();
      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

     // weight 
  const validateDischargeWeight = (value) => {
    const weightRegex = /^\d{1,2}(\.\d{1,3})?$/;
    return weightRegex.test(value) && parseFloat(value) >= 1.7 && parseFloat(value) <= 15.6;
  };
  // height 
  const validateDischargeHeight = (value) => {
    const  HeightRegex = /^\d{0,3}$/;
    return HeightRegex.test(value) && value >= 45 && value <= 120;
  };
  const validateMuac = (value) => {
    const muacRegex = /^\d{1,2}(\.\d{1,3})?$/;
    return muacRegex.test(value) && parseFloat(value) >= 5.5 && parseFloat(value) <= 12.5;
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      let newErrors = {};

      if (!validateDischargeWeight(formData.DISCHARGE_WEIGHT)) {
        newErrors.DISCHARGE_WEIGHT = 'Discharge weight must be between 1.700 and 15.600 kg with up to two decimal places.';
      }
  
      if (!validateDischargeHeight(formData.DISCHARGE_HEIGHT)) {
        newErrors.DISCHARGE_HEIGHT = 'Discharge height must be between 45 and 120 cm with up to two decimal places.';
      }
  


      if (Object.keys(newErrors).length === 0) {

          // Submit form

          console.log(formData);
          console.log("complications : ", selectedSigns);
      } else {
          setErrors(newErrors);
      }
  };
  
  return (
    <div
            className='boxCon'
            style={{
            border: "2px solod black",
            margin:"80px 25px 0px 25px"
        }}>
            <div className='titleBox p-4 d-flex'>
                {/* name + Add button */}
                <h1>Child Discharge</h1>
            </div>
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-xl-10 mb-2" style={{padding:"0px"}}>
            <div className="short-div row p-2">
              {/* SAM NUMBER */}
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
              {/* CHILD NAME */}
              <div className="col-xl-3 mb-2">
                <label>Child Name</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_CHILD_NAME"
                  name="CHILD_NAME"
                  type="text"
                  value={formData.CHILD_NAME}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* ADMISSION DATE */}
              <div className="col-xl-3 mb-2">
                <label>Admission Date</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_ADMISSION_DATE"
                  name="ADMISSION_DATE"
                  type="date"
                  value={formData.ADMISSION_DATE}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* ADMISSION WEIGHT */}
              <div className="col-xl-3 mb-2">
                <label>Admission Weight</label>
                <input
                  className="form-control form-control-sm"
                  // disabled
                  id="txt_ADMISSION_WEIGHT"
                  name="ADMISSION_WEIGHT"
                  type="text"
                  value={formData.ADMISSION_WEIGHT}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
            </div>
            <div className="short-div row p-2">
              {/* ADMISSION HEIGHT */}
              <div className="col-xl-3 mb-2">
                <label>Admission Height</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_ADMISSION_HEIGHT"
                  name="ADMISSION_HEIGHT"
                  type="text"
                  value={formData.ADMISSION_HEIGHT}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* ADMISSION EDEMA */}
              <div className="col-xl-3 mb-2">
                <label>Admission Edema</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_ADMISSION_ODEMA"
                  name="ADMISSION_ODEMA"
                  type="text"
                  value={formData.ADMISSION_ODEMA}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* ADMISSION MUAC */}
              <div className="col-xl-3 mb-2">
                <label>Admission MUAC (cm)</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_ADMISSION_MUAC"
                  name="ADMISSION_MUAC"
                  type="text"
                  value={formData.ADMISSION_MUAC}
                  onChange={handleInputChange}
                />
                <span className="highlight"></span>
              </div>
              {/* target weight  */}
              <div className="col-xl-3 mb-2">
                <label>Target Weight (kg)</label>
                <input
                  className="form-control form-control-sm"
                  disabled
                  id="txt_TARGET_WEIGHT"
                  name="TARGET_WEIGHT"
                  type="text"
                  value={tweight}
                            onChange={()=>{
                              handleInputChange();
                              formData.TARGET_WEIGHT = tweight;
                            }}
                />
                <CalculateTargetWeight aweight={formData.ADMISSION_WEIGHT} settweight={settweight} />
                <span className="highlight"></span>
              </div>

            </div>
            <div className="short-div row p-2">
              {/* discharge date  */}
              <InputField
                label="Discharge Date "
                type="date"
                name="DISCHARGE_DATE"
                value={formData.DISCHARGE_DATE}
                onChange={handleInputChange}
                min={formData.DOB} // Set minimum date based on DOB
                max={new Date().toISOString().split('T')[0]}
              />
              {/* Discharge Weight  */}
              <InputField
                  label="Discharge Weight (kg)"
                  type="text"
                  name="DISCHARGE_WEIGHT"
                  maxLength="3"
                  value={formData.DISCHARGE_WEIGHT}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9.]|\b/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const { value } = e.target;
                    console.log("e vaalue : ", value);
                    console.log("target weight : ", tweight);
                    if (value <= tweight) {
                      document.getElementById('ddl_OUTCOME_INDICATOR').style.display = 'block';
                      document.getElementById('ddl_REFERED_UNITS').style.display = 'block';
                    } else {
                      document.getElementById('ddl_OUTCOME_INDICATOR').style.display = 'none';
                      document.getElementById('ddl_REFERED_UNITS').style.display = 'none';
                      formData.OUTCOME_INDICATOR = 'CURED'
                    }
                    let formattedValue = parseFloat(value).toFixed(1);
                    if (!validateDischargeWeight(formattedValue)) {
                      setErrors({ ...errors, DISCHARGE_WEIGHT: 'Discharge weight must be between 1.700 and 15.600 kg with up to three decimal places.' });
                    } else {
                      setFormData({ ...formData, DISCHARGE_WEIGHT: formattedValue });
                      setErrors({ ...errors, DISCHARGE_WEIGHT: '' });
                    }
                  }}
                  error={errors.DISCHARGE_WEIGHT}
              />
              {/* discharge height  */}
              <InputField
                  label="Discharge Height (cm)"
                  type="text"
                  name="DISCHARGE_HEIGHT"
                  maxLength="3"
                  value={formData.DISCHARGE_HEIGHT}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9]|/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const { value } = e.target;
                    if (!validateDischargeHeight(value)) {
                      setErrors({ ...errors, DISCHARGE_HEIGHT: 'Discharge height must be between 45 and 120 cm .' });
                    } else {
                      setErrors({ ...errors, DISCHARGE_HEIGHT: '' });
                    }
                  }}
                  error={errors.DISCHARGE_HEIGHT}
              />
              {/* discharge muac  */}
              <InputField
                  label="Discharge MUAC (cm)"
                  type="text"
                  name="DISCHARGE_MUAC"
                  maxLength="4"
                  value={formData.DISCHARGE_MUAC}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9.]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const { value } = e.target;
                    let formattedValue = parseFloat(value).toFixed(1);
                    if (!validateMuac(formattedValue)) {
                      setErrors({ ...errors, DISCHARGE_MUAC: 'Admission height must be between 5.5 and 12.5 cm .' });
                    } else {
                      setFormData({ ...formData, DISCHARGE_MUAC: formattedValue });
                      setErrors({ ...errors, DISCHARGE_MUAC: '' });
                    }
                  }}
                  error={errors.DISCHARGE_MUAC}
              />
            </div>
          </div>
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
        <div className="row mt-2  ">
          {/* if target weight achieved then this option will not show */}
          {/* outcome indicator  {/* refered to*/} 
          <div id="ddl_OUTCOME_INDICATOR" className="col-xl-3" style={{ display: 'none' }}>
            <label>
            Outcome Indicator<sup className="text-danger fa-1x font-weight-bold">*</sup>
            </label>
            <select
              className="form-control form-control-sm"
              name="OUTCOME_INDICATOR"
              value={formData.OUTCOME_INDICATOR}
              onChange={handleInputChange}
            >
              {RelationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </select>
          </div>
          <div id="ddl_REFERED_UNITS" className='col-xl-3' style={{ display: 'none' }}>
          <label>
          Refered to :  <sup className="text-danger fa-1x font-weight-bold">*</sup>
            </label>
            <select
              className="form-control form-control-sm"
              name="REFERED_UNITS"
              value={formData.REFERED_UNITS}
              onChange={handleInputChange}
            >
              {RelationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </select>
            </div>
          

          {/* discharge odema  */}
          <SelectOptions
            title="Discharge EDEMA "
            id="ddl_Edema"
            imp={true}
            name="OUTCOME_INDICATOR"
            value={formData.OUTCOME_INDICATOR}
            fun={handleInputChange}
            options={RelationOptions}
          />
          {/* Admission Hemoglobin (gm/dl) */}
          <div className="col-xl-3 mb-2">
            <label>Admission Hemoglobin (gm/dl)</label>
            <input
              className="form-control form-control-sm"
              disabled
              id="txt_ADMISSION_HB"
              name="ADMISSION_HB"
              type="text"
              value={formData.ADMISSION_HB}
              onChange={handleInputChange}
            />
            <span className="highlight"></span>
          </div>
          
        </div>
        <div className="row mt-2 mb-2">
          {/* hemogobin of mother  */}
          <InputField
              label="Hemoglobin Of Mother (gm/dl)"
              type="text"
              name="MOTHER_HB"
              maxLength="3"
              value={formData.MOTHER_HB}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (!/[0-9]|\b/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              // onBlur={(e) => {
              //   const { value } = e.target;
              //   if (!validateAdmissionHeight(value)) {
              //     setErrors({ ...errors, DISCHARGE_WEIGHT: 'Admission height must be between 45 and 120 cm .' });
              //   } else {
              //     setErrors({ ...errors, DISCHARGE_WEIGHT: '' });
              //   }
              // }}
              // error={errors.DISCHARGE_WEIGHT}
          />
          {/* IFA Given To Mother  */}
          <SelectOptions
            title="IFA Given To Mother (minimum 30 tablets)  "
            id="ddl_MOTHER_IFA"
            imp={true}
            name="MOTHER_IFA"
            value={formData.MOTHER_IFA}
            fun={handleInputChange}
            options={RelationOptions}
          />
          {/* Mother's wage compensation  */}
          <SelectOptions
            title="Mother's wage compensation "
            id="ddl_MOTHER_WAGE"
            imp={true}
            name="MOTHER_WAGE"
            value={formData.MOTHER_WAGE}
            fun={handleInputChange}
            options={RelationOptions}
          />
          {/* 1 Bottle of IFA Syrup (50ml) Given To Child */}
          <SelectOptions
            title="1 Bottle of IFA Syrup (50ml) Given To Child"
            id="ddl_IFA_SYRUP"
            imp={true}
            name="IFA_SYRUP"
            value={formData.IFA_SYRUP}
            fun={handleInputChange}
            options={RelationOptions}
          />

          </div>
      </div>
      <div style={{
                width: '100%',
                textAlign:'end',
                margin: '5px'
            }}>
                <Button style={{
                    margin: '2px'
                }}
                type="submit"
                >Save</Button>
                <Button style={{
                    margin: '2px'
                }}
                onClick={()=>{
                  // navigate('/DashBoard/Maternal')
                }}
                >Cancel</Button>
            </div>
    </form>



           

        
    </div>
  )
}

export default DischargeForm


