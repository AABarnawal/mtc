import React from 'react'

function CalculateTargetWeight({aweight, settweight}) {
    const tweight = parseInt(aweight) + (aweight*.15);
    settweight(tweight);
}

export default CalculateTargetWeight