import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import InputField from '../Components/InputFeild';
import SelectOptions from '../Components/SelectOptions';
import CalculateBMI from '../Calculation/CalculateBMI';
import { useNavigate } from 'react-router-dom';

function MaternalForm(props) {

    const [formData,
        setFormData] = useState({
        SAM_NO: '',
        MOTHER_NAME: '',
        MOTHER_AGE: '',
        MOTHER_WEIGHT: '',
        MOTHER_HEIGHT: '',
        MOTHER_BMI: '',
        BIRTH_ORDER: '',
        NO_OF_CHILD: '',
        STATUS_OF_MOTHER: '',
        MOTHER_HB: '',
        MOTHER_GLUCOSE: '',
        MOTHER_BP: '',
        FAMILY_PLANNING: '',
        NUTRITION_CONSELLING: '',
        IFA: '',
        ABENDAZOLE: '',
        MENTAL_ILLNESS: '',
        REFER_ODP: '',
        MEDICAL_COMPLICATION: ''
    });
    // data will come from outside /
    const navigate = useNavigate();
    const [bmi, setBMI] = useState('');
    const [errors,
        setErrors] = useState({});
    const [selectedSigns,
        setSelectedSigns] = useState([]); // Array to store selected signs
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateAlphaNumeric = (value) => {
        const alphaNumericRegex = /^[a-zA-Z\s]{3,}$/;
        return alphaNumericRegex.test(value);
    };

    const validatedigit = (value) => {
        const digitRegex = /^\d{2,3}$/;
        return digitRegex.test(value);
    };


    // weight
    const validateGlucose = (value) => {
      const  HeightRegex = /^\d{0,3}$/;
      return HeightRegex.test(value) && value >= 72 && value <= 140;
    };
    // height
    const validateHB = (value) => {
      const  HeightRegex = /^\d{0,3}$/;
      return HeightRegex.test(value) && value >= 12 && value <= 16;
    };
  

    const validatedigitdecimal = (value) => {
      const weightRegex = /^\d{1,2}(\.\d{1,3})?$/;
      return weightRegex.test(value) ;
    };
    const RelationOptions = [
        {
            value: '0',
            label: 'Select'
        }, {
            value: '1',
            label: 'Father'
        }, {
            value: '2',
            label: 'Any Other'
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!validateAlphaNumeric(formData.MOTHER_NAME)) {
            newErrors.MOTHER_NAME = 'Name must contain only letters and spaces';
        }

        if (!validateGlucose(formData.MOTHER_GLUCOSE)) {
            newErrors.MOTHER_GLUCOSE = 'Glucose level should be 72-140 milligrams of glucose per 1 deciliter of blood';
        }

        if (!validatedigit(formData.MOTHER_AGE)) {
            newErrors.MOTHER_AGE = 'Age must be there';
        }

        if (!validatedigit(formData.MOTHER_WEIGHT)) {
            newErrors.MOTHER_WEIGHT = 'Weight must be there';
        }

        if (!validateHB(formData.MOTHER_HB)) {
            newErrors.MOTHER_HB = 'HB level must be between 12 and 16 es.';
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
            className='boxCon '
            style={{
            border: "2px solod black",
            margin:"80px 25px 0px 25px"
        }}>
            <div className='titleBox p-4 d-flex'>
                {/* name + Add button */}
                <h1>{props.name}</h1>
            </div>
            <form className='p-2' onSubmit={handleSubmit}>
                <div className="col-xl-12 p-4">
                    <div className="row mt-3">
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
                                onChange={handleInputChange}/>
                            <span className="highlight"></span>
                        </div>
                        {/* MOther name  */}
                        <div className="col-xl-3 mb-2">
                            <label>Name of Mother</label>
                            <input
                                className="form-control form-control-sm"
                                disabled
                                id="txt_SamNumber"
                                name="SAM_NO"
                                type="text"
                                value={formData.SAM_NO}
                                onChange={handleInputChange}/>
                            <span className="highlight"></span>
                        </div>
                        {/* Mother Age  */}
                        <InputField
                            label="Mother Age"
                            type="text"
                            name="MOTHER_AGE"
                            maxLength="3"
                            value={formData.MOTHER_AGE}
                            onChange={handleInputChange}
                            onBlur={() => {
                            if (!validatedigit(formData.MOTHER_AGE) || formData.MOTHER_AGE.length == 0) {
                                setErrors({
                                    ...errors,
                                    MOTHER_AGE: 'Enter age'
                                });
                            } else {
                                setErrors({
                                    ...errors,
                                    MOTHER_AGE: ''
                                });
                            }
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                            error={errors.MOTHER_AGE}/> 
                        {/* mother weight  */}
                        <InputField
                            label="Mother's Weight (Kg)"
                            type="text"
                            name="MOTHER_WEIGHT"
                            maxLength="2"
                            value={formData.MOTHER_WEIGHT}
                            onChange={handleInputChange}
                            onBlur={(e) => {
                              const { name, value } = e.target;
                              if (name === 'MOTHER_WEIGHT') {
                                let formattedValue = parseFloat(value).toFixed(3);
                            if (!validatedigitdecimal(formattedValue) || formData.MOTHER_WEIGHT.length == 0) {
                                setErrors({
                                    ...errors,
                                    MOTHER_WEIGHT: 'Enter weight'
                                });
                            } else {
                              setFormData({ ...formData, MOTHER_WEIGHT: formattedValue });
                                setErrors({
                                    ...errors,
                                    MOTHER_WEIGHT: ''
                                });
                            }}
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9.]\b/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                            error={errors.MOTHER_WEIGHT}/>
                    </div>
                    <div className="row mt-3">
                        {/* MOTHER HEIGHT  */}
                        <InputField
                            label="Mother's Height (Cm)"
                            type="text"
                            name="MOTHER_HEIGHT"
                            maxLength="3"
                            value={formData.MOTHER_HEIGHT}
                            onChange={handleInputChange}
                            onBlur={() => {
                            if (!validatedigit(formData.MOTHER_HEIGHT) || formData.MOTHER_HEIGHT.length == 0) {
                                setErrors({
                                    ...errors,
                                    MOTHER_HEIGHT: 'Enter a Height'
                                });
                            } else {
                                setErrors({
                                    ...errors,
                                    MOTHER_HEIGHT: ''
                                });
                            }
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                            error={errors.MOTHER_HEIGHT}/> 
                        {/* BMI  */}
                        <div className="col-xl-3 mb-2">
                          <label>BMI (kg/ m2)</label>
                          <input
                            className="form-control form-control-sm"
                            disabled
                            id="Adm_MOTHER_BMI"
                            name="MOTHER_BMI"
                            type="text"
                            value={bmi}
                            onChange={()=>{
                              handleInputChange();
                              formData.MOTHER_BMI = bmi;
                            }}
                          />
                          <CalculateBMI height={formData.MOTHER_HEIGHT}   weight={formData.MOTHER_WEIGHT} setBMI={setBMI} />
                          
                          <span className="highlight"></span>
                        </div>
                        {/* BIRTH_ORDER  */}
                        <SelectOptions
                            title="Birth Order of Admitted SAM Child"
                            id="BIRTH_ORDER"
                            imp={true}
                            name="BIRTH_ORDER"
                            value={formData.BIRTH_ORDER}
                            fun={handleInputChange}
                            options={RelationOptions}/> 
                        {/* NO. OF CHILD   */}
                        <SelectOptions
                            title="Number of Child"
                            id="ddl_Relation"
                            imp={true}
                            name="no_of_child"
                            value={formData.NO_OF_CHILD}
                            fun={handleInputChange}
                            options={RelationOptions}/>
                    </div>
                    <div className="row mt-3">
                        {/* Status Of Mother  */}
                        <SelectOptions
                            title="Status Of Mother"
                            id="STATUS_OF_MOTHER"
                            imp={true}
                            name="STATUS_OF_MOTHER"
                            value={formData.STATUS_OF_MOTHER}
                            fun={handleInputChange}
                            options={RelationOptions}/> 
                            {/* MOther hb level  */}
                        <InputField
                            label="Mother's HB level (Gm/dl)"
                            type="text"
                            name="MOTHER_HB"
                            maxLength="2"
                            value={formData.MOTHER_HB}
                            onChange={handleInputChange}
                            onBlur={() => {
                            if (!validateHB(formData.MOTHER_HB) || formData.MOTHER_HB.length == 0) {
                                setErrors({
                                    ...errors,
                                    MOTHER_HB: 'Enter hb level'
                                });
                            } else {
                                setErrors({
                                    ...errors,
                                    MOTHER_HB: ''
                                });
                            }
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                            error={errors.MOTHER_HB}/> {/* glucose level  */}
                        <InputField
                            label="Mother's Blood Glucose level (mg/dl)"
                            type="text"
                            name="MOTHER_GLUCOSE"
                            maxLength="2"
                            value={formData.MOTHER_GLUCOSE}
                            onChange={handleInputChange}
                            onBlur={() => {
                            if (!validateGlucose(formData.MOTHER_GLUCOSE) || formData.MOTHER_GLUCOSE.length == 0) {
                                setErrors({
                                    ...errors,
                                    MOTHER_GLUCOSE: 'Enter a Glucose level'
                                });
                            } else {
                                setErrors({
                                    ...errors,
                                    MOTHER_GLUCOSE: ''
                                });
                            }
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                            error={errors.MOTHER_GLUCOSE}/> {/* bp level  */}
                        <InputField
                            label="Mother's Blood Pressure"
                            type="text"
                            name="MOTHER_GLUCOSE"
                            maxLength="2"
                            value={formData.MOTHER_BP}
                            onChange={handleInputChange}
                            onBlur={() => {
                            if (!validateAlphaNumeric(formData.MOTHER_BP) || formData.MOTHER_BP.length == 0) {
                                setErrors({
                                    ...errors,
                                    MOTHER_BP: 'Enter a name'
                                });
                            } else {
                                setErrors({
                                    ...errors,
                                    MOTHER_BP: ''
                                });
                            }
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                            error={errors.MOTHER_BP}/>
                    </div>
                    <div className="row mt-3">
                        {/* family planning method  */}
                        <SelectOptions
                            title="Currently Using Any of the Family Planning Methods"
                            id="FAMILY_PLANNING"
                            name="FAMILY_PLANNING"
                            value={formData.FAMILY_PLANNING}
                            fun={handleInputChange}
                            options={RelationOptions}/> {/* Nutrition Conselling  */}
                        <SelectOptions
                            title="Is She Recieving Nutrition Counselling daily for herself"
                            id="NUTRITION_CONSELLING"
                            name="NUTRITION_CONSELLING"
                            value={formData.NUTRITION_CONSELLING}
                            fun={handleInputChange}
                            options={RelationOptions}/> {/* IFA  */}
                        <SelectOptions
                            title="Is she consuming IFA (As per AMB Guideline)"
                            id="ddl_IFA"
                            name="IFA"
                            value={formData.IFA}
                            fun={handleInputChange}
                            options={RelationOptions}/>
                            {/* Abendazole  */}
                        <SelectOptions
                            title="Received Albendazole (400 gm)"
                            id="ddl_ABENDAZOLE"
                            name="ABENDAZOLE"
                            value={formData.ABENDAZOLE}
                            fun={handleInputChange}
                            options={RelationOptions}/>
                    </div>
                    <div className="row mt-3">
                         {/* mental illness    */}
                        <SelectOptions
                            title="Is mother Suffering from any Mental illness"
                            id="ddl_MENTAL_ILLNESS"
                            name="MENTAL_ILLNESS"
                            value={formData.MENTAL_ILLNESS}
                            fun={handleInputChange}
                            options={RelationOptions}/> {/* refer  */}
                        <SelectOptions
                            title="Refer to OPD/ Health Facility for Investigation "
                            id="ddl_REFER_ODP"
                            name="REFER_ODP"
                            value={formData.REFER_ODP}
                            fun={handleInputChange}
                            options={RelationOptions}/> {/* medical complication  */}
                        <SelectOptions
                            title="Any Medical / Nutrition Complications"
                            id="ddl_MEDICAL_COMPLICATION"
                            name="MEDICAL_COMPLICATION"
                            value={formData.MEDICAL_COMPLICATION}
                            fun={handleInputChange}
                            options={RelationOptions}/>
                        <SelectOptions
                            title="Any Medical / Nutrition Complications"
                            id="ddl_MEDICAL_COMPLICATION"
                            name="MEDICAL_COMPLICATION"
                            value={formData.MEDICAL_COMPLICATION}
                            fun={handleInputChange}
                            options={RelationOptions}/>
                    </div>
                </div>
                <div style={{
                width: '100%',
                textAlign:'end'
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
                  navigate('/DashBoard/Maternal')
                }}
                >Cancel</Button>
            </div>
            </form>
            
        </div>
    )
}

export default MaternalForm