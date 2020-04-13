const {handleAnimation, handleSubmit} = require('./js/main').default;
const {covid19ImpactEstimator} = require('./js/estimator/estimator');
import './css/styles.css';

const run = (covid19ImpactEstimator, handleAnimation, handleSubmit) =>{
    handleSubmit(covid19ImpactEstimator);
    handleAnimation();
};

$(document).ready(() => {
    run(covid19ImpactEstimator, handleAnimation, handleSubmit);
})
