const {
    severImpactEstimator,
    impactEstimator
  } = require('./utils');
  
  const covid19ImpactEstimator = (data) => {
    const severeImpact = severImpactEstimator(data);
    const impact = impactEstimator(data);
    return ({
      data,
      impact,
      severeImpact
    });
  };
  module.exports = {covid19ImpactEstimator};