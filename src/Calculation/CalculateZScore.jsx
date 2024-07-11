

import BoysData from './BoysData';
import GirlData from './Girldata';


// const CalculateZScore = (gender, height, weight) => {
//   const data = gender === '2' ? GirlData : BoysData; // Select appropriate data based on gender

//   // Find the data row with the closest height (if available)
//   const matchingRow = data.find(row => row[0] === height);

//   if (matchingRow) {
//     const [/* height */, median, weight1SD, weight2SD, weight3SD, weight4SD] = matchingRow;

//     if (weight > median) {
//       return "median";
//     } else if (weight <= median && weight > weight1SD) {
//       return "-1 SD";
//     } else if (weight <= weight1SD && weight > weight2SD) {
//       return "-2 SD";
//     } else if (weight <= weight2SD && weight > weight3SD) {
//       return "-3 SD";
//     } else {
//       zscore = "-4 SD";
//     }
//   } else {
//     return "No data for this height"; // Handle missing data case
//   }
// };

// export default CalculateZScore;


const CalculateZScore = ( {gender, height, weight, setZscore} ) => {
  console.log('hello')
  if(gender=='2'){
    for(let i = 0; i<=75; i++){
      console.log(i);
     if(GirlData[i][0]==height){
      if(weight>GirlData[i][2]){
        console.log("median");
        setZscore("median");
      }else if(weight<=GirlData[i][2] && weight>GirlData[i][3]){
        console.log("-1 SD");
        setZscore("-1 SD");
      }else if(weight<=GirlData[i][3] && weight>GirlData[i][4]){
        console.log("-2 SD");
        setZscore("-2 SD");
      }else if(weight<=GirlData[i][4] && weight>GirlData[i][5]){
        console.log("-3 SD");
        setZscore("-3 SD");
      }else {
        console.log("-4 SD");
        setZscore("-4 SD");
      }
     } 
    }
  }else if(gender =='1'){
    for(let i = 0; i<=75; i++){
      console.log(i);
     if(BoysData[i][0]==height){
      if(weight>BoysData[i][2]){
        console.log("median");
        setZscore("median");
      }else if(weight<=BoysData[i][2] && weight>BoysData[i][3]){
        console.log("-1 SD");
        setZscore("-1 SD");
      }else if(weight<=BoysData[i][3] && weight>BoysData[i][4]){
        console.log("-2 SD");
        setZscore("-2 SD");
      }else if(weight<=BoysData[i][4] && weight>BoysData[i][5]){
        console.log("-3 SD");
        setZscore("-3 SD");
      }else {
        console.log("-4 SD");
        setZscore("-4 SD");
      }
     } 
    }
  }else{
    setZscore("");
  }

};

export default CalculateZScore;
