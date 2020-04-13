function handleSubmit (covid19ImpactEstimator) {
    
    const population = $('input[data-population]')
    const timeToElapse = $('input[data-time-to-elapse]')
    const hospitalBeds = $('input[data-total-hospital-beds]')
    const reportedCases = $('input[data-reported-cases]')
    const periodType = $('select[data-period-type]')
    const avgAge = $('input[data-average-age]')
    const avgDailyIncome = $('input[data-average-daily-income]')
    const avdDailyIncomePopulation = $('input[data-average-daily-income-population]')
    const box2 = document.querySelector('#box-2') 
    const container = document.querySelector('#scroll-container') 

    $('form').on('submit', function(e) {
        e.preventDefault();
        const dataRegion = {};
        const info = {};
        dataRegion.avgAge = Number(avgAge.val());
        dataRegion.avgDailyIncomeInUSD = Number(avgDailyIncome.val());
        dataRegion.avgDailyIncomePopulation = Number(avdDailyIncomePopulation.val());
        info.periodType = periodType.val();
        info.timeToElapse = Number(timeToElapse.val());
        info.reportedCases = Number(reportedCases.val());
        info.totalHospitalBeds = Number(hospitalBeds.val());
        info.population = Number(population.val());
        info.region = dataRegion;
        const {data, impact, severeImpact} = covid19ImpactEstimator(info);
        const  { region } = data
        $('#impact-repCase').text(data.reportedCases.toLocaleString())
        $('#impact-curCase').text(impact.currentlyInfected.toLocaleString())
        $('#impact-time').text(timeToElapse.val())
        $('#impact-period-type').text(periodType.val())
        $('#impact-estimate').text(impact.infectionsByRequestedTime.toLocaleString())
        $('#impact-severe-cases').text(impact.severeCasesByRequestedTime.toLocaleString())
        $('#impact-hospital-bed').text(impact.hospitalBedsByRequestedTime.toLocaleString())
        $('#impact-ICU').text(impact.casesForICUByRequestedTime.toLocaleString())
        $('#impact-VENT').text(impact.casesForVentilatorsByRequestedTime.toLocaleString())
        $('#impact-avg-income').text('$' + region.avgDailyIncomeInUSD.toLocaleString())
        $('#impact-per-earner').text(region.avgDailyIncomePopulation.toLocaleString())
        $('#impact-dollar-flight').text('$' + impact.dollarsInFlight.toLocaleString())
       
        $('#severe-impact-repCase').text(data.reportedCases.toLocaleString())
        $('#severe-impact-curCase').text(severeImpact.currentlyInfected.toLocaleString())
        $('#severe-impact-time').text(timeToElapse.val())
        $('#severe-impact-period-type').text(periodType.val())
        $('#severe-impact-estimate').text(severeImpact.infectionsByRequestedTime.toLocaleString())
        $('#severe-impact-severe-cases').text(severeImpact.severeCasesByRequestedTime.toLocaleString())
        $('#severe-impact-hospital-bed').text(severeImpact.hospitalBedsByRequestedTime.toLocaleString())
        $('#severe-impact-ICU').text(severeImpact.casesForICUByRequestedTime.toLocaleString())
        $('#severe-impact-VENT').text(severeImpact.casesForVentilatorsByRequestedTime.toLocaleString())
        $('#severe-impact-avg-income').text('$' + region.avgDailyIncomeInUSD.toLocaleString())
        $('#severe-impact-per-earner').text(region.avgDailyIncomePopulation.toLocaleString())
        $('#severe-impact-dollar-flight').text('$' + severeImpact.dollarsInFlight.toLocaleString())
        
        container.scrollLeft += box2.scrollWidth + 16
        setTimeout(()=>{
            $('.flip-card-inner').removeClass('flip-back');
        },1000)
    });
}

    
const handleAnimation = () => {

    $('.flip-card-inner').on('click', 'header', function(){
        $(this).parent().parent().toggleClass('flip-back')
    });
};

export default {
    handleAnimation, 
    handleSubmit
}